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
    <div>

        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default page
