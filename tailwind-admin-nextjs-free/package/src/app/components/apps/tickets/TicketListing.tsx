"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { format } from "date-fns";
import { Icon } from "@iconify/react/dist/iconify.js";
import { TicketType } from "@/app/(DashboardLayout)/types/ticket";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TicketListing = ({ tickets, deleteTicket, searchTickets, ticketSearch, filter }: any) => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const router = useRouter();

  const getVisibleTickets = (
    tickets: TicketType[],
    filter: string,
    ticketSearch: string
  ) => {
    switch (filter) {
      case "total_tickets":
        return tickets.filter(
          (c) => !c.deleted && c.ticketTitle.toLowerCase().includes(ticketSearch)
        );
      case "Pending":
        return tickets.filter(
          (c) =>
            !c.deleted &&
            c.Status === "Pending" &&
            c.ticketTitle.toLowerCase().includes(ticketSearch)
        );
      case "Closed":
        return tickets.filter(
          (c) =>
            !c.deleted &&
            c.Status === "Closed" &&
            c.ticketTitle.toLowerCase().includes(ticketSearch)
        );
      case "Open":
        return tickets.filter(
          (c) =>
            !c.deleted &&
            c.Status === "Open" &&
            c.ticketTitle.toLowerCase().includes(ticketSearch)
        );
      default:
        return tickets;
    }
  };

  const visibleTickets = getVisibleTickets(
    tickets,
    filter,
    ticketSearch.toLowerCase()
  );

  const ticketBadge = (ticket: TicketType) => {
    return ticket.Status === "Open"
      ? "lightSuccess"
      : ticket.Status === "Closed"
      ? "lightError"
      : ticket.Status === "Pending"
      ? "lightWarning"
      : "default";
  };

  return (
    <div className="my-6">
      <div className="flex justify-between items-center mb-4 gap-4">
        <Button
          onClick={() => router.push("/apps/tickets/create")}
          className="rounded-md whitespace-nowrap"
        >
          Create Ticket
        </Button>

        <div className="relative sm:max-w-60 max-w-full w-full">
          <Icon
            icon="tabler:search"
            height={18}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <Input
            type="text"
            className="pl-8"
            onChange={(e) => searchTickets(e.target.value)}
            placeholder="Search"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Ticket</TableHead>
              <TableHead>Assigned To</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-end">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {visibleTickets.map((ticket) => (
              <TableRow key={ticket.Id}>
                <TableCell>{ticket.Id}</TableCell>

                <TableCell className="max-w-md">
                  <h6 className="text-base truncate">{ticket.ticketTitle}</h6>
                  <p className="text-sm text-muted-foreground truncate">
                    {ticket.ticketDescription}
                  </p>
                </TableCell>

                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={ticket.thumb} alt={ticket.AgentName} />
                      <AvatarFallback>
                        {ticket.AgentName?.charAt(0) || "A"}
                      </AvatarFallback>
                    </Avatar>
                    <h6 className="text-base">{ticket.AgentName}</h6>
                  </div>
                </TableCell>

                <TableCell>
                  <Badge variant={`${ticketBadge(ticket)}`} className={` rounded-md`}>
                    {ticket.Status}
                  </Badge>
                </TableCell>

                <TableCell>
                  <p className="text-sm text-muted-foreground">
                    {format(new Date(ticket.Date), "E, MMM d")}
                  </p>
                </TableCell>

                <TableCell className="text-end">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:text-red-600"
                          onClick={() => deleteTicket(ticket.Id)}
                        >
                          <Icon icon="tabler:trash" height="18" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Delete Ticket</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TicketListing;
