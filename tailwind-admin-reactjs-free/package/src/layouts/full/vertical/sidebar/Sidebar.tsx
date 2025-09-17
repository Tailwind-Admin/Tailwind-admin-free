import SidebarContent from "./Sidebaritems";

import SimpleBar from "simplebar-react";
import { Icon } from "@iconify/react";
import rocket from "../../../../assets/images/backgrounds/rocket.png";

import FullLogo from "../../shared/logo/FullLogo";


import { AMLogo, AMMenu, AMMenuItem, AMSidebar, AMSubmenu } from 'tailwind-sidebar'

import { Link, useLocation } from "react-router";
import { Button } from "src/components/ui/button";
import { useThemeMode } from "flowbite-react";





const renderSidebarItems = (items: any[], currentPath: string) => {

  return items.map((item) => {
    const isSelected = currentPath === item?.url;


    const selectedBorderColor = isSelected ? "border-white" : "border-dark dark:border-darklink"

    const IconComp = item.icon || null;

    const iconElement = IconComp ? (
      <Icon
        icon={IconComp}
        height={21}
        width={21}

      />
    ) : (
      <span
        className={`${selectedBorderColor} inline-block w-2 h-2 rounded-full border `}
      ></span>
    );

    // Heading
    if (item.heading) {
      return (
        <div className="mb-1" key={item.heading}>
          <AMMenu
            subHeading={item.heading}
            ClassName="mt-6 py-1 hide-menu leading-21 text-charcoal font-bold uppercase text-xs dark:!text-darkcharcoal"
          />
        </div>
      );
    }

    // Submenu
    if (item.children?.length) {
      return (
        <AMSubmenu
          key={item.id}

          icon={iconElement}
          title={item.name}
        >
          {renderSidebarItems(item.children, currentPath)}
        </AMSubmenu>


      );
    }

    // Regular menu item
    const linkTarget = item.url?.startsWith("https") ? "_blank" : "_self";

    return (
      <AMMenuItem
        key={item.id}
        icon={iconElement}
        isSelected={isSelected}
        link={item.url || undefined}
        target={linkTarget}
        badge={!!item.isPro}
        badgeColor="bg-lightsecondary"
        badgeTextColor="text-secondary"
        disabled={item.disabled}
        badgeContent={item.isPro ? "Pro" : undefined}
        component={Link}
        ClassName="mt-0.5 "
      >
        <span className="truncate flex-1 "
        >
          {item.title || item.name}
        </span>
      </AMMenuItem >
    );
  });
};



const SidebarLayout = () => {


  const location = useLocation();
  const pathname = location.pathname;
  const { mode } = useThemeMode();

  // Only allow "light" or "dark" for AMSidebar
  const sidebarMode = mode === "light" || mode === "dark" ? mode : undefined;

  return (

    <AMSidebar collapsible="none" animation={true} showProfile={false} width={"270px"} showTrigger={false} mode={sidebarMode}
      ClassName="fixed left-0 top-0  border border-border dark:border-darkborder dark:text-white"

    >
      {/* Logo */}
      <div className=" px-6 flex items-center brand-logo overflow-hidden">
        <AMLogo component={Link} href="/" img="">
          <FullLogo />
        </AMLogo>
      </div>

      {/* Sidebar items */}


      <SimpleBar className="h-[calc(100vh-100px)]">
        <div className="px-6">
          {SidebarContent.map((section, index) => (
            <div key={index} >

              {renderSidebarItems(
                [
                  ...(section.heading ? [{ heading: section.heading }] : []),
                  ...(section.children || []),
                ],
                pathname
              )}
            </div>
          ))}

          {/* Promo Section */}
          <div className="mt-9  overflow-hidden">
            <div className="flex w-full bg-lightprimary rounded-lg p-6">
              <div className="lg:w-1/2 w-full">
                <h5 className="text-base text-charcoal">Haven't Account?</h5>
                <Button color="primary" className="whitespace-nowrap mt-2 text-[13px]">
                  Get Pro
                </Button>
              </div>
              <div className="lg:w-1/2 w-full -mt-4 ml-[26px] scale-[1.2] shrink-0">
                <img src={rocket} alt="rocket" />
              </div>
            </div>
          </div>
        </div>
      </SimpleBar>

    </AMSidebar>

  );
};

export default SidebarLayout;





