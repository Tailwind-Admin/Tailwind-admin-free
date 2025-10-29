export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  chip?: string;
  chipBgColor?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
  isPro?: boolean
}

const sidebarItem: menu[] = [
  { header: "Home" },
  {
    title: "Modern",
    icon: "home-smile-linear",
    to: "/",
    isPro: false,
  },
  {
    title: "eCommerce",
    icon: "bag-5-linear",
    to: "https://tailwindadmin-vuejs-main.netlify.app/dashboards/eCommerce",
    isPro: true,
  },
  {
    title: "Music",
    icon: "music-note-linear",
    to: "https://tailwindadmin-vuejs-main.netlify.app/dashboards/music",
    isPro: true,
  },

  {
    title: 'General',
    icon: 'chart-linear',
    to: 'https://tailwindadmin-vuejs-main.netlify.app/dashboards/general',
    isPro: true,
  },
  {
    title: 'Front Pages',
    icon: 'document-linear',
    children: [
      {

        title: 'Homepage',
        to: 'https://tailwindadmin-vuejs-main.netlify.app/frontend-pages/homepage',
        isPro: true,
      },
      {

        title: 'About Us',
        to: 'https://tailwindadmin-vuejs-main.netlify.app/frontend-pages/about',
        isPro: true,
      },
      {

        title: 'Blog',
        to: 'https://tailwindadmin-vuejs-main.netlify.app/frontend-pages/blog/post',
        isPro: true,
      },
      {

        title: 'Blog Details',
        to: 'https://tailwindadmin-vuejs-main.netlify.app/frontend-pages/blog/early-black-friday-amazon-deals-cheap-tvs-headphones',
        isPro: true,
      },

      {

        title: 'Portfolio',
        to: 'https://tailwindadmin-vuejs-main.netlify.app/frontend-pages/portfolio',
        isPro: true,
      },
      {

        title: 'Pricing',
        to: 'https://tailwindadmin-vuejs-main.netlify.app/frontend-pages/pricing',
        isPro: true,
      },
      {

        title: 'Contact Us',
        to: 'https://tailwindadmin-vuejs-main.netlify.app/frontend-pages/contact',
        isPro: true,
      },
    ],
  },
  // {
  //   title: "Sample Page",
  //   icon: "home-smile-linear",
  //   to: "/starter",
  // },
  { header: "Ai" },
  {
    title: 'Ai Table Builder',
    icon: 'server-linear',
    to: 'https://tailwindbuilder.ai/table-builder',
    isPro: false,

  }, {
    title: 'Ai Form Builder',
    icon: 'document-add-linear',
    to: 'https://tailwindbuilder.ai/form-builder',
    isPro: false,

  }, {
    title: 'Ai Chart Builder',
    icon: 'pie-chart-2-linear',
    to: 'https://tailwindbuilder.ai/chart-builder',
    isPro: false,

  },

  { header: "PAGES" },
  {
    title: 'Table',
    icon: 'server-linear',
    to: '/utilities/table',
    isPro: false,

  },
  {
    title: 'Form',
    icon: 'document-add-linear',
    to: '/utilities/form',
    isPro: false,

  }, {
    title: 'User Profile',
    icon: 'user-circle-linear',
    to: '/user-profile',
    isPro: false,

  },
  { header: "Apps" },

  {
    title: 'AI',
    icon: 'star-circle-linear',
    children: [

      {
        title: 'Chat',
        to: 'https://tailwindadmin-vuejs-main.netlify.app/apps/ai/chat-ai',
        isPro: true,
      },
      {
        title: 'Image ',
        to: 'https://tailwindadmin-vuejs-main.netlify.app/apps/ai/image-generator',
        isPro: true,
      },
    ]
  },
  {
    title: 'Blog',
    icon: 'sort-by-alphabet-linear',
    to: '/',
    children: [
      {
        title: 'Blog Posts',
        to: '/apps/blog/post',
        isPro: false,
      },
      {
        title: 'Blog Details',
        to: '/apps/blog/early-black-friday-amazon-deals-cheap-tvs-headphones',
        isPro: false,
      }
    ]
  },
  {
    title: "User Profile",

    icon: "user-circle-linear",
    children: [
      {
        title: "Profile",
        to: "https://tailwindadmin-vuejs-main.netlify.app/apps/user-profile/profile",
        isPro: true,
      },
      {

        title: "Followers",
        to: "https://tailwindadmin-vuejs-main.netlify.app/apps/user-profile/followers",
        isPro: true,
      },
      {

        title: "Friends",
        to: "https://tailwindadmin-vuejs-main.netlify.app/apps/user-profile/friends",
        isPro: true,
      },
      {

        title: "Gallery",
        to: "https://tailwindadmin-vuejs-main.netlify.app/apps/user-profile/gallery",
        isPro: true,
      },
    ],
  },
  {
    title: 'Invoice',
    icon: 'bill-check-outline',
    to: '/',
    children: [
      {
        title: 'List',
        to: 'https://tailwindadmin-vuejs-main.netlify.app/apps/invoice',
        isPro: true,
      },
      {
        title: 'Details',
        to: 'https://tailwindadmin-vuejs-main.netlify.app/apps/invoice/details/102',
        isPro: true,
      },
      {
        title: 'Create',
        to: 'https://tailwindadmin-vuejs-main.netlify.app/apps/invoice/create',
        isPro: true,
      },
      {
        title: 'Edit',
        to: 'https://tailwindadmin-vuejs-main.netlify.app/apps/invoice/edit/102',
        isPro: true,
      }
    ]
  },
  {
    title: "Ecommerce",
    icon: "cart-large-2-linear",
    children: [
      {

        title: "Shop",
        to: "https://tailwindadmin-vuejs-main.netlify.app/apps/ecommerce/shop",
        isPro: true,
      },
      {

        title: "Details",
        to: "https://tailwindadmin-vuejs-main.netlify.app/apps/ecommerce/detail/3",
        isPro: true,
      },
      {

        title: "List",
        to: "https://tailwindadmin-vuejs-main.netlify.app/apps/ecommerce/list",
        isPro: true,
      },
      {

        title: "Checkout",
        to: "https://tailwindadmin-vuejs-main.netlify.app/apps/ecommerce/checkout",
        isPro: true,
      },
      {

        title: "Add Product",
        to: "https://tailwindadmin-vuejs-main.netlify.app/apps/ecommerce/addproduct",
        isPro: true,
      },
      {

        title: "Edit Product",
        to: "https://tailwindadmin-vuejs-main.netlify.app/apps/ecommerce/editproduct",
        isPro: true,
      },
    ],
  },
  {
    title: 'Chats',
    icon: 'dialog-linear',
    to: 'https://tailwindadmin-vuejs-main.netlify.app/apps/chats',
    isPro: true,
  },
  {
    title: 'Kanban',
    icon: 'dialog-linear',
    to: 'https://tailwindadmin-vuejs-main.netlify.app/apps/kanban',
    isPro: true,
  },
  {
    title: 'Notes',
    icon: 'notes-linear',
    to: '/apps/notes',
    isPro: false,
  },
  {
    title: 'Calendar',
    icon: 'calendar-linear',
    to: 'https://tailwindadmin-vuejs-main.netlify.app/apps/calendar',
    isPro: true,
  },
  {
    title: 'Contacts',
    icon: 'users-group-rounded-linear',
    to: 'https://tailwindadmin-vuejs-main.netlify.app/apps/contacts',
    isPro: true,
  },
  {
    title: 'Tickets',
    icon: 'ticker-star-linear',
    to: '/apps/tickets',
    isPro: false,
  },
  {
    title: 'Email',
    icon: 'letter-linear',
    to: 'https://tailwindadmin-vuejs-main.netlify.app/apps/email',
    isPro: true,
  },
  { header: "Pages" },


  {
    title: 'Account Setting',
    icon: 'settings-minimalistic-linear',
    to: 'https://tailwindadmin-vuejs-main.netlify.app/theme-pages/account-settings',
    isPro: true,
  },
  {
    title: 'FAQ',
    icon: 'question-circle-linear',
    to: 'https://tailwindadmin-vuejs-main.netlify.app/theme-pages/faq',
    isPro: true,
  },
  {
    title: 'Pricing',
    icon: 'tag-price-linear',
    to: 'https://tailwindadmin-vuejs-main.netlify.app/theme-pages/pricing',
    isPro: true,
  },
  {
    title: 'Rollbase Access',
    icon: 'accessibility-linear',
    to: 'https://tailwindadmin-vuejs-main.netlify.app/theme-pages/casl',
    isPro: true,
  },
  {
    title: 'Landingpage',
    icon: 'three-squares-linear',
    to: 'https://tailwindadmin-vuejs-main.netlify.app/landingpage',
    isPro: true,
  },
  {
    title: 'Integrations',
    icon: 'home-add-linear',
    to: 'https://tailwindadmin-vuejs-main.netlify.app/theme-pages/integration',
    isPro: true,
  },
  {
    title: 'API Keys',
    icon: 'key-linear',
    to: 'https://tailwindadmin-vuejs-main.netlify.app/theme-pages/apikey',
    isPro: true,
  },
  { header: "WIDGETS" },
  {
    title: 'Cards',
    icon: 'card-linear',
    to: 'https://tailwindadmin-vuejs-main.netlify.app/widgets/cards',
    isPro: true,
  },
  {
    title: 'Banners',
    icon: 'object-scan-linear',
    to: 'https://tailwindadmin-vuejs-main.netlify.app/widgets/banners',
    isPro: true,
  },
  {
    title: 'Charts',
    icon: 'pie-chart-2-linear',
    to: 'https://tailwindadmin-vuejs-main.netlify.app/widgets/charts',

  },

  { header: "Charts" },
  {
    title: "ApexCharts",
    icon: "pie-chart-3-linear",
    children: [
      {
        title: 'Line Chart',
        to: 'https://tailwindadmin-vuejs-main.netlify.app/charts/apex-charts/line',
        isPro: true,
      },
      {
        title: 'Area Chart',
        to: 'https://tailwindadmin-vuejs-main.netlify.app/charts/apex-charts/area',
        isPro: true,
      }, {
        title: 'Gradient Chart',
        to: 'https://tailwindadmin-vuejs-main.netlify.app/charts/apex-charts/gradient',
        isPro: true,
      },
      {
        title: 'Candlestick',
        to: 'https://tailwindadmin-vuejs-main.netlify.app/charts/apex-charts/candlestick',
        isPro: true,
      }, {
        title: 'Column Chart',
        to: 'https://tailwindadmin-vuejs-main.netlify.app/charts/apex-charts/column',
        isPro: true,
      },
      {
        title: 'Doughnut & Pie',
        to: 'https://tailwindadmin-vuejs-main.netlify.app/charts/apex-charts/doughnut',
        isPro: true,
      },
      {
        title: 'Radial & Radar',
        to: 'https://tailwindadmin-vuejs-main.netlify.app/charts/apex-charts/radialbar',
        isPro: true,
      },

    ]

  },
  { header: "FORM" },
  {
    title: "Form Elements",
    icon: "code-file-linear",
    to: "https://tailwindadmin-vuejs-main.netlify.app/components/form/checkbox",
    isPro: true,

  },

  {
    title: "Form Layouts",
    icon: "file-favourite-linear",
    to: "/forms/form-layouts",
    isPro: true,

  },
  {
    title: "Form Horizontal",
    icon: "code-file-linear",
    to: "/forms/form-horizontal",
    isPro: true,

  },
  {
    title: "Form Vertical",
    icon: "video-frame-linear",
    to: "/forms/form-vertical",
    isPro: true,

  },
  {
    title: "Form Validation",
    icon: "folder-security-linear",
    to: "/forms/form-validation",
    isPro: true,

  },

  { header: "Tables" },
  {
    title: "Shadcn Tables",
    icon: "tablet-linear",
    to: "#",

    children: [
      {
        title: 'Basic Table',
        to: '/shadcn-tables/basic',
        isPro: true,
      },
      {
        title: 'Hover Table',
        to: '/shadcn-tables/hover',
        isPro: true,
      }, {
        title: 'Editable Table',
        to: '/shadcn-tables/edit',
        isPro: true,
      }
    ]

  },
  {
    title: "Data Tables",
    icon: "bedside-table-3-linear",
    to: "#",

    children: [
      {
        title: 'Orders Table',
        to: '/table/orders-table',
        isPro: true,
      },
      {
        title: 'Basic Table',
        to: '/table/basic-table',
        isPro: true,
      }, {
        title: 'Column Pining',
        to: '/table/column-table',
        isPro: true,
      },
      {
        title: 'Reactive',
        to: '/table/reactive-table',
        isPro: true,
      }
    ]

  },
  { header: "Ui" },
  {
    title: 'Ui Elements',
    to: 'https://tailwindadmin-vuejs-main.netlify.app/components/ui/alert',
    isPro: true,
    icon: "palette-round-linear",
  },
  { header: "Icons" },
  {
    title: 'Solar Icon',
    to: '/icons/solar',
    isPro: false,
    icon: "smile-circle-linear",
  },

  { header: 'Auth' },
  {
    title: 'Login',
    icon: 'login-2-linear',
    to: '#',

    children: [
      {
        title: 'Side Login',
        to: 'https://tailwindadmin-vuejs-main.netlify.app/auth/auth1/login',
        isPro: true,
      },
      {
        title: 'Boxed Login',
        to: '/auth/login2',
        isPro: false,
      }
    ]
  },
  {
    title: 'Register',
    icon: 'user-plus-rounded-linear',
    to: '#',
    isPro: true,
    children: [
      {
        title: 'Side Register',
        to: 'https://tailwindadmin-vuejs-main.netlify.app/auth/auth1/register',
        isPro: true,
      },
      {
        title: 'Boxed Register',
        to: '/auth/register2',
        isPro: false,
      }
    ]
  },

  {
    title: 'Forgot Password',
    icon: 'password-linear',
    to: '#',

    children: [
      {
        title: 'Side Forgot',
        to: 'https://tailwindadmin-vuejs-main.netlify.app/auth/auth1/forgot-password',
        isPro: true,
      },
      {
        title: 'Boxed Forgot',
        to: '/auth/forgot-password2',
        isPro: false,
      }
    ]
  },

  {
    title: 'Two Steps',
    icon: 'shield-keyhole-minimalistic-linear',
    to: '#',

    children: [
      {
        title: 'Side Two Steps',
        to: 'https://tailwindadmin-vuejs-main.netlify.app/auth/auth1/two-steps',
        isPro: true,
      },
      {
        title: 'Boxed Two Steps',
        to: '/auth/two-step2',
        isPro: false,
      }
    ]
  },
  {
    title: 'Error',
    icon: 'link-broken-minimalistic-linear',
    to: 'https://tailwindadmin-vuejs-main.netlify.app/auth/error',
    isPro: true,
  },
  {
    title: 'Maintenance',
    icon: 'settings-linear',
    to: 'https://tailwindadmin-vuejs-main.netlify.app/auth/maintenance',
    isPro: true,
  },
  { header: "Other" },


  {
    title: "Disabled",
    icon: "forbidden-circle-linear",
    disabled: true,
    to: "#",
    isPro: false,
  },
  {
    title: "Sub Caption",
    icon: "star-fall-minimalistic-2-linear",
    subCaption: "This is the subtitle",
    to: "#",
    isPro: false,
  },
  {
    title: "Chip",
    icon: "shield-check-linear",
    chip: "9",
    chipColor: "surface",
    chipBgColor: "primary",
    to: "#",
    isPro: false,
  },
  {
    title: "Outlined",
    icon: "smile-circle-linear",
    chip: "outline",
    chipColor: "primary",
    chipVariant: "outline",
    to: "#",
    isPro: false,
  },
  {
    title: "External Link",
    icon: "link-broken-minimalistic-linear",
    to: "https://google.com",
    type: "external",
    isPro: false,
  },
];

export default sidebarItem;
