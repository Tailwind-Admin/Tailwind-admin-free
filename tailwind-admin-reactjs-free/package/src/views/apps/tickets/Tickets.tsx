import TicketsApp from "src/components/apps/tickets";
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Tickets",
  },
];
const Tickets = () => {
  return (
    <>
      <BreadcrumbComp title="Tickets App" items={BCrumb} />
      <TicketsApp />
    </>
  );
};

export default Tickets;
