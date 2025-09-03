import CreateTicketForm from "src/components/apps/tickets/CreateTicketForm";
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import { TicketProvider } from 'src/context/TicketContext/index'


const BCrumb = [
    {
        to: "/",
        title: "Home",
    },
    {
        title: "Tickets",
    },
];
const CreateTickets = () => {
    return (
        <>
            <BreadcrumbComp title="Tickets App" items={BCrumb} />
            <TicketProvider>
                <CreateTicketForm />
            </TicketProvider>

        </>
    );
};

export default CreateTickets;