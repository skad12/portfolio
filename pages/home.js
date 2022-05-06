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

<div className="min-h-screen pt-10 antialiased text-white bg-cover " style= {{ backgroundImage: `url('https://images.pexels.com/photos/355829/pexels-photo-355829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}>

<Navbar />

<div className="p-16 pt-24 space-y-10 ">

  <div className="text-4xl italic tracking-widest ">
<div>
  <span className="text-8xl">H</span>i, I'm <span className="text-7xl">O</span>lakunle <span className="text-7xl">S</span>tephen <span className="text-7xl animate-pulse">&#128075;</span></div>

  </div>
  <div className="space-y-5 text-2xl font-semibold ">
<div>I'm a Front-end Developer based in Nigeria.</div> 
 <div>I Code, Write and Build Stuff on the Internet.</div>
  </div>
<div className="pt-10 space-y-5 text-2xl font-semibold">
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