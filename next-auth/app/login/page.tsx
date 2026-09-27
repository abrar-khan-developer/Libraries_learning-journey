"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";




function page() {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const router = useRouter();

    const handleLogin = async () => {
        
        const result = await signIn("credentials", {
            email,
            password,
            // redirect: false,
            redirect: true,
            // callbackUrl: "/dashboard",
        });

        if (result?.ok) {
            router.push("/dashboard");
        }
        console.log(result);
    };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-3">

        <input  
            className="mt-2 border border-gray-300 rounded-md p-2"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

        <input
            className="mt-2 border border-gray-300 rounded-md p-2"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />

        <button 
            className="mt-2 border border-gray-300 rounded-md p-2 cursor-pointer hover:bg-gray-100"
            onClick={handleLogin}>
                Login
        </button>

    </div>
  )
}

export default page
