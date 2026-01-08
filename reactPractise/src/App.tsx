import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import PostLayout from './pages/PostLayout'
import PostsList from './pages/postsList'
import PostDetails from './pages/PostDetails'
import PostComments from './pages/PostComments'


function App() {

  return (
   <BrowserRouter>
   <Routes>
     <Route path='/posts' element={<PostLayout />}>
     <Route index element={<PostsList />} />
     <Route path=':postId' element={<PostDetails />} />
     <Route path=':postId/comments' element={<PostComments />} />
     </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
