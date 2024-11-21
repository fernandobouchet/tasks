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

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Board title must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Board description must be at least 5 characters.",
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
}

function NewBoardForm({ onOpenChange }: Props) {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      shortName: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const data = await createBoard(values);
      if (data?.boardId) {
        onOpenChange();
        router.push(`/dashboard/boards/${data.boardId}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>
              <FormDescription>This is your board title.</FormDescription>
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
              <FormDescription>This is your board description.</FormDescription>
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
                <Input placeholder="Short name" {...field} />
              </FormControl>
              <FormDescription>This is your board short name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="flex ml-auto" type="submit">
          Create
        </Button>
      </form>
    </Form>
  );
}

export { NewBoardForm };
