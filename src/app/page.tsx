import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Video from "./components/Video";


export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Video/>
    </>
  );
}
