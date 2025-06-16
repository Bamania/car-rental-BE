
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const authenticate = (req: any, res: any, next: any) => {
 const authCookie = req.cookies['authcookie'];

  if (!authCookie) {
    return res.status(401).json({ message: 'Authorization authCookie is required.' });
  }

  try {
    const decoded = jwt.verify(authCookie, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token.' });
  }
};


