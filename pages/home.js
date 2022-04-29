import Head from "next/Head"
import Link from "next/Link"
import Navbar from "./Navbar"


function portfolio() {
  return ( 

<>

<Head>
  <title>Olakunle's Portfolio</title>
  <link rel="icon" href="/briefcase.png"></link>
</Head>

<div className=" antialiased min-h-screen text-white bg-cover pt-10" style= {{ backgroundImage: `url('https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg')`}}>

<Navbar />

<div className=" p-16 space-y-10">

  <div className="text-5xl tracking-widest italic ">
<div>Hi, I'm <span className="text-7xl">O</span>lakunle <span className="text-7xl">S</span>tephen</div>
  </div>
  <div className="text-2xl font-semibold space-y-5 ">
<div>I'm a Front-end Developer based in Nigeria.</div> 
 <div>I Code, Write and Build Stuff on the Internet.</div>
  </div>
<div className="text-2xl font-semibold space-y-5 pt-10">
<div >I'm focused on building products with HTML5, CSS3 and JavaScript, Specifically Tailwindcss and Next.js .</div>
<div>When I'm not coding, I'm likely at the gym or Playing Video Games (COD or PUGB).</div>
<div>You can find me on <a href="https://github.com/skad12" className="text-blue-500 hover:underline">GitHub</a>, <a href="https://twitter.com/TheOnlySkad" className="text-blue-500 hover:underline">Twitter</a> or <a href="https://www.linkedin.com/in/afuwape-stephen-b917211b0/" className="text-blue-500 hover:underline">LinkedIn</a>.</div>
</div>
</div>
</div>

</>
    
   );
}

export default portfolio;