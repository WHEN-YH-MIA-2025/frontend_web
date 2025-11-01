import { NavigationProvider } from "@/contexts/NavigationContext";
import { ResponsiveNav } from "@/components/layout/ResponsiveNav";
import { Footer } from "@/components/layout/Footer";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NavigationProvider>
      <div className="min-h-screen flex flex-col">
        <ResponsiveNav />
        {/* Main content with padding for fixed navigation */}
        <div className="md:pt-0 md:pb-0 flex-1">
          {children}
        </div>
        <Footer />
      </div>
    </NavigationProvider>
  );
}
