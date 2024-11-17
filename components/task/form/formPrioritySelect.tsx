"use client";

import {
  FormControl,
  FormDescription,
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
const availeableStatus = Object.entries(TaskPriority).map(([key]) => ({
  value: key,
  label: `${key}`,
}));

const FormPrioritySelect = ({ form }: Props) => {
  return (
    <FormField
      control={form.control}
      name="priority"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Priority</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select current task priority" />
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
          <FormDescription>This is the current task priority.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export { FormPrioritySelect };
