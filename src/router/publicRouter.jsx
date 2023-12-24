
import Home from "../pages/Home/Home"
import Contact from "../pages/Contact/Contact"
import About from "../pages/About/About"


const publicRouter = [
  
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/contact",
            element:<Contact/>
        }
  
   
  
]

export default publicRouter