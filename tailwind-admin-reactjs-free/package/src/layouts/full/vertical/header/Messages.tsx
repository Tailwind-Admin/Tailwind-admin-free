"use client"

import { Icon } from "@iconify/react"
import * as MessagesData from "./Data"
import SimpleBar from "simplebar-react"
import "simplebar-react/dist/simplebar.min.css"
import { Link } from "react-router"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "src/components/ui/dropdown-menu"

const Messages = () => {
  return (
    <div className="relative group/menu px-4 sm:px-15">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="relative">
            <span className="relative after:absolute after:w-10 after:h-10 after:rounded-full hover:text-primary after:-top-1/2 hover:after:bg-lightprimary text-link dark:text-darklink rounded-full flex justify-center items-center cursor-pointer group-hover/menu:after:bg-lightprimary group-hover/menu:!text-primary">
              <Icon icon="tabler:bell-ringing" height={20} />
            </span>
            <span className="rounded-full absolute -end-[6px] -top-[5px] text-[10px] h-2 w-2 bg-primary flex justify-center items-center"></span>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className="w-screen sm:w-[300px] py-6 rounded-sm"
        >
          <div className="flex items-center px-6 justify-between">
            <h3 className="mb-0 text-lg font-semibold text-ld">Notification</h3>
            {/* <Badge color={"primary"}>5 new</Badge> */}
          </div>

          <SimpleBar className="max-h-80 mt-3">
            {MessagesData.MessagesLink.map((links, index) => (
              <DropdownMenuItem
                key={index}
                asChild
                className="px-6 py-3 flex justify-between items-center bg-hover group/link w-full cursor-pointer"
              >
                <Link to="#">
                  <div className="flex items-center">
                    <div className="ps-4">
                      <h5 className="mb-1 text-sm group-hover/link:text-primary">
                        {links.title}
                      </h5>
                      <span className="text-xs block truncate text-darklink">
                        {links.subtitle}
                      </span>
                    </div>
                  </div>
                </Link>
              </DropdownMenuItem>
            ))}
          </SimpleBar>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default Messages
