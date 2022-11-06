import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Home"

const AppRouter = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter