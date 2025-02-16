import React, { useState } from "react";
import AuthCard from "./auth/AuthCard";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleAuth = async (
    data: { email: string; password: string },
    type: "signin" | "signup",
  ) => {
    setIsLoading(true);
    try {
      window.location.href =
        "https://github.com/login/oauth/authorize?client_id=YOUR_GITHUB_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=user";

      toast({
        title: "Success!",
        description: `${type === "signin" ? "Signed in" : "Account created"} successfully!`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Authentication failed. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1599256621730-535171e28e50?q=80&w=2071&auto=format&fit=crop)",
          backgroundRepeat: "repeat",
        }}
      />
      <div className="relative z-10">
        <AuthCard onSubmit={handleAuth} isLoading={isLoading} />
      </div>
      <Toaster />
    </div>
  );
}
