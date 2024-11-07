import Hero from "@/components/hero";
import Appbar from "../components/appbar";
import Content from "@/components/content";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react"
export default function Home() {
  return (
    <div className="bg-gradient-to-b from-yellow-400 via-orange-500 to-yellow-600 min-h-screen">
    <Analytics/>
    <Appbar/>
    <Hero/>
    <Content/>
    <Footer/>
    </div>
  );
}
