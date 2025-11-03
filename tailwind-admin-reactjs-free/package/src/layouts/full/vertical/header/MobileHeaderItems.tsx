import Messages from './Messages';
import Profile from './Profile';

const MobileHeaderItems = () => {
  return (
    <nav className="rounded-none bg-white dark:bg-dark flex-1 px-9 ">
      <div className="xl:hidden block w-full">
        <div className="flex justify-center items-center">
          <Messages />

          <Profile />
        </div>
      </div>
    </nav>
  );
};

export default MobileHeaderItems;
