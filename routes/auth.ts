import express  from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/db";
import { authenticate } from "../middleware/authenticate";
const router=express.Router()

// JWT secret (in production, use environment variable)
const JWT_SECRET = process.env.JWT_SECRET

// JWT verification middleware


router.post("/signup",async(req,res)=>{ 
    try {
        console.log(req.body)
        const {name,email,phoneNumber,password}=req.body.formData
    
        if (!name || !email || !phoneNumber || !password) {
            return res.status(400).json({ error: "All fields (name, email, phoneNumber, password) are required." });
        }
    
        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return res.status(400).json({ error: "User with this email already exists." });
        }

    
       
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                phoneNumber,
                password: hashedPassword,
            }
        });

        // Generate JWT token
        const token = jwt.sign(
            { userId: newUser.id, email: newUser.email,name:newUser.name },
            JWT_SECRET!,
            { expiresIn: '24h' }
        );

    res.cookie('authcookie',token,{
      maxAge: 900000,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // HTTPS only in production
      sameSite: 'none', // Required for cross-domain
      domain: process.env.NODE_ENV === 'production' ? undefined : undefined // Let browser handle domain
    }) 
   res.status(200).json({
            message:"registered"
        })
        
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
})



router.post("/login", async(req, res) => {
    try {
        const { email, password } = req.body.formData;

        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required." });
        }

   
        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            return res.status(401).json({ error: "Invalid email or password." });
        }

        // Compare password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid email or password." });
        }


        const token = jwt.sign(
            { userId: user.id, email: user.email ,name:user.name },
            JWT_SECRET!,
            { expiresIn: '24h' }
        );

        res.cookie('authcookie',token,{
          maxAge: 900000,
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production', // HTTPS only in production
          sameSite: 'none', 
          domain: process.env.NODE_ENV === 'production' ? undefined : undefined // Let browser handle domain
        })
        res.status(200).json({
            message:"success"
        })
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
})





router.post("/logout", (req, res) => {
  res.clearCookie("authcookie", {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'none'
  });
  res.json({ message: "Logged out!" });
});




// this route is only to check the login status !
router.get("/me", authenticate,(req, res) => {
  const token = req.cookies.authcookie;
  if (token) {
    res.json({ loggedIn: true,userId:req?.user?.userId ,userName:req?.user?.name,userEmail:req?.user?.email});
  } else {
    res.json({ loggedIn: false });
  }
});

export default router;