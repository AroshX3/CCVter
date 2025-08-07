import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import Home from "./Pages/Home"
import CCVter from "./Pages/CCVter"
import About from "./Pages/About"
import Layoutone from "./Layouts/Layoutone"

const myRoute = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layoutone />}>
      <Route index element={<Home />} />
      <Route path='/ccvter' element={<CCVter />} />
      <Route path='/about' element={<About />} />
    </Route>
  )
)
function App() {
  return (
    <>
      <RouterProvider router={myRoute} />
    </>
  )
}

export default App
