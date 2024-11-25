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
import { TaskStatus, TaskPriority, Task } from "@/types";
import { FormPrioritySelect } from "../form/formPrioritySelect";
import { FormDueDate } from "../form/formDueDate";
import { add } from "date-fns";
import { useKanbanContext } from "@/context/kanbanContext";
import { useTranslations } from "next-intl";

interface Props {
  boardId: string;
  columnId: string;
  handleSetIsOpen: () => void;
}

function NewTaskKanbanForm({ boardId, columnId, handleSetIsOpen }: Props) {
  const t = useTranslations("task.form");

  const { addNewTask } = useKanbanContext();

  const formSchema = z.object({
    title: z.string().min(2, {
      message: t("titleWarning"),
    }),
    description: z.string().min(2, {
      message: t("descriptionWarning"),
    }),
    status: z.nativeEnum(TaskStatus, {
      message: t("statusWarning"),
    }),
    priority: z.nativeEnum(TaskPriority, {
      message: t("priorityWarning"),
    }),
    dueDate: z.date({ message: t("dueDateWarning") }),
  });

  const today = new Date();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      status: (columnId as TaskStatus) || TaskStatus.TODO,
      priority: TaskPriority.LOW,
      dueDate: add(today, { weeks: 1 }),
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const data = await createTask({
        task: { ...values },
        boardId: boardId,
      });
      handleSetIsOpen();
      if (!data) {
        return null;
      }
      addNewTask(data as Task, columnId as TaskStatus);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col w-full items-center py-4"
      >
        <div className="flex flex-col w-full gap-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("title")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("title")} {...field} />
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
                <FormLabel>{t("description")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("description")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormPrioritySelect form={form} />
          <FormDueDate form={form} />
        </div>
        <div className="flex w-full justify-around mt-6 gap-6">
          <Button
            type="button"
            size="sm"
            variant="outline"
            className="w-full"
            onClick={handleSetIsOpen}
          >
            {t("cancel")}
          </Button>
          <Button size="sm" type="submit" className="w-full">
            {t("create")}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export { NewTaskKanbanForm };
