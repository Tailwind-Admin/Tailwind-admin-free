import { Button } from "flowbite-react";
import AuthForgotPassword from "../authforms/AuthForgotPassword";
import { Link } from "react-router";
import FullLogo from "src/layouts/full/shared/logo/FullLogo";
import LeftSidebarPart from "../LeftSidebarPart";

const ForgotPassword = () => {
  return (
    <>
      <div className="p-5 lg:bg-transparent lg:dark:bg-transparent bg-lightprimary lg:fixed top-0 z-50 w-full">
        <FullLogo />
      </div>
      <div className="relative overflow-hidden h-screen">
        <div className="grid grid-cols-12 gap-3 h-screen bg-white dark:bg-dark">
          <div className="xl:col-span-8 lg:col-span-7 col-span-12 bg-lightprimary dark:bg-lightprimary lg:block hidden relative overflow-hidden">
            <LeftSidebarPart />
          </div>
          <div className="xl:col-span-4 lg:col-span-5 col-span-12 sm:px-12 p-5">
            <div className="flex h-screen items-center px-3 lg:justify-start justify-center">
              <div className="max-w-[420px] w-full mx-auto">
                <h3 className="text-2xl font-bold my-3">Forgot Password</h3>
                <p className="text-darklink text-sm font-medium">
                  Please enter the email address associated with your account
                  and We will email you a link to reset your password.
                </p>
                <AuthForgotPassword />
                <Button
                  color={"lightprimary"}
                  as={Link}
                  to="/auth/auth1/login"
                  className="w-full mt-4 rounded-md"
                >
                  Back to Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
