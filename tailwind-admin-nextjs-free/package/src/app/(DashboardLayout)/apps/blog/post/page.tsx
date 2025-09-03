
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";
import BlogPost from "@/app/components/apps/blog/BlogPost";
import { Metadata } from "next";
const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Blog app",
  },
];
export const metadata: Metadata = {
  title: "Blog Post",
};
const Blog = () => {
  return (
    <>
     <BreadcrumbComp title="Blog app" items={BCrumb} />
     <BlogPost/>
    </>
  );
};
export default Blog;
