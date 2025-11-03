import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import { Label } from "src/components/ui/label";


const AuthRegister = () => {
  return (
    <>
      <form className="mt-6">
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="name" className="font-semibold" >Name</Label>
          </div>
          <Input
            id="name"
            type="text"
          />
        </div>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="emadd" className="font-semibold">Email Address</Label>
          </div>
          <Input
            id="emadd"
            type="text"
          />
        </div>
        <div className="mb-6">
          <div className="mb-2 block">
            <Label htmlFor="userpwd" className="font-semibold">Password</Label>
          </div>
          <Input
            id="userpwd"
            type="password"
          />
        </div>
        <Button className="w-full">Sign Up</Button>
      </form>
    </>
  )
}

export default AuthRegister
