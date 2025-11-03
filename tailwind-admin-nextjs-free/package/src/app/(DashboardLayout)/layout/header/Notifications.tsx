'use client'

import { Icon } from '@iconify/react'
import Link from 'next/link'
import * as MessagesData from './Data'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'

const Notifications = () => {
  return (
    <div className='relative group/menu px-15'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className='relative'>
            <span className='relative after:absolute after:w-10 after:h-10 after:rounded-full hover:text-primary after:-top-1/2 hover:after:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer group-hover/menu:after:bg-lightprimary group-hover/menu:text-primary'>
              <Icon icon='tabler:bell-ringing' height={20} />
            </span>
            <span className='rounded-full absolute -end-[6px] -top-[5px] text-[10px] h-2 w-2 bg-primary flex justify-center items-center'></span>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align='end'
          className='w-screen sm:w-[300px] py-4 rounded-sm'>
          {/* Header */}
          <div className='flex items-center px-6 justify-between'>
            <h3 className='mb-0 text-lg font-semibold text-ld'>Notification</h3>
          </div>

          {/* Scrollable content */}
          <SimpleBar className='max-h-80 mt-3'>
            {MessagesData.Notifications.map((item, index) => (
              <DropdownMenuItem key={index} asChild>
                <Link
                  href='#'
                  className='px-6 py-2 flex justify-between items-center group/link w-full hover:bg-lightprimary hover:text-primary'>
                  <div className='flex items-center'>
                    <div className='ps-0'>
                      <h5 className='mb-1 text-sm group-hover/link:text-primary'>
                        {item.title}
                      </h5>
                      <span className='text-xs block truncate text-darklink'>
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                </Link>
              </DropdownMenuItem>
            ))}
          </SimpleBar>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default Notifications
