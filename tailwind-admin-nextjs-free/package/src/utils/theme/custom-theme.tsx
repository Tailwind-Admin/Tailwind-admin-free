import { createTheme } from "flowbite-react";



const customTheme = createTheme({
  button: {
    base: "group relative flex items-center justify-center p-0.5 text-center font-medium rounded-md cursor-pointer focus:shadow-none focus:ring-0",
    fullSized: "w-full",
    color: {
      primary: "bg-primary hover:!bg-primaryemphasis text-white",
      secondary: "bg-secondary hover:!bg-secondaryemphasis text-white",
      error: "bg-error text-white hover:!bg-erroremphasis",
      warning: "bg-warning text-white hover:!bg-warningemphasis",
      info: "bg-info text-white hover:!bg-infoemphasis",
      success: "bg-success text-white hover:!bg-successemphasis",
      muted: "bg-lightgray text-customdark dark:bg-darkmuted ",
      lighterror:
        "bg-lighterror dark:bg-darkerror text-error hover:bg-error hover:text-white",
      lightprimary:
        "bg-lightprimary text-primary hover:bg-primary dark:hover:bg-primary hover:text-white",
      lightsecondary:
        "bg-lightsecondary dark:bg-darksecondary text-secondary hover:bg-secondary dark:hover:bg-secondary hover:text-white",
      lightsuccess:
        "bg-lightsuccess dark:bg-darksuccess text-success hover:bg-success dark:hover:bg-success hover:text-white",
      lightinfo:
        "bg-lightinfo dark:bg-darkinfo text-info hover:bg-info dark:hover:bg-info hover:text-white",
      lightwarning:
        "bg-lightwarning dark:bg-darkwarning text-warning hover:bg-warning dark:hover:bg-warning hover:text-white",
      outlineprimary:
        "border border-primary bg-transparent text-primary hover:bg-primary dark:hover:bg-primary hover:text-white rounded-md",
      outlinesuccess:
        "border border-success bg-transparent text-success hover:bg-success dark:hover:bg-success hover:text-white rounded-md",
      outlinewhite:
        "border border-white bg-transparent text-white hover:bg-white dark:hover:bg-white hover:text-customdark ",
      transparent:
        "bg-transparent hover:bg-lightprimary dark:hover:bg-darkprimary hover:text-primary p-0",
    },
    size: {
      xs: "px-1.5 py-[1px] text-xs",
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-sm",
      lg: "px-5 py-2.5 text-base",
      xl: "px-6 py-3 text-base"
    },
    outline: {
      color: {
        primary: "border bg-transparent text-primary",
        secondary: "border bg-transparent text-secondary",
        success: "border bg-transparent text-success",
        info: "border bg-transparent text-info",
        warning: "border bg-transparent text-warning",
        error: "border bg-transparent text-error",
        white: "border bg-transparent text-white",
        dark: "border bg-transparent text-customdark",
        default: "border-1",
      },
      off: "",
      on: "transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit",
    },
    inner: {
      base: "flex items-center gap-2 transition-all duration-150 justify-center",
    },
  },
  buttonGroup: {
    base: "flex items-center cursor-pointer gap-0 transition-all duration-150 justify-start rtl:rounded",
  },
  badge: {
    root: {
      base: "flex h-fit w-fit items-center font-medium text-xs leading-none rounded-md",
      color: {
        primary: "bg-primary text-white",
        secondary: "bg-secondary text-white ",
        info: "bg-info text-white",
        success: "bg-success text-white",
        warning: "bg-warning text-white ",
        error: "bg-error text-white ",
        lightsuccess: "bg-lightsuccess dark:bg-lightsuccess text-success",
        lightprimary: "bg-lightprimary dark:bg-lightprimary text-primary",
        lightwarning: "bg-lightwarning dark:bg-lightwarning text-warning",
        lightinfo: "bg-lightinfo dark:bg-darkinfo text-info",
        lightsecondary:
          "bg-lightsecondary dark:bg-lightsecondary text-secondary",
        lighterror: "bg-lighterror dark:bg-lighterror text-error",
        lightgray: "bg-lightgray dark:bg-lightgray text-gray",
        graysubtle: "bg-lightemphasis dark:bg-lightgray text-charcoal",
        white: "bg-white dark:bg-darkmuted text-customdark",
        muted: "bg-lightgray dark:bg-darkmuted text-customdark",
        outlinesuccess: "bg-transparent dark:bg-transparent border border-success dark:border-success text-success dark:text-success",
        outlineprimary: "bg-transparent dark:bg-transparent border border-primary dark:border-primary text-primary dark:text-primary",
      },
    },
    icon: {
      off: "rounded-full px-2.5 py-[5px]",
      on: "rounded-full py-[5px] px-[10px] gap-1",
      size: {
        xs: "h-3 w-3",
        sm: "h-3.5 w-3.5",
      },
    },
  },

  tooltip: {
    target: "w-auto",
    base: "absolute z-10 inline-block rounded-md px-3 py-2 text-xs font-normal shadow-sm whitespace-nowrap",
  },

  card: {
    root: {
      base: "flex rounded-md shadow-none bg-background p-6 relative w-full break-words",
      children: "flex h-full flex-col justify-start gap-2 p-0",
    },
  },

  drawer: {
    root: {
      base: "fixed z-40 overflow-y-auto bg-white dark:bg-dark p-0 transition-transform",
    },
    header: {
      inner: {
        closeButton:
          "absolute end-2.5 top-3 flex h-8 w-8 items-center justify-center rounded-md bg-lightgray dark:bg-darkmuted text-primary",
        closeIcon: "h-4 w-4",
        titleText:
          "mb-4 inline-flex items-center text-base font-semibold text-ld",
      },
    },
  },

  modal: {
    base: "fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
    content: {
      base: "relative h-full w-full p-4 md:h-auto",
      inner:
        "relative flex max-h-[90dvh] flex-col rounded-md bg-background",
    },
    sizes: {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
    },
    body: {
      base: "flex-1 overflow-auto p-6",
      popup: "pt-0",
    },
    header: {
      base: "flex items-center justify-between  p-6 !border-b-0",
      popup: "border-b-0 p-2",
      title: "text-xl font-semibold text-customdark leading-[normal]",
      close: {
        base: "outline-none cursor-pointer ltr:ml-auto rtl:mr-auto items-center rounded-md bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
        icon: "h-5 w-5",
      },
    },
    footer: {
      base: "flex items-center gap-3 p-6 pt-2",
      popup: "border-none",
    },
  },

  dropdown: {
    arrowIcon: "ml-2 h-4 w-4",
    content: "focus:outline-none",
    floating: {
      animation: "transition-opacity",
      arrow: {
        base: "absolute z-10 h-2 w-2 rotate-45",
        style: {
          dark: "bg-dark dark:bg-dark",
          light: "bg-white",
          auto: "bg-background",
        },
        placement: "-4px",
      },
      base: "z-10 w-fit  items-center focus:outline-none  shadow-md text-start rounded-md",
      content: "py-2 text-sm text-darklink focus:outline-none",
      header: "block px-4 py-2 text-ld",
      item: {
        container: "focus:outline-none",
        base: "flex w-full cursor-pointer items-center justify-start px-4  py-2 text-sm text-ld hover:text-primary bg-hover  focus:bg-hover focus:outline-none ",
        icon: "mr-2 h-4 w-4",
      },
      style: {
        dark: "bg-dark text-white dark:bg-background",
        light: "border-none bg-white",
        auto: "border-none bg-background text-ld dark:border-none dark:text-white focus:outline-none",
      },
      target: "w-fit",
    },
    inlineWrapper: "flex items-center",
  },

  table: {
    root: {
      base: "w-full text-left text-sm text-gray-500 dark:text-gray-400",
      shadow:
        "absolute left-0 top-0 -z-10 h-full w-full  bg-transparent drop-shadow-md ",
      wrapper: "relative",
    },
    head: {
      base: "group/head text-sm font-medium capitalize text-customdark border-b  border-ld",
      cell: {
        base: "font-semibold px-4 py-4  dark:bg-background dark:text-darklink !bg-transparent ",
      },
    },
    body: {
      base: "group/body",
      cell: {
        base: "px-4 py-4 dark:bg-transparent",
      },
    },
    row: {
      base: "group/row bg-transparent ",
      hovered: "hover:bg-lightgray dark:hover:bg-lightprimary",
      striped:
        "odd:bg-transparent  even:bg-gray-50 odd:dark:bg-background even:dark:bg-gray-700",
    },
  },

  progress: {
    base: "w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",
    label: "mb-1 flex justify-between font-medium dark:text-white",
    bar: "space-x-2 rounded-full text-center font-medium leading-none text-white",
    color: {
      success: "bg-success",
      secondary: "bg-secondary",
      warning: "bg-warning",
      error: "bg-error",
      info: "bg-info",
      primary: "bg-primary",


    },
    size: {
      sm: "h-1",
      md: "h-1.5",
      lg: "h-4",
      xl: "h-6",
    },
  },

  rating: {
    star: {
      empty: "text-gray-300 dark:text-gray-500",
      filled: "text-warning",
      sizes: {
        sm: "h-4 w-4",
        md: "h-7 w-7",
        lg: "h-10 w-10",
        cs: "h-5 w-5",
      },
    },
  },

  breadcrumb: {
    root: {
      base: "",
      list: "flex items-center w-full",
    },
    item: {
      base: "group flex items-center",
      chevron: "mx-1 h-4 w-4 text-gray-400 group-first:hidden md:mx-2",
      href: {
        off: "flex items-center text-sm font-medium text-gray-500 dark:text-gray-400",
        on: "flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",
      },
      icon: "mr-2 h-4 w-4",
    },
  },

  accordion: {
    root: {
      base: "divide-y divide-defaultBorder",
      flush: {
        off: "rounded-md border-0 shadow-md border-ld",
        on: "border-b dark:border-defaultBorder",
      },
    },
    content: {
      base: "p-5 first:rounded-t-lg last:rounded-b-lg text-sm text-slateGray",
    },
    title: {
      arrow: {
        base: "h-6 w-6 shrink-0",
        open: {
          off: "",
          on: "rotate-180",
        },
      },
      base: "flex text-base w-full items-center justify-between p-5 text-start dark:text-white",
      flush: {
        off: " focus:ring-0 ",
        on: "bg-transparent dark:bg-transparent",
      },
      heading: "text-link dark:text-white",
      open: {
        off: "",
        on: "bg-transparent  dark:text-white",
      },
    },
  },

  tabs: {
    base: "flex flex-col gap-2",
    tablist: {
      base: "flex text-center",
      styles: {
        default: "flex-wrap border-b border-ld dark:border-gray-700",
        underline: "-mb-px flex-wrap border-b border-ld dark:border-gray-700 ",
        pills: "flex-wrap space-x-2 text-sm  text-gray-500 dark:text-gray-400 ",
        fullWidth:
          "grid w-full grid-flow-col divide-x divide-gray-200 rounded-none text-sm  shadow dark:divide-gray-700 dark:text-gray-400",
      },
      tabitem: {
        base: "flex items-center gap-2 justify-center rounded-t-lg py-3 px-4 text-sm  first:ml-0 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
        variant: {
          default: {
            base: "rounded-t-lg",
            active: {
              on: "bg-lightprimary text-primary ",
              off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300",
            },
          },
          underline: {
            base: "rounded-t-lg",
            active: {
              on: "active rounded-t-lg border-b-2 border-primary text-primary dark:border-primary dark:text-primary",
              off: "border-b-2 border-transparent text-gray-500 hover:primary hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
            },
          },
          pills: {
            base: "rounded-t-lg text-charcoal",
            active: {
              on: "rounded-md bg-cyan-600 text-white dark:text-white",
              off: "rounded-md text-charcoal hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white",
            },
          },
          fullWidth: {
            base: "ml-0 flex w-full  first:ml-0 ",
            active: {
              on: " active text-primary  bg-lightprimary p-4 ",
              off: "bg-background hover:bg-lightprimary hover:text-primary dark:hover:bg-gray-800 ",
            },
          },
        },
        icon: "mr-2 h-5 w-5",
      },
    },
    tabitemcontainer: {
      base: "",
      variant: {
        default: "",
        underline: "",
        pills: "",
        fullWidth: "",
      },
    },
    tabpanel: "py-3",
  },

  label: {
    root: {
      base: "text-sm font-semibold text-customdark",
      disabled: "opacity-100",
    },
  },

  alert: {
    base: "flex flex-col gap-2 p-4 text-sm",
    borderAccent: "border-t-4",
    color: {
      primary: "bg-primary text-white border-yellow-500",
      secondary: "bg-secondary text-white border-yellow-500",
      success: "bg-success text-white border-yellow-500",
      info: "bg-info text-white border-yellow-500",
      warning: "bg-warning text-customdark border-yellow-500 dark:text-yellow-800",
      error: "bg-error text-white border-yellow-500",
      dark: "bg-background text-white dark:bg-background border-yellow-500",
      lightsuccess:
        "bg-lightsuccess dark:bg-lightsuccess text-success border-success",
      lightprimary:
        "bg-lightprimary dark:bg-lightprimary text-primary border-primary",
      lightwarning:
        "bg-lightwarning dark:bg-lightwarning text-warning border-yellow-500",
      lightinfo: "bg-lightinfo dark:bg-darkinfo text-info border-info",
      lightsecondary:
        "bg-lightsecondary dark:bg-lightsecondary text-secondary border-secondary",
      lighterror: "bg-lighterror dark:bg-lighterror text-error border-error",
      lightgray:
        "bg-lightgray dark:bg-dark text-customdark border-lightgray",
    },
    icon: "mr-3 inline h-5 w-5 flex-shrink-0",
    rounded: "rounded-md",
    wrapper: "flex items-center",

    closeButton: {
      base: "-m-1.5 ml-auto inline-flex h-7 w-7 rounded-md p-1.5 focus:ring-0",
      icon: "h-4 w-4",
      color: {
        primary: "bg-transparent",
        secondary: "bg-transparent",
        success: "bg-transparent",
        info: "bg-transparent",
        warning: "bg-transparent",
        error: "bg-transparent",
        dark: "bg-transparent",
      },
    },
  },

  navbar: {
    collapse: {
      base: "w-full md:w-auto",
      list: "flex gap-2 items-center",
      hidden: {
        on: "hidden",
        off: "",
      },
    },
    link: {
      base: "text-base !py-1.5 !px-4 !me-0 hover:text-primary dark:hover:text-primary text-darklink rounded-full flex justify-center items-center cursor-pointer ",
      active: {
        on: "bg-lightprimary text-white dark:text-white",
        off: "text-customdark",
      },
    },
  },

  carousel: {
    root: {
      base: "relative h-full w-full",
      leftControl:
        "absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
      rightControl:
        "absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
    },
    indicators: {
      active: {
        off: "bg-lightgray dark:bg-darkmuted",
        on: "bg-primary dark:bg-primary",
      },
      base: "h-3 w-3 rounded-full ",
      wrapper: "absolute bottom-3 left-1/2 flex -translate-x-1/2 space-x-3",
    },

    control: {
      base: "inline-flex sm:h-10 sm:w-10 h-0 w-0 items-center justify-center rounded-full bg-lightgray hover:bg-primary hover:text-white  group-hover:bg-primary group-focus:outline-none group-focus:ring-0",
      icon: "sm:h-6 sm:w-6 h-0 w-0 text-customdark sm:h-4 sm:w-4 hover:text-white ",
    },
  },

  textarea: {
    base: "block w-full rounded-md border text-sm disabled:cursor-not-allowed disabled:opacity-50 !bg-transparent dark:!bg-transparent",
    colors: {
      gray: "border border-ld text-customdark  focus:border-primary focus:ring-0  dark:text-white dark:placeholder-gray-400 dark:focus:border-primary dark:focus:ring-0",
    },
  },

  toggleSwitch: {
    root: {
      base: "group flex rounded-md focus:outline-none",
      active: {
        on: "cursor-pointer",
        off: "cursor-not-allowed opacity-50",
      },
      label:
        "ms-3 mt-0.5 text-start text-sm font-medium text-gray-900 dark:text-gray-300",
    },

    toggle: {
      base: "relative rounded-full border after:absolute after:rounded-full after:bg-white after:transition-all  group-focus:ring-0",
      checked: {
        on: "after:translate-x-full after:border-white rtl:after:-translate-x-full",
        off: "border-ld bg-gray-200 dark:border-gray-600 dark:bg-gray-700",
        color: {
          blue: "bg-primary group-focus:ring-blue-300 dark:group-focus:ring-primary border-transparent",
          default: "bg-primary group-focus:ring-primary-300 dark:group-focus:ring-primary border-transparent",
        },
      },
      sizes: {
        sm: "h-5 w-9 min-w-9 after:left-px after:top-px after:h-4 after:w-4 rtl:after:right-px",
        md: "h-6 w-11 min-w-11 after:left-px after:top-px after:h-5 after:w-5 rtl:after:right-px",
        lg: "h-7 w-14 min-w-14 after:left-1 after:top-0.5 after:h-6 after:w-6 rtl:after:right-1",
      },
    },
  },

  hr: {
    root: {
      base: "my-8 h-px border-0 bg-gray-200 dark:bg-gray-700",
    },
    text: {
      base: "inline-flex relative w-full items-center justify-center",
      hrLine: "my-3 h-px w-full border-0 bg-defaultBorder",
      text: "absolute left-1/2 -translate-x-1/2 bg-background px-3 text-base font-medium text-customdark",
    },
  },

  datepicker:
  {
    root: {
      base: "relative"
    },
    popup: {
      root: {
        base: "absolute top-10 z-50 block pt-2",
        inline: "relative top-0 z-auto",
        inner: "inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700"
      },
      header: {
        base: "",
        title: "px-2 py-3 text-center font-semibold text-gray-900 dark:text-white",
        selectors: {
          base: "mb-2 flex justify-between",
          button: {
            base: "rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
            prev: "",
            next: "",
            view: ""
          }
        }
      },
      view: {
        base: "p-1"
      },
      footer: {
        base: "mt-2 flex space-x-2",
        button: {
          base: "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-primary-300",
          today: "bg-primary-700 text-white hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700",
          clear: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
        }
      }
    },
    views: {
      days: {
        header: {
          base: "mb-1 grid grid-cols-7",
          title: "h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400"
        },
        items: {
          base: "grid w-64 grid-cols-7",
          item: {
            base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
            selected: "bg-primary-700 text-white hover:bg-primary-600",
            disabled: "text-gray-500"
          }
        }
      },
      months: {
        items: {
          base: "grid w-64 grid-cols-4",
          item: {
            base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
            selected: "bg-primary-700 text-white hover:bg-primary-600",
            disabled: "text-gray-500"
          }
        }
      },
      years: {
        items: {
          base: "grid w-64 grid-cols-4",
          item: {
            base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
            selected: "bg-primary-700 text-white hover:bg-primary-600",
            disabled: "text-gray-500"
          }
        }
      },
      decades: {
        items: {
          base: "grid w-64 grid-cols-4",
          item: {
            base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
            selected: "bg-primary-700 text-white hover:bg-primary-600",
            disabled: "text-gray-500"
          }
        }
      }
    }
  },

  popover: {
    base: "absolute z-20 inline-block w-max max-w-[100vw] bg-white rounded-md outline-none shadow-sm dark:border-gray-600 dark:bg-gray-800",
    content: "z-10 overflow-hidden rounded-[7px]",
    arrow: {
      base: "absolute h-2 w-2 z-0 rotate-45 rounded-md mix-blend-lighten bg-white border border-ld dark:border-gray-600 dark:bg-gray-800 dark:mix-blend-color",
      placement: "-4px rounded-md",
    },
  },

  sidebar: {
    root: {
      inner: "bg-background rounded-none border border-defaultBorder px-0 py-0",
    },
    item: {
      base: "flex items-center justify-center rounded-md p-2.5 mb-0.5 gap-3  !text-sm text-start  leading-[normal] font-normal text-link hover:bg-lightprimary hover:text-primary dark:text-darklink  dark:hover:text-primary",
      content: {
        base: "flex-1 whitespace-nowrap px-0 leading-21",
      },
      active:
        "bg-primary !text-white dark:bg-primary !dark:text-primary",
    },

    collapse: {
      button:
        "group flex gap-3 items-center  rounded-md p-2.5 mb-0.5 text-sm text-start truncate leading-[normal] font-normal text-link hover:bg-lightprimary hover:text-primary dark:text-darklink w-full dark:hover:text-primary dark:hover:bg-lightprimary cursor-pointer",
      icon: {
        base: "h-6 w-6 text-link text-base",
      },
      label: {
        base: "flex justify-start flex-1 !ml-0 max-w-36 overflow-hidden truncate leading-[1.5]",
      },
    },
    itemGroup: {
      base: "mt-4 space-y-0 border-t border-ld pt-4 first:mt-0 first:border-t-0 first:pt-0 sidebar-nav ",
    },
  },

  timeline: {
    root: {
      direction: {
        horizontal: "sm:flex",
        vertical: "relative border-l border-ld dark:border-gray-700",
      },
    },
    item: {
      root: {
        horizontal: "relative mb-6 sm:mb-0",
        vertical: "mb-10 ml-6",
      },
      content: {
        root: {
          base: "mt-6",
          horizontal: "mt-3 sm:pr-8",
          vertical: "",
        },
        body: {
          base: "mb-4 text-base font-normal text-gray-500 dark:text-gray-400",
        },
        time: {
          base: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
        },
        title: {
          base: "text-lg font-semibold text-gray-900 dark:text-white",
        },
      },
      point: {
        horizontal: "flex items-center",
        line: "hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex",
        marker: {
          base: {
            horizontal:
              "absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
            vertical:
              "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
          },
          icon: {
            base: "h-3 w-3 text-cyan-600 dark:text-cyan-300",
            wrapper:
              "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-lightprimary ring-8 ring-white dark:bg-primary dark:ring-gray-900",
          },
        },
        vertical: "",
      },
    },
  },

  listGroup: {
    root: {
      base: "list-none rounded-md border border-defaultBorder bg-background overflow-hidden  text-left text-sm font-medium text-gray-900 dark:text-darklink ",
    },
    item: {
      base: "[&>*]:first:rounded-t-md [&>*]:last:rounded-b-md [&>*]:last:border-b-0 bg-hover",
      link: {
        base: "flex w-full items-center border-b border-defaultBorder px-4 py-3",
        active: {
          off: "hover:bg-hover focus:outline-none focus:ring-2 focus:ring-cyan-700 dark:border-defaultBorder dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500",
          on: "bg-cyan-700 text-white dark:bg-gray-800",
        },
        disabled: {
          off: "",
          on: "cursor-not-allowed bg-primary text-white hover:bg-hover hover:text-gray-900 focus:text-gray-900",
        },
        href: {
          off: "",
          on: "",
        },
        icon: "mr-2 h-4 w-4 fill-current",
      },
    },
  },

  pagination: {
    base: "",
    layout: {
      table: {
        base: "text-sm text-gray-700 dark:text-gray-400",
        span: "font-semibold text-gray-900 dark:text-white",
      },
    },
    pages: {
      base: "xs:mt-0 mt-2 inline-flex items-center -space-x-px",
      showIcon: "inline-flex",
      previous: {
        base: "ml-0 rounded-l-lg border border-ld  px-3 py-2 leading-tight  hover:bg-lightprimary hover:text-primary  dark:hover:bg-lightprimary dark:hover:text-primary",
        icon: "h-5 w-5",
      },
      next: {
        base: "rounded-r-lg border border-ld px-3 py-2 leading-tight  hover:bg-lightprimary hover:text-primary  dark:hover:bg-lightprimary dark:hover:text-primary",
        icon: "h-5 w-5",
      },
      selector: {
        base: "w-12 border border-ld py-2 leading-tight  hover:bg-lightprimary hover:text-primary  dark:hover:bg-lightprimary dark:hover:text-primary",
        active:
          "bg-primary text-white dark:bg-primary dark:text-white hover:text-white dark:hover:text-white",
        disabled: "cursor-not-allowed opacity-50",
      },
    },
  },
  toast: {
    root: {
      base: "flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-darkmuted dark:text-gray-400",
      closed: "opacity-0 ease-out"
    },
    toggle: {
      base: "-m-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white",
      icon: "h-5 w-5 shrink-0"
    }
  },
  fileInput:
  {
    base: "p-0!",
  }
});

export default customTheme;
