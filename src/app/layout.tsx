// import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from '@/components/Footer/Footer';

// const geistSans = Geist({
// 	variable: "--font-geist-sans",
// 	subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
// 	variable: "--font-geist-mono",
// 	subsets: ["latin"],
// });

export const metadata: Metadata = {
	title: "El de Fiar",
	description: "El de Fiar Description",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
	return (
    	<html lang="en">
      		<body>
				<Navbar />
        		{children}
				<Footer />
      		</body>
    	</html>
  	);
}