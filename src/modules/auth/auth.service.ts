import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

interface UserData {
  name?: string;
  email: string;
  password: string;
  role?: string;
}

const users: UserData[] = [];

export const registerUser = async (data: UserData) => {
  const existingUser = users.find((user) => user.email === data.email);

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const newUser = {
    name: data.name || "User",
    email: data.email,
    password: hashedPassword,
    role: data.role || "user",
  };

  users.push(newUser);

  return {
    message: "User registered successfully",
    user: {
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    },
  };
};

export const loginUser = async (data: UserData) => {
  const user = users.find((u) => u.email === data.email);

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isMatch = await bcrypt.compare(data.password, user.password);

  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign(
    {
      userId: user.email,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET as string,
    { expiresIn: "1d" },
  );

  return {
    message: "Login successful",
    token,
    user: {
      email: user.email,
      role: user.role,
    },
  };
};