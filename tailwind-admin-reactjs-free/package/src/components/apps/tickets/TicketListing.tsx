"use client"

import { useContext } from "react"
import { format } from "date-fns"
import { Icon } from "@iconify/react"
import { useNavigate } from "react-router"
import { TicketContext } from "src/context/TicketContext"
import { TicketType } from "src/types/ticket"
import { Button } from "src/components/ui/button"
import { Input } from "src/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "src/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar"
import { Badge } from "src/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "src/components/ui/tooltip"

const TicketListing = () => {
  const { tickets, deleteTicket, searchTickets, ticketSearch, filter }: any =
    useContext(TicketContext)

  const navigate = useNavigate()

  const getVisibleTickets = (
    tickets: TicketType[],
    filter: string,
    ticketSearch: string
  ) => {
    switch (filter) {
      case "total_tickets":
        return tickets.filter(
          (c) =>
            !c.deleted &&
            c.ticketTitle.toLocaleLowerCase().includes(ticketSearch)
        )
      case "Pending":
        return tickets.filter(
          (c) =>
            !c.deleted &&
            c.Status === "Pending" &&
            c.ticketTitle.toLocaleLowerCase().includes(ticketSearch)
        )
      case "Closed":
        return tickets.filter(
          (c) =>
            !c.deleted &&
            c.Status === "Closed" &&
            c.ticketTitle.toLocaleLowerCase().includes(ticketSearch)
        )
      case "Open":
        return tickets.filter(
          (c) =>
            !c.deleted &&
            c.Status === "Open" &&
            c.ticketTitle.toLocaleLowerCase().includes(ticketSearch)
        )
      default:
        throw new Error(`Unknown filter: ${filter}`)
    }
  }

  const visibleTickets = getVisibleTickets(
    tickets,
    filter,
    ticketSearch.toLowerCase()
  )

  const ticketBadge = (ticket: TicketType) => {
    return ticket.Status === "Open"
      ? "bg-lightsuccess text-success dark:bg-lightsuccess dark:text-success"
      : ticket.Status === "Closed"
      ? "bg-lighterror text-error dark:bg-lighterror dark:text-error"
      : ticket.Status === "Pending"
      ? "bg-lightwarning text-warning dark:bg-lightwarning dark:text-warning"
      : ticket.Status === "Moderate"
      ? "bg-lightprimary text-primary dark:bg-lightprimary dark:text-primary"
      : "bg-lightprimary text-primary dark:bg-lightprimary dark:text-primary"
  }

  return (
    <div className="my-6">
      {/* Top bar */}
      <div className="flex justify-between items-center mb-4 gap-4">
        <Button
          onClick={() => navigate("/apps/tickets/create")}
          className="rounded-md whitespace-nowrap"
        >
          Create Ticket
        </Button>

        <div className="relative sm:max-w-60 w-full">
          <Icon
            icon="tabler:search"
            height={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            type="text"
            className="pl-10"
            onChange={(e) => searchTickets(e.target.value)}
            placeholder="Search"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-base font-semibold py-3 whitespace-nowrap">
                Id
              </TableHead>
              <TableHead className="text-base font-semibold py-3 whitespace-nowrap">
                Ticket
              </TableHead>
              <TableHead className="text-base font-semibold py-3 whitespace-nowrap">
                Assigned To
              </TableHead>
              <TableHead className="text-base font-semibold py-3 whitespace-nowrap">
                Status
              </TableHead>
              <TableHead className="text-base font-semibold py-3 whitespace-nowrap">
                Date
              </TableHead>
              <TableHead className="text-base font-semibold py-3 text-end">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {visibleTickets.map((ticket) => (
              <TableRow key={ticket.Id}>
                <TableCell className="whitespace-nowrap">
                  {ticket.Id}
                </TableCell>
                <TableCell className="max-w-md">
                  <h6 className="text-base truncate line-clamp-1">
                    {ticket.ticketTitle}
                  </h6>
                  <p className="text-sm text-muted-foreground truncate line-clamp-1 text-wrap sm:max-w-56">
                    {ticket.ticketDescription}
                  </p>
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src={ticket.thumb}
                        alt={ticket.AgentName}
                      />
                      <AvatarFallback>
                        {ticket.AgentName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <h6 className="text-base">{ticket.AgentName}</h6>
                  </div>
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  <Badge className={`${ticketBadge(ticket)} rounded-md`}>
                    {ticket.Status}
                  </Badge>
                </TableCell>
                <TableCell className="whitespace-nowrap">
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
                          className="btn-circle ms-auto"
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
  )
}

export default TicketListing
