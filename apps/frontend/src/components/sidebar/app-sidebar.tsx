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
    avatar: "/avatars/shadcn.jpg",
  },
};

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    title: "List",
    url: "#",
    icon: Logs,
  },
  {
    title: "Analytics",
    url: "#",
    icon: ChartNoAxesColumn,
  },
  {
    title: "Forklifts",
    url: "#",
    icon: Forklift,
  },
  {
    title: "Battery",
    url: "#",
    icon: Battery,
  },
  {
    title: "Fault Analysis",
    url: "#",
    icon: ChartLine,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className='flex flex-row pt-4 px-2'>
          {" "}
          {/* <Image
            src='/TechAdvise-Logo.png'
            width={150}
            height={150}
            alt='Picture of the author'
            // className='mb-4'
          ></Image> */}
          <p>
            <strong className='text-2xl'>Telemetrics</strong>
          </p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
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
