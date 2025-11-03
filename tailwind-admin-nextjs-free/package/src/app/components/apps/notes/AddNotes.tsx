'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { TbCheck } from 'react-icons/tb'

interface Props {
  colors: any[]
  addNote: (note: { title: string; color: string }) => void
}

const AddNotes = ({ colors, addNote }: Props) => {
  const [openNoteModal, setOpenNoteModal] = useState(false)
  const [scolor, setScolor] = useState<string>('primary')
  const [title, setTitle] = useState('')

  const setColor = (e: string) => setScolor(e)

  const handleSave = () => {
    addNote({ title, color: scolor })
    setOpenNoteModal(false)
    setTitle('')
  }

  return (
    <>
      <Dialog open={openNoteModal} onOpenChange={setOpenNoteModal}>
        <DialogTrigger asChild>
          <Button className='rounded-md'>Add Note</Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-lg'>
          <DialogHeader>
            <DialogTitle>Add New Note</DialogTitle>
          </DialogHeader>

          <div className='space-y-2'>
            <Textarea
              rows={5}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='w-full'
              placeholder='Write your note here...'
            />
            <h6 className='text-base pt-4'>Change Note Color</h6>
            <div className='flex gap-2 items-center'>
              {colors?.map((color) => (
                <div
                  key={color.disp}
                  onClick={() => setColor(color.disp)}
                  className={`h-7 w-7 flex justify-center items-center rounded-full cursor-pointer bg-${color.disp}`}>
                  {scolor === color.disp && (
                    <TbCheck size={18} className='text-white' />
                  )}
                </div>
              ))}
            </div>
          </div>

          <DialogFooter className='pt-4'>
            <Button
              disabled={!title}
              onClick={handleSave}
              className='rounded-md'>
              Save
            </Button>
            <Button
              variant='outline'
              className='rounded-md'
              onClick={() => setOpenNoteModal(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default AddNotes
