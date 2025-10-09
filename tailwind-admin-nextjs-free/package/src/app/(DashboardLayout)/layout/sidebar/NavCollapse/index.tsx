import { Sidebar, SidebarCollapse, SidebarItemGroup } from "flowbite-react";
import React from "react";
import { ChildItem } from "../Sidebaritems";
import NavItems from "../NavItems";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import { twMerge } from "flowbite-react/helpers/tailwind-merge";
import { HiOutlineChevronDown } from "react-icons/hi";

interface NavCollapseProps {
  item: ChildItem;
  onClose: any;
}

const NavCollapse: React.FC<NavCollapseProps> = ({ item, onClose }: any) => {
  const pathname = usePathname();
  const activeDD = item.children.find((t: { url: string; }) => t.url === pathname)

  return (
    <>
      <SidebarCollapse
        label={(item.name)}
        {...{
          title: undefined, // unset title
          'aria-label': undefined, // unset aria-label
        }}
        open={activeDD ? true : false}
        icon={() => <Icon icon={item.icon} width={20} height={20} />}
        className={`${activeDD ? '!text-primary bg-lightprimary ' : ''} collapse-menu transition-all duration-200 ease-in-out hover:translate-x-1`}
        renderChevronIcon={(theme: any, open: any) => {
          const IconComponent = open
            ? HiOutlineChevronDown
            : HiOutlineChevronDown;
          return (
            <div className="flex items-center" >
              <IconComponent
                aria-hidden
                className={`${twMerge(theme.label.icon.open[open ? "on" : "off"])} drop-icon order-3 text-base`}
              />
              {item.isPro ? <span className="py-1 px-2.5 text-[10px] bg-lightsecondary text-secondary rounded-full order-0 leading-none">Pro</span> : null}
            </div>

          );
        }}
      >
        {/* Render child items */}
        {item.children && (
          <SidebarItemGroup className="sidebar-dropdown">
            {item.children.map((child: any) => (
              <React.Fragment key={child.id}>
                {/* Render NavItems for child items */}
                {child.children ? (
                  <NavCollapse item={child} onClose={onClose} /> // Recursive call for nested collapse
                ) : (
                  <NavItems item={child} onClose={onClose} />
                )}
              </React.Fragment>
            ))}
          </SidebarItemGroup>
        )}
      </SidebarCollapse>
    </>
  );
};

export default NavCollapse;
