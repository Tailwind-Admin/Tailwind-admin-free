"use client"

import { useState } from "react"
import { Icon } from "@iconify/react"
import { BlogType } from "src/types/apps/blog"
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "src/components/ui/tooltip"
import { Button } from "src/components/ui/button"
import { Input } from "src/components/ui/input"

const BlogComment = ({ comment }: BlogType | any) => {
  const [showReply, setShowReply] = useState(false)

  return (
    <>
      <div className="mt-5 p-5 bg-lightgray dark:bg-darkmuted rounded-md">
        <div className="flex gap-3 items-center">
          <Avatar className="h-8 w-8">
            <AvatarImage src={comment?.profile.avatar} />
            <AvatarFallback>
              {comment?.profile.name?.charAt(0) ?? "U"}
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
                  size="icon"
                  className="btn-circle rounded-full flex items-center !text-white bg-primary hover:bg-primary/90"
                  onClick={() => setShowReply(!showReply)}
                >
                  <Icon
                    icon="tabler:arrow-back-up"
                    height="18"
                    className="!text-white !shrink-0"
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Reply</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      {comment?.replies ? (
        <>
          {comment?.replies.map((reply: BlogType | any) => (
            <div className="ps-8" key={reply.comment}>
              <div className="mt-5 p-5 bg-lightgray dark:bg-darkmuted rounded-md">
                <div className="flex gap-3 items-center">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={reply.profile.avatar} />
                    <AvatarFallback>
                      {reply?.profile?.name?.charAt(0) ?? "U"}
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
          ))}
        </>
      ) : null}

      {showReply ? (
        <div className="py-5 px-5">
          <div className="flex gap-3 items-center">
            <div className="w-10">
              <Avatar className="h-8 w-8">
                <AvatarImage src={comment?.profile.avatar} />
                <AvatarFallback>
                  {comment?.profile?.name?.charAt(0) ?? "U"}
                </AvatarFallback>
              </Avatar>
            </div>
            <Input
              className="form-control md:w-full w-fit"
              placeholder="Reply"
            />
            <Button className="bg-primary text-white hover:bg-primary/90">
              Reply
            </Button>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default BlogComment
