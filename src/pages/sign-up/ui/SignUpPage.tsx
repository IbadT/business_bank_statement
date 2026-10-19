import { AuthForm } from "@/features/auth-form";

export const SignUpPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-[#F8F8F8]">
    <AuthForm mode="signUp" />
  </div>
);
