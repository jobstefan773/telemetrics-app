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
    url: "/home",
    icon: LayoutDashboard,
  },
  {
    title: "List",
    url: "/list",
    icon: Logs,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: ChartNoAxesColumn,
  },
  {
    title: "Forklifts",
    url: "/forklifts",
    icon: Forklift,
  },
  {
    title: "Battery",
    url: "/battery",
    icon: Battery,
  },
  {
    title: "Fault Analysis",
    url: "/fault-analysis",
    icon: ChartLine,
  },
];
