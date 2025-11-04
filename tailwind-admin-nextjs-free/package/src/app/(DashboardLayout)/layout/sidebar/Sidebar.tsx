import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import SidebarContent from './Sidebaritems'
import SimpleBar from 'simplebar-react'
import { Icon } from '@iconify/react'
import FullLogo from '../shared/logo/FullLogo'
import { Button } from '@/components/ui/button'
import {
  AMLogo,
  AMMenu,
  AMMenuItem,
  AMSidebar,
  AMSubmenu,
} from 'tailwind-sidebar'
import 'tailwind-sidebar/styles.css'

const renderSidebarItems = (
  items: any[],
  currentPath: string,
  onClose?: () => void,
  isSubItem: boolean = false
) => {
  return items.map((item, index) => {
    const isSelected = currentPath === item?.url
    const IconComp = item.icon || null

    const iconElement = IconComp ? (
      <Icon icon={IconComp} height={21} width={21} />
    ) : (
      <Icon icon={'ri:checkbox-blank-circle-line'} height={9} width={9} />
    )

    // Heading
    if (item.heading) {
      return (
        <div className='mb-1' key={item.heading}>
          <AMMenu
            subHeading={item.heading}
            ClassName='hide-menu leading-21 text-charcoal font-bold uppercase text-xs dark:text-darkcharcoal'
          />
        </div>
      )
    }

    // Submenu
    if (item.children?.length) {
      return (
        <AMSubmenu
          key={item.id}
          icon={iconElement}
          title={item.name}
          ClassName='mt-0.5 text-link dark:text-darklink'>
          {renderSidebarItems(item.children, currentPath, onClose, true)}
        </AMSubmenu>
      )
    }

    // Regular menu item
    const linkTarget = item.url?.startsWith('https') ? '_blank' : '_self'

    const itemClassNames = isSubItem
      ? `mt-0.5 text-link dark:text-darklink !hover:bg-transparent ${
          isSelected ? '!bg-transparent !text-primary' : ''
        } !px-1.5`
      : `mt-0.5 text-link dark:text-darklink`

    return (
      <div onClick={onClose} key={index}>
        <AMMenuItem
          key={item.id}
          icon={iconElement}
          isSelected={isSelected}
          link={item.url || undefined}
          target={linkTarget}
          badge={!!item.isPro}
          badgeColor='bg-lightsecondary'
          badgeTextColor='text-secondary'
          disabled={item.disabled}
          badgeContent={item.isPro ? 'Pro' : undefined}
          component={Link}
          className={`${itemClassNames}`}>
          <span className='truncate flex-1'>{item.title || item.name}</span>
        </AMMenuItem>
      </div>
    )
  })
}

const SidebarLayout = ({ onClose }: { onClose?: () => void }) => {
  const pathname = usePathname()
  const { theme } = useTheme()

  // Only allow "light" or "dark" for AMSidebar
  const sidebarMode = theme === 'light' || theme === 'dark' ? theme : undefined

  return (
    <AMSidebar
      collapsible='none'
      animation={true}
      showProfile={false}
      width={'270px'}
      showTrigger={false}
      mode={sidebarMode}
      className='fixed left-0 top-0 border border-border dark:border-darkborder bg-white dark:bg-dark z-10 h-screen'>
      {/* Logo */}
      <div className='px-6 flex items-center brand-logo overflow-hidden'>
        <AMLogo component={Link} href='/' img=''>
          <FullLogo />
        </AMLogo>
      </div>

      {/* Sidebar items */}

      <SimpleBar className='h-[calc(100vh-100px)]'>
        <div className='px-6'>
          {SidebarContent.map((section, index) => (
            <div key={index}>
              {renderSidebarItems(
                [
                  ...(section.heading ? [{ heading: section.heading }] : []),
                  ...(section.children || []),
                ],
                pathname,
                onClose
              )}
            </div>
          ))}

          {/* Promo Section */}
          <div className='mt-9  overflow-hidden'>
            <div className='flex w-full bg-lightprimary rounded-lg p-6'>
              <div className='lg:w-1/2 w-full'>
                <h5 className='text-base text-charcoal'>Haven't Account?</h5>
                <Button className='whitespace-nowrap mt-2 text-[13px]'>
                  Get Pro
                </Button>
              </div>
              <div className='lg:w-1/2 w-full -mt-4 ml-[26px] scale-[1.2] shrink-0'>
                <Image
                  src={'/images/backgrounds/rocket.png'}
                  alt='rocket'
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </SimpleBar>
    </AMSidebar>
  )
}

export default SidebarLayout
