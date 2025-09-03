"use client"

import { Link } from "react-router"
import { Icon } from "@iconify/react"
import { GoDot } from "react-icons/go"
import { format } from "date-fns"
import { useEffect, useContext } from "react"
import { BlogContext, BlogContextProps } from "src/context/BlogContext"
import { BlogPostType } from "src/types/apps/blog"
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar"
import { Badge } from "src/components/ui/badge"

interface Btype {
  post: BlogPostType
  index: number
}

const BlogFeaturedCard = ({ post, index }: Btype) => {
  const { coverImg, title, view, comments, category, author, createdAt }: any =
    post

  const linkTo = title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")

  const mainPost = index === 0
  const { setLoading }: BlogContextProps = useContext(BlogContext)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 700)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {post ? (
        <div
          className={`lg:col-span-${mainPost ? 8 : 4} md:col-span-12 col-span-12`}
        >
          <div
            className="w-full h-[400px] p-0 overflow-hidden flex-row shadow-none feature-card relative card-hover rounded-md"
          >
            {/* Background image */}
            <img
              src={coverImg}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute top-0 bottom-0 left-0 h-full w-full bg-black opacity-50 mix-blend-multiply"></div>

            {/* Content */}
            <div className="absolute w-full h-full left-0 p-6">
              <div className="flex flex-col h-full justify-between">
                <div className="flex justify-between items-center">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={author?.avatar} alt={author?.name} />
                    <AvatarFallback>
                      {author?.name?.charAt(0) ?? "A"}
                    </AvatarFallback>
                  </Avatar>
                  <Badge className="rounded-md">{category}</Badge>
                </div>

                <div>
                  <h2 className="text-2xl text-white my-6">
                    <Link to={`/apps/blog/detail/${linkTo}`}>{title}</Link>
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
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default BlogFeaturedCard
