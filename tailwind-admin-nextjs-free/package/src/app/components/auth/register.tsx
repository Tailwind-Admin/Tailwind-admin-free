import FullLogo from "@/app/(DashboardLayout)/layout/shared/logo/FullLogo"
import CardBox from "../shared/CardBox"
import { Button, Label, TextInput } from "flowbite-react"
import Link from "next/link"

export const Register = () => {
    return (<>
        <div className="h-screen w-full flex justify-center items-center bg-lightprimary">
            <div className="md:min-w-[450px] min-w-max">
                <CardBox>
                    <div className="flex justify-center mb-4">
                        <FullLogo />
                    </div>
                    <p className="text-sm text-charcoal text-center mb-6">Your Social Campaigns</p>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name1" className="font-medium">Name</Label>
                        </div>
                        <TextInput id="name1" type="text" className="form-control" placeholder="Enter your name" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" className="font-medium">Email</Label>
                        </div>
                        <TextInput id="email1" type="email" className="form-control" placeholder="Enter your email" required />
                    </div>
                    <div className="mt-6">
                        <div className="mb-2 block">
                            <Label htmlFor="password1" className="font-medium" >Password</Label>
                        </div>
                        <TextInput id="password1" type="password" className="form-control" placeholder="Enter your password" required />
                    </div>
                    <Button color={"primary"} className="w-full mt-6" as={Link} href="/">Sign Up</Button>
                    <div className="flex items center gap-2 justify-center mt-6 flex-wrap">
                        <p className="text-base font-medium text-muted dark:text-darklink">Already have an account?
                        </p>
                        <Link href="/auth/login" className="text-sm font-medium text-primary hover:text-primaryemphasis">Sign In</Link>
                    </div>
                </CardBox>
            </div>
        </div>
    </>)
}