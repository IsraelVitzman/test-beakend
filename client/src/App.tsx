import { Route, Routes } from "react-router-dom";

import Layout from "./layots/laiyots";

import Home from "./pages/home";
import Add from "./pages/addPost";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/"  element={<Layout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/addPost" element={<Add/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;