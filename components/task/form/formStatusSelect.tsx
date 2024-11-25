"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TaskStatus, TaskPriority } from "@/types";
import { useTranslations } from "next-intl";
import { UseFormReturn } from "react-hook-form";

interface Props {
  form: UseFormReturn<
    {
      title: string;
      description: string;
      status: TaskStatus;
      priority: TaskPriority;
      dueDate: Date;
    },
    unknown,
    undefined
  >;
}

const FormStatusSelect = ({ form }: Props) => {
  const t = useTranslations("task.form");

  const availeableStatus = Object.entries(TaskStatus).map(([key]) => ({
    value: key,
    label: `${t(key)}`,
  }));

  return (
    <FormField
      control={form.control}
      name="status"
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t("status")}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={t("statusPlaceholder")} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {availeableStatus.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export { FormStatusSelect };
