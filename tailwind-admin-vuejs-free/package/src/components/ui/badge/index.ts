import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export { default as Badge } from "./Badge.vue";

export const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent text-white bg-primary",
        primary: "border-transparent text-white bg-primary",
        secondary: "border-transparent bg-secondary text-white",
        success: "border-transparent bg-success text-white",
        warning: "border-transparent bg-warning text-white",
        info: "border-transparent bg-info text-white",
        error: "border-transparent bg-error text-white",
        outline: "border-primary text-primary",
        outlineSecondary: "border-secondary text-secondary",
        outlineSuccess: "border-success text-success",
        outlineWarning: "border-warning text-warning",
        outlineError: "border-error text-error",
        outlineInfo: "border-info text-info",
        lightPrimary: "bg-lightprimary text-primary border-0",
        lightSecondary: "bg-lightsecondary text-secondary border-0",
        lightSuccess: "bg-lightsuccess text-success border-0",
        lightError: "bg-lighterror text-error border-0",
        lightInfo: "bg-lightinfo text-info border-0",
        lightWarning: "bg-lightwarning text-warning border-0",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground",
        gray: "bg-white dark:bg-darkmuted text-dark dark:text-white border-0",
        lightgray:
          "bg-lightgray dark:bg-darkmuted text-dark dark:text-white border-0",
        white: "bg-white dark:bg-darkmuted text-dark dark:text-white border-0",
        muted:
          "bg-lightgray dark:bg-darkmuted text-dark dark:text-white border-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
export type BadgeVariants = VariantProps<typeof badgeVariants>;
