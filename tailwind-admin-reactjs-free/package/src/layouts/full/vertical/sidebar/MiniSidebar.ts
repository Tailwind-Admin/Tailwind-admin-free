//  Profile Data
interface MiniiconsType {
  id: number;
  icon: string;
  tooltip: string;
}

const Miniicons: MiniiconsType[] = [
  {
    id: 1,
    icon: 'solar:layers-line-duotone',
    tooltip: 'Dashboards',
  },
  {
    id: 2,
    icon: 'solar:notes-line-duotone',
    tooltip: 'Pages',
  },
  {
    id: 3,
    icon: 'solar:palette-round-line-duotone',
    tooltip: 'Forms',
  },
  {
    id: 4,
    icon: 'solar:tuning-square-2-line-duotone',
    tooltip: 'Tables',
  },
  {
    id: 5,
    icon: 'solar:chart-line-duotone',
    tooltip: 'Charts',
  },
  {
    id: 6,
    icon: 'solar:widget-6-line-duotone',
    tooltip: 'Ui Components',
  },
  {
    id: 7,
    icon: 'solar:lock-keyhole-line-duotone',
    tooltip: 'Authentiction Pages',
  },
  {
    id: 8,
    icon: 'solar:mirror-left-line-duotone',
    tooltip: 'Docs & Others',
  },
];

export default Miniicons;
