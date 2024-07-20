import Intro from "@/components/Intro";

import Herocontent from '@/components/Herocontent'
import Collaboration from "@/components/Collaboraiton";
import Branding from "@/components/Branding";
import Header from "@/components/Header";


export default function Home() {
  const text = `Influencer Nexus: Where Creativity Meets Commerce`
  return (
    <main>
      <Header ></Header>
     <Intro text={text}/>
     <Herocontent />
     <Collaboration />
    <Branding />
    </main>
  );
}
