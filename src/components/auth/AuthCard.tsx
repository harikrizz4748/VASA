import React from "react";
import AuthForm from "./AuthForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AuthCardProps {
  onSubmit?: (
    data: { email: string; password: string },
    type: "signin" | "signup",
  ) => Promise<void>;
  isLoading?: boolean;
}

export default function AuthCard({
  onSubmit = async () => {},
  isLoading = false,
}: AuthCardProps) {
  return (
    <Card className="w-[450px] bg-white shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">
          Welcome to Lorry Workshop
        </CardTitle>
      </CardHeader>
      <CardContent>
        <AuthForm onSubmit={onSubmit} isLoading={isLoading} />
      </CardContent>
    </Card>
  );
}
