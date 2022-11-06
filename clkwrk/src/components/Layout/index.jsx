import Footer from "./Footer"
import Navbar from "./Navbar"
import style from "./layout.module.scss"

const Layout = (props) => {
    return <div className={style.layout}>
        <Navbar/>
        {props.children}
        <Footer />
    </div>
}

export default Layout