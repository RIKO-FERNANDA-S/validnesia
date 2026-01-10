import React from "react";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function buttonLoginGoogle() {
  return (
    <Button className=" w-[80%] flex justify-center border border-black text-lg items-center py-2 px-20 gap-3 rounded-xl cursor-pointer ">
      <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
      <h1 className="">Login with Google</h1>
    </Button>
  );
}

export default buttonLoginGoogle;
