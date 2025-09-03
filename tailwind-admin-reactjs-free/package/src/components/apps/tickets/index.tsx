import CardBox from "src/components/shared/CardBox";
import TicketFilter from "src/components/apps/tickets/TicketFilter";
import TicketListing from "src/components/apps/tickets/TicketListing";
import { TicketProvider } from 'src/context/TicketContext/index';


const TicketsApp = () => {
  return (
    <>
      <TicketProvider>
        <CardBox>
          <TicketFilter />
          <TicketListing />
        </CardBox>
      </TicketProvider>
    </>
  );
};

export default TicketsApp;
