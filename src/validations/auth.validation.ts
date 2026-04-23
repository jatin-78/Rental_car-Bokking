export interface RegisterInput {
  name: string;
  email: string;
  password: string;
  role?: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export const validateRegisterInput = (data: RegisterInput): string | null => {
  if (!data.name || data.name.trim() === "") {
    return "Name is required";
  }

  if (!data.email || data.email.trim() === "") {
    return "Email is required";
  }

  if (!data.password || data.password.trim() === "") {
    return "Password is required";
  }

  if (data.password.length < 6) {
    return "Password must be at least 6 characters";
  }

  return null;
};

export const validateLoginInput = (data: LoginInput): string | null => {
  if (!data.email || data.email.trim() === "") {
    return "Email is required";
  }

  if (!data.password || data.password.trim() === "") {
    return "Password is required";
  }

  return null;
};