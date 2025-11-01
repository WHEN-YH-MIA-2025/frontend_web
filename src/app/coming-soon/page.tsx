import Link from "next/link";
import { Button } from "@/components/common/Button";
import { Home, Mail } from "lucide-react";
import ComingSoonAnimation from "@/components/errors/ComingSoonAnimation";

export default function ComingSoonPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-16 sm:py-20 bg-gradient-to-br from-brand-50 to-brand-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center max-w-md w-full space-y-6">
        {/* Animation and Title */}
        <ComingSoonAnimation />

        {/* Subtitle */}
        <p className="text-base text-muted-foreground">
          We’re putting the finishing touches on something amazing.  
          Stay tuned for updates — it’ll be worth the wait!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <Link href="/">
            <Button size="lg" variant="gradient">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </Link>

          <Button size="lg" variant="outline">
            <Mail className="w-5 h-5 mr-2" />
            Notify Me
          </Button>
        </div>

        {/* Footer Info */}
        <div className="pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Spilldong — All Rights Reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
