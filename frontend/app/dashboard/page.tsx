"use client";

import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface DecodedToken {
  email: string;
  name: string;
  phoneNO: string;
  userType: string;
  exp: number;
  iat: number;
}

export default function Page() {
  const router = useRouter();

  const [user, setUser] = useState<DecodedToken | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    try {
      const decoded = jwtDecode<DecodedToken>(token);

      setUser(decoded);
    } catch (err) {
      console.log(err);

      localStorage.removeItem("token");

      router.push("/login");
    }
  }, [router]);

  if (!user) {
    return <div>Loading...</div>;
  }

function handleLogout(){
     localStorage.removeItem("token");
     router.push("/login")
}

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <h1>Welcome to dashboard</h1>

        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.userType}</p>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
}