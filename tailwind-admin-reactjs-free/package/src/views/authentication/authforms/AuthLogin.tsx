import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router";


const AuthLogin = () => {
  return (
    <>
      <form className="mt-6">
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="Username">Username</Label>
          </div>
          <TextInput
            id="username"
            type="text"
            sizing="md"
            className="form-control"
          />
        </div>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="userpwd">Password</Label>
          </div>
          <TextInput
            id="userpwd"
            type="password"
            sizing="md"
            className="form-control"
          />
        </div>
        <div className="flex justify-between my-5">
          <div className="flex items-center gap-2">
            <Checkbox id="accept" className="checkbox" />
            <Label
              htmlFor="accept"
              className="opacity-90 font-normal cursor-pointer"
            >
              Remeber this Device
            </Label>
          </div>
          <Link to={"/auth/auth1/forgot-password"} className="text-primary text-sm font-medium">
            Forgot Password ?
          </Link>
        </div>
        <Button color={"primary"} to="/" as={Link} className="w-full rounded-md">
          Sign in
        </Button>
      </form>
    </>
  );
};

export default AuthLogin;
