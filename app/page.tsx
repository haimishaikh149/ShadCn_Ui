 'use client';
 import React from "react";
 

export default function Home(){
const handclick=()=> {
  alert("😍😍😍Assalam u Alaikum Frndz😍😍😍")
}
  return (
    <div style={{backgroundImage:
    "url('/gif.gif') "}}
     className="rounded-full h-40 ">
    <center>  <button onClick={handclick}
      style={{color:"yellow",margin:"40px"}}
      className="rounded h-10 w-20 bg-red-700">
        Click Me</button></center>
        
    </div>
  
  );

}