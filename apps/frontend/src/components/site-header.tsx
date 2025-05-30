"use client";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { SidebarRoute, sidebarRoute } from "@/routes/routes";

import { usePathname } from "next/navigation";

export function SiteHeader({ routes }: { routes: SidebarRoute[] }) {
  const pathname = usePathname();
  const crumbs = routes.filter(
    (route) => pathname.startsWith(route.url) && route.url !== "/"
  );

  return (
    <header className='group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear'>
      <div className='flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6'>
        <SidebarTrigger className='-ml-1' />
        <Separator
          orientation='vertical'
          className='mx-2 data-[orientation=vertical]:h-4'
        />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/dashboard/home'>Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            {crumbs.map((route, idx) => (
              <React.Fragment key={route.url}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {idx === crumbs.length - 1 ? (
                    <BreadcrumbPage>{route.title}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={route.url}>
                      {route.title}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}
