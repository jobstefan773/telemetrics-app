"use client";

import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import CardDashboard from "@/components/section-cards/card-dashboard";

import data from "../test-data.json";
import cardData from "../sample-card-data.json";
// import { ModeToggle } from "@/components/theme/mode-toggle";

export default function Page() {
  return (
    <>
      <div className='flex flex-1 flex-col'>
        <div className='@container/main flex flex-1 flex-col gap-2'>
          <div className='flex flex-col gap-4 py-4 md:gap-6 md:py-6'>
            <CardDashboard cards={cardData}></CardDashboard>
            <div className='px-4 lg:px-6'>
              <ChartAreaInteractive />
            </div>
            <DataTable data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
