import { NavigationProvider } from "@/contexts/NavigationContext";
import { ResponsiveNav } from "@/components/layout/ResponsiveNav";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavigationProvider>
        <ResponsiveNav />
      </NavigationProvider>
      {children}
    </div>
  );
}
