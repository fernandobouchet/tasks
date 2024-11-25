"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createTask } from "@/lib/actions/task/createTask";
import { FormStatusSelect } from "./formStatusSelect";
import { FormPrioritySelect } from "./formPrioritySelect";
import { TaskStatus, TaskPriority, Task } from "@/types";
import { FormDueDate } from "./formDueDate";
import { add } from "date-fns";
import { updateTask } from "@/lib/actions/task/updateTask";

interface Props {
  boardId: string;
  handleSetIsOpen: () => void;
  task?: Task;
  kanbanUpdateTask?: (updatedTask: Task) => void;
}

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Task title must be at least 5 characters.",
  }),
  description: z.string().min(2, {
    message: "Task description must be at least 10 characters.",
  }),
  status: z.nativeEnum(TaskStatus, {
    message: "Status is required.",
  }),
  priority: z.nativeEnum(TaskPriority, {
    message: "Priority is required.",
  }),
  dueDate: z.date({ message: "Task due date is required." }),
});

function TaskForm({ boardId, handleSetIsOpen, task, kanbanUpdateTask }: Props) {
  const today = new Date();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: task?.title || "",
      description: task?.description || "",
      status: task?.status || TaskStatus.TODO,
      priority: task?.priority || TaskPriority.LOW,
      dueDate: task?.dueDate || add(today, { weeks: 1 }),
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      let data = null;

      if (task) {
        handleSetIsOpen();
        const updatedTask = {
          task: {
            taskId: task.taskId,
            boardId: task.boardId,
            ...values,
          },
        };
        data = await updateTask(updatedTask);
        if (kanbanUpdateTask) {
          kanbanUpdateTask(data as Task);
        }
      } else {
        data = await createTask({
          task: { ...values },
          boardId: boardId,
        });
        handleSetIsOpen();
      }

      if (!data) {
        throw new Error("Operation failed: No data returned.");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col w-full items-center"
      >
        <div className="flex flex-col w-full gap-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title" {...field} />
                </FormControl>
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
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex w-full justify-between items-center py-4">
          <FormStatusSelect form={form} />
          <FormPrioritySelect form={form} />
          <FormDueDate form={form} />
        </div>
        <Button className="flex ml-auto" type="submit">
          {task ? "Update" : "Create"}
        </Button>
      </form>
    </Form>
  );
}

export { TaskForm };