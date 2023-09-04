"use client";

import axios from "axios";
import { useState } from "react";
import { Zap } from "lucide-react";
import { toast } from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { useProModal } from "@/hooks/use-pro-modal";

export const SubscriptionButton = ({ isPro = false }: { isPro: boolean }) => {
  const [loading, setLoading] = useState(false);
  const proModal = useProModal();

  const onClick = async () => {
    try {
      setLoading(true);
      if (isPro) {
        const response = await axios.get("/api/stripe");
        window.location.href = response.data.url;
      } else {
        proModal.onOpen();
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant={isPro ? "default" : "premium"}
      disabled={loading}
      onClick={onClick}
    >
      <p className=" text-xs lg:text-sm">
        {isPro ? "Manage Subscription" : "Upgrade"}
      </p>
      {!isPro && <Zap className="w-4 h-4 ml-2 fill-white" />}
    </Button>
  );
};
