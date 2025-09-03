'use client'
import React from 'react';
import Image from "next/image";
import LogoIcon from '/public/images/logos/logo-icon.svg'
import Link from 'next/link';
const Logo = () => {
  return (
    <Link href={'/'}>
      <Image src={LogoIcon} alt="logo" />
    </Link>
  )
}

export default Logo
