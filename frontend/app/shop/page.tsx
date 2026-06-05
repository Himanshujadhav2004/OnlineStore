"use client"
import { Button } from "@/components/ui/button";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
export default function page(){
    const router =useRouter();
    const[user,SetUser] =useState("");

    function handleLogout(){
localStorage.removeItem("token");
router.push('/login')
    }
    
    useEffect(()=>{
        const token = localStorage.getItem("token");
  if(token){
        const decode = jwtDecode(token);
 SetUser(decode.name);
    }
    })
  
   
return(<div>
<h1>Welcome {user}</h1>
<Button className="bg-red-400 text-white" onClick={handleLogout}>Logout</Button>

</div>)
}