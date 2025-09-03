import { Link } from "react-router";
import ErrorImg from "/src/assets/images/backgrounds/maintenance.svg";
import { Button } from "src/components/ui/button";

const Maintainance = () => {
  return (
    <>
      <div className="h-screen flex items-center  justify-center bg-white dark:bg-darkgray ">
        <div className="text-center max-w-lg mx-auto">
          <img src={ErrorImg} alt="error" className="mb-4" />
          <h1 className="text-dark dark:text-white text-4xl mb-6">Maintenance Mode!!!</h1>
          <h6 className="text-xl text-dark dark:text-white">Website is Under Construction. Check back later!</h6>
          <Button
            variant={"default"}
            className="w-fit mt-6 mx-auto rounded-md"
          >
            <Link to={"/"}>Go Back to Home</Link>
          </Button>
        </div>
      </div>
    </>
  )
}

export default Maintainance