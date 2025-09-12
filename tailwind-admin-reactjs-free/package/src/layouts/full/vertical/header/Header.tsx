
import "flowbite";
import { useState, useEffect } from "react";
import { DrawerItems, Navbar, NavbarCollapse, TextInput, useThemeMode } from "flowbite-react";
import { Icon } from "@iconify/react";
import Messages from "./Messages";
import FullLogo from "../../shared/logo/FullLogo";
import { Drawer } from "flowbite-react";
import HorizontalMenu from "../../horizontal/header/HorizontalMenu";

import Profile from "./Profile";
import SidebarLayout from "../sidebar/Sidebar";
import { Input } from "src/components/ui/input";

interface HeaderPropsType {
  layoutType: string;
}

const Header = ({ layoutType }: HeaderPropsType) => {
  const [isSticky, setIsSticky] = useState(false);
  const { mode, toggleMode } = useThemeMode();

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = prefersDark ? "dark" : "light";
    document.documentElement.setAttribute("lang", "en");
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
    localStorage.setItem("flowbite-theme-mode", theme);
  }, []);


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

  const [mobileMenu, setMobileMenu] = useState("");

  const handleMobileMenu = () => {
    if (mobileMenu === "active") {
      setMobileMenu("");
    } else {
      setMobileMenu("active");
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-[2] ${isSticky
          ? "bg-white dark:bg-dark shadow-md fixed w-full"
          : "bg-transparent"
          }`}
      >
        <Navbar
          fluid
          className={`rounded-none bg-transparent dark:bg-transparent py-4 sm:px-6 ${layoutType == "horizontal" ? "container mx-auto" : ""
            }  !max-w-full`}
        >
          {/* Mobile Toggle Icon */}
          <span
            onClick={() => setIsOpen(true)}
            className="px-[15px] hover:text-primary dark:hover:text-primary text-link dark:text-darklink relative after:absolute after:w-10 after:h-10 after:rounded-full hover:after:bg-lightprimary  after:bg-transparent rounded-full xl:hidden flex justify-center items-center cursor-pointer"
          >
            <Icon icon="tabler:menu-2" height={20} />
          </span>




          <div className="hidden xl:flex items-center gap-2">

            <div className="relative">
              <Icon icon="solar:magnifer-linear" width={18} height={18} className="absolute left-3 top-1/2 -translate-y-1/2" />
              <Input
                type="text"
                placeholder="Search..."
                className="rounded-xl pl-10"
              />
            </div>
          </div>


          {/* Toggle Icon   */}
          <NavbarCollapse className="xl:!block !hidden">
            <div className="flex gap-0 items-center relative">
              {layoutType == "horizontal" ? (
                <div className="me-3">
                  <FullLogo />
                </div>
              ) : null}

            </div>
          </NavbarCollapse>

          {/* mobile-logo */}
          <div className="block xl:hidden">
            <FullLogo />
          </div>

          <NavbarCollapse className="xl:!block !hidden md:!hidden">
            <div className="flex gap-0 items-center">
              <div className="relative lg:block hidden group w-fit shadow-grid-shadow bg-[radial-gradient(100%_707.08%_at_0%_0%,#15CEBD_0%,#548AFE_33.82%,#E02FD6_72.12%,#FDB54E_100%)] p-0.5 rounded-full">
                <a href={"https://tailwind-admin.com/#pricing"} className="flex items-center gap-2.5 px-3 py-1.5 bg-white dark:bg-dark rounded-full transition-all dark:hover:bg-[radial-gradient(100%_707.08%_at_0%_0%,#15CEBD36_0%,#548AFE36_33.82%,#E02FD636_72.12%,#FDB54E36_100%)] group hover:bg-[radial-gradient(100%_707.08%_at_0%_0%,#15CEBD36_0%,#548AFE36_33.82%,#E02FD636_72.12%,#FDB54E36_100%)]">
                  <p className="card-title text-base">Check Pro Version</p>
                </a>
              </div>

              {/* Theme Toggle */}
              {mode === "light" ? (
                <div
                  className=" hover:text-primary px-15 group  dark:hover:text-primary focus:ring-0 rounded-full flex justify-center items-center cursor-pointer text-link dark:text-darklink relative"

                  onClick={toggleMode}
                >
                  <span className="flex items-center justify-center relative after:absolute after:w-10 after:h-10 after:rounded-full after:-top-1/2   group-hover:after:bg-lightprimary">
                    <Icon
                      icon="tabler:moon"
                      width="20"
                    />
                  </span>
                </div>
              ) : (
                // Dark Mode Button
                <div
                  className=" hover:text-primary px-15   dark:hover:text-primary focus:ring-0 rounded-full flex justify-center items-center cursor-pointer text-link dark:text-darklink group relative"

                  onClick={toggleMode}
                >
                  <span className="flex items-center justify-center relative after:absolute after:w-10 after:h-10 after:rounded-full after:-top-1/2   group-hover:after:bg-lightprimary">

                    <Icon
                      icon="solar:sun-bold-duotone"
                      width="20"
                      className="group-hover:text-primary"
                    />
                  </span>
                </div>
              )}

              {/* Messages Dropdown */}
              <Messages />

              {/* Profile Dropdown */}
              <Profile />
            </div>
          </NavbarCollapse>
          {/* Mobile Toggle Icon */}
          <span
            className="flex xl:hidden "
            onClick={handleMobileMenu}
          >
            <div className="xl:hidden flex w-full">
              <div className="flex justify-center items-center">
                {mode === "light" ? (
                  <div
                    className=" hover:text-primary px-1 sm:px-15 group  dark:hover:text-primary focus:ring-0 rounded-full flex justify-center items-center cursor-pointer text-link dark:text-darklink relative"

                    onClick={toggleMode}
                  >
                    <span className="flex items-center justify-center relative after:absolute after:w-10 after:h-10 after:rounded-full after:-top-1/2   group-hover:after:bg-lightprimary">
                      <Icon
                        icon="tabler:moon"
                        width="20"
                      />
                    </span>
                  </div>
                ) : (
                  // Dark Mode Button
                  <div
                    className=" hover:text-primary px-1 sm:px-15   dark:hover:text-primary focus:ring-0 rounded-full flex justify-center items-center cursor-pointer text-link dark:text-darklink group relative"

                    onClick={toggleMode}
                  >
                    <span className="flex items-center justify-center relative after:absolute after:w-10 after:h-10 after:rounded-full after:-top-1/2   group-hover:after:bg-lightprimary">

                      <Icon
                        icon="solar:sun-bold-duotone"
                        width="20"
                        className="group-hover:text-primary"
                      />
                    </span>
                  </div>
                )}
                <Messages />
                <Profile />
              </div>
            </div>
          </span>
        </Navbar>

        {/* Horizontal Menu  */}
        {layoutType == "horizontal" ? (
          <div className="xl:border-y xl:border-ld">
            <div className={"w-full px-6"}>
              <HorizontalMenu />
            </div>
          </div>
        ) : null}
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
