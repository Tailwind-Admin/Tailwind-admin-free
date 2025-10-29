// TopCard Modern Dash
export type CardInfo = {
  key: string;
  title: string;
  desc: string;
  img: string;
  bgcolor: string;
  textclr: string;
  url: string;
};



//QuarterlyStatus  Ecom dash
import type { BadgeVariants } from '@/components/ui/badge'

export type QuarterlyStatusItem = {
  key: string
  title: string
  subtitle: string
  record: number
  badgeColor: BadgeVariants['variant']
  bgcolor: string
}