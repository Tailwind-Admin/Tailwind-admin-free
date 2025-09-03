
import { Link } from "react-router";
import * as QuicklinksData from "./Data";

const Quicklinks = () => {
    return (
        <div className="lg:p-5 p-5 xl:border-s border-s-0 border-border dark:border-darkborder">
            <h5 className="text-xl font-semibold mb-4 text-ld">
                Quick Links
            </h5>
            <ul>
                {QuicklinksData.pageLinks.map((links, index) => (
                    <li className="mb-4" key={index}>
                        <Link
                            to={links.href}
                            className="text-sm font-semibold text-link dark:text-darklink hover:text-primary dark:hover:text-primary"
                        >
                            {links.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Quicklinks;
