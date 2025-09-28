import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./components/Home"
import Login from "./auth/Login"

const App = () => {
  return (
    <>
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/auth" element={<Login/>} />
    </Routes>
   </Router>
    </>
  )
}

export default App
