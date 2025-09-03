

import { ChildItem } from "../Sidebaritems";
import NavItems from "../NavItems";
import { useLocation } from "react-router";
import React from "react";
import { SidebarCollapse, SidebarItemGroup } from "flowbite-react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { HiOutlineChevronDown } from 'react-icons/hi'
import { twMerge } from 'tailwind-merge'


interface NavCollapseProps {
  item: ChildItem;
  onClose: any;
}



const NavCollapse: React.FC<NavCollapseProps> = ({ item, onClose }: any) => {
  const location = useLocation();
  const pathname = location.pathname;

  // Determine if any child matches the current path
  const activeDD = item.children.find((t: { url: string }) => t.url === pathname);


  return (
    <SidebarCollapse
      label={
        (
          <span className="transition-all duration-200 ease-in-out group-hover:translate-x-1">
            {item.name}
          </span>
        ) as unknown as string
      }
      open={activeDD ? true : false}
      icon={() => <Icon icon={item.icon} height={21} className="my-0.5" />}
      className={`${activeDD ? '!text-white bg-primary hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white' : ''} collapse-menu`}
      renderChevronIcon={(theme, open) => {
        const IconComponent = open
          ? HiOutlineChevronDown
          : HiOutlineChevronDown;
        return (
          <IconComponent
            aria-hidden
            className={`${twMerge(theme.label.icon.open[open ? "on" : "off"])} drop-icon`}
          />
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
  );
};

export default NavCollapse;
