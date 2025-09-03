import { Link } from "react-router";
import CardBox from "src/components/shared/CardBox";
import AuthTwoSteps from "../authforms/AuthTwoSteps";
import FullLogo from "src/layouts/full/shared/logo/FullLogo";


const TwoSteps = () => {
  return (
    <>
      <div className="relative overflow-hidden h-screen bg-lightprimary dark:bg-darkprimary">
        <div className="flex h-full justify-center items-center px-4">
          <CardBox className="md:w-[450px] w-full border-none">
            <div className="mx-auto mb-6">
              <FullLogo />
            </div>
            <p className="text-darklink text-sm font-medium text-center">
              We sent a verification code to your mobile. Enter the code from
              the mobile in the field below.
            </p>
            <h6 className="text-sm font-bold my-4 text-center">******1234</h6>
            <AuthTwoSteps />
            <div className="flex gap-2 text-base text-ld font-medium mt-6 items-center justify-left">
              <p>Didn't get the code?</p>
              <Link to={"/"} className="text-primary text-sm font-medium">
                Resend
              </Link>
            </div>
          </CardBox>
        </div>
      </div>
    </>
  );
};

export default TwoSteps;
