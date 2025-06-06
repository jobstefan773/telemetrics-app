import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { StatusIndicator } from "../card-status";

type CardInfo = {
  title: string;
  description: string;
};

type CardData = {
  total_online: number;
  total_offline: number;
  total_number: number;
};

export default function CardDashboard({
  cards,
  data,
}: {
  cards: CardInfo[];
  data: CardData[];
}) {
  return (
    <div className='*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 lg:px-6'>
      {/* Gradient background for cards:
       *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-main-white-accent *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card */}
      {cards.map((card, idx) => (
        <Card key={idx} data-slot='card'>
          <CardHeader>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className='text-2xl font-bold'>
              {data[idx]?.total_online}
              <span className='text-sm font-medium'>
                {" "}
                / {data[idx]?.total_number}
              </span>
            </p>
          </CardContent>
          <CardFooter className='grid grid-cols-3 gap-8'>
            <div className='flex gap-2'>
              <StatusIndicator
                label='Online'
                color='green'
                className='font-light'
              />
              <span className='font-medium'>{data[idx]?.total_online}</span>
            </div>
            <div className='flex gap-2'>
              <StatusIndicator
                label='Offline'
                color='red'
                className='font-light'
              />
              <span className='font-medium'>{data[idx]?.total_offline}</span>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
