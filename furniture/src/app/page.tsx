"use client"
import Image from "next/image";
import Homepage from "./pages/Homepage";
import { useEffect } from "react";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="w-full h-full">
    <Homepage />
    <Footer />
    </main>
  );
}
