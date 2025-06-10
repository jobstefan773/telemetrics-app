import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { PercentageBar, Segment } from "@/components/percentage-bar";

export interface StatusCardProps {
  title: string;
  subtitle: string;
  current: number;
  total: number;
  segments: Segment[];
}

export default function CardDashboard({ data }: { data: StatusCardProps[] }) {
  return (
    <div className='*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 lg:px-6'>
      {data.map((data, idx) => (
        <Card key={idx} data-slot='card'>
          <CardHeader>
            <CardTitle>{data.title}</CardTitle>
            <CardDescription>{data.subtitle}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className='text-2xl font-bold'>
              {data.current}
              <span className='text-sm font-medium'> / {data.total}</span>
            </p>
          </CardContent>
          <CardFooter>
            <div className='w-full'>
              <PercentageBar segments={data.segments} height='h-3' />
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
