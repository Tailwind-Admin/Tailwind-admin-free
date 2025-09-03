"use client"

import { useState, useContext, useEffect } from "react"
import { TicketContext } from "src/context/TicketContext/index"

import { isValid, format } from "date-fns"
import CardBox from "../../shared/CardBox"
import { useNavigate } from "react-router"

import user1 from "src/assets/images/profile/user-1.jpg"
import user2 from "src/assets/images/profile/user-2.jpg"
import user3 from "src/assets/images/profile/user-3.jpg"
import user8 from "src/assets/images/profile/user-8.jpg"

import { TicketType } from "src/types/ticket"
import { Label } from "src/components/ui/label"
import { Input } from "src/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "src/components/ui/dropdown-menu"
import { Button } from "src/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar"
import { ChevronDown } from "lucide-react"

const agents = [
  { id: 1, name: "Liam", photo: user1 },
  { id: 2, name: "Steve", photo: user2 },
  { id: 3, name: "Jack", photo: user3 },
  { id: 4, name: "John", photo: user8 },
]

const CreateTicketForm = () => {
  const { tickets, addTicket } = useContext(TicketContext)
  const [ticketId, setTicketId] = useState<number | undefined>(undefined)
  const [ticketDate, setTicketDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  )
  const [ticketTitle, setTicketTitle] = useState("")
  const [ticketDescription, setTicketDescription] = useState("")
  const [selectedAgent, setSelectedAgent] = useState(agents[0])
  const [agentPhoto, setAgentPhoto] = useState(agents[0].photo)

  const navigate = useNavigate()

  useEffect(() => {
    const maxId = tickets.reduce(
      (max, ticket) => (ticket.Id > max ? ticket.Id : max),
      0
    )
    setTicketId(maxId + 1)
  }, [tickets])

  const handleSubmit = () => {
    if (!ticketTitle || !ticketDescription) {
      alert("Please fill out all fields.")
      return
    }

    const newTicket: TicketType = {
      Id: ticketId!,
      ticketTitle,
      ticketDescription,
      Status: "Open",
      Label: "primary",
      thumb: agentPhoto,
      AgentName: selectedAgent.name,
      Date: new Date(ticketDate),
      deleted: false,
    }

    addTicket(newTicket)
    resetForm()
    navigate("/apps/tickets")
  }

  const resetForm = () => {
    setTicketId(undefined)
    setTicketDate(new Date().toISOString().split("T")[0])
    setTicketTitle("")
    setTicketDescription("")
    setSelectedAgent(agents[0])
    setAgentPhoto(agents[0].photo)
  }

  const parsedDate = isValid(new Date(ticketDate))
    ? new Date(ticketDate)
    : new Date()
  const formattedOrderDate = format(parsedDate, "EEEE, MMMM dd, yyyy")

  return (
    <CardBox>
      <h2 className="text-lg font-semibold mb-4">Create New Ticket</h2>
      <p>ID : {ticketId !== undefined ? ticketId : ""}</p>
      <p>Date : {formattedOrderDate}</p>

      <div className="bg-lightgray dark:bg-gray-800/70 p-6 my-6 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="ticketTitle">Ticket Title</Label>
            </div>
            <Input
              id="ticketTitle"
              value={ticketTitle}
              onChange={(e) => setTicketTitle(e.target.value)}
              placeholder="Ticket Title"
              className="w-full form-control"
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="ticketDescription">Ticket Description</Label>
            </div>
            <Input
              id="ticketDescription"
              value={ticketDescription}
              onChange={(e) => setTicketDescription(e.target.value)}
              placeholder="Ticket Description"
              className="w-full form-control"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between mt-6 gap-3">
          {/* Agent Dropdown */}
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="default" className="rounded-md">
                  {selectedAgent.name}
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="rounded-md">
                <DropdownMenuLabel>Select Agent</DropdownMenuLabel>
                {agents.map((agent) => (
                  <DropdownMenuItem
                    key={agent.id}
                    onClick={() => {
                      setSelectedAgent(agent)
                      setAgentPhoto(agent.photo)
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={agent.photo} />
                        <AvatarFallback>
                          {agent.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <span>{agent.name}</span>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <Button
              className="rounded-md bg-primary text-white hover:bg-primary/90"
              onClick={handleSubmit}
            >
              Save
            </Button>
            <Button
              className="rounded-md bg-red-500 text-white hover:bg-red-600"
              onClick={() => navigate("/apps/tickets")}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </CardBox>
  )
}

export default CreateTicketForm
