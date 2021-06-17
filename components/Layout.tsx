import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

const Layout = ({children}) => {
  return (
    <div className="font-main">
      <Navbar/>
      <main className="max-w-7xl mx-auto px-8 2xl:px-0">{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout;