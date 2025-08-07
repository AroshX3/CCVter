import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./Pages/Home"
import CCVter from "./Pages/CCVter"
import About from "./Pages/About"
import Footer from "./components/Footer/Footer"
const myRoute = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home />} />
      <Route path='/ccvter' element={<CCVter />} />
      <Route path='/about' element={<About />} />
    </Route>
  )
)
function App() {


  return (
    <>
      <Navbar />

      <RouterProvider router={myRoute} />

      <Footer />
    </>
  )
}

export default App
