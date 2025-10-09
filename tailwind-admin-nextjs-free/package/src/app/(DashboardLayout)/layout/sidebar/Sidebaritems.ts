import { uniqueId } from 'lodash'

export interface ChildItem {
  id?: number | string
  name?: string
  icon?: any
  children?: ChildItem[]
  item?: any
  url?: any
  color?: string
  disabled?: boolean
  subtitle?: string
  badge?: boolean
  badgeType?: string
  isPro?: boolean
  target?: string
}

export interface MenuItem {
  heading?: string
  name?: string
  icon?: any
  id?: number
  to?: string
  items?: MenuItem[]
  children?: ChildItem[]
  url?: any
  disabled?: boolean
  subtitle?: string
  badgeType?: string
  badge?: boolean
  isPro?: boolean
}

const SidebarContent: MenuItem[] = [
  {
    heading: 'Home',
    children: [
      {
        name: 'Modern',
        icon: 'solar:widget-2-linear',
        id: uniqueId(),
        url: '/',
        isPro: false,
      },
      {
        name: 'Ecommerce',
        icon: 'solar:bag-5-linear',
        id: uniqueId(),
        url: 'https://tailwindadmin-nextjs-main.vercel.app/dashboards/eCommerce',
        isPro: true,
      },
      {
        name: 'Music',
        icon: 'solar:music-note-linear',
        id: uniqueId(),
        url: 'https://tailwindadmin-nextjs-main.vercel.app/dashboards/music',
        isPro: true,
      },
      {
        name: 'General',
        icon: 'solar:chart-linear',
        id: uniqueId(),
        url: 'https://tailwindadmin-nextjs-main.vercel.app/dashboards/general',
        isPro: true,
      },
      {
        name: 'Front Pages',
        id: uniqueId(),
        icon: 'solar:document-linear',
        url: '#',
        children: [
          {
            name: 'Homepage',
            id: uniqueId(),
            url: 'https://tailwindadmin-nextjs-main.vercel.app/frontend-pages/homepage',
            isPro: true,
          },
          {
            name: 'About Us',
            id: uniqueId(),
            url: 'https://tailwindadmin-nextjs-main.vercel.app/frontend-pages/about',
            isPro: true,
          },
          {
            name: 'Blog',
            id: uniqueId(),
            url: 'https://tailwindadmin-nextjs-main.vercel.app/frontend-pages/blog/post',
            isPro: true,
          },
          {
            name: 'Blog Details',
            id: uniqueId(),
            url: 'https://tailwindadmin-nextjs-main.vercel.app/frontend-pages/blog/detail/as-yen-tumbles-gadget-loving-japan-goes-for-secondhand-iphones-',
            isPro: true,
          },
          {
            name: 'Contact Us',
            id: uniqueId(),
            url: 'https://tailwindadmin-nextjs-main.vercel.app/frontend-pages/contact',
            isPro: true,
          },
          {
            name: 'Portfolio',
            id: uniqueId(),
            url: 'https://tailwindadmin-nextjs-main.vercel.app/frontend-pages/portfolio',
            isPro: true,
          },
          {
            name: 'Pricing',
            id: uniqueId(),
            url: 'https://tailwindadmin-nextjs-main.vercel.app/frontend-pages/pricing',
            isPro: true,
          },
        ],
      },
    ],
  },
  {
    heading: 'AI',
    children: [
      {
        name: 'Ai Table Builder',
        icon: 'solar:server-linear',
        id: uniqueId(),
        url: 'https://tailwindbuilder.ai/table-builder',
        isPro: false,
        target: '_blank',
      },
      {
        name: 'Ai Form Builder',
        icon: 'solar:document-add-linear',
        id: uniqueId(),
        url: 'https://tailwindbuilder.ai/form-builder',
        isPro: false,
        target: '_blank',
      },
      {
        id: uniqueId(),
        name: 'Ai Chart Builder',
        icon: 'solar:pie-chart-2-linear',
        url: 'https://tailwindbuilder.ai/chart-builder',
        isPro: false,
        target: '_blank',
      },
    ],
  },
  {
    heading: 'pages',
    children: [
      {
        name: 'Table',
        icon: 'solar:server-linear',
        id: uniqueId(),
        url: '/utilities/table',
      },
      {
        name: 'Form',
        icon: 'solar:document-add-linear',
        id: uniqueId(),
        url: '/utilities/form',
      },

      {
        id: uniqueId(),
        name: 'User Profile',
        icon: 'solar:user-circle-linear',
        url: '/user-profile',
        isPro: false,
      },
    ],
  },
  {
    heading: 'Apps',
    children: [
      {
        id: uniqueId(),
        name: 'Notes',
        icon: 'solar:notes-linear',
        url: '/apps/notes',
        isPro: false,
      },
      {
        id: uniqueId(),
        name: 'Tickets',
        icon: 'solar:ticker-star-linear',
        url: '/apps/tickets',
        isPro: false,
      },
      {
        name: 'Blogs',
        id: uniqueId(),
        url: '#',
        icon: 'solar:sort-by-alphabet-linear',
        children: [
          {
            id: uniqueId(),
            name: 'Blog Post',
            url: '/apps/blog/post',
            isPro: false,
          },
          {
            id: uniqueId(),
            name: 'Blog Detail',
            url: '/apps/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow',
            isPro: false,
          },
        ],
      },
      {
        id: uniqueId(),
        name: 'Contacts',
        icon: 'solar:users-group-rounded-linear',
        url: 'https://tailwindadmin-nextjs-main.vercel.app/apps/contacts',
        isPro: true,
      },
      {
        name: 'Ecommerce',
        id: uniqueId(),
        url: '#',
        icon: 'solar:cart-large-2-linear',
        children: [
          {
            id: uniqueId(),
            name: 'Shop',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/apps/ecommerce/shop',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Details',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/apps/ecommerce/detail/1',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'List',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/apps/ecommerce/list',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Checkout',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/apps/ecommerce/checkout',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Add Product',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/apps/ecommerce/addproduct',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Edit Product',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/apps/ecommerce/editproduct',
            isPro: true,
          },
        ],
      },
      {
        name: 'User Profile',
        id: uniqueId(),
        url: '#',
        icon: 'solar:user-circle-linear',
        children: [
          {
            id: uniqueId(),
            name: 'Profile',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/apps/user-profile/profile',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Followers',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/apps/user-profile/followers',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Friends',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/apps/user-profile/friends',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Gallery',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/apps/user-profile/gallery',
            isPro: true,
          },
        ],
      },
      {
        name: 'Invoice',
        id: uniqueId(),
        icon: 'solar:bill-list-linear',
        url: '#',
        children: [
          {
            id: uniqueId(),
            name: 'List',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/apps/invoice/list',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Details',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/apps/invoice/detail/PineappleInc',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Create',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/apps/invoice/create',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Edit',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/apps/invoice/edit/PineappleInc',
            isPro: true,
          },
        ],
      },
      {
        id: uniqueId(),
        name: 'Chats',
        icon: 'solar:dialog-linear',
        url: 'https://tailwindadmin-nextjs-main.vercel.app/apps/chats',
        isPro: true,
      },
      {
        id: uniqueId(),
        name: 'Calendar',
        icon: 'solar:calendar-linear',
        url: 'https://tailwindadmin-nextjs-main.vercel.app/apps/calendar',
        isPro: true,
      },
      {
        id: uniqueId(),
        name: 'Email',
        icon: 'solar:letter-linear',
        url: 'https://tailwindadmin-nextjs-main.vercel.app/apps/email',
        isPro: true,
      },
      {
        id: uniqueId(),
        name: 'Kanban',
        icon: 'solar:server-minimalistic-linear',
        url: 'https://tailwindadmin-nextjs-main.vercel.app/apps/kanban',
        isPro: true,
      },
    ],
  },
  {
    heading: 'UI ELEMENTS',
    children: [
      {
        name: 'ShadCn',
        id: uniqueId(),
        icon: 'solar:slash-square-linear',
        children: [
          {
            id: uniqueId(),
            name: 'Avatar',
            url: 'https://tailwind-admin.com/components/shadcn/avatar',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Badge',
            url: 'https://tailwind-admin.com/components/shadcn/badge',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Tooltip',
            url: 'https://tailwind-admin.com/components/shadcn/tooltip',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Skeleton',
            url: 'https://tailwind-admin.com/components/shadcn/skeleton',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Alert',
            url: 'https://tailwind-admin.com/components/shadcn/alert',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Progressbar',
            url: 'https://tailwind-admin.com/components/shadcn/progressbar',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Breadcrumb',
            url: 'https://tailwind-admin.com/components/shadcn/breadcrumb',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Tab',
            url: 'https://tailwind-admin.com/components/shadcn/tab',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Dropdown',
            url: 'https://tailwind-admin.com/components/shadcn/dropdown',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Accordion',
            url: 'https://tailwind-admin.com/components/shadcn/accordion',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Card',
            url: 'https://tailwind-admin.com/components/shadcn/card',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Carousel',
            url: 'https://tailwind-admin.com/components/shadcn/carousel',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Collapsible',
            url: 'https://tailwind-admin.com/components/shadcn/collapsible',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Dialogs',
            url: 'https://tailwind-admin.com/components/shadcn/dialogs',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Drawer',
            url: 'https://tailwind-admin.com/components/shadcn/drawer',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Datepicker',
            url: 'https://tailwind-admin.com/components/shadcn/datepicker',
            target: '_blank',
          },
        ],
      },
      {
        name: 'Flowbite',
        id: uniqueId(),
        icon: 'solar:snowflake-linear',
        children: [
          {
            id: uniqueId(),
            name: 'Badge',
            url: 'https://tailwind-admin.com/components/flowbite/badge',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Avatar',
            url: 'https://tailwind-admin.com/components/flowbite/avatar',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'List Group',
            url: 'https://tailwind-admin.com/components/flowbite/listgroup',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Popover',
            url: 'https://tailwind-admin.com/components/flowbite/popover',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Toast',
            url: 'https://tailwind-admin.com/components/flowbite/toast',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Tooltip',
            url: 'https://tailwind-admin.com/components/flowbite/tooltip',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Alert',
            url: 'https://tailwind-admin.com/components/flowbite/alert',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Modals',
            url: 'https://tailwind-admin.com/components/flowbite/modals',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Progressbar',
            url: 'https://tailwind-admin.com/components/flowbite/progressbar',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Spinner',
            url: 'https://tailwind-admin.com/components/flowbite/spinner',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Breadcrumb',
            url: 'https://tailwind-admin.com/components/flowbite/breadcrumb',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Pagination',
            url: 'https://tailwind-admin.com/components/flowbite/pagination',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Tab',
            url: 'https://tailwind-admin.com/components/flowbite/tab',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Dropdown',
            url: 'https://tailwind-admin.com/components/flowbite/dropdown',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Sidebar',
            url: 'https://tailwind-admin.com/components/flowbite/sidebar',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Tab',
            url: 'https://tailwind-admin.com/components/flowbite/tab',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Dropdown',
            url: 'https://tailwind-admin.com/components/flowbite/dropdown',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Sidebar',
            url: 'https://tailwind-admin.com/components/flowbite/sidebar',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Navbar',
            url: 'https://tailwind-admin.com/components/flowbite/navbar',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Megamenu',
            url: 'https://tailwind-admin.com/components/flowbite/megamenu',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Footer',
            url: 'https://tailwind-admin.com/components/flowbite/footer',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Accordian',
            url: 'https://tailwind-admin.com/components/flowbite/accordian',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Tables',
            url: 'https://tailwind-admin.com/components/flowbite/tables',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Card',
            url: 'https://tailwind-admin.com/components/flowbite/card',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Banner',
            url: 'https://tailwind-admin.com/components/flowbite/banner',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Drawer',
            url: 'https://tailwind-admin.com/components/flowbite/drawer',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Carousel',
            url: 'https://tailwind-admin.com/components/flowbite/carousel',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Datepicker',
            url: 'https://tailwind-admin.com/components/flowbite/datepicker',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Timeline',
            url: 'https://tailwind-admin.com/components/flowbite/timeline',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'KBD',
            url: 'https://tailwind-admin.com/components/flowbite/kbd',
            target: '_blank',
          },
        ],
      },
      {
        name: 'Headless',
        id: uniqueId(),
        icon: 'solar:pip-2-linear',
        children: [
          {
            id: uniqueId(),
            name: 'Popover',
            url: 'https://tailwind-admin.com/components/headlessui/popover',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Disclosure',
            url: 'https://tailwind-admin.com/components/headlessui/disclosure',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Transition',
            url: 'https://tailwind-admin.com/components/headlessui/transition',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Dialog',
            url: 'https://tailwind-admin.com/components/headlessui/dialog',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Dropdown',
            url: 'https://tailwind-admin.com/components/headlessui/dropdown',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Tabs',
            url: 'https://tailwind-admin.com/components/headlessui/tabs',
            target: '_blank',
          },
        ],
      },
      {
        name: 'Animated Comp',
        id: uniqueId(),
        icon: 'solar:reel-linear',
        children: [
          {
            id: uniqueId(),
            name: 'Button',
            url: 'https://tailwind-admin.com/animated-components/buttons',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Card',
            url: 'https://tailwind-admin.com/animated-components/cards',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Text',
            url: 'https://tailwind-admin.com/animated-components/text',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Tables',
            url: 'https://tailwind-admin.com/animated-components/tables',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Tooltip',
            url: 'https://tailwind-admin.com/animated-components/tooltip',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Lists',
            url: 'https://tailwind-admin.com/animated-components/lists',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Links',
            url: 'https://tailwind-admin.com/animated-components/links',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Slider',
            url: 'https://tailwind-admin.com/animated-components/slider',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Forms',
            url: 'https://tailwind-admin.com/animated-components/forms',
            isPro: true,
          },
        ],
      },
    ],
  },
  {
    heading: 'FORM ELEMENTS',
    children: [
      {
        name: 'Shadcn Forms',
        id: uniqueId(),
        icon: 'solar:banknote-2-linear',
        children: [
          {
            id: uniqueId(),
            name: 'Button',
            url: 'https://tailwind-admin.com/components/shadcn/buttons',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Input',
            url: 'https://tailwind-admin.com/components/shadcn/input',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Select',
            url: 'https://tailwind-admin.com/components/shadcn/select',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Checkbox',
            url: 'https://tailwind-admin.com/components/shadcn/checkbox',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Radio',
            url: 'https://tailwind-admin.com/components/shadcn/radio',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Combobox',
            url: 'https://tailwind-admin.com/components/shadcn/combobox',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Command',
            url: 'https://tailwind-admin.com/components/shadcn/command',
            target: '_blank',
          },
        ],
      },
      {
        name: 'Flowbite Forms',
        id: uniqueId(),
        icon: 'solar:notification-unread-lines-linear',
        children: [
          {
            id: uniqueId(),
            name: 'Button',
            url: 'https://tailwind-admin.com/components/flowbite/buttons',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Button Group',
            url: 'https://tailwind-admin.com/components/flowbite/button-group',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Checkbox',
            url: 'https://tailwind-admin.com/components/flowbite/checkbox',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Radio',
            url: 'https://tailwind-admin.com/components/flowbite/radio',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Rating',
            url: 'https://tailwind-admin.com/components/flowbite/rating',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Toggle Switch',
            url: 'https://tailwind-admin.com/components/flowbite/toggle-switch',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Input',
            url: 'https://tailwind-admin.com/components/flowbite/input',
            target: '_blank',
          },
        ],
      },
      {
        name: 'Headless Forms',
        id: uniqueId(),
        icon: 'solar:code-file-linear',
        children: [
          {
            id: uniqueId(),
            name: 'Button',
            url: 'https://tailwind-admin.com/components/headlessui/buttons',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Input',
            url: 'https://tailwind-admin.com/components/headlessui/input',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Textarea',
            url: 'https://tailwind-admin.com/components/headlessui/textarea',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Checkbox',
            url: 'https://tailwind-admin.com/components/headlessui/checkbox',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Radio Group',
            url: 'https://tailwind-admin.com/components/headlessui/radiogroup',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'switch',
            url: 'https://tailwind-admin.com/components/headlessui/switch',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Fieldset',
            url: 'https://tailwind-admin.com/components/headlessui/fieldset',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Combobox',
            url: 'https://tailwind-admin.com/components/headlessui/combobox',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Select',
            url: 'https://tailwind-admin.com/components/headlessui/select',
            target: '_blank',
          },
        ],
      },
      {
        name: 'Form layouts',
        id: uniqueId(),
        icon: 'solar:documents-linear',
        children: [
          {
            id: uniqueId(),
            name: 'Forms Layouts',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/forms/form-layouts',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Forms Horizontal',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/forms/form-horizontal',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Forms Vertical',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/forms/form-vertical',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Form Validation',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/forms/form-validation',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Form Examples',
            url: 'https://tailwind-admin.com/components/shadcn/generated-forms/form-examples',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Repeater Forms',
            url: 'https://tailwind-admin.com/components/shadcn/generated-forms/repeater-forms',
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: 'Form Wizard',
            url: 'https://tailwind-admin.com/components/shadcn/generated-forms/form-wizard',
            target: '_blank',
          },
        ],
      },
      {
        name: 'Form Addons',
        id: uniqueId(),
        icon: 'solar:file-favourite-linear',
        children: [
          {
            id: uniqueId(),
            name: 'Select2',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/forms/form-select2',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Autocomplete',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/forms/form-autocomplete',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Dropzone',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/forms/form-dropzone',
            isPro: true,
          },
        ],
      },
    ],
  },
  {
    heading: 'Widgets',
    children: [
      {
        name: "Cards",
        id: uniqueId(),
        icon: "solar:card-linear",
        children: [
          {
            id: uniqueId(),
            name: "Top Cards",
            url: "https://tailwind-admin.com/ui-blocks/card#topCards",            
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Best Selling Product Card",
            url: "https://tailwind-admin.com/ui-blocks/card#bestsellingproduct",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Payment Gatways Cards",
            url: "https://tailwind-admin.com/ui-blocks/card#paymentgateway",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Blog Cards",
            url: "https://tailwind-admin.com/ui-blocks/card#blogcards",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Products Cards",
            url: "https://tailwind-admin.com/ui-blocks/card#productscards",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Music Cards",
            url: "https://tailwind-admin.com/ui-blocks/card#musiccards",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Profile Cards",
            url: "https://tailwind-admin.com/ui-blocks/card#profilecards",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "User Cards",
            url: "https://tailwind-admin.com/ui-blocks/card#usercards",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Social Cards",
            url: "https://tailwind-admin.com/ui-blocks/card#socialcards",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Settings Cards",
            url: "https://tailwind-admin.com/ui-blocks/card#settingscard",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Gift Cards",
            url: "https://tailwind-admin.com/ui-blocks/card#giftcards",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Upcomming Activity Cards",
            url: "https://tailwind-admin.com/ui-blocks/card#upcommingactcard",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Recent Transaction Card",
            url: "https://tailwind-admin.com/ui-blocks/card#recenttransactioncard",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Recent Comment Card",
            url: "https://tailwind-admin.com/ui-blocks/card#recentcommentcard",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Task List",
            url: "https://tailwind-admin.com/ui-blocks/card#tasklist",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Recent Messages",
            url: "https://tailwind-admin.com/ui-blocks/card#recentmessages",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "User info Card",
            url: "https://tailwind-admin.com/ui-blocks/card#userinfocard",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Social Card",
            url: "https://tailwind-admin.com/ui-blocks/card#socialcard",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Feed Card",
            url: "https://tailwind-admin.com/ui-blocks/card#feedcard",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Poll of Week Card",
            url: "https://tailwind-admin.com/ui-blocks/card#pollofweekcard",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Result of Poll",
            url: "https://tailwind-admin.com/ui-blocks/card#resultofpoll",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Social Post Card",
            url: "https://tailwind-admin.com/ui-blocks/card#socialpostcard",
            target: '_blank',
          },
        ],
      },
      {
        name: "Banners",
        id: uniqueId(),
        icon: "solar:object-scan-linear",
        children: [
          {
            id: uniqueId(),
            name: "Greeting Banner",
            url: "https://tailwind-admin.com/ui-blocks/banner#greetingbanner",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Download Banner",
            url: "https://tailwind-admin.com/ui-blocks/banner#downloadbanner",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Empty Cart Banner",
            url: "https://tailwind-admin.com/ui-blocks/banner#emptybanner",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Error Banner",
            url: "https://tailwind-admin.com/ui-blocks/banner#errorbanner",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Notifications Banner",
            url: "https://tailwind-admin.com/ui-blocks/banner#notificationsbanner",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Greeting Banner 2",
            url: "https://tailwind-admin.com/ui-blocks/banner#greetingbanner2",
            target: '_blank',
          },
        ],
      },
      {
        name: "Charts",
        id: uniqueId(),
        icon: "solar:pie-chart-2-linear",
        children: [
          {
            id: uniqueId(),
            name: "Revenue Updates Chart",
            url: "https://tailwind-admin.com/ui-blocks/chart#revenueupdateschart",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Yarly Breakup Chart",
            url: "https://tailwind-admin.com/ui-blocks/chart#yarlybreakupchart",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Monthly Earning Chart",
            url: "https://tailwind-admin.com/ui-blocks/chart#monthlyearning",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Yearly Sales Chart",
            url: "https://tailwind-admin.com/ui-blocks/chart#yearlysaleschart",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Current Year Chart",
            url: "https://tailwind-admin.com/ui-blocks/chart#currentyear",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Weekly Stats Chart",
            url: "https://tailwind-admin.com/ui-blocks/chart#weeklystatschart",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Expance Chart",
            url: "https://tailwind-admin.com/ui-blocks/chart#expancechart",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Customers Chart",
            url: "https://tailwind-admin.com/ui-blocks/chart#customerschart",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Earned Chart",
            url: "https://tailwind-admin.com/ui-blocks/chart#revenuechart",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Follower Chart",
            url: "https://tailwind-admin.com/ui-blocks/chart#followerchart",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Visit Chart",
            url: "https://tailwind-admin.com/ui-blocks/chart#visitchart",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Income Chart",
            url: "https://tailwind-admin.com/ui-blocks/chart#incomechart",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Impressions Chart",
            url: "https://tailwind-admin.com/ui-blocks/chart#impressionschart",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Sales Overviewchart",
            url: "https://tailwind-admin.com/ui-blocks/chart#salesoverviewchart",
            target: '_blank',
          },
          {
            id: uniqueId(),
            name: "Total Earnings Chart",
            url: "https://tailwind-admin.com/ui-blocks/chart#totalearningschart",
            target: '_blank',
          },
        ],
      },
    ],
  },
  {
    heading: 'Tables',
    children: [
      {
        name: 'Flowbite Tables',
        id: uniqueId(),
        icon: 'solar:widget-add-linear',
        url: '#',
        children: [
          {
            name: 'Basic Tables',
            id: uniqueId(),
            url: 'https://tailwindadmin-nextjs-main.vercel.app/tables/basic',
            isPro: true,
          },
          {
            name: 'Striped Rows Table',
            id: uniqueId(),
            url: 'https://tailwindadmin-nextjs-main.vercel.app/tables/striped-row',
            isPro: true,
          },
          {
            name: 'Hover Table',
            id: uniqueId(),
            url: 'https://tailwindadmin-nextjs-main.vercel.app/tables/hover-table',
            isPro: true,
          },
          {
            name: 'Checkbox Table',
            id: uniqueId(),
            url: 'https://tailwindadmin-nextjs-main.vercel.app/tables/checkbox-table',
            isPro: true,
          },
        ],
      },
      {
        name: 'ShadCN Tables',
        id: uniqueId(),
        icon: 'solar:tablet-linear',
        url: '#',
        children: [
          {
            name: 'Basic Tables',
            id: uniqueId(),
            url: 'https://tailwindadmin-nextjs-main.vercel.app/shadcn-tables/basic',
            isPro: true,
          },
        ],
      },
      {
        name: 'React Tables',
        id: uniqueId(),
        icon: 'solar:chart-square-linear',
        url: '#',
        children: [
          {
            name: 'Basic',
            id: uniqueId(),
            url: 'https://tailwindadmin-nextjs-main.vercel.app/react-tables/basic',
            isPro: true,
          },
          {
            name: 'Dense',
            id: uniqueId(),
            url: 'https://tailwindadmin-nextjs-main.vercel.app/react-tables/dense',
            isPro: true,
          },
          {
            name: 'Sorting',
            id: uniqueId(),
            url: 'https://tailwindadmin-nextjs-main.vercel.app/react-tables/sorting',
            isPro: true,
          },
          {
            name: 'Filtering',
            id: uniqueId(),
            url: 'https://tailwindadmin-nextjs-main.vercel.app/react-tables/filtering',
            isPro: true,
          },
          {
            name: 'Pagination',
            id: uniqueId(),
            url: 'https://tailwindadmin-nextjs-main.vercel.app/react-tables/pagination',
            isPro: true,
          },
          {
            name: 'Row Selection',
            id: uniqueId(),
            url: 'https://tailwindadmin-nextjs-main.vercel.app/react-tables/row-selection',
            isPro: true,
          },
          {
            name: 'Column Visibility',
            id: uniqueId(),
            url: 'https://tailwindadmin-nextjs-main.vercel.app/react-tables/columnvisibility',
            isPro: true,
          },
          {
            name: 'Editable',
            id: uniqueId(),
            url: 'https://tailwindadmin-nextjs-main.vercel.app/react-tables/editable',
            isPro: true,
          },
          {
            name: 'Sticky',
            id: uniqueId(),
            url: 'https://tailwindadmin-nextjs-main.vercel.app/react-tables/sticky',
            isPro: true,
          },
          {
            name: 'Drag & Drop',
            id: uniqueId(),
            url: 'https://tailwindadmin-nextjs-main.vercel.app/react-tables/drag-drop',
            isPro: true,
          },
          {
            name: 'Empty',
            id: uniqueId(),
            url: 'https://tailwindadmin-nextjs-main.vercel.app/react-tables/empty',
            isPro: true,
          },
          {
            name: 'Expanding',
            id: uniqueId(),
            url: 'https://tailwindadmin-nextjs-main.vercel.app/react-tables/expanding',
            isPro: true,
          },
        ],
      },
    ],
  },
  {
    heading: 'Charts',
    children: [
      {
        name: 'ApexCharts',
        id: uniqueId(),
        icon: 'solar:pie-chart-3-linear',
        children: [
          {
            id: uniqueId(),
            name: 'Line Chart',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/charts/apex-charts/line',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Area Chart',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/charts/apex-charts/area',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Gradient Chart',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/charts/apex-charts/gradient',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Candlestick',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/charts/apex-charts/candlestick',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Column',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/charts/apex-charts/column',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Doughnut & Pie',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/charts/apex-charts/doughnut',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Radialbar & Radar',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/charts/apex-charts/radialbar',
            isPro: true,
          },
        ],
      },
      {
        name: "Shadcn Charts",
        id: uniqueId(),
        icon: "solar:chart-2-linear",
        children: [
          {
            id: uniqueId(),
            name: "Line Chart",
            url: "https://tailwindadmin-nextjs-main.vercel.app/charts/shadcn/line",
            isPro: true,
          },
          {
            id: uniqueId(),
            name: "Area Chart",
            url: "https://tailwindadmin-nextjs-main.vercel.app/charts/shadcn/area",
            isPro: true,
          },
          {
            id: uniqueId(),
            name: "Radar",
            url: "https://tailwindadmin-nextjs-main.vercel.app/charts/shadcn/radar",
            isPro: true,
          },
          {
            id: uniqueId(),
            name: "Bar",
            url: "https://tailwindadmin-nextjs-main.vercel.app/charts/shadcn/bar",
            isPro: true,
          },
          {
            id: uniqueId(),
            name: "Doughnut & Pie",
            url: "https://tailwindadmin-nextjs-main.vercel.app/charts/shadcn/pie",
            isPro: true,
          },
          {
            id: uniqueId(),
            name: "Radialbar & Radar",
            url: "https://tailwindadmin-nextjs-main.vercel.app/charts/shadcn/radial",
            isPro: true,
          },
        ],
      },
    ],
  },
  {
    heading: 'Pro Pages',
    children: [
      {
        id: uniqueId(),
        name: 'Account Setting',
        icon: 'solar:settings-minimalistic-linear',
        url: 'https://tailwindadmin-nextjs-main.vercel.app/theme-pages/account-settings',
        isPro: true,
      },
      {
        id: uniqueId(),
        name: 'FAQ',
        icon: 'solar:question-circle-linear',
        url: 'https://tailwindadmin-nextjs-main.vercel.app/theme-pages/faq',
        isPro: true,
      },
      {
        id: uniqueId(),
        name: 'Pricing',
        icon: 'solar:tag-price-linear',
        url: 'https://tailwindadmin-nextjs-main.vercel.app/theme-pages/pricing',
        isPro: true,
      },
      {
        id: uniqueId(),
        name: 'Landingpage',
        icon: 'solar:three-squares-linear',
        url: 'https://tailwindadmin-nextjs-main.vercel.app/landingpage',
        isPro: true,
      },
      {
        id: uniqueId(),
        name: 'Roll Base Access',
        icon: 'solar:accessibility-linear',
        url: 'https://tailwindadmin-nextjs-main.vercel.app/theme-pages/casl',
        isPro: true,
      },
      {
        id: uniqueId(),
        name: 'Integrations',
        icon: 'solar:home-add-linear',
        url: 'https://tailwindadmin-nextjs-main.vercel.app/theme-pages/inetegration',
        isPro: true,
      },
      {
        id: uniqueId(),
        name: 'API Keys',
        icon: 'solar:key-linear',
        url: 'https://tailwindadmin-nextjs-main.vercel.app/theme-pages/apikey',
        isPro: true,
      },
    ],
  },
  {
    heading: 'Icons',
    children: [
      {
        id: uniqueId(),
        name: 'Iconify Icons',
        icon: 'solar:structure-linear',
        url: '/icons/iconify',
        isPro: false,
      },
    ],
  },
  {
    heading: 'Auth',
    children: [
      {
        id: uniqueId(),
        name: 'Error',
        icon: 'solar:link-broken-minimalistic-linear',
        url: 'https://tailwindadmin-nextjs-main.vercel.app/auth/error',
        isPro: true,
      },
      {
        name: 'Login',
        id: uniqueId(),
        icon: 'solar:login-2-linear',
        children: [
          {
            id: uniqueId(),
            name: 'Side Login',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/auth/auth1/login',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Boxed Login',
            url: '/auth/login',
            isPro: false,
          },
        ],
      },
      {
        name: 'Register',
        id: uniqueId(),
        icon: 'solar:user-plus-rounded-linear',
        children: [
          {
            id: uniqueId(),
            name: 'Side Register',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/auth/auth1/register',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Boxed Register',
            url: '/auth/register',
            isPro: false,
          },
        ],
      },
      {
        name: 'Forgot Password',
        id: uniqueId(),
        icon: 'solar:password-linear',
        children: [
          {
            id: uniqueId(),
            name: 'Side Forgot Pwd',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/auth/auth1/forgot-password',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Boxed Forgot Pwd',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/auth/auth2/forgot-password',
            isPro: true,
          },
        ],
      },
      {
        name: 'Two Steps',
        id: uniqueId(),
        icon: 'solar:shield-keyhole-minimalistic-linear',
        children: [
          {
            id: uniqueId(),
            name: 'Side Two Steps',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/auth/auth1/two-steps',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Boxed Two Steps',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/auth/auth2/two-steps',
            isPro: true,
          },
        ],
      },
      {
        id: uniqueId(),
        name: 'Maintenance',
        icon: 'solar:settings-linear',
        url: 'https://tailwindadmin-nextjs-main.vercel.app/auth/maintenance',
        isPro: true,
      },
    ],
  },
]

export default SidebarContent
