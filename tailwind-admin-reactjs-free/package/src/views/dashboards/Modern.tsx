import { TopCards } from "src/components/dashboards/modern/TopCards";
import { RevenueUpdate } from "src/components/dashboards/modern/RevenueUpdate";
import { YearlyBreakup } from "src/components/dashboards/modern/YearlyBreakup";
import { MonthlyEarning } from "src/components/dashboards/modern/MonthlyEarning";
import { RecentTransaction } from "src/components/dashboards/modern/RecentTransaction";
import { ProductPerformance } from "src/components/dashboards/modern/ProuctPerformance";
import { Footer } from "src/components/dashboards/modern/Footer";
import ProfileWelcome from "src/components/dashboards/modern/ProfileWelcome";

const Moderndash = () => {
    return (
        <>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12">
                    <ProfileWelcome />
                </div>
                <div className="col-span-12">
                    <TopCards />
                </div>
                <div className="lg:col-span-8 col-span-12 flex">
                    <RevenueUpdate />
                </div>
                <div className="lg:col-span-4 col-span-12 ">
                    <YearlyBreakup />
                    <MonthlyEarning />
                </div>
                <div className="lg:col-span-4 col-span-12">
                    <RecentTransaction />
                </div>
                <div className="lg:col-span-8 col-span-12 flex">
                    <ProductPerformance />
                </div>
                <div className="col-span-12">
                    <Footer />
                </div>
            </div>

        </>
    );
};

export default Moderndash;