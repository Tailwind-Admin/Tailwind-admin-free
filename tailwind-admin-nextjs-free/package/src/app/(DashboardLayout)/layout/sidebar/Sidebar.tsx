"use client";

import React from "react";
import { Button, Sidebar, SidebarItemGroup, SidebarItems } from "flowbite-react";
import SidebarContent from "./Sidebaritems";
import NavItems from "./NavItems";
import SimpleBar from "simplebar-react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import FullLogo from "../shared/logo/FullLogo";
import rocket from "/public/images/backgrounds/rocket.png"
import Link from "next/link";
import NavCollapse from "./NavCollapse";

const SidebarLayout = ({ onClose }: { onClose?: () => void }) => {
  return (
    <>
        <div className="flex">
          <Sidebar
            className="fixed menu-sidebar bg-background z-10"
            aria-label="Sidebar with multi-level dropdown example"
          >
            <div className={`px-6 flex items-center brand-logo overflow-hidden`}>
              <FullLogo />
            </div>

            <SimpleBar className="h-[calc(100vh-100px)]">
              <SidebarItems className={`px-6`}>
                <SidebarItemGroup className="sidebar-nav">
                  {SidebarContent.map((item, index) => (
                    <React.Fragment key={index}>
                      <h5 className="text-charcoal font-bold text-xs caption">
                        <span className="hide-menu leading-21">{item.heading?.toUpperCase()}</span>
                        <Icon
                          icon="tabler:dots"
                          className="text-ld block mx-auto leading-6 dark:text-opacity-60 hide-icon"
                          height={18}
                        />
                      </h5>

                      {item.children?.map((child, index) => (
                        <React.Fragment key={child.id && index}>
                          {child.children ? (
                            <div className="collpase-items">
                              <NavCollapse item={child} onClose={onClose}/>
                            </div>
                          ) : (
                            <NavItems item={child} onClose={onClose}/>
                          )}
                        </React.Fragment>
                      ))}
                    </React.Fragment>
                  ))}
                </SidebarItemGroup>
              </SidebarItems>
              {/* Offer Banner */}
              <div className="mt-9 px-6 overflow-hidden">
                <div className="flex w-full bg-lightprimary rounded-lg p-6">
                  <div className="lg:w-1/2 w-full">
                    <h5 className="text-base text-charcoal">
                      Haven't Account?
                    </h5>
                    <Button size={"xs"} color={"primary"} as={Link} target="_blank" href="https://tailwind-admin.com/#pricing" className="whitespace-nowrap mt-2 text-[13px]">Get Pro</Button>
                  </div>
                  <div className="lg:w-1/2 w-full -mt-4 ml-[26px] scale-[1.2] shrink-0">
                    <Image src={rocket} alt="rocket" />
                  </div>
                </div>
              </div>
            </SimpleBar>

          </Sidebar>
        </div>
    </>
  );
};

export default SidebarLayout;
