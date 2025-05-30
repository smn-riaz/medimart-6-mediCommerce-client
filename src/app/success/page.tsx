"use client"


import {useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PaymentSuccessPage() {

  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="max-w-md w-full shadow-xl rounded-2xl p-4">
        <CardHeader className="text-center">
          <CheckCircle className="text-green-500 mx-auto mb-2" size={48} />
          <CardTitle className="text-2xl font-bold text-green-600">Payment Successful!</CardTitle>
          <p className="text-sm text-gray-500">Thank you for your purchase.</p>
        </CardHeader>

        <CardContent className="space-y-3 text-sm text-gray-700">

          <div className="pt-4">
            <Button className="w-full" onClick={() => router.push("/user/orders")}>
              View Orders
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

