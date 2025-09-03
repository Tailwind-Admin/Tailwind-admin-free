import FullLogo from "@/app/(DashboardLayout)/layout/shared/logo/FullLogo"
import CardBox from "../shared/CardBox"
import { Button, Checkbox, Label, TextInput } from "flowbite-react"
import Link from "next/link"

export const Login = () => {
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
                            <Label htmlFor="username1" className="font-medium">Username</Label>
                        </div>
                        <TextInput id="username1" type="text" className="form-control" placeholder="Enter your username" required />
                    </div>
                    <div className="mt-6">
                        <div className="mb-2 block">
                            <Label htmlFor="password1" className="font-medium">Password</Label>
                        </div>
                        <TextInput id="password1" type="password" className="form-control" placeholder="Enter your password" required />
                    </div>
                    <div className="flex flex-wrap gap-6 items-center justify-between my-6">
                        <div className="flex items-center gap-2">
                        <Checkbox id="remember" className="checkbox" checked readOnly />
                            <Label className="text-link font-normal text-sm" htmlFor="remember">Remember this device</Label>
                        </div>
                        <Link href="#" className="text-sm font-medium text-primary hover:text-primaryemphasis">Forgot Password ?</Link>
                    </div>
                    <Button color={"primary"} className="w-full" as={Link} href="/">Sign In</Button>
                    <div className="flex items center gap-2 justify-center mt-6 flex-wrap">
                        <p className="text-base font-medium text-muted dark:text-darklink">New to TailwindAdmin?
                        </p>
                        <Link href="/auth/register" className="text-sm font-medium text-primary hover:text-primaryemphasis">Create an account</Link>
                    </div>
                </CardBox>
            </div>
        </div>
    </>)
}