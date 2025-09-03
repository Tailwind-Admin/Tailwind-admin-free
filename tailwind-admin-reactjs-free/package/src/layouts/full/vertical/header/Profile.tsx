"use client"

import { Icon } from "@iconify/react"
import * as profileData from "./Data"
import SimpleBar from "simplebar-react"
import { Link } from "react-router"
import profileimg from "src/assets/images/profile/user-1.jpg"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "src/components/ui/dropdown-menu"
import { Button } from "src/components/ui/button"

const Profile = () => {
  return (
    <div className="relative group/menu ps-1 sm:ps-15 shrink-0">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <span className="hover:text-primary hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer group-hover/menu:bg-lightprimary group-hover/menu:text-primary">
            <img
              src={profileimg}
              alt="logo"
              height="35"
              width="35"
              className="rounded-full"
            />
          </span>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className="w-screen sm:w-[200px] pb-6 pt-4 rounded-sm"
        >
          <SimpleBar>
            {profileData.profileDD.map((items, index) => (
              <DropdownMenuItem
                key={index}
                asChild
                className="px-4 py-2 flex justify-between items-center bg-hover group/link w-full cursor-pointer"
              >
                <Link to={items.url}>
                  <div className="w-full">
                    <div className="ps-0 flex items-center gap-3 w-full">
                      <Icon
                        icon={items.icon}
                        className="text-lg text-bodytext group-hover/link:text-primary"
                      />
                      <div className="w-3/4">
                        <h5 className="mb-0 text-sm text-bodytext group-hover/link:text-primary">
                          {items.title}
                        </h5>
                      </div>
                    </div>
                  </div>
                </Link>
              </DropdownMenuItem>
            ))}
          </SimpleBar>

          <div className="pt-2 px-4">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-full rounded-md py-0 border-primary text-primary hover:bg-lightprimary hover:text-primary"
            >
              <Link to="/auth/login">Logout</Link>
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default Profile
