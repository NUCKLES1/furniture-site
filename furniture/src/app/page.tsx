import Image from "next/image";
import Homepage from "./pages/page";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function Home() {

  return (
    <main className="w-full h-full">
    <Homepage />
    <Footer />
    </main>
  );
}
