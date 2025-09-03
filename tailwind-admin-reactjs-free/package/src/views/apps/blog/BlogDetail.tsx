

import BlogDetailData from 'src/components/apps/blog/detail';

import { BlogProvider } from 'src/context/BlogContext/index';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';



const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Blog Detail",
  },
];
const BlogDetail = () => {
  return (
    <>
      <BlogProvider>
        <BreadcrumbComp title="Blog Detail" items={BCrumb} />
        <BlogDetailData />
      </BlogProvider>
    </>
  )
}

export default BlogDetail
