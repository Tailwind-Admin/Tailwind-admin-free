'use  client'
import { useState } from "react";
import { Icon } from "@iconify/react";
import { BlogType } from "@/app/(DashboardLayout)/types/blog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const BlogComment = ({ comment }: BlogType | any) => {
  const [showReply, setShowReply] = useState(false);
  return (
    <>
      <div className="mt-5 p-5 bg-lightgray dark:bg-darkmuted rounded-md">
        <div className="flex gap-3 items-center">
          <Avatar>
            <AvatarImage src={comment?.profile.avatar} alt={comment?.profile.name} />
            <AvatarFallback>
              {comment?.profile.name}
            </AvatarFallback>
          </Avatar>
          <h6 className="text-base">{comment?.profile.name}</h6>
          <span className="h-2 w-2 rounded-full bg-dark opacity-40 dark:bg-white block"></span>
          <p>{comment?.profile.time}</p>
        </div>
        <div className="py-4">
          <p className="text-ld">{comment?.comment}</p>
        </div>
        <div className="relative w-fit">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="flex items-center"
                  onClick={() => setShowReply(!showReply)}
                >
                  <Icon icon="tabler:arrow-back-up" height="18" className="!text-white !shrink-0" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                Reply
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      {comment?.replies ? (
        <>
          {comment?.replies.map((reply: BlogType | any) => {
            return (
              <div className="ps-8" key={reply.comment}>
                <div className="mt-5 p-5 bg-lightgray dark:bg-darkmuted rounded-md">
                  <div className="flex gap-3 items-center">
                    <Avatar>
                      <AvatarImage src={reply.profile.avatar} alt={reply.profile.name} />
                      <AvatarFallback>
                        {reply.profile.name}
                      </AvatarFallback>
                    </Avatar>
                    <h6 className="text-base">{reply.profile.name}</h6>
                    <span className="h-2 w-2 rounded-full bg-dark dark:bg-white opacity-40 block"></span>
                    <p>{comment?.profile.time}</p>
                  </div>
                  <div className="py-4">
                    <p className="text-ld">{reply.comment}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : null}
      {showReply ? (
        <div className="py-5 px-5">
          <div className="flex gap-3 items-center">
            <div className="w-10">
              <Avatar>
                <AvatarImage src={comment?.profile.avatar} alt={comment?.profile.name} />
                <AvatarFallback>
                  {comment?.profile.name}
                </AvatarFallback>
              </Avatar>
            </div>
            <Input className="form-control md:w-full w-fit" placeholder="Reply" />
            <Button>Reply</Button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default BlogComment;
