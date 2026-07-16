import jwt from "jsonwebtoken";

type UserPayload = {
  id: number;
  role: string;
};

export const generateAccessToken = (user: UserPayload) => {
  console.log("Inside generateAccessToken");
  console.log("JWT_SECRET_KEY:", process.env.JWT_SECRET_KEY);

  return jwt.sign(user, process.env.JWT_SECRET_KEY as string, {
    expiresIn: "15m",
  });
};

export const generateRefreshToken = (user: UserPayload) => {
  console.log("Inside generateRefreshToken");
  console.log("JWT_REFRESH_SECRET:", process.env.JWT_REFRESH_SECRET);

  return jwt.sign(
    { userId: user.id },
    process.env.JWT_REFRESH_SECRET as string,
    {
      expiresIn: "7d",
    }
  );
};