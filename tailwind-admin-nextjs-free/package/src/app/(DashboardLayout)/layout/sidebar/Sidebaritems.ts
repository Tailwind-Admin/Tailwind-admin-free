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
        
      },
      {
        name: 'Ai Form Builder',
        icon: 'solar:document-add-linear',
        id: uniqueId(),
        url: 'https://tailwindbuilder.ai/form-builder',
        isPro: false,
        
      },
      {
        id: uniqueId(),
        name: 'Ai Chart Builder',
        icon: 'solar:pie-chart-2-linear',
        url: 'https://tailwindbuilder.ai/chart-builder',
        isPro: false,
        
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
        name: 'AI',
        id: uniqueId(),
        url: '#',
        icon: 'solar:star-circle-linear',
        children: [
          {
            id: uniqueId(),
            name: 'Chat',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/apps/chat-ai',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Image',
            url: 'https://tailwindadmin-nextjs-main.vercel.app/apps/image-ai',
            isPro: true,
          },
        ],
      },
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
      {
        id: uniqueId(),
        name: 'Customers',
        icon: 'solar:bedside-table-2-linear',
        url: 'https://tailwindadmin-nextjs-main.vercel.app/react-tables/user-datatable',
        isPro: true,
      },
      {
        id: uniqueId(),
        name: 'Orders',
        icon: 'solar:bedside-table-4-linear',
        url: 'https://tailwindadmin-nextjs-main.vercel.app/react-tables/order-datatable',
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
            
          },
          {
            id: uniqueId(),
            name: 'Badge',
            url: 'https://tailwind-admin.com/components/shadcn/badge',
            
          },
          {
            id: uniqueId(),
            name: 'Tooltip',
            url: 'https://tailwind-admin.com/components/shadcn/tooltip',
            
          },
          {
            id: uniqueId(),
            name: 'Skeleton',
            url: 'https://tailwind-admin.com/components/shadcn/skeleton',
            
          },
          {
            id: uniqueId(),
            name: 'Alert',
            url: 'https://tailwind-admin.com/components/shadcn/alert',
            
          },
          {
            id: uniqueId(),
            name: 'Progressbar',
            url: 'https://tailwind-admin.com/components/shadcn/progressbar',
            
          },
          {
            id: uniqueId(),
            name: 'Breadcrumb',
            url: 'https://tailwind-admin.com/components/shadcn/breadcrumb',
            
          },
          {
            id: uniqueId(),
            name: 'Tab',
            url: 'https://tailwind-admin.com/components/shadcn/tab',
            
          },
          {
            id: uniqueId(),
            name: 'Dropdown',
            url: 'https://tailwind-admin.com/components/shadcn/dropdown',
            
          },
          {
            id: uniqueId(),
            name: 'Accordion',
            url: 'https://tailwind-admin.com/components/shadcn/accordion',
            
          },
          {
            id: uniqueId(),
            name: 'Card',
            url: 'https://tailwind-admin.com/components/shadcn/card',
            
          },
          {
            id: uniqueId(),
            name: 'Carousel',
            url: 'https://tailwind-admin.com/components/shadcn/carousel',
            
          },
          {
            id: uniqueId(),
            name: 'Collapsible',
            url: 'https://tailwind-admin.com/components/shadcn/collapsible',
            
          },
          {
            id: uniqueId(),
            name: 'Dialogs',
            url: 'https://tailwind-admin.com/components/shadcn/dialogs',
            
          },
          {
            id: uniqueId(),
            name: 'Drawer',
            url: 'https://tailwind-admin.com/components/shadcn/drawer',
            
          },
          {
            id: uniqueId(),
            name: 'Datepicker',
            url: 'https://tailwind-admin.com/components/shadcn/datepicker',
            
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
            
          },
          {
            id: uniqueId(),
            name: 'Input',
            url: 'https://tailwind-admin.com/components/shadcn/input',
            
          },
          {
            id: uniqueId(),
            name: 'Select',
            url: 'https://tailwind-admin.com/components/shadcn/select',
            
          },
          {
            id: uniqueId(),
            name: 'Checkbox',
            url: 'https://tailwind-admin.com/components/shadcn/checkbox',
            
          },
          {
            id: uniqueId(),
            name: 'Radio',
            url: 'https://tailwind-admin.com/components/shadcn/radio',
            
          },
          {
            id: uniqueId(),
            name: 'Combobox',
            url: 'https://tailwind-admin.com/components/shadcn/combobox',
            
          },
          {
            id: uniqueId(),
            name: 'Command',
            url: 'https://tailwind-admin.com/components/shadcn/command',
            
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
            
          },
          {
            id: uniqueId(),
            name: 'Repeater Forms',
            url: 'https://tailwind-admin.com/components/shadcn/generated-forms/repeater-forms',
            
          },
          {
            id: uniqueId(),
            name: 'Form Wizard',
            url: 'https://tailwind-admin.com/components/shadcn/generated-forms/form-wizard',
            
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
            
          },
          {
            id: uniqueId(),
            name: "Best Selling Product Card",
            url: "https://tailwind-admin.com/ui-blocks/card#bestsellingproduct",
            
          },
          {
            id: uniqueId(),
            name: "Payment Gatways Cards",
            url: "https://tailwind-admin.com/ui-blocks/card#paymentgateway",
            
          },
          {
            id: uniqueId(),
            name: "Blog Cards",
            url: "https://tailwind-admin.com/ui-blocks/card#blogcards",
            
          },
          {
            id: uniqueId(),
            name: "Products Cards",
            url: "https://tailwind-admin.com/ui-blocks/card#productscards",
            
          },
          {
            id: uniqueId(),
            name: "Music Cards",
            url: "https://tailwind-admin.com/ui-blocks/card#musiccards",
            
          },
          {
            id: uniqueId(),
            name: "Profile Cards",
            url: "https://tailwind-admin.com/ui-blocks/card#profilecards",
            
          },
          {
            id: uniqueId(),
            name: "User Cards",
            url: "https://tailwind-admin.com/ui-blocks/card#usercards",
            
          },
          {
            id: uniqueId(),
            name: "Social Cards",
            url: "https://tailwind-admin.com/ui-blocks/card#socialcards",
            
          },
          {
            id: uniqueId(),
            name: "Settings Cards",
            url: "https://tailwind-admin.com/ui-blocks/card#settingscard",
            
          },
          {
            id: uniqueId(),
            name: "Gift Cards",
            url: "https://tailwind-admin.com/ui-blocks/card#giftcards",
            
          },
          {
            id: uniqueId(),
            name: "Upcomming Activity Cards",
            url: "https://tailwind-admin.com/ui-blocks/card#upcommingactcard",
            
          },
          {
            id: uniqueId(),
            name: "Recent Transaction Card",
            url: "https://tailwind-admin.com/ui-blocks/card#recenttransactioncard",
            
          },
          {
            id: uniqueId(),
            name: "Recent Comment Card",
            url: "https://tailwind-admin.com/ui-blocks/card#recentcommentcard",
            
          },
          {
            id: uniqueId(),
            name: "Task List",
            url: "https://tailwind-admin.com/ui-blocks/card#tasklist",
            
          },
          {
            id: uniqueId(),
            name: "Recent Messages",
            url: "https://tailwind-admin.com/ui-blocks/card#recentmessages",
            
          },
          {
            id: uniqueId(),
            name: "User info Card",
            url: "https://tailwind-admin.com/ui-blocks/card#userinfocard",
            
          },
          {
            id: uniqueId(),
            name: "Social Card",
            url: "https://tailwind-admin.com/ui-blocks/card#socialcard",
            
          },
          {
            id: uniqueId(),
            name: "Feed Card",
            url: "https://tailwind-admin.com/ui-blocks/card#feedcard",
            
          },
          {
            id: uniqueId(),
            name: "Poll of Week Card",
            url: "https://tailwind-admin.com/ui-blocks/card#pollofweekcard",
            
          },
          {
            id: uniqueId(),
            name: "Result of Poll",
            url: "https://tailwind-admin.com/ui-blocks/card#resultofpoll",
            
          },
          {
            id: uniqueId(),
            name: "Social Post Card",
            url: "https://tailwind-admin.com/ui-blocks/card#socialpostcard",
            
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
            
          },
          {
            id: uniqueId(),
            name: "Download Banner",
            url: "https://tailwind-admin.com/ui-blocks/banner#downloadbanner",
            
          },
          {
            id: uniqueId(),
            name: "Empty Cart Banner",
            url: "https://tailwind-admin.com/ui-blocks/banner#emptybanner",
            
          },
          {
            id: uniqueId(),
            name: "Error Banner",
            url: "https://tailwind-admin.com/ui-blocks/banner#errorbanner",
            
          },
          {
            id: uniqueId(),
            name: "Notifications Banner",
            url: "https://tailwind-admin.com/ui-blocks/banner#notificationsbanner",
            
          },
          {
            id: uniqueId(),
            name: "Greeting Banner 2",
            url: "https://tailwind-admin.com/ui-blocks/banner#greetingbanner2",
            
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
            
          },
          {
            id: uniqueId(),
            name: "Yarly Breakup Chart",
            url: "https://tailwind-admin.com/ui-blocks/chart#yarlybreakupchart",
            
          },
          {
            id: uniqueId(),
            name: "Monthly Earning Chart",
            url: "https://tailwind-admin.com/ui-blocks/chart#monthlyearning",
            
          },
          {
            id: uniqueId(),
            name: "Yearly Sales Chart",
            url: "https://tailwind-admin.com/ui-blocks/chart#yearlysaleschart",
            
          },
          {
            id: uniqueId(),
            name: "Current Year Chart",
            url: "https://tailwind-admin.com/ui-blocks/chart#currentyear",
            
          },
          {
            id: uniqueId(),
            name: "Weekly Stats Chart",
            url: "https://tailwind-admin.com/ui-blocks/chart#weeklystatschart",
            
          },
          {
            id: uniqueId(),
            name: "Expance Chart",
            url: "https://tailwind-admin.com/ui-blocks/chart#expancechart",
            
          },
          {
            id: uniqueId(),
            name: "Customers Chart",
            url: "https://tailwind-admin.com/ui-blocks/chart#customerschart",
            
          },
          {
            id: uniqueId(),
            name: "Earned Chart",
            url: "https://tailwind-admin.com/ui-blocks/chart#revenuechart",
            
          },
          {
            id: uniqueId(),
            name: "Follower Chart",
            url: "https://tailwind-admin.com/ui-blocks/chart#followerchart",
            
          },
          {
            id: uniqueId(),
            name: "Visit Chart",
            url: "https://tailwind-admin.com/ui-blocks/chart#visitchart",
            
          },
          {
            id: uniqueId(),
            name: "Income Chart",
            url: "https://tailwind-admin.com/ui-blocks/chart#incomechart",
            
          },
          {
            id: uniqueId(),
            name: "Impressions Chart",
            url: "https://tailwind-admin.com/ui-blocks/chart#impressionschart",
            
          },
          {
            id: uniqueId(),
            name: "Sales Overviewchart",
            url: "https://tailwind-admin.com/ui-blocks/chart#salesoverviewchart",
            
          },
          {
            id: uniqueId(),
            name: "Total Earnings Chart",
            url: "https://tailwind-admin.com/ui-blocks/chart#totalearningschart",
            
          },
        ],
      },
    ],
  },
  {
    heading: 'Tables',
    children: [
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
