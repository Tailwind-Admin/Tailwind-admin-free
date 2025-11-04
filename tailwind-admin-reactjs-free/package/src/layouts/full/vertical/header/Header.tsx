import { useState, useEffect, useEffectEvent } from 'react';
import { Icon } from '@iconify/react';
import Messages from './Messages';
import FullLogo from '../../shared/logo/FullLogo';
import Profile from './Profile';
import SidebarLayout from '../sidebar/Sidebar';
import { useTheme } from 'src/components/provider/theme-provider';
import { Input } from 'src/components/ui/input';
import { Sheet, SheetContent, SheetTitle } from 'src/components/ui/sheet';
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleScroll = useEffectEvent(() => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  });

  const handleResize = useEffectEvent(() => {
    if (window.innerWidth > 1023) {
      setIsOpen(false);
    }
  });

  useEffect(() => {
    // Use stable callbacks inside the effect
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Run once on mount
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleMobileMenu = () => {
    if (mobileMenu === 'active') {
      setMobileMenu('');
    } else {
      setMobileMenu('active');
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-[2] ${
          isSticky ? 'bg-white dark:bg-dark shadow-md fixed w-full' : 'bg-transparent'
        }`}
      >
        <nav className="rounded-none bg-transparent dark:bg-transparent py-4 px-6 !max-w-full flex justify-between items-center">
          {/* Mobile Toggle Icon */}
          <span
            onClick={() => setIsOpen(true)}
            className="px-[15px] hover:text-primary dark:hover:text-primary text-link dark:text-darklink relative after:absolute after:w-10 after:h-10 after:rounded-full hover:after:bg-lightprimary  after:bg-transparent rounded-full xl:hidden flex justify-center items-center cursor-pointer"
          >
            <Icon icon="tabler:menu-2" height={20} />
          </span>

          <div className="hidden xl:flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-gray-200 transition"
            >
              <Icon icon="solar:magnifer-linear" width="20" height="20" />
            </button>

            {searchOpen && <Input id="search-input" type="text" placeholder="Search..." />}
          </div>

          {/* mobile-logo */}
          <div className="block xl:hidden">
            <FullLogo />
          </div>

          <div className="xl:!block !hidden md:!hidden">
            <div className="flex gap-0 items-center">
              <div className="relative lg:block hidden group w-fit shadow-grid-shadow bg-[radial-gradient(100%_707.08%_at_0%_0%,#15CEBD_0%,#548AFE_33.82%,#E02FD6_72.12%,#FDB54E_100%)] p-0.5 rounded-full">
                <a
                  href={'https://tailwind-admin.com/#pricing'}
                  className="flex items-center gap-2.5 px-3 py-1.5 bg-white dark:bg-dark rounded-full transition-all dark:hover:bg-[radial-gradient(100%_707.08%_at_0%_0%,#15CEBD36_0%,#548AFE36_33.82%,#E02FD636_72.12%,#FDB54E36_100%)] group hover:bg-[radial-gradient(100%_707.08%_at_0%_0%,#15CEBD36_0%,#548AFE36_33.82%,#E02FD636_72.12%,#FDB54E36_100%)]"
                >
                  <p className="card-title text-base">Check Pro Version</p>
                </a>
              </div>

              {/* Theme Toggle */}
              {theme === 'light' ? (
                <div
                  className=" hover:text-primary px-15 group  dark:hover:text-primary focus:ring-0 rounded-full flex justify-center items-center cursor-pointer text-link dark:text-darklink relative"
                  onClick={toggleMode}
                >
                  <span className="flex items-center justify-center relative after:absolute after:w-10 after:h-10 after:rounded-full after:-top-1/2   group-hover:after:bg-lightprimary">
                    <Icon icon="tabler:moon" width="20" />
                  </span>
                </div>
              ) : (
                // Dark Mode Button
                <div
                  className=" hover:text-primary px-15   dark:hover:text-primary focus:ring-0 rounded-full flex justify-center items-center cursor-pointer text-link dark:text-darklink group relative"
                  onClick={toggleMode}
                >
                  <span className="flex items-center justify-center relative after:absolute after:w-10 after:h-10 after:rounded-full after:-top-1/2   group-hover:after:bg-lightprimary">
                    <Icon
                      icon="solar:sun-bold-duotone"
                      width="20"
                      className="group-hover:text-primary"
                    />
                  </span>
                </div>
              )}

              {/* Messages Dropdown */}
              <Messages />

              {/* Profile Dropdown */}
              <Profile />
            </div>
          </div>
          {/* Mobile Toggle Icon */}
          <span className="flex xl:hidden " onClick={handleMobileMenu}>
            <div className="xl:hidden flex w-full">
              <div className="flex justify-center items-center">
                {theme === 'light' ? (
                  <div
                    className=" hover:text-primary px-1 sm:px-15 group  dark:hover:text-primary focus:ring-0 rounded-full flex justify-center items-center cursor-pointer text-link dark:text-darklink relative"
                    onClick={toggleMode}
                  >
                    <span className="flex items-center justify-center relative after:absolute after:w-10 after:h-10 after:rounded-full after:-top-1/2   group-hover:after:bg-lightprimary">
                      <Icon icon="tabler:moon" width="20" />
                    </span>
                  </div>
                ) : (
                  // Dark Mode Button
                  <div
                    className=" hover:text-primary px-1 sm:px-15   dark:hover:text-primary focus:ring-0 rounded-full flex justify-center items-center cursor-pointer text-link dark:text-darklink group relative"
                    onClick={toggleMode}
                  >
                    <span className="flex items-center justify-center relative after:absolute after:w-10 after:h-10 after:rounded-full after:-top-1/2   group-hover:after:bg-lightprimary">
                      <Icon
                        icon="solar:sun-bold-duotone"
                        width="20"
                        className="group-hover:text-primary"
                      />
                    </span>
                  </div>
                )}
                <Messages />
                <Profile />
              </div>
            </div>
          </span>
        </nav>
      </header>

      {/* Mobile Sidebar */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <VisuallyHidden>
            <SheetTitle>sidebar</SheetTitle>
          </VisuallyHidden>
          <SidebarLayout onClose={() => setIsOpen(false)} />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Header;
