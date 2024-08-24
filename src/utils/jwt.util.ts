import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export const createToken = (user: object) => {
  const data = {
    email: user.email,
    refresh_time: new Date().getTime() + 1000 * 60 * 60 * 24 * 23,
  };
  const token = jwt.sign(data, JWT_SECRET, {
    expiresIn: "30d",
  });
  return token;
};

export const verifyToken = (token: string) => {
  try {
    const data = jwt.verify(token, JWT_SECRET);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
