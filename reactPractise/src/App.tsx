import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import PostLayout from './pages/PostLayout'
import PostsList from './pages/postsList'
import PostDetails from './pages/PostDetails'
import PostComments from './pages/PostComments'
import RootLayout from './pages/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import ContactUs from './pages/ContactUs'


function App() {

  return (
   <BrowserRouter>
   <Routes>
 {/* root layout */}
    <Route path='/' element={<RootLayout />} />
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='contact' element={<ContactUs />} />

    {/* post layout */}
     <Route path='posts' element={<PostLayout />}>
     <Route index element={<PostsList />} />
     <Route path=':postId' element={<PostDetails />} />
     <Route path=':postId/comments' element={<PostComments />} />
     </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
