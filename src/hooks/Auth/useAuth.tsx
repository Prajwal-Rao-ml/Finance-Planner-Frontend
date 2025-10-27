import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/Auth";
import type { IAuthContextType } from "../../types/auth.types";

export const useAuth = (): IAuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default useAuth;

