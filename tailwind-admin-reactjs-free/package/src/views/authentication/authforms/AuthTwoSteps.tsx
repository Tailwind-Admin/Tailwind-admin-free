import { Button, Label, TextInput } from "flowbite-react";

const AuthTwoSteps = () => {
  return (
    <>
      <form className="mt-6">
        <div className="mb-4">
          <div className="mb-2 block">
            <Label>Type your 6 digits security code</Label>
          </div>
          <div className="flex gap-3.5">
            <TextInput type="text" sizing="md" className="form-control input-center" />
            <TextInput type="text" sizing="md" className="form-control input-center" />
            <TextInput type="text" sizing="md" className="form-control input-center" />
            <TextInput type="text" sizing="md" className="form-control input-center" />
            <TextInput type="text" sizing="md" className="form-control input-center" />
            <TextInput type="text" sizing="md" className="form-control input-center" />
          </div>
        </div>
        <Button color={"primary"} className="w-full rounded-md">
          Verify My Account
        </Button>
      </form>
    </>
  );
};

export default AuthTwoSteps;
