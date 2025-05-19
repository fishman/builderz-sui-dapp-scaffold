import dynamic from "next/dynamic";
import { Toaster } from "sonner";
import "../styles/globals.css";
import AppBar from "../components/layout/AppBar";
import Footer from "../components/layout/Footer";

const LayoutWrapper = dynamic(
  () => import("./LayoutWrapper"),
  { ssr: false }
);

export const metadata = {
  title: "BUILDERZ Sui dApp Scaffold",
  description: "A starter template for building Sui dApps",
};

export default async function RootLayout({ children }: any) {
  return (
    <LayoutWrapper>
      <html lang="en">
        <body>
          <AppBar />
          <main className={`min-h-screen`}>{children}</main>
          <Footer />
          <Toaster position="bottom-right" />
        </body>
      </html>
    </LayoutWrapper>
  );
}
