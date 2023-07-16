import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/layouts/Navbar";
import SignUpForm from "@/components/SignUpForm";

const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <Link
              to="/login"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "absolute right-4 top-4 md:right-8 md:top-8"
              )}
            >
              Login
            </Link>
            <SignUpForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
