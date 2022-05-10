import Navbar from './Navbar.module.js'

const Layout = ({ children }) => {
    return ( 
       <div className="content">
           <Navbar /> 
           { children }
       </div>
     );
}
  
export default Layout;