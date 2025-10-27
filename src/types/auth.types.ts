import type React from "react";
import type { ReactNode } from "react";

export interface IToastMessage {
  message: string;
  success: boolean;
}

export interface IAuthContextType {
  isAuthenticated: boolean;
  formState: Record<string, string>;
  loading: boolean;
  toastMessage: IToastMessage | null;
  setToastMessage: (message: IToastMessage | null) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleLoginSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleSignupSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleGoogleLogin: (token: string) => void;
  logout: () => Promise<void>;
}

export interface IAuthProviderProps {
  children: ReactNode;
}

