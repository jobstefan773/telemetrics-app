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

import TelemetricsLogo from "../telemetrics-logo";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

import { NavUser } from "@/components/sidebar/nav-user";

const data = {
  user: {
    name: "Arj Tabudlong",
    email: "arjgwapo@techadvise.ph",
    avatar: "/ID-portrait.jpeg",
  },
};

// Menu items.
const items = [
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

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='offcanvas' {...props}>
      <SidebarHeader>
        <TelemetricsLogo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className='text-main-dark'>
            Dashboard
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className='rounded-md'>
                  <SidebarMenuButton
                    asChild
                    className='hover:bg-main-orange-accent hover:text-main-orange'
                    size='lg'
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title} </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
