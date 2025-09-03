"use client"
import Link from "next/link";
import CardBox from "../shared/CardBox";
import Image from "next/image";
import { Button, Rating, RatingStar, Tooltip } from "flowbite-react";
import { Icon } from "@iconify/react/dist/iconify.js";

interface productType {
    photo:any,
    title:string,
    price:number,
    salesPrice:number,
    rating:number
}

export const Product = ({photo,title,price,salesPrice,rating}:productType) => {
    return(
        <CardBox className="p-0 overflow-hidden group card-hover">
        <div className="relative">
          <Link href={`/`}>
            <div className="overflow-hidden h-[265px] w-full">
              <Image
                src={photo}
                alt="materialm"
                height={265}
                width={500}
                className="w-full"
              />
            </div>
          </Link>
          <div className="p-6 pt-4">
            <div className="flex justify-between items-center -mt-8 ">
              <div className="ms-auto">
                <Tooltip content={"Add To Cart"} className="">
                  <Button
                    color={"primary"}
                    className="btn-circle ms-auto p-0 rounded-full"
                  >
                    <Icon icon="tabler:basket" height={18} />
                  </Button>
                </Tooltip>
              </div>
            </div>
            <h6 className="text-base line-clamp-1 group-hover:text-primary">
              {title}
            </h6>
            <div className="flex justify-between items-center mt-1">
              <h5 className="text-base flex gap-2 items-center">
                ${price}{" "}
                <span className="font-normal text-sm text-darklink line-through">
                  ${salesPrice}
                </span>
              </h5>
              {rating == 5 ? (
                <Rating size={"sm"} className="text-warning" >
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                </Rating>
              ) : rating == 4 ? (
                <Rating size={"sm"}>
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                  <RatingStar filled={false} />
                </Rating>
              ) : (
                <Rating size={"sm"}>
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                  <RatingStar filled={false} />
                  <RatingStar filled={false} />
                </Rating>
              )}
            </div>
          </div>
        </div>
      </CardBox>
    )
}