import {
  LayoutDashboard,
  Logs,
  ChartLine,
  Forklift,
  Battery,
  ChartNoAxesColumn,
  Settings,
} from "lucide-react";
import Image from "next/image";

import { LucideIcon } from "lucide-react";

export interface SidebarRoute {
  title: string;
  url: string;
  icon: LucideIcon;
}

// Menu items.
export const sidebarRoute: SidebarRoute[] = [
  {
    title: "Home",
    url: "/dashboard/home",
    icon: LayoutDashboard,
  },
  {
    title: "List",
    url: "/dashboard/list",
    icon: Logs,
  },
  {
    title: "Analytics",
    url: "/dashboard/analytics",
    icon: ChartNoAxesColumn,
  },
  {
    title: "Forklifts",
    url: "/dashboard/forklifts",
    icon: Forklift,
  },
  {
    title: "Battery",
    url: "/dashboard/battery",
    icon: Battery,
  },
  {
    title: "Fault Analysis",
    url: "/dashboard/fault-analysis",
    icon: ChartLine,
  },
];
