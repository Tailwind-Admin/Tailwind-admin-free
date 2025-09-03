import { Icon } from "@iconify/react";
import { Button, Dropdown, DropdownItem } from "flowbite-react";
import React from "react";
import * as profileData from "./Data";
import Link from "next/link";
import Image from "next/image";
import SimpleBar from "simplebar-react";
import unlimitedbg from "/public/images/backgrounds/unlimited-bg.png"

const Profile = () => {
  return (
    <div className="relative group/menu ps-15 shrink-0">
      <Dropdown
        label=""
        className="w-screen sm:w-[200px] pb-6 pt-4 rounded-sm"
        dismissOnClick={false}
        renderTrigger={() => (
          <span className=" hover:text-primary hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer group-hover/menu:bg-lightprimary group-hover/menu:text-primary">
            <Image
              src="/images/profile/user-1.jpg"
              alt="logo"
              height="35"
              width="35"
              className="rounded-full"
            />
          </span>
        )}
      >
        <SimpleBar>
        {profileData.profileDD.map((items, index) => (
          <DropdownItem
            as={Link}
            href={items.url}
            className="px-4 py-2 flex justify-between items-center bg-hover group/link w-full"
            key={index}
          >
            <div className="w-full">
              <div className="ps-0 flex items-center gap-3 w-full">
                <Icon icon={items.icon} className="text-lg text-slateGray group-hover/link:text-primary" />
                <div className="w-3/4 ">
                  <h5 className="mb-0 text-sm text-slateGray group-hover/link:text-primary">
                    {items.title}
                  </h5>
                </div>
              </div>
            </div>
          </DropdownItem>
        ))}
        </SimpleBar>

        <div className="pt-2 px-4">
          <Button
            color={"outlineprimary"}
            as={Link}
            size={"md"}
            href="/auth/login"
            className="w-full rounded-md py-0"
          >
            Logout
          </Button>
        </div>
      </Dropdown>
    </div>
  );
};

export default Profile;
