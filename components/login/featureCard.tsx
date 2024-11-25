import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface Props {
  feature: {
    icon: LucideIcon;
    title: string;
    description: string;
  };
}

function FeatureCard({ feature }: Props) {
  return (
    <Card>
      <CardHeader>
        <div className="mb-4">
          <feature.icon />
        </div>
        <CardTitle>{feature.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="mt-auto">
          {feature.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
export { FeatureCard };
