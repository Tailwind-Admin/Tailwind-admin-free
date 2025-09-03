"use client";
import { format } from "date-fns";
import { GoDot } from "react-icons/go";
import { Icon } from "@iconify/react";
import CardBox from "../../shared/CardBox";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

import { BlogPostType } from "@/app/(DashboardLayout)/types/blog";

interface Btype {
  post: BlogPostType;
  index?: number;
}

const BlogCard = ({ post }: Btype) => {
  const { coverImg, title, view, comments, category, author, createdAt }: any =
    post;

  const linkTo = title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");

  return (
    <div className="lg:col-span-4 md:col-span-6 col-span-12">
      <CardBox className="p-0 overflow-hidden group card-hover">
        <div className="relative">
          <Link href={`/apps/blog/detail/${linkTo}`}>
            <div className="overflow-hidden h-[240px]">
              <Image
                src={coverImg}
                alt="materialm"
                height={240}
                width={500}
                className="w-full"
              />
            </div>
            <Badge className="absolute bottom-8 end-6 rounded-md bg-white text-black">
              2 min Read
            </Badge>
          </Link>

          <div className="flex justify-between items-center -mt-6 px-6">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Avatar className="cursor-pointer w-10 h-10">
                    <AvatarImage src={author?.avatar} alt={author?.name} />
                    <AvatarFallback>
                      {author?.name ? author.name[0] : "?"}
                    </AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent>{author?.name}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <div className="px-6 pb-6">
          <Badge variant="gray" className="mt-3 rounded-md">
            {category}
          </Badge>

          <h5 className="text-xl py-6 group-hover:text-primary">
            <Link
              href={`/apps/blog/detail/${linkTo}`}
              className="line-clamp-2"
            >
              {title}
            </Link>
          </h5>

          <div className="flex gap-3">
            <div className="flex gap-2 items-center text-darklink text-[15px]">
              <Icon icon="tabler:eye" height="18" className="text-ld" /> {view}
            </div>
            <div className="flex gap-2 items-center text-darklink text-[15px]">
              <Icon
                icon="tabler:message-2"
                height="18"
                className="text-ld"
              />{" "}
              {comments?.length}
            </div>
            <div className="ms-auto flex gap-2 items-center text-darklink text-[15px]">
              <GoDot size="16" className="text-ld" />
              <small>{format(new Date(createdAt), "E, MMM d")}</small>
            </div>
          </div>
        </div>
      </CardBox>
    </div>
  );
};

export default BlogCard;
