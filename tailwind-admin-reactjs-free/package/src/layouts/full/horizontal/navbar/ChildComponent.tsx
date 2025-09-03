import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { Icon } from "@iconify/react";
import { useLocation } from "react-router";
import { Link } from "react-router";

const ChildComponent = ({
  item,
  isActive,
  handleMouseEnter,
  handleMouseLeave,
  onClick,
  title
}: any) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const location = useLocation();
  const pathname = location.pathname;

  const handleSubMenuEnter = () => {
    setIsSubMenuOpen(true);
  };

  const handleSubMenuLeave = () => {
    setIsSubMenuOpen(false);
  };

  return (
    <div
      className="relative group"
      onMouseEnter={handleSubMenuEnter}
      onMouseLeave={handleSubMenuLeave}
      onClick={onClick}
    >
      <Link to={item.href}>
        <p
          className={`w-full ${item.href === pathname
            ? "text-primary dark:text-primary hover:text-primary"
            : "group-hover/nav:bg-lightprimary group-hover/nav:text-primary"
            } py-1 px-3 rounded-md flex gap-3 items-center text-ld  hover:text-primary`}
        >
          <span className="flex gap-3 items-center w-full">
            <Icon icon={`${item.icon}`} height={18} />
            <span className="line-clamp-1 max-w-24 overflow-hidden">
              {item.title}
            </span>
            {item.children && <IconChevronDown size={18} className="ms-auto" />}
          </span>
        </p>
      </Link>
      {isSubMenuOpen && item.children && (
        <div className={`absolute   top-0 mt-0 w-56 bg-white dark:bg-dark rounded-md shadow-lg ${title == "Tables" ? "tables-position" : "left-full rtl:right-full"}`}>
          <ul className="p-3 flex flex-col gap-2">
            {item.children.map((child: any) => (
              <li key={child.id}>
                {child.children ? (
                  <ChildComponent
                    item={child}
                    isActive={isActive}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                  />
                ) : (
                  <Link to={child.href}>
                    <p
                      className={`group/menu hover:text-primary ${child.href == pathname
                        ? "!text-primary "
                        : "group-hover/nav:bg-lightprimary group-hover/nav:text-primary"
                        } py-1 px-3 rounded-md flex gap-2 items-center text-ld opacity-80 hover:text-primary`}
                    >
                      <span
                        className={` ${child.href == pathname
                          ? "bg-primary dark:bg-primary"
                          : "bg-dark dark:bg-white"
                          } group-hover/menu:bg-primary  rounded-md mx-1.5 h-[6px] w-[6px]`}
                      ></span>
                      {child.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ChildComponent;


