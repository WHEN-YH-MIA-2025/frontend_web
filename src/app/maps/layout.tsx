import { NavigationProvider } from "@/contexts/NavigationContext";
import { ResponsiveNav } from "@/components/layout/ResponsiveNav";

export default function MapsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NavigationProvider>
      <div className="h-screen flex flex-col overflow-hidden">
        <ResponsiveNav />
        {/* Full-screen map without footer */}
        <div className="flex-1 relative overflow-hidden">
          {children}
        </div>
      </div>
    </NavigationProvider>
  );
}
