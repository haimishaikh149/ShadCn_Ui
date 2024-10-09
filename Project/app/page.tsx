'use client'
import React from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
const Handclick=()=>{
  alert("👍😍hellooo gyzz😍👍")
}

  return (
      <div >
        <Button onClick={Handclick} 
        variant={"outline"}
        style={{color:"purple",
          fontStyle:"italic",
          fontSize:"10px",
          textDecoration:"underline",
          backgroundColor:"pink"}}>
            Hello From Shadcn Button!
            </Button>
      </div>
     );
}
