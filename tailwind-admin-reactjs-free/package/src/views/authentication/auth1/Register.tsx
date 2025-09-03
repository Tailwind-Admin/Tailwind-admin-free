

import { Link } from "react-router";
import AuthRegister from "../authforms/AuthRegister";
import SocialButtons from "../authforms/SocialButtons";

import FullLogo from "src/layouts/full/shared/logo/FullLogo";
import LeftSidebarPart from "../LeftSidebarPart";



const Register = () => {
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
                <h3 className="text-2xl font-bold">Welcome to TailwindAdmin</h3>
                <p className="text-darklink text-sm font-medium">
                  Your Admin Dashboard
                </p>
                <SocialButtons title="or sign in with" />
                <AuthRegister />
                <div className="flex gap-2 text-base text-ld font-medium mt-6 items-center justify-center">
                  <p>Already have an Account?</p>
                  <Link
                    to={"/auth/auth1/login"}
                    className="text-primary text-sm font-medium"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
