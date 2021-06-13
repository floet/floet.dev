import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

const Layout = ({children}) => {
  return (
    <div className="max-w-7xl mx-auto font-main">
      <Navbar/>
      <main className="px-8 2xl:px-0">{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout;