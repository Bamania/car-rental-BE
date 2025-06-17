import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET!;

interface MyTokenPayload extends JwtPayload {
  userId: number;
}

export const authenticate = (req: any, res: any, next: any) => {
  const authCookie = req.cookies['authcookie'];

  if (!authCookie) {
    return res.status(401).json({ message: 'Authorization authCookie is required.' });
  }

  try {
    const decoded = jwt.verify(authCookie, JWT_SECRET) as MyTokenPayload;
    console.log("middleware verification ",decoded);
    
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token.' });
  }
};
