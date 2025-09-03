import { uniqueId } from "lodash";

export interface ChildItem {
  id?: number | string;
  name?: string;
  icon?: any;
  children?: ChildItem[];
  item?: any;
  url?: any;
  color?: string;
  disabled?: boolean,
  subtitle?: string,
  badge?: boolean,
  badgeType?: string,
  isPro?: boolean,
  target?: string,
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
  disabled?: boolean,
  subtitle?: string,
  badgeType?: string,
  badge?: boolean,
  isPro?: boolean
}


const SidebarContent: MenuItem[] = [
  {
    heading: "Home",
    children: [
      {
        name: "Modern",
        icon: 'solar:widget-2-linear',
        id: uniqueId(),
        url: "/",
        isPro: false
      },
      {
        name: "Ecommerce",
        icon: 'solar:bag-5-linear',
        id: uniqueId(),
        url: "https://tailwindadmin-nextjs-main.vercel.app/dashboards/eCommerce",
        isPro: true
      },
      {
        name: "Front Pages",
        id: uniqueId(),
        icon: "solar:document-linear",
        url: "#",
        children: [
          {
            name: "Homepage",
            id: uniqueId(),
            url: "https://tailwindadmin-nextjs-main.vercel.app/frontend-pages/homepage",
            isPro: true
          },
          {
            name: "About Us",
            id: uniqueId(),
            url: "https://tailwindadmin-nextjs-main.vercel.app/frontend-pages/about",
            isPro: true
          },
          {
            name: "Blog",
            id: uniqueId(),
            url: "https://tailwindadmin-nextjs-main.vercel.app/frontend-pages/blog/post",
            isPro: true
          },
          {
            name: "Blog Details",
            id: uniqueId(),
            url: "https://tailwindadmin-nextjs-main.vercel.app/frontend-pages/blog/detail/as-yen-tumbles-gadget-loving-japan-goes-for-secondhand-iphones-",
            isPro: true
          },
          {
            name: "Contact Us",
            id: uniqueId(),
            url: "https://tailwindadmin-nextjs-main.vercel.app/frontend-pages/contact",
            isPro: true
          },
          {
            name: "Portfolio",
            id: uniqueId(),
            url: "https://tailwindadmin-nextjs-main.vercel.app/frontend-pages/portfolio",
            isPro: true
          },
          {
            name: "Pricing",
            id: uniqueId(),
            url: "https://tailwindadmin-nextjs-main.vercel.app/frontend-pages/pricing",
            isPro: true
          },
        ],
      },
    ],
  },
  {
    heading: "pages",
    children: [
      {
        name: "Table",
        icon: 'solar:server-linear',
        id: uniqueId(),
        url: "/utilities/table",
      },
      {
        name: "Form",
        icon: 'solar:document-add-linear',
        id: uniqueId(),
        url: "/utilities/form",
      },

      {
        id: uniqueId(),
        name: "User Profile",
        icon: "solar:user-circle-linear",
        url: "/user-profile",
        isPro: false
      },
    ],
  },
  {
    heading: "Apps",
    children: [
      {
        id: uniqueId(),
        name: "Notes",
        icon: "solar:notes-linear",
        url: "/apps/notes",
        isPro: false
      },
      {
        id: uniqueId(),
        name: "Tickets",
        icon: "solar:ticker-star-linear",
        url: "/apps/tickets",
        isPro: false
      },
      {
        name: "Blogs",
        id: uniqueId(),
        url: "#",
        icon: "solar:sort-by-alphabet-linear",
        children: [
          {
            id: uniqueId(),
            name: "Blog Post",
            url: "/apps/blog/post",
            isPro: false
          },
          {
            id: uniqueId(),
            name: "Blog Detail",
            url: "/apps/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow",
            isPro: false
          },
        ],
      },
      {
        id: uniqueId(),
        name: "Contacts",
        icon: "solar:users-group-rounded-linear",
        url: "https://tailwindadmin-nextjs-main.vercel.app/apps/contacts",
        isPro: true
      },
      {
        name: "Ecommerce",
        id: uniqueId(),
        url: "#",
        icon: "solar:cart-large-2-linear",
        children: [
          {
            id: uniqueId(),
            name: "Shop",
            url: "https://tailwindadmin-nextjs-main.vercel.app/apps/ecommerce/shop",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Details",
            url: "https://tailwindadmin-nextjs-main.vercel.app/apps/ecommerce/detail/1",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "List",
            url: "https://tailwindadmin-nextjs-main.vercel.app/apps/ecommerce/list",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Checkout",
            url: "https://tailwindadmin-nextjs-main.vercel.app/apps/ecommerce/checkout",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Add Product",
            url: "https://tailwindadmin-nextjs-main.vercel.app/apps/ecommerce/addproduct",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Edit Product",
            url: "https://tailwindadmin-nextjs-main.vercel.app/apps/ecommerce/editproduct",
            isPro: true
          },
        ],
      },
      {
        name: "User Profile",
        id: uniqueId(),
        url: "#",
        icon: "solar:user-circle-linear",
        children: [
          {
            id: uniqueId(),
            name: "Profile",
            url: "https://tailwindadmin-nextjs-main.vercel.app/apps/user-profile/profile",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Followers",
            url: "https://tailwindadmin-nextjs-main.vercel.app/apps/user-profile/followers",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Friends",
            url: "https://tailwindadmin-nextjs-main.vercel.app/apps/user-profile/friends",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Gallery",
            url: "https://tailwindadmin-nextjs-main.vercel.app/apps/user-profile/gallery",
            isPro: true
          },
        ],
      },
      {
        name: "Invoice",
        id: uniqueId(),
        icon: "solar:bill-list-linear",
        url: "#",
        children: [
          {
            id: uniqueId(),
            name: "List",
            url: "https://tailwindadmin-nextjs-main.vercel.app/apps/invoice/list",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Details",
            url: "https://tailwindadmin-nextjs-main.vercel.app/apps/invoice/detail/PineappleInc",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Create",
            url: "https://tailwindadmin-nextjs-main.vercel.app/apps/invoice/create",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Edit",
            url: "https://tailwindadmin-nextjs-main.vercel.app/apps/invoice/edit/PineappleInc",
            isPro: true
          },
        ],
      },
      {
        id: uniqueId(),
        name: "Chats",
        icon: "solar:dialog-linear",
        url: "https://tailwindadmin-nextjs-main.vercel.app/apps/chats",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Calendar",
        icon: "solar:calendar-linear",
        url: "https://tailwindadmin-nextjs-main.vercel.app/apps/calendar",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Email",
        icon: "solar:letter-linear",
        url: "https://tailwindadmin-nextjs-main.vercel.app/apps/email",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Kanban",
        icon: "solar:server-minimalistic-linear",
        url: "https://tailwindadmin-nextjs-main.vercel.app/apps/kanban",
        isPro: true
      },
    ],
  },
  {
    heading: "UI ELEMENTS",
    children: [
      {
        name: "Flowbite Ui",
        id: uniqueId(),
        icon: "solar:snowflake-linear",
        url: "https://tailwind-admin.com/components/flowbite/buttons",
        target: "_blank"
      },
      {
        name: "Shadcn Ui",
        id: uniqueId(),
        icon: "solar:slash-square-linear",
        url: "https://tailwind-admin.com/components/shadcn/buttons",
        target: "_blank"
      },
      {
        name: "Headless Ui",
        id: uniqueId(),
        icon: "solar:pip-2-linear",
        url: "https://tailwind-admin.com/components/headlessui/buttons",
        target: "_blank"
      }
    ]
  },
  {
    heading: "FORM ELEMENTS",
    children: [
      {
        name: "Flowbite Forms",
        id: uniqueId(),
        icon: "solar:notification-unread-lines-linear",
        children: [
          {
            id: uniqueId(),
            name: "Forms Elements",
            url: "https://tailwindadmin-nextjs-main.vercel.app/forms/form-elements",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Forms Layouts",
            url: "https://tailwindadmin-nextjs-main.vercel.app/forms/form-layouts",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Forms Horizontal",
            url: "https://tailwindadmin-nextjs-main.vercel.app/forms/form-horizontal",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Forms Vertical",
            url: "https://tailwindadmin-nextjs-main.vercel.app/forms/form-vertical",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Forms Custom",
            url: "https://tailwindadmin-nextjs-main.vercel.app/forms/form-custom",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Form Validation",
            url: "https://tailwindadmin-nextjs-main.vercel.app/forms/form-validation",
            isPro: true
          },
        ],
      },
      {
        name: "Shadcn Forms",
        id: uniqueId(),
        icon: "solar:banknote-2-linear",
        children: [
          {
            id: uniqueId(),
            name: "Input",
            url: "https://tailwindadmin-nextjs-main.vercel.app/shadcn-form/input",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Select",
            url: "https://tailwindadmin-nextjs-main.vercel.app/shadcn-form/select",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Checkbox",
            url: "https://tailwindadmin-nextjs-main.vercel.app/shadcn-form/checkbox",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Radio",
            url: "https://tailwindadmin-nextjs-main.vercel.app/shadcn-form/radio",
            isPro: true
          },
        ],
      },
      {
        name: "Headless Forms",
        id: uniqueId(),
        icon: "solar:code-file-linear",
        children: [
          {
            id: uniqueId(),
            name: "Buttons",
            url: "https://tailwindadmin-nextjs-main.vercel.app/headless-form/buttons",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Checkbox",
            url: "https://tailwindadmin-nextjs-main.vercel.app/headless-form/checkbox",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Combobox",
            url: "https://tailwindadmin-nextjs-main.vercel.app/headless-form/combobox",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Fieldset",
            url: "https://tailwindadmin-nextjs-main.vercel.app/headless-form/fieldset",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Input",
            url: "https://tailwindadmin-nextjs-main.vercel.app/headless-form/input",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Listbox",
            url: "https://tailwindadmin-nextjs-main.vercel.app/headless-form/listbox",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Radio Group",
            url: "https://tailwindadmin-nextjs-main.vercel.app/headless-form/radiogroup",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Select",
            url: "https://tailwindadmin-nextjs-main.vercel.app/headless-form/select",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Switch",
            url: "https://tailwindadmin-nextjs-main.vercel.app/headless-form/switch",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Textarea",
            url: "https://tailwindadmin-nextjs-main.vercel.app/headless-form/textarea",
            isPro: true
          },
        ],
      },
    ],
  },
  {
    heading: "Pro Pages",
    children: [
      {
        id: uniqueId(),
        name: "Account Setting",
        icon: "solar:settings-minimalistic-linear",
        url: "https://tailwindadmin-nextjs-main.vercel.app/theme-pages/account-settings",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "FAQ",
        icon: "solar:question-circle-linear",
        url: "https://tailwindadmin-nextjs-main.vercel.app/theme-pages/faq",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Pricing",
        icon: "solar:tag-price-linear",
        url: "https://tailwindadmin-nextjs-main.vercel.app/theme-pages/pricing",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Landingpage",
        icon: "solar:three-squares-linear",
        url: "https://tailwindadmin-nextjs-main.vercel.app/landingpage",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Roll Base Access",
        icon: "solar:accessibility-linear",
        url: "https://tailwindadmin-nextjs-main.vercel.app/theme-pages/pricing",
        isPro: true
      },
    ],
  },
  {
    heading: "Widgets",
    children: [
      {
        id: uniqueId(),
        name: "Cards",
        icon: "solar:card-linear",
        url: "https://tailwindadmin-nextjs-main.vercel.app/widgets/cards",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Banners",
        icon: "solar:object-scan-linear",
        url: "https://tailwindadmin-nextjs-main.vercel.app/widgets/banners",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Charts",
        icon: "solar:pie-chart-2-linear",
        url: "https://tailwindadmin-nextjs-main.vercel.app/widgets/charts",
        isPro: true
      },
    ],
  },
  {
    heading: "Tables",
    children: [
      {
        name: "MUI Tables",
        id: uniqueId(),
        icon: "solar:widget-add-linear",
        url: "#",
        children: [
          {
            name: "Basic Tables",
            id: uniqueId(),
            url: "https://tailwindadmin-nextjs-main.vercel.app/tables/basic",
            isPro: true
          },
          {
            name: "Striped Rows Table",
            id: uniqueId(),
            url: "https://tailwindadmin-nextjs-main.vercel.app/tables/striped-row",
            isPro: true
          },
          {
            name: "Hover Table",
            id: uniqueId(),
            url: "https://tailwindadmin-nextjs-main.vercel.app/tables/hover-table",
            isPro: true
          },
          {
            name: "Checkbox Table",
            id: uniqueId(),
            url: "https://tailwindadmin-nextjs-main.vercel.app/tables/checkbox-table",
            isPro: true
          },
        ],
      },
      {
        name: "ShadCN Tables",
        id: uniqueId(),
        icon: "solar:tablet-linear",
        url: "#",
        children: [
          {
            name: "Basic Tables",
            id: uniqueId(),
            url: "https://tailwindadmin-nextjs-main.vercel.app/shadcn-tables/basic",
            isPro: true
          },
        ],
      },
      {
        name: "React Tables",
        id: uniqueId(),
        icon: "solar:chart-square-linear",
        url: "#",
        children: [
          {
            name: "Basic",
            id: uniqueId(),
            url: "https://tailwindadmin-nextjs-main.vercel.app/react-tables/basic",
            isPro: true
          },
          {
            name: "Dense",
            id: uniqueId(),
            url: "https://tailwindadmin-nextjs-main.vercel.app/react-tables/dense",
            isPro: true
          },
          {
            name: "Sorting",
            id: uniqueId(),
            url: "https://tailwindadmin-nextjs-main.vercel.app/react-tables/sorting",
            isPro: true
          },
          {
            name: "Filtering",
            id: uniqueId(),
            url: "https://tailwindadmin-nextjs-main.vercel.app/react-tables/filtering",
            isPro: true
          },
          {
            name: "Pagination",
            id: uniqueId(),
            url: "https://tailwindadmin-nextjs-main.vercel.app/react-tables/pagination",
            isPro: true
          },
          {
            name: "Row Selection",
            id: uniqueId(),
            url: "https://tailwindadmin-nextjs-main.vercel.app/react-tables/row-selection",
            isPro: true
          },
          {
            name: "Column Visibility",
            id: uniqueId(),
            url: "https://tailwindadmin-nextjs-main.vercel.app/react-tables/columnvisibility",
            isPro: true
          },
          {
            name: "Editable",
            id: uniqueId(),
            url: "https://tailwindadmin-nextjs-main.vercel.app/react-tables/editable",
            isPro: true
          },
          {
            name: "Sticky",
            id: uniqueId(),
            url: "https://tailwindadmin-nextjs-main.vercel.app/react-tables/sticky",
            isPro: true
          },
          {
            name: "Drag & Drop",
            id: uniqueId(),
            url: "https://tailwindadmin-nextjs-main.vercel.app/react-tables/drag-drop",
            isPro: true
          },
          {
            name: "Empty",
            id: uniqueId(),
            url: "https://tailwindadmin-nextjs-main.vercel.app/react-tables/empty",
            isPro: true
          },
          {
            name: "Expanding",
            id: uniqueId(),
            url: "https://tailwindadmin-nextjs-main.vercel.app/react-tables/expanding",
            isPro: true
          },
        ],
      },
    ],
  },
  {
    heading: "Charts",
    children: [
      {
        id: uniqueId(),
        name: "Line Chart",
        icon: "solar:chart-square-linear",
        url: "https://tailwindadmin-nextjs-main.vercel.app/charts/line",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Area Chart",
        icon: "solar:maximize-square-3-linear",
        url: "https://tailwindadmin-nextjs-main.vercel.app/charts/area",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Gradient Chart",
        icon: "solar:graph-down-new-linear",
        url: "https://tailwindadmin-nextjs-main.vercel.app/charts/gradient",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Candlestick",
        icon: "solar:tuning-3-linear",
        url: "https://tailwindadmin-nextjs-main.vercel.app/charts/candlestick",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Column",
        icon: "solar:chart-linear",
        url: "https://tailwindadmin-nextjs-main.vercel.app/charts/column",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Doughnut & Pie",
        icon: "solar:pie-chart-3-linear",
        url: "https://tailwindadmin-nextjs-main.vercel.app/charts/doughnut",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Radialbar & Radar",
        icon: "solar:round-graph-linear",
        url: "https://tailwindadmin-nextjs-main.vercel.app/charts/radialbar",
        isPro: true
      },
    ],
  },
  {
    heading: "Icons",
    children: [
      {
        id: uniqueId(),
        name: "Iconify Icons",
        icon: "solar:structure-linear",
        url: "/icons/iconify",
        isPro: false
      },
    ],
  },
  {
    heading: "Auth",
    children: [
      {
        id: uniqueId(),
        name: "Error",
        icon: "solar:link-broken-minimalistic-linear",
        url: "https://tailwindadmin-nextjs-main.vercel.app/auth/error",
        isPro: true
      },
      {
        name: "Login",
        id: uniqueId(),
        icon: "solar:login-2-linear",
        children: [
          {
            id: uniqueId(),
            name: "Side Login",
            url: "https://tailwindadmin-nextjs-main.vercel.app/auth/auth1/login",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Boxed Login",
            url: "/auth/login",
            isPro: false
          }
        ],
      },
      {
        name: "Register",
        id: uniqueId(),
        icon: "solar:user-plus-rounded-linear",
        children: [
          {
            id: uniqueId(),
            name: "Side Register",
            url: "https://tailwindadmin-nextjs-main.vercel.app/auth/auth1/register",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Boxed Register",
            url: "/auth/register",
            isPro: false
          }
        ],
      },
      {
        name: "Forgot Password",
        id: uniqueId(),
        icon: "solar:password-linear",
        children: [
          {
            id: uniqueId(),
            name: "Side Forgot Pwd",
            url: "https://tailwindadmin-nextjs-main.vercel.app/auth/auth1/forgot-password",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Boxed Forgot Pwd",
            url: "https://tailwindadmin-nextjs-main.vercel.app/auth/auth2/forgot-password",
            isPro: true
          }
        ],
      },
      {
        name: "Two Steps",
        id: uniqueId(),
        icon: "solar:shield-keyhole-minimalistic-linear",
        children: [
          {
            id: uniqueId(),
            name: "Side Two Steps",
            url: "https://tailwindadmin-nextjs-main.vercel.app/auth/auth1/two-steps",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Boxed Two Steps",
            url: "https://tailwindadmin-nextjs-main.vercel.app/auth/auth2/two-steps",
            isPro: true
          }
        ],
      },
      {
        id: uniqueId(),
        name: "Maintenance",
        icon: "solar:settings-linear",
        url: "https://tailwindadmin-nextjs-main.vercel.app/auth/maintenance",
        isPro: true
      },
    ],
  },

];

export default SidebarContent;
