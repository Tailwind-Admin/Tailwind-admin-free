
import React from "react";
import SalesOverview from "../components/dashboard/SalesOverview";
import { YearlyBreakup } from "../components/dashboard/YearlyBreakup";
import { MonthlyEarning } from "../components/dashboard/MonthlyEarning";
import { RecentTransaction } from "../components/dashboard/RecentTransaction";
import { ProductPerformance } from "../components/dashboard/ProductPerformance";
import { BestSeller } from "../components/dashboard/BestSeller";
import { Footer } from "../components/dashboard/Footer";
import { TopCards } from "../components/dashboard/TopCards";
import ProfileWelcome from "../components/dashboard/ProfileWelcome";

const page = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <ProfileWelcome/>
        </div>
        <div className="col-span-12">
          <TopCards />
        </div>
        <div className="lg:col-span-8 col-span-12">
          <SalesOverview />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12">
              <YearlyBreakup />
            </div>
            <div className="col-span-12">
              <MonthlyEarning />
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 col-span-12">
          <RecentTransaction />
        </div>
        <div className="lg:col-span-8 col-span-12 flex">
          <ProductPerformance />
        </div>
        {/* <div className="col-span-12">
          <BestSeller />
        </div> */}
        <div className="col-span-12">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;
