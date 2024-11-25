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
import { createBoard } from "@/lib/actions/board/createBoard";
import { useRouter } from "@/i18n/routing";
import { Board, BoardWithPartialTasks } from "@/types";
import { updateBoard } from "@/lib/actions/board/updateBoard";
import { useTranslations } from "next-intl";

interface Props {
  onOpenChange: () => void;
  board?: BoardWithPartialTasks;
}

function BoardForm({ onOpenChange, board }: Props) {
  const router = useRouter();
  const t = useTranslations("board.form");

  const formSchema = z.object({
    title: z.string().min(2, {
      message: t("titleWarning"),
    }),
    shortName: z
      .string()
      .min(5, {
        message: t("shortNameWarning1"),
      })
      .max(20, {
        message: t("shortNameWarning2"),
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: `${board ? board.title : ""}`,
      shortName: `${board ? board.shortName : ""}`,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const data: Board | null | undefined = board
        ? await updateBoard(board.boardId, values.title)
        : await createBoard(values);

      if (!data) {
        throw new Error("Operation failed: No data returned.");
      }

      onOpenChange();

      if (!board) {
        router.push(`/dashboard/boards/${data.boardId}`);
      }
    } catch (error) {
      console.error("Failed to submit board:", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
          name="shortName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("shortName")}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t("shortName")}
                  {...field}
                  disabled={!!board}
                />
              </FormControl>
              <FormDescription>{t("shortNameDescription")}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="flex ml-auto" type="submit">
          {board ? t("update") : t("create")}
        </Button>
      </form>
    </Form>
  );
}

export { BoardForm };
