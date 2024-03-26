import "@rainbow-me/rainbowkit/styles.css";
import { Metadata } from "next";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react"
import "~~/styles/globals.css";

export const metadata: Metadata = {
  title: "DeVolt | The descentralized charging network",
  description: "Charge your car in the most blockchain way possible! | Built with 🏗 Scaffold-ETH 2",
  icons: "/favicon.ico"
};

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider enableSystem>
          <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
