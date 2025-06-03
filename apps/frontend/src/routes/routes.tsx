import {
  LayoutDashboard,
  Logs,
  ChartLine,
  Forklift,
  Battery,
  ChartNoAxesColumn,
} from "lucide-react";

import { LucideIcon } from "lucide-react";

export interface Route {
  title: string;
  url: string;
}

export interface SidebarRoute extends Route {
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

export const AuthRoutes: Route[] = [
  {
    title: "Sign Up",
    url: "/signup",
  },
  {
    title: "Login",
    url: "/",
  },
];
