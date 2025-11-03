
import React from "react";
import Google from "/src/assets/images/svgs/google-icon.svg";


import { Link } from "react-router";
import FB from "/src/assets//images/svgs/icon-facebook.png";


interface MyAppProps {
  title?: string;
}

const SocialButtons: React.FC<MyAppProps> = ({ title }) => {
  return (
    <>
      <div className="flex justify-between gap-8 my-6 ">
        <Link
          to={"/"}
          className="px-4 py-2.5 border border-ld flex gap-2 items-enter w-full rounded-md text-center justify-center text-ld text-primary-ld"
        >
          <img src={Google} alt="google" height={18} width={18} /> Google
        </Link>
        <Link
          to={"/"}
          className="px-4 py-2.5 border border-ld flex gap-2 items-enter w-full rounded-md text-center justify-center text-ld text-primary-ld"
        >
          <img src={FB} alt="google" height={18} width={18} />
          Facebook
        </Link>
      </div>
      {/* Divider */}
      <div className="flex items-center justify-center gap-2">
        <hr className="grow border-ld" />
        <p className="text-base text-ld font-medium">{title}</p>
        <hr className="grow border-ld" />
      </div>
    </>
  );
};

export default SocialButtons;
