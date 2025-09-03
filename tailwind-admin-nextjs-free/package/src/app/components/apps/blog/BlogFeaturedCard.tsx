"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { GoDot } from "react-icons/go";
import { format } from "date-fns";
import React, { useEffect, useContext } from "react";
import { BlogContext, BlogContextProps } from "@/app/context/BlogContext/index";
import { BlogPostType } from "@/app/(DashboardLayout)/types/blog";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Btype {
  post: BlogPostType;
  index: number;
}

const BlogFeaturedCard = ({ post, index }: Btype) => {
  const { coverImg, title, view, comments, category, author, createdAt }: any =
    post;

  const linkTo = title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");

  const mainPost = index === 0;

  const { setLoading }: BlogContextProps = useContext(BlogContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <>
      {post ? (
        <div
          className={`lg:col-span-${mainPost ? 8 : 4} md:col-span-12 col-span-12`}
        >
          <Card className="w-full h-[400px] p-0 overflow-hidden flex-row shadow-none feature-card relative card-hover">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={coverImg}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50 mix-blend-multiply"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={author?.avatar} alt={author?.name} />
                  <AvatarFallback>
                    {author?.name ? author.name[0] : "?"}
                  </AvatarFallback>
                </Avatar>

                <Badge className="rounded-md bg-primary text-white">
                  {category}
                </Badge>
              </div>

              <div>
                <h2 className="text-2xl text-white my-6">
                  <Link href={`/apps/blog/detail/${linkTo}`}>{title}</Link>
                </h2>
                <div className="flex gap-3">
                  <div className="flex gap-2 items-center text-white text-[15px]">
                    <Icon icon="tabler:eye" height="18" /> {view}
                  </div>
                  <div className="flex gap-2 items-center text-white text-[15px]">
                    <Icon icon="tabler:message-2" height="18" />{" "}
                    {comments?.length}
                  </div>
                  <div className="ms-auto flex gap-2 items-center text-white text-[15px]">
                    <GoDot size="16" />
                    <small>{format(new Date(createdAt), "E, MMM d")}</small>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ) : null}
    </>
  );
};

export default BlogFeaturedCard;
