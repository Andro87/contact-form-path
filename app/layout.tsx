import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.scss";

const karla = Karla({ subsets: ["latin"] });

export const viewport = {
    width: "device-width",
    initialScale: 1
};

export const metadata: Metadata = {
    title: "Frontend Mentor | Contact form",
    description:
        "A contact form from the Frontend Mentor platform that is part of tha accessibilty learning path"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={karla.className}>{children}</body>
        </html>
    );
}
