

import BlogListing from "src/components/apps/blog/BlogListing";
import { BlogProvider } from "src/context/BlogContext/index";

const BlogPost = () => {
  return (
    <>
       <BlogProvider>
        <BlogListing />
      </BlogProvider>
    </>
  )
}

export default BlogPost
