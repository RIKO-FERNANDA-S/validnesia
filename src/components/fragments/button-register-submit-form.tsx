import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

interface ButtonRegisterSubmitProps {
    loading: boolean;
    children: React.ReactNode;
}

function ButtonRegisterSubmit({children, loading}: ButtonRegisterSubmitProps) {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast.promise<{ name: string }>(
          () =>
            new Promise((resolve) =>
              setTimeout(() => resolve({ name: "Event" }), 2000)
            ),
          {
            loading: "Loading...",
            success: (data) => `${data.name} has been created`,
            error: "Error",
          }
        );
      }}
      type="submit"
      className="w-[90%] py-5 cursor-pointer"
    >
      {!loading ? (
        <span className="flex gap-2 items-center">
          loscul
          <ArrowRight className="ml-2" />
        </span>
      ) : (
        "sabar"
      )}
    </Button>
  );
}

export default ButtonRegisterSubmit;
