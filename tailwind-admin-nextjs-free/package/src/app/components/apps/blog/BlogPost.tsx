"use client";
import React from "react";
import BlogListing from "@/app/components/apps/blog/BlogListing";
import { BlogProvider } from "@/app/context/BlogContext/index";

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
