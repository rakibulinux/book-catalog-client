import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "../assets/images/book-catalog.png";
import { LoginForm } from "@/components/LoginForm";
import Navbar from "@/layouts/Navbar";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Login to your account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below
            </p>
          </div>
          <LoginForm />
          <Link
            to="/signup"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "absolute right-4 top-4 md:right-8 md:top-8"
            )}
          >
            Signup
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
