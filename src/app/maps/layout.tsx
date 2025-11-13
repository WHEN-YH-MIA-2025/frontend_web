import { NavigationProvider } from "@/contexts/NavigationContext";
import { ResponsiveNav } from "@/components/layout/ResponsiveNav";

export default function MapsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NavigationProvider>
      <div className="h-screen w-screen flex flex-col overflow-hidden fixed inset-0">
        <ResponsiveNav />
        {/* Full-screen map without footer */}
        <div className="flex-1 relative overflow-hidden touch-none">
          {children}
        </div>
      </div>
    </NavigationProvider>
  );
}
