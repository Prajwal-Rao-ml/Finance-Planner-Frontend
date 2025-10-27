import React from "react";
import useAuth from "../hooks/Auth/useAuth";
import Toast from "../components/Toast";
import Form from "../components/Form";
import { SignupFormConfig } from "../constants/Signup";

const Signup: React.FC = () => {
  const {
    formState,
    handleChange,
    handleSignupSubmit,
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
        formConfig={SignupFormConfig}
        formState={formState}
        handleChange={handleChange}
        handleSubmit={handleSignupSubmit}
        loading={loading}
        buttonText="Signup"
        loadingText="Signing up..."
        handleGoogleLogin={handleGoogleLogin}
      />
    </div>
  );
};

export default Signup;
