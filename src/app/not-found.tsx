import Link from "next/link";
import { Button } from "@/components/common/Button";
import { Home, Search } from "lucide-react";
import NotFoundAnimation from "@/components/errors/NotFoundAnimation";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-16 sm:py-20 bg-gradient-to-br from-brand-50 to-brand-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center max-w-md w-full space-y-4">
        {/* Animation */}
        <NotFoundAnimation />

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold">Oops! Page Not Found</h1>
        <p className="text-base text-muted-foreground">
          Looks like you’ve wandered off campus! The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <Link href="/">
            <Button size="lg" variant="gradient">
              <Home className="w-5 h-5 mr-2" />
              Home
            </Button>
          </Link>
          <Link href="/maps">
            <Button size="lg" variant="outline">
              <Search className="w-5 h-5 mr-2" />
              Explore
            </Button>
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground mb-2">
            You might be looking for:
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <Link href="/umkm" className="text-brand-600 dark:text-brand-400 hover:underline">
              Businesses
            </Link>
            <Link href="/about" className="text-brand-600 dark:text-brand-400 hover:underline">
              About Us
            </Link>
            <Link href="/maps" className="text-brand-600 dark:text-brand-400 hover:underline">
              Campus Map
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
