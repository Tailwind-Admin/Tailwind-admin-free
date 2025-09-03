"use client";
import React from "react";
import { ChildItem } from "../Sidebaritems";
import { SidebarItem } from "flowbite-react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemsProps {
  item: ChildItem;
  onClose: any;
}
const NavItems: React.FC<NavItemsProps> = ({ item, onClose }) => {
  const pathname = usePathname();
  const handleClick = (e: any) => {
    if (item.isPro || item.target === "_blank") {
      e.preventDefault();
      window.open(item.url, '_blank', 'noopener,noreferrer');
    }
    else {
      onClose?.();
    }
  };

  return (
    <SidebarItem
      onClick={handleClick}
      href={item.url}
      rel="noopener noreferrer"
      as={Link}
      className={`${item.disabled ? "opacity-50 cursor-default hover:bg-transparent hover:text-link" : item.url == pathname
        ? `${item.icon ? '!text-white' : '!text-primary'} bg-primary mb-0.5 hover:bg-primary hover:text-white`
        : "text-link bg-transparent hover:bg-lightprimary group/link "
        }  `}
    >
      <span className="group flex gap-3 align-center items-center truncate">
        {item.icon ? (
          <>
            <Icon icon={item.icon} className={`${item.color} my-0.5`} width={20} height={20} />
          </>
        ) : (
          <span
            className={`${item.url == pathname
              ? "dark:bg-white rounded-full mx-1.5 group-hover/link:bg-primary bg-primary! h-[6px] w-[6px]"
              : "h-[6px] w-[6px] bg-darklink dark:bg-white rounded-full mx-1.5 group-hover/link:bg-primary"
              } `}
          ></span>
        )}
        <div className="group-hover:transform group-hover:translate-x-1 transition-all duration-200 ease-in-out max-w-36 overflow-hidden hide-menu flex-1">
          {`${item.name}`}
          {item.subtitle ? <p className="text-xs mt-1" >{`${item.subtitle}`}</p> : null}
        </div>
        {item.badge ? item.badgeType === "filled" ? <span className="w-6 h-6 rounded-full bg-primary font-semibold text-white text-xs flex items-center justify-center sidebar-badge" >9</span> : <span className="px-2 py-1 border-primary border rounded-full  bg-transparent text-primary font-semibold text-xs sidebar-badge" >Outline</span> : null}
        {item.isPro ? <span className="py-1 px-2.5 text-[10px] bg-lightsecondary text-secondary rounded-full leading-none">Pro</span> : null}
      </span>
    </SidebarItem>
  );
};

export default NavItems;
