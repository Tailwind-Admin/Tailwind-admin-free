'use  client'
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Avatar, Button, TextInput, Tooltip } from "flowbite-react";
import { BlogType } from "@/app/(DashboardLayout)/types/blog";

const BlogComment = ({ comment }: BlogType | any) => {
  const [showReply, setShowReply] = useState(false);
  return (
    <>
      <div className="mt-5 p-5 bg-lightgray dark:bg-darkmuted rounded-md">
        <div className="flex gap-3 items-center">
          <Avatar img={comment?.profile.avatar} size="sm" rounded></Avatar>
          <h6 className="text-base">{comment?.profile.name}</h6>
          <span className="h-2 w-2 rounded-full bg-customdark opacity-40 block"></span>
          <p>{comment?.profile.time}</p>
        </div>
        <div className="py-4">
          <p className="text-ld">{comment?.comment}</p>
        </div>
        <div className="relative w-fit">
          <Tooltip content="Reply">
            <Button
              color={"primary"}
              className="btn-circle rounded-full flex items-center !text-white"
              onClick={() => setShowReply(!showReply)}
            >
              <Icon icon="tabler:arrow-back-up" height="18" className="!text-white !shrink-0" />
            </Button>
          </Tooltip>
        </div>
      </div>
      {comment?.replies ? (
        <>
          {comment?.replies.map((reply: BlogType | any) => {
            return (
              <div className="ps-8" key={reply.comment}>
                <div className="mt-5 p-5 bg-lightgray dark:bg-darkmuted rounded-md">
                  <div className="flex gap-3 items-center">
                    <Avatar img={reply.profile.avatar} rounded size="sm" />
                    <h6 className="text-base">{reply.profile.name}</h6>
                    <span className="h-2 w-2 rounded-full bg-customdark opacity-40 block"></span>
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
              <Avatar img={comment?.profile.avatar} rounded size="sm" />
            </div>
            <TextInput className="form-control md:w-full w-fit" placeholder="Reply" />
            <Button color={"primary"} >Reply</Button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default BlogComment;
