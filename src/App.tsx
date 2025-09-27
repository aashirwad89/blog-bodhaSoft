import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./components/Home"
import Login from "./pages/Login"

const App = () => {
  return (
  //  add browseROuter first
    <Router> 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </Router>

  )
}

export default App
