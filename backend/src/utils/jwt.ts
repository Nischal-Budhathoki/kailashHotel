import jwt from "jsonwebtoken";

//type 
    type UserPayload = {
        id: string;
        email?: string;
        role?: string;
};

//access-token
export const generateAccessToken = (user: UserPayload) => {
  return jwt.sign(
    user,
    process.env.JWT_SECRET_KEY as string,
    {
      expiresIn: "15m",
    }
  );
};

//refresh-token
export const generateRefreshToken = (user: UserPayload) => {
  return jwt.sign(
    {
      userId:user.id
    },
    process.env.JWT_REFRESH_SECRET as string,
    {
      expiresIn: "7d",
    }
  );
};