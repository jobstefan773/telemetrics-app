import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardData = {
  title: string;
  description: string;
  content: string;
  total: string;
  footer: string;
};

export default function CardDashboard({ cards }: { cards: CardData[] }) {
  return (
    <div className='*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-main-white-accent *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6'>
      {cards.map((card, idx) => (
        <Card key={idx} data-slot='card'>
          <CardHeader>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className='text-2xl font-bold'>
              {card.content}
              <span className='text-sm font-medium'> / {card.total}</span>
            </p>
          </CardContent>
          <CardFooter>
            <p>{card.footer}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
