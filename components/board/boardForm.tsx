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
import { useRouter } from "next/navigation";
import { Board, BoardWithPartialTasks } from "@/types";
import { updateBoard } from "@/lib/actions/board/updateBoard";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Board title must be at least 2 characters.",
  }),
  shortName: z
    .string()
    .min(5, {
      message: "Board short name must be at least 5 characters.",
    })
    .max(20, {
      message: "Board short name must be 20 characters máx.",
    }),
});

interface Props {
  onOpenChange: () => void;
  board?: BoardWithPartialTasks;
}

function BoardForm({ onOpenChange, board }: Props) {
  const router = useRouter();

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
          name="shortName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Short name</FormLabel>
              <FormControl>
                <Input placeholder="Short name" {...field} disabled={!!board} />
              </FormControl>
              <FormDescription>
                This is a unique, short identifier for the board, cannot be
                changed once created.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="flex ml-auto" type="submit">
          {board ? "Update" : "Create"}
        </Button>
      </form>
    </Form>
  );
}

export { BoardForm };
