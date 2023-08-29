"use client";
import { useState, useRef, useEffect } from "react";
import Heading from "@/components/heading";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ChatCompletionRequestMessage } from "openai";
import { useProModal } from "@/hooks/use-pro-modal";
import { toast } from "react-hot-toast";

import { formSchema } from "./constants";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Empty } from "@/components/empty";
import { cn } from "@/lib/utils";
import { BotAvatar } from "@/components/bot-avatar";
import { UserAvatar } from "@/components/avatar";
import Lotties from "@/components/ui/lotties";

const Conversation: React.FC = () => {
  const router = useRouter();
  const proModal = useProModal();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { prompt: "" },
  });

  const chatRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/conversation", {
        messages: newMessages,
      });
      setMessages((current) => [...current, userMessage, response.data]);

      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <div className="h-full overflow-hidden flex flex-col">
      <div className="h-full overflow-hidden">
        {/* No conversation started */}
        {messages.length === 0 && !isLoading && (
          <Empty label="No conversation started." />
        )}

        {/* Chat */}
        <div
          ref={chatRef}
          className="flex flex-col gap-6 px-3 py-6 overflow-auto h-full"
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={cn(
                "flex gap-2",
                msg.role === "user"
                  ? "flex-row-reverse pl-10 lg:pl-20"
                  : "pr-10 lg:pr-20"
              )}
            >
              <div className="hidden md:flex">
                {msg.role === "user" ? <UserAvatar /> : <BotAvatar />}
              </div>
              <div
                className={cn(
                  " px-4 py-2 rounded-md flex items-center shadow-lg border",
                  msg.role === "user" ? "bg-blue-500" : "bg-slate-500 "
                )}
              >
                <p className="text-sm text-white">{msg.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Loader */}
      <div className="flex w-full items-center justify-center">
        {isLoading && <Lotties height={50} />}
      </div>

      {/*input chat*/}
      <div className="px-4 pb-2 flex flex-col w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="rounded-lg border w-full p-2 md:p-4 px-3 md:px-6 focus-within:shadow-sm flex flex-col md:flex-row bg-white"
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-10 w-full">
                  <FormControl className="m-0 p-0">
                    <Input
                      className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent w-full px-2"
                      disabled={isLoading}
                      placeholder="How do I calculate the radius of a circle?"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className="col-span-12 lg:col-span-2" disabled={isLoading}>
              Generate
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Conversation;
