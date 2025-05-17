"use client";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ThemeModeToggle from "@/components/theme/theme-toggle";
export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  return (
    <div className="relative w-full">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <QueryClientProvider client={queryClient}>
          {children}
          <div className="absolute top-3 left-3">
            <ThemeModeToggle />
          </div>
          {/* <ReactQueryDevtools buttonPosition="bottom-left" initialIsOpen={false} /> */}
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
}
