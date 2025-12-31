import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import RecentProjects from "@/components/RecentProjects";
import Grid from "@/components/Grid";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="relative bg-black w-full flex justify-center items-center flex-col overflow-hidden
    mx-auto xs:px-10 px-5">
      <div className="max-w-6xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
      </div>
    </main>
  );
}
