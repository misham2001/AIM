import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Ashwas Church of God",
    description: "Welcome to Ashwas Church of God - A place of worship, community, and faith",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
