"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createTask } from "@/lib/actions/task/createTask";
import { FormStatusSelect } from "./formStatusSelect";
import { TaskPriority, TaskStatus } from "@prisma/client";
import { FormPrioritySelect } from "./formPrioritySelect";
import { FormDueDate } from "./formDueDate";

interface Props {
  boardId: string;
}

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Task title must be at least 5 characters.",
  }),
  description: z.string().min(2, {
    message: "Board description must be at least 10 characters.",
  }),
  status: z.nativeEnum(TaskStatus, {
    message: "Status is required.",
  }),
  priority: z.nativeEnum(TaskPriority, {
    message: "Priority is required.",
  }),
  dueDate: z.date({ message: "Date is required." }),
});

function NewTaskForm({ boardId }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      status: TaskStatus.TODO,
      priority: TaskPriority.LOW,
      dueDate: new Date(),
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const data = await createTask({
      task: { ...values },
      boardId: boardId,
    });

    if (!data) {
      return null;
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center space-y-8"
      >
        <div className="flex">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title" {...field} />
                </FormControl>
                <FormDescription>This is your task title.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Description" {...field} />
                </FormControl>
                <FormDescription>
                  This is your task description.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex">
          <FormStatusSelect form={form} />
          <FormPrioritySelect form={form} />
          <FormDueDate form={form} />
        </div>
        <Button className="flex ml-auto" type="submit">
          Create
        </Button>
      </form>
    </Form>
  );
}

export { NewTaskForm };
