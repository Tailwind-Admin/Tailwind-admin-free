import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';


interface TicketType {
    Id?: number | any;
    ticketTitle?: string;
    ticketDescription?: string;
    Status?: string;
    Label?:string;
    thumb?:string;
    AgentName?:string;
    Date?: string | Date;
}

interface ticketType {
    ticket: TicketType[];
    ticketContent: number;
    ticketearch: string;
}

export const useTicketstore = defineStore('tickets',{

    state: (): ticketType => ({
        ticket: [],
        ticketContent: 1,
        ticketearch: ''
    }),
    actions: {
        // Fetch ticket
        async fetchTicket() {
            try {
                const data = await axios.get('/api/data/tickets/TicketData');
                this.ticket = data.data;
                console.log(data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },

        //select chat
        SelectTicket(itemID: number) {
            this.ticketContent = itemID;
        },

    
        deleteTicket(itemID: number) {
            const index = this.ticket.findIndex((p) => p.Id == itemID);
            if (index !== -1) {
                this.ticket = [...this.ticket.slice(0, index), ...this.ticket.slice(index + 1)];
            }
        },
        // Add new ticket
        addTicket(newTicket: TicketType) {
            // You might want to assign an Id based on the current length or other logic
            newTicket.Id = this.ticket.length > 0 ? Math.max(...this.ticket.map(t => t.Id)) + 1 : 1; // Auto-increment Id
            this.ticket.push(newTicket);
        }
    }
});
