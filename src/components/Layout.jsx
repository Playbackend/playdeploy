import Footer from "./LandingPage/Footer"
import Nav from "./LandingPage/Nav"
const Layout=({children})=>{
    return(
        <>
        <Nav/>
        <main>{children}</main>
        <Footer className/>  
        </>
    )

}

export default Layout