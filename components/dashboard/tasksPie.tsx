"use client";

import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { BoardsData } from "@/types";
import { useTranslations } from "next-intl";

interface Props {
  boards: BoardsData;
}

const TasksPie = ({ boards }: Props) => {
  const t = useTranslations("dashboard.pie");

  const chartConfig: ChartConfig = {
    cant: { label: "Cant" },
    TODO: { label: t("todo"), color: "hsl(var(--chart-1))" },
    COMPLETED: { label: t("completed"), color: "hsl(var(--chart-2))" },
    CANCELED: { label: t("canceled"), color: "hsl(var(--chart-5))" },
    IN_PROGRESS: { label: t("inProgress"), color: "hsl(var(--chart-3))" },
  };

  const totalTasksByStatus = boards.reduce((acc, board) => {
    board.tasks.forEach((task) => {
      const existing = acc.find((item) => item.status === task.status);
      if (existing) {
        existing.cant += 1;
      } else {
        acc.push({
          status: task.status,
          cant: 1,
          fill: chartConfig[task.status]?.color || "hsl(0, 0%, 50%)",
        });
      }
    });
    return acc;
  }, [] as { status: string; cant: number; fill: string }[]);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>{t("tasks")}</CardTitle>
        <CardDescription>{t("allTasksStatus")}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <Pie
              data={totalTasksByStatus}
              dataKey="cant"
              nameKey="status"
              cx="50%"
              cy="50%"
              outerRadius="80%"
              fill="#8884d8"
            />
            <ChartLegend
              content={<ChartLegendContent nameKey="status" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center text-nowrap"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export { TasksPie };
