'use client'

import Image from "next/image";
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href={'/'}>
      <Image src={"/images/logos/logo-icon.svg"} alt="logo" />
    </Link>
  )
}

export default Logo
