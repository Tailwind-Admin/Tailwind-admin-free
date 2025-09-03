import Link from "next/link"

export const Footer = () => {
    return (
        <>
            <p className="text-base text-center text-bodytext font-medium">Design and Developed by <Link href="https://tailwind-admin.com/" target="_blank" className="text-primary font-normal underline hover:text-primaryemphasis" >tailwind-admin.com</Link> </p>
        </>
    )
}