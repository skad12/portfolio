import Link from "next/Link"


const Navbar = () => {
    return ( 

        <nav>

        <div className="flex space-x-10 justify-end pr-8 pt-5 font-semibold text-lg">
<Link href='/home'><a><div className="hover:text-blue-500 ">Home</div></a></Link>
<Link href='/about'><a><div className="hover:text-blue-500 ">About</div></a></Link>
<Link href='/project'><a><div className="hover:text-blue-500 ">Projects</div></a></Link>
<Link href='/contact'><a><div className="hover:text-blue-500 ">Contact</div></a></Link>
</div>

</nav>

     );
}
 
export default Navbar;