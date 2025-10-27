import type { FC } from "react";
import Form from "../components/Form";
import useAuth from "../hooks/Auth/useAuth";
import Toast from "../components/Toast";
import { LoginFormConfig } from "../constants/Login";

const Login: FC = () => {
  const {
    formState,
    handleChange,
    handleLoginSubmit,
    loading,
    toastMessage,
    handleGoogleLogin,
  } = useAuth();
  return (
    <div className=" flex-1 w-full  flex items-center">
      {toastMessage ? (
        <Toast
          toastMessage={toastMessage.message}
          success={toastMessage.success}
        />
      ) : null}
      <Form
        formConfig={LoginFormConfig}
        formState={formState}
        handleChange={handleChange}
        handleSubmit={handleLoginSubmit}
        loading={loading}
        handleGoogleLogin={handleGoogleLogin}
      />
    </div>
  );
};

export default Login;
