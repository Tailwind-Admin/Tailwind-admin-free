"use client";
import "flowbite";
import React, { useState, useEffect } from "react";
import {
  Button,
  DrawerItems,
  Navbar,
  NavbarCollapse,
  Drawer,
  useThemeMode,
  TextInput,
} from "flowbite-react";
import { Icon } from "@iconify/react";
import Profile from "./Profile";
import Link from "next/link";
import Notifications from "./Notifications";
import SidebarLayout from "../sidebar/Sidebar";
import FullLogo from "../shared/logo/FullLogo";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const { mode, toggleMode } = useThemeMode();

  console.log("OPennnnnn>>", isOpen);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileMenu = () => {
    if (mobileMenu === "active") {
      setMobileMenu("");
    } else {
      setMobileMenu("active");
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-2 ${isSticky
          ? "bg-background shadow-md fixed w-full"
          : "bg-transparent"
          }`}
      >
        <Navbar
          fluid
          className={`rounded-none  py-4 sm:ps-6 max-w-full! sm:pe-10`}
        >
          {/* Mobile Toggle Icon */}
          <div
            onClick={() => { setIsOpen(true) }}
            className="px-[15px] hover:text-primary dark:hover:text-primary text-link dark:text-darklink relative after:absolute after:w-10 after:h-10 after:rounded-full hover:after:bg-lightprimary  after:bg-transparent rounded-full xl:hidden flex justify-center items-center cursor-pointer"
          >
            <Icon icon="tabler:menu-2" height={20} width={20} />
          </div>

          <div className="block xl:hidden">
            <FullLogo />
          </div>

          <div className="flex xl:hidden items-center">
            <div
              className="hover:text-primary px-2 md:px-15 group focus:ring-0 rounded-full flex justify-center items-center cursor-pointer text-gray relative"
              onClick={toggleMode}
            >
              <span className="flex items-center justify-center relative after:absolute after:w-10 after:h-10 after:rounded-full after:-top-1/2   group-hover:after:bg-lightprimary">
                {mode === "light" ? (
                  <Icon icon="tabler:moon" width="20" />
                ) : (
                  <Icon
                    icon="solar:sun-bold-duotone"
                    width="20"
                    className="group-hover:text-primary"
                  />
                )}
              </span>
            </div>

            <NavbarCollapse className="xl:block ">
              <div className="flex gap-0 items-center relative">
                {/* Chat */}
                <Notifications />
              </div>
            </NavbarCollapse>

            {/* Profile Dropdown */}
            <Profile />
          </div>

          <div className="hidden xl:flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              {/* Search Icon */}
              <button
                onClick={() => setSearchOpen(!isOpen)}
                className="p-2 rounded-full hover:bg-gray-200 transition"
              >
                <Icon icon="solar:magnifer-linear" width="20" height="20" />
              </button>

              {/* Search Input */}
              {searchOpen && (
                <TextInput
                  id="search-input"
                  type="text"
                  placeholder="Search..."
                  className="form-control form-rounded-xl"
                />
              )}
            </div>
            <div className="flex w-full justify-end items-end">
              <div className="flex gap-0 items-center ">
                <div className="relative lg:block hidden group w-fit shadow-grid-shadow bg-[radial-gradient(100%_707.08%_at_0%_0%,#15CEBD_0%,#548AFE_33.82%,#E02FD6_72.12%,#FDB54E_100%)] p-0.5 rounded-full">
                  <Link href={"https://tailwind-admin.com/#pricing"} className="flex items-center gap-2.5 px-3 py-1.5 bg-background rounded-full transition-all dark:hover:bg-[radial-gradient(100%_707.08%_at_0%_0%,#15CEBD36_0%,#548AFE36_33.82%,#E02FD636_72.12%,#FDB54E36_100%)] group hover:bg-[radial-gradient(100%_707.08%_at_0%_0%,#15CEBD36_0%,#548AFE36_33.82%,#E02FD636_72.12%,#FDB54E36_100%)]">
                    <p className="text-base font-semibold">Check Pro Version</p>
                  </Link>
                </div>

                {/* ✅ Dark/Light Toggle */}
                <div
                  className="hover:text-primary px-15 group focus:ring-0 rounded-full flex justify-center items-center cursor-pointer text-gray relative"
                  onClick={toggleMode}
                >
                  <span className="flex items-center justify-center relative after:absolute after:w-10 after:h-10 after:rounded-full after:-top-1/2   group-hover:after:bg-lightprimary">
                    {mode === "light" ? (
                      <Icon icon="tabler:moon" width="20" />
                    ) : (
                      <Icon
                        icon="solar:sun-bold-duotone"
                        width="20"
                        className="group-hover:text-primary"
                      />
                    )}
                  </span>
                </div>

                <NavbarCollapse className="xl:block ">
                  <div className="flex gap-0 items-center relative">
                    {/* Chat */}
                    <Notifications />
                  </div>
                </NavbarCollapse>

                {/* Profile Dropdown */}
                <Profile />
              </div>
            </div>
          </div>
        </Navbar>
      </header>

      {/* Mobile Sidebar */}

      <Drawer open={isOpen} onClose={handleClose} className="w-64">
        <DrawerItems>
          <SidebarLayout onClose={() => setIsOpen(false)} />
        </DrawerItems>
      </Drawer>
    </>
  );
};

export default Header;
