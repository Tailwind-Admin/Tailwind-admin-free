"use client";
import React from "react";
import CardBox from "@/app/components/shared/CardBox";
import { Icon } from "@iconify/react";
import Image from "next/image";
import breadcrumbBg from "/public/images/breadcrumb/ChatBc.png"

interface BreadCrumbType {
  subtitle?: string;
  items?: any[];
  title: string;
  children?: JSX.Element;
}

const BreadcrumbComp = ({ items, title }: BreadCrumbType) => {
  return (
    <>
      <CardBox className={`mb-6 py-4 bg-lightsecondary dark:bg-darkinfo overflow-hidden rounded-md border-none !shadow-none dark:!shadow-none`}>
        <div className=" items-center grid grid-cols-12 gap-6">
          <div className="col-span-10">
            <h4 className="font-semibold text-xl text-customdark mb-3">{title}</h4>
            <ol className="flex items-center whitespace-nowrap" aria-label="Breadcrumb">
              <li className="flex items-center">
                <a className="opacity-80 text-sm text-charcoal leading-none"
                  href="@@webRoot/main/index.html">
                  Home
                </a>
              </li>
              <li>
                <div className="p-0.5 rounded-full bg-dark dark:bg-darklink mx-2.5 flex items-center"></div>
              </li>
              <li className="flex items-center text-sm text-charcoal leading-none" aria-current="page">
                {title}
              </li>
            </ol>
          </div>
          <div className="col-span-2 flex justify-center -mb-10">
            <Image src={breadcrumbBg} alt="" className="md:-mb-[31px] -mb-4" width={140} height={150} />
          </div>
        </div>
      </CardBox>

    </>
  );
};

export default BreadcrumbComp;
