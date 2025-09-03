const TicketFilter = ({ tickets, setFilter }: any) => {
    
  const pendingC = tickets?.filter((t: { Status: string }) => t.Status === "Pending").length;
  const openC = tickets?.filter((t: { Status: string }) => t.Status === "Open").length;
  const closeC = tickets?.filter((t: { Status: string }) => t.Status === "Closed").length;

  return (
    <div className="grid grid-cols-12 gap-6">
      <div
        className="lg:col-span-3 md:col-span-6 col-span-12 p-[30px] bg-lightprimary text-center rounded-md cursor-pointer"
        onClick={() => setFilter("total_tickets")}
      >
        <h3 className="text-primary text-2xl">{tickets.length}</h3>
        <h6 className="text-base text-primary">Total Tickets</h6>
      </div>
      <div
        className="lg:col-span-3 md:col-span-6 col-span-12 p-[30px] bg-lightwarning text-center rounded-md cursor-pointer"
        onClick={() => setFilter("Pending")}
      >
        <h3 className="text-warning text-2xl">{pendingC}</h3>
        <h6 className="text-base text-warning">Pending Tickets</h6>
      </div>
      <div
        className="lg:col-span-3 md:col-span-6 col-span-12 p-[30px] bg-lightsuccess text-center rounded-md cursor-pointer"
        onClick={() => setFilter("Open")}
      >
        <h3 className="text-success text-2xl">{openC}</h3>
        <h6 className="text-base text-success">Open Tickets</h6>
      </div>
      <div
        className="lg:col-span-3 md:col-span-6 col-span-12 p-[30px] bg-lighterror text-center rounded-md cursor-pointer"
        onClick={() => setFilter("Closed")}
      >
        <h3 className="text-error text-2xl">{closeC}</h3>
        <h6 className="text-base text-error">Closed Tickets</h6>
      </div>
    </div>
  );
};

export default TicketFilter;
