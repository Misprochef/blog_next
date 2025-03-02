import "./globals.css";
import { draftMode } from "next/headers";
import { Inter } from "next/font/google";
import { ExitDraftModeLink } from "../components/link/ExitDraftModeLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "Misprochef Blog",
    default: "Misprochef Blog",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {draftMode().isEnabled && (
          <p className="bg-orange-200 py-4 px-[6vw]">
            Draft mode is on! <ExitDraftModeLink className="underline" />
          </p>
        )}
        {children}
      </body>
    </html>
  );
}
