import { Button } from 'src/components/ui/button';
import { Input } from 'src/components/ui/input';
import { Label } from 'src/components/ui/label';

const AuthForgotPassword = () => {
  return (
    <>
      <form className="mt-6">
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="emadd">Email Address</Label>
          </div>
          <Input id="emadd" type="text" />
        </div>
        <Button className="w-full">Forgot Password</Button>
      </form>
    </>
  );
};

export default AuthForgotPassword;
