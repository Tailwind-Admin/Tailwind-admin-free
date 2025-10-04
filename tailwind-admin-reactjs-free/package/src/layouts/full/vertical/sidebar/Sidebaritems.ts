export interface ChildItem {
  id?: number | string;
  name?: string;
  icon?: any;
  children?: ChildItem[];
  item?: any;
  url?: any;
  color?: string;
  disabled?: boolean;
  subtitle?: string;
  badge?: boolean;
  badgeType?: string;
  isPro?: boolean;
  target?: string;
}

export interface MenuItem {
  heading?: string;
  name?: string;
  icon?: any;
  id?: number;
  to?: string;
  items?: MenuItem[];
  children?: ChildItem[];
  url?: any;
  disabled?: boolean;
  subtitle?: string;
  badgeType?: string;
  badge?: boolean;
  isPro?: boolean;
}

import { uniqueId } from 'lodash';

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
        url: 'https://tailwindadmin-reactjs-main.netlify.app/dashboards/eCommerce',
        isPro: true,
      },
      {
        name: 'Music',
        icon: 'solar:music-note-linear',
        id: uniqueId(),
        url: 'https://tailwindadmin-reactjs-main.netlify.app/dashboards/music',
        isPro: true,
      },
      {
        name: 'General',
        icon: 'solar:chart-linear',
        id: uniqueId(),
        url: 'https://tailwindadmin-reactjs-main.netlify.app/dashboards/general',
        isPro: true,
      },
      {
        name: 'Front Pages',
        id: uniqueId(),
        icon: 'solar:document-linear',
        children: [
          {
            id: uniqueId(),
            name: 'Homepage',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/frontend-pages/homepage',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'About Us',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/frontend-pages/about',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Blog',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/frontend-pages/blog/post',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Blog Details',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/frontend-pages/blog/detail/as-yen-tumbles-gadget-loving-japan-goes-for-secondhand-iphones-',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Contact Us',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/frontend-pages/contact',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Portfolio',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/frontend-pages/portfolio',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Pricing',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/frontend-pages/pricing',
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
        url: 'https://tailwindadmin-reactjs-main.netlify.app/apps/contacts',
        isPro: true,
      },

      {
        name: 'Ecommerce',
        id: uniqueId(),
        icon: 'solar:cart-large-2-linear',
        children: [
          {
            id: uniqueId(),
            name: 'Shop',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/apps/ecommerce/shop',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Details',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/apps/ecommerce/detail/3',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'List',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/apps/ecommerce/list',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Checkout',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/apps/ecommerce/checkout',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Add Product',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/apps/ecommerce/addproduct',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Edit Product',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/apps/ecommerce/editproduct',
            isPro: true,
          },
        ],
      },

      {
        name: 'User Profile',
        id: uniqueId(),
        icon: 'solar:user-circle-linear',
        children: [
          {
            id: uniqueId(),
            name: 'Profile',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/apps/user-profile/profile',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Followers',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/apps/user-profile/followers',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Friends',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/apps/user-profile/friends',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Gallery',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/apps/user-profile/gallery',
            isPro: true,
          },
        ],
      },

      {
        name: 'Invoice',
        id: uniqueId(),
        icon: 'solar:bill-list-linear',
        children: [
          {
            id: uniqueId(),
            name: 'List',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/apps/invoice/list',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Details',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/apps/invoice/detail/PineappleInc',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Create',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/apps/invoice/create',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Edit',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/apps/invoice/edit/PineappleInc',
            isPro: true,
          },
        ],
      },
      {
        id: uniqueId(),
        name: 'Chats',
        icon: 'solar:dialog-linear',
        url: 'https://tailwindadmin-reactjs-main.netlify.app/apps/chats',
        isPro: true,
      },
      {
        id: uniqueId(),
        name: 'Calendar',
        icon: 'solar:calendar-linear',
        url: 'https://tailwindadmin-reactjs-main.netlify.app/apps/calendar',
        isPro: true,
      },
      {
        id: uniqueId(),
        name: 'Email',
        icon: 'solar:letter-linear',
        url: 'https://tailwindadmin-reactjs-main.netlify.app/apps/email',
        isPro: true,
      },
      {
        id: uniqueId(),
        name: 'Kanban',
        icon: 'solar:server-minimalistic-linear',
        url: 'https://tailwindadmin-reactjs-main.netlify.app/apps/kanban',
        isPro: true,
      },
    ],
  },
  {
    heading: 'UI ELEMENTS',
    children: [
      {
        name: 'Flowbite Ui',
        id: uniqueId(),
        icon: 'solar:snowflake-linear',
        url: 'https://tailwind-admin.com/components/flowbite/buttons',
        isPro: false,
      },
      {
        name: 'Shadcn Ui',
        id: uniqueId(),
        icon: 'solar:slash-square-linear',
        url: 'https://tailwind-admin.com/components/shadcn/buttons',
        isPro: false,
      },
      {
        name: 'Headless Ui',
        id: uniqueId(),
        icon: 'solar:pip-2-linear',
        url: 'https://tailwind-admin.com/components/headlessui/buttons',
        isPro: false,
      },
    ],
  },

  {
    heading: 'FORM ELEMENTS',
    children: [
      {
        name: 'Flowbite Forms',
        id: uniqueId(),
        icon: 'solar:notification-unread-lines-linear',
        children: [
          {
            id: uniqueId(),
            name: 'Forms Elements',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/forms/form-elements',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Forms Layouts',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/forms/form-layouts',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Forms Horizontal',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/forms/form-horizontal',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Forms Vertical',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/forms/form-vertical',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Forms Custom',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/forms/form-custom',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Form Validation',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/forms/form-validation',
            isPro: true,
          },
        ],
      },
      {
        name: 'Shadcn Forms',
        id: uniqueId(),
        icon: 'solar:banknote-2-linear',
        children: [
          {
            id: uniqueId(),
            name: 'Input',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/shadcn-form/input',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Select',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/shadcn-form/select',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Checkbox',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/shadcn-form/checkbox',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Radio',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/shadcn-form/radio',
            isPro: true,
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
            name: 'Buttons',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/headless-form/buttons',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Checkbox',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/headless-form/checkbox',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Combobox',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/headless-form/combobox',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Fieldset',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/headless-form/fieldset',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Input',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/headless-form/input',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Listbox',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/headless-form/listbox',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Radio Group',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/headless-form/radiogroup',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Select',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/headless-form/select',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Switch',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/headless-form/switch',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Textarea',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/headless-form/textarea',
            isPro: true,
          },
        ],
      },
    ],
  },
  {
    heading: 'pro Pages',
    children: [
      {
        name: 'Account Setting',
        icon: 'solar:settings-minimalistic-linear',
        id: uniqueId(),
        url: 'https://tailwindadmin-reactjs-main.netlify.app/theme-pages/account-settings',
        isPro: true,
      },
      {
        name: 'FAQ',
        icon: 'solar:question-circle-linear',
        id: uniqueId(),
        url: 'https://tailwindadmin-reactjs-main.netlify.app/theme-pages/faq',
        isPro: true,
      },
      {
        name: 'Pricing',
        icon: 'solar:tag-price-linear',
        id: uniqueId(),
        url: 'https://tailwindadmin-reactjs-main.netlify.app/theme-pages/pricing',
        isPro: true,
      },
      {
        name: 'Landingpage',
        icon: 'solar:three-squares-linear',
        id: uniqueId(),
        url: 'https://tailwindadmin-reactjs-main.netlify.app/landingpage',
        isPro: true,
      },
      {
        name: 'Roll Base Access',
        icon: 'solar:accessibility-linear',
        id: uniqueId(),
        url: 'https://tailwindadmin-reactjs-main.netlify.app/theme-pages/casl',
        isPro: true,
      },
    ],
  },
  {
    heading: 'Widgets',
    children: [
      {
        id: uniqueId(),
        name: 'Cards',
        icon: 'solar:card-linear',
        url: 'https://tailwindadmin-reactjs-main.netlify.app/widgets/cards',
        isPro: true,
      },
      {
        id: uniqueId(),
        name: 'Banners',
        icon: 'solar:object-scan-linear',
        url: 'https://tailwindadmin-reactjs-main.netlify.app/widgets/banners',
        isPro: true,
      },
      {
        id: uniqueId(),
        name: 'Charts',
        icon: 'solar:pie-chart-2-linear',
        url: 'https://tailwindadmin-reactjs-main.netlify.app/widgets/charts',
        isPro: true,
      },
    ],
  },
  {
    heading: 'TABLES',
    children: [
      {
        name: 'Flowbite Tables',
        id: uniqueId(),
        icon: 'solar:widget-add-linear',
        children: [
          {
            name: 'Basic Tables',
            id: uniqueId(),
            url: 'https://tailwindadmin-reactjs-main.netlify.app/tables/basic',
            isPro: true,
          },
          {
            name: 'Striped Rows Table',
            id: uniqueId(),
            url: 'https://tailwindadmin-reactjs-main.netlify.app/tables/striped-row',
            isPro: true,
          },
          {
            name: 'Hover Table',
            id: uniqueId(),
            url: 'https://tailwindadmin-reactjs-main.netlify.app/tables/hover-table',
            isPro: true,
          },
          {
            name: 'Checkbox Table',
            id: uniqueId(),
            url: 'https://tailwindadmin-reactjs-main.netlify.app/tables/checkbox-table',
            isPro: true,
          },
        ],
      },
      {
        name: 'Shadcn Tables',
        id: uniqueId(),
        icon: 'solar:tablet-linear',
        children: [
          {
            name: 'Basic Table',
            id: uniqueId(),
            url: 'https://tailwindadmin-reactjs-main.netlify.app/shadcn-tables/basic',
            isPro: true,
          },
        ],
      },
      {
        name: 'React Tables',
        id: uniqueId(),
        icon: 'solar:bedside-table-3-linear',
        children: [
          {
            id: uniqueId(),
            name: 'Basic',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/react-tables/basic',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Dense',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/react-tables/dense',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Sorting',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/react-tables/sorting',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Filtering',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/react-tables/filtering',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Pagination',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/react-tables/pagination',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Row Selection',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/react-tables/row-selection',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Column Visibility',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/react-tables/columnvisibility',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Editable',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/react-tables/editable',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Sticky',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/react-tables/sticky',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Drag & Drop',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/react-tables/drag-drop',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Empty',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/react-tables/empty',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Expanding',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/react-tables/expanding',
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
        name: 'Line Chart',
        icon: 'solar:chart-square-linear',
        id: uniqueId(),
        url: 'https://tailwindadmin-reactjs-main.netlify.app/charts/line',
        isPro: true,
      },
      {
        name: 'Area Chart',
        icon: 'solar:maximize-square-3-linear',
        id: uniqueId(),
        url: 'https://tailwindadmin-reactjs-main.netlify.app/charts/area',
        isPro: true,
      },
      {
        name: 'Gradient Chart',
        icon: 'solar:graph-down-new-linear',
        id: uniqueId(),
        url: 'https://tailwindadmin-reactjs-main.netlify.app/charts/gradient',
        isPro: true,
      },
      {
        name: 'Candlestick',
        icon: 'solar:tuning-3-linear',
        id: uniqueId(),
        url: 'https://tailwindadmin-reactjs-main.netlify.app/charts/candlestick',
        isPro: true,
      },
      {
        name: 'Column',
        icon: 'solar:chart-linear',
        id: uniqueId(),
        url: 'https://tailwindadmin-reactjs-main.netlify.app/charts/column',
        isPro: true,
      },
      {
        name: 'Doughnut & Pie',
        icon: 'solar:pie-chart-3-linear',
        id: uniqueId(),
        url: 'https://tailwindadmin-reactjs-main.netlify.app/charts/doughnut',
        isPro: true,
      },
      {
        name: 'Radialbar & Radar',
        icon: 'solar:round-graph-linear',
        id: uniqueId(),
        url: 'https://tailwindadmin-reactjs-main.netlify.app/charts/radialbar',
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
        url: 'https://tailwindadmin-reactjs-main.netlify.app/auth/404',
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
            url: 'https://tailwindadmin-reactjs-main.netlify.app/auth/auth1/login',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Boxed Login',
            url: '/auth/auth2/login',
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
            url: 'https://tailwindadmin-reactjs-main.netlify.app/auth/auth1/register',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Boxed Register',
            url: '/auth/auth2/register',
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
            url: 'https://tailwindadmin-reactjs-main.netlify.app/auth/auth1/forgot-password',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Boxed Forgot Pwd',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/auth/auth2/forgot-password',
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
            url: 'https://tailwindadmin-reactjs-main.netlify.app/auth/auth1/two-steps',
            isPro: true,
          },
          {
            id: uniqueId(),
            name: 'Boxed Two Steps',
            url: 'https://tailwindadmin-reactjs-main.netlify.app/auth/auth2/two-steps',
            isPro: true,
          },
        ],
      },
      {
        id: uniqueId(),
        name: 'Maintenance',
        icon: 'solar:settings-linear',
        url: 'https://tailwindadmin-reactjs-main.netlify.app/auth/maintenance',
        isPro: true,
      },
    ],
  },
];

export default SidebarContent;
