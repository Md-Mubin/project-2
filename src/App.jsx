
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './LayOuts/LayoutOne'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Awards from './Pages/Awards'
import Testimonials from './Pages/Testimonials'
import Experience from './Pages/Experience'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'

function App() {

  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne />}>
          <Route index element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/awards' element={<Awards />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={myRoute} />
    </>
  )
}

export default App
