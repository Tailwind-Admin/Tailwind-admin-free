import { createContext, useState, useEffect } from 'react';
import { TicketType } from 'src/types/ticket';
import { TicketData } from 'src/api/ticket/TicketData';

export interface TicketContextType {
  tickets: TicketType[];
  deleteTicket: (id: number) => void;
  setTicketSearch: (searchTerm: string) => void;
  searchTickets: (searchTerm: string) => void;
  ticketSearch: string;
  filter: string;
  error: any;
  loading: boolean;
  setFilter: (filter: string) => void;
  addTicket: (ticket: TicketType) => void;
  editTicket: (ticket: TicketType) => void;
}

export const TicketContext = createContext<TicketContextType>({} as TicketContextType);

export const TicketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tickets, setTickets] = useState<TicketType[]>([]);
  const [ticketSearch, setTicketSearch] = useState<string>('');
  const [filter, setFilter] = useState<string>('total_tickets');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  // Initialize tickets
  useEffect(() => {
    try {
      setTickets(TicketData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Add ticket
  const addTicket = (newTicket: TicketType) => {
    // Push to TicketData array
    TicketData.push(newTicket);
    setTickets([...TicketData]);
  };

  // Edit ticket
  const editTicket = (updatedTicket: TicketType) => {
    const index = TicketData.findIndex(t => t.Id === updatedTicket.Id);
    if (index !== -1) {
      TicketData[index] = updatedTicket;
      setTickets([...TicketData]);
    }
  };

  // Delete ticket
  const deleteTicket = (id: number) => {
    const index = TicketData.findIndex(t => t.Id === id);
    if (index !== -1) {
      TicketData.splice(index, 1); // remove from array
      setTickets([...TicketData]);
    }
  };

  const searchTickets = (searchTerm: string) => {
    setTicketSearch(searchTerm);
  };

  return (
    <TicketContext.Provider
      value={{
        tickets,
        error,
        loading,
        deleteTicket,
        setTicketSearch,
        searchTickets,
        ticketSearch,
        filter,
        setFilter,
        addTicket,
        editTicket,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};
