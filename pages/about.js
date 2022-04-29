import Head from "next/Head"
import Navbar from "./Navbar";

function about() {
    return ( 

        <>
        
        <Head>
        <title>About</title>
        <link rel="icon" href="/briefcase.png"></link>
        </Head>

        
<div className=" text-white min-h-screen space-y-10 bg-gray-200 p-10 pt-10 bg-cover" style={{ backgroundImage: `url('https://images.pexels.com/photos/2802688/pexels-photo-2802688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}>

<Navbar />
    
    <div className="text-6xl font-bold italic">About Me</div>

    <div className="text-2xl space-y-4">
   <div>   My name is <span className="text-4xl  italic">Olakunle Stephen</span> I'm a Front-End Developer based in Abuja, Nigeria. I'm a passionate developer who loves coding, open source, and the web platform ❤️.</div>
  <div>    I build and create product that solves real-life problems and satisfies my client's Request. I specialize in using Languages Such as HTML5, CSS3 and Javascript, And work with Frameworks such as Tailwindcss, Alpinejs, Nextjs and WordPress. Aside from my job, I like to create and contribute to open source projects.</div>
   <div>   That helps me to learn a ton of new stuff, grow as a developer and support other open source projects. In my free time you can find me playing Video Games, at the gym 🏋️‍♂️ or on tech meetups and conferences around Abuja</div>
    </div>

</div>

        
        
        
        
        </>
     );
}

export default about;