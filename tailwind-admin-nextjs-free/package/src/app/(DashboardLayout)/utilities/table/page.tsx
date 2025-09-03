"use client"
import userimg1 from "/public/images/profile/user-3.jpg";
import userimg2 from "/public/images/profile/user-5.jpg";
import userimg3 from "/public/images/profile/user-6.jpg";
import userimg4 from "/public/images/profile/user-7.jpg";
import userimg5 from "/public/images/profile/user-8.jpg";
import { TbDotsVertical } from "react-icons/tb";
import Image from "next/image";
import CardBox from "@/app/components/shared/CardBox";
import { Icon } from "@iconify/react/dist/iconify.js";
import BreadcrumbComp from "../../layout/shared/breadcrumb/BreadcrumbComp";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge";

const page = () => {

  const PerformersData = [
    {
      key: "performerData1",
      profileImg: userimg1,
      username: "Sunil Joshi",
      designation: "Web Designer",
      project: "Elite Admin",
      priority: "Low",
      color: "primary",
      bgcolor: "bg-primary text-white",
      budget: "3.9k"
    },
    {
      key: "performerData2",
      profileImg: userimg2,
      username: "John Deo",
      designation: "Web Developer",
      project: "Flexy Admin",
      priority: "Medium",
      color: "warning",
      bgcolor: "bg-warning text-white",
      budget: "24.5k"
    },
    {
      key: "performerData3",
      profileImg: userimg3,
      username: "Nirav Joshi",
      designation: "Web Manager",
      project: "Material Pro",
      priority: "High",
      color: "warning",
      budget: "12.8k"
    },
    {
      key: "performerData4",
      profileImg: userimg4,
      username: "Yuvraj Sheth",
      designation: "Project Manager",
      project: "Xtreme Admin",
      priority: "Low",
      color: "success",
      bgcolor: "bg-success text-white",
      budget: "4.8k"
    },
    {
      key: "performerData5",
      profileImg: userimg5,
      username: "Micheal Doe",
      designation: "Content Writer",
      project: "Helping Hands WP Theme",
      priority: "High",
      color: "error",
      bgcolor: "bg-error text-white",
      budget: "9.3k"
    },
  ]
  /*Table Action*/
  const tableActionData = [
    {
      icon: "solar:add-circle-outline",
      listtitle: "Add",
    },
    {
      icon: "solar:pen-new-square-broken",
      listtitle: "Edit",
    },
    {
      icon: "solar:trash-bin-minimalistic-outline",
      listtitle: "Delete",
    },
  ];

  const BCrumb = [
    {
      to: "/",
      title: "Home",
    },
    {
      title: "Table",
    },
  ];
  return (
    <>
      <BreadcrumbComp title="Table" items={BCrumb} />
      <CardBox>
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-sm font-semibold ps-0">
                        Assigned
                      </TableHead>
                      <TableHead className="text-sm font-semibold">Project</TableHead>
                      <TableHead className="text-sm font-semibold">Priority</TableHead>
                      <TableHead className="text-sm font-semibold"></TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {PerformersData.map((item, index) => (
                      <TableRow key={index} className="border-b border-defaultBorder">
                        {/* Assigned */}
                        <TableCell className="ps-0 min-w-[200px]">
                          <div className="flex gap-3 items-center">
                            <Image
                              src={item.profileImg}
                              alt="profile"
                              className="h-10 w-10 rounded-full"
                            />
                            <div>
                              <h6 className="text-sm font-semibold mb-1">
                                {item.username}
                              </h6>
                              <p className="text-xs text-slateGray font-medium">
                                {item.designation}
                              </p>
                            </div>
                          </div>
                        </TableCell>

                        {/* Project */}
                        <TableCell>
                          <p className="text-charcoal text-sm font-medium">
                            {item.project}
                          </p>
                        </TableCell>

                        {/* Priority */}
                        <TableCell>
                          <Badge
                            className={`text-sm rounded-full py-1 px-3 justify-center ${item.bgcolor}`}
                          >
                            {item.priority}
                          </Badge>
                        </TableCell>

                        {/* Actions Dropdown */}
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <span className="h-9 w-9 flex justify-center items-center rounded-full hover:bg-lightprimary hover:text-primary cursor-pointer">
                                <TbDotsVertical size={22} />
                              </span>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-40">
                              {tableActionData.map((action, idx) => (
                                <DropdownMenuItem
                                  key={idx}
                                  className="flex gap-3 items-center"
                                >
                                  <Icon icon={action.icon} height={18} />
                                  <span>{action.listtitle}</span>
                                </DropdownMenuItem>
                              ))}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </CardBox>
    </>
  )
}

export default page
