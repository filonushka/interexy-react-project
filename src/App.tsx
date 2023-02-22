import { Routes, Route } from "react-router-dom"
import "./App.scss";
import Layout from "./components/layout/layout";
import Home from "./pages/home/home";
import Articles from "./pages/articles/articles";
import Characters from "./pages/characters/characters";
import Animations from "./pages/animations/animations"

function App() {
  return (
    <>        
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />}></Route>
          <Route path="articles" element={<Articles />}></Route>
          <Route path="animations" element={<Animations />}></Route>
          <Route path="characters" element={<Characters />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
