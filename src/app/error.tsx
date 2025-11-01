"use client";

import Link from "next/link";
import { Button } from "@/components/common/Button";
import { Home, Mail } from "lucide-react";
import ErrorAnimation from "@/components/errors/ErrorAnimation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-16 sm:py-20 bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center max-w-md w-full space-y-4">
        {/* Animation + Title + Retry handled client-side */}
        <ErrorAnimation error={error} reset={reset} />

        {/* Action Buttons (non-animated, static fallback) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <Link href="/">
            <Button size="lg" variant="outline">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Support Section */}
        <div className="pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground mb-2">
            If this problem persists, please contact our support team:
          </p>
          <Button variant="ghost" size="sm">
            <Mail className="w-4 h-4 mr-2" />
            team@spilldong.app
          </Button>
        </div>
      </div>
    </main>
  );
}
