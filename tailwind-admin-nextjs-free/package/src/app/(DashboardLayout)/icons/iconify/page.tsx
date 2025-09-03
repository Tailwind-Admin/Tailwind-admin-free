import React from "react";
import BreadcrumbComp from "../../layout/shared/breadcrumb/BreadcrumbComp";
import type { Metadata } from "next";
import CardBox from "@/app/components/shared/CardBox";
export const metadata: Metadata = {
  title: "Iconify Tabler Icons",
};

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Iconify Icons",
  },
];
const page = () => {
  return (
    <>
      <BreadcrumbComp title="Iconify Icons" items={BCrumb} />
      <CardBox>
      <iframe
          src="https://icon-sets.iconify.design/solar/"
          title="Inline Frame Example"
          width="100%"
          height="650"
        ></iframe>
      </CardBox>
    </>
  );
};

export default page;
