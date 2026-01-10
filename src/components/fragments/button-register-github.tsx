import React from "react";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { toast } from "sonner";

function buttonRegisterGithub() {
  return (
    <Button
      variant={"outline"}
      onClick={() => toast.success("slebew")}
      className=" w-[80%] bg-black flex justify-center border border-black text-lg items-center py-2 px-20 gap-3 rounded-xl cursor-pointer text-white"
    >
      <FontAwesomeIcon icon={faGithub} className="fa-lg"></FontAwesomeIcon>
      <h1 className="">Login with Apple</h1>
    </Button>
  );
}

export default buttonRegisterGithub;
