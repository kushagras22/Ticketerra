"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Return() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white text-center">
            <div className="mb-4 flex justify-center">
              <CheckCircle2 className="w-16 h-16" />
            </div>
            <h2 className="text-2xl font-bold mb-2 rubik">
              Account Connected!
            </h2>
            <p className="text-green-100 web-light">
              Your Stripe account has been successfully connected
            </p>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                <h3 className="font-medium text-green-900 mb-1 rubik">
                  What happens next?
                </h3>
                <ul className="text-sm text-green space-y-2">
                  <li>• You can now create and sell tickets for events.</li>
                  <li>
                    • Payments will be processed through your Stripe account.
                  </li>
                  <li>• Funds will be transferred automatically.</li>
                </ul>
              </div>

              <Link href={"/seller"} className="w-full bg-blue-600 text-white text-center py-3 px-4 rounded-lg rubik font-medium hover:bg-blue-700  transition-colors duration-200 flex items-center justify-center gap-2">
                Go to Seller Dashboard
                <ArrowRight className="w-4 h-4"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
