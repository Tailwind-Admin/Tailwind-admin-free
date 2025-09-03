


import authbg from "src/assets/images/backgrounds/login-security.svg"

const LeftSidebarPart = () => {
    return (
        <>
            <div className="flex justify-center h-screen items-center z-10 relative">
                <div className="xl:w-5/12 lg:w-10/12 xl:px-0 px-6">
                    <img src={authbg} alt="auth-bg" className="w-full" />
                </div>
            </div>
        </>
    );
};

export default LeftSidebarPart;
