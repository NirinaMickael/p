import { Container } from "@material-ui/core";
import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import { Menu } from "./features";
import { About, Accueil  , Contact} from "./pages";
import { Experience } from "./pages/Experience";
function App() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(()=>{
    if(location.pathname=="/"){
      navigate("home");
    }
  },[])
  return (
    <div className="App">
      <Container maxWidth="lg">
      <h3 style={{ position: "absolute", top: "20px", left: "20px" }}>
        Nirina
      </h3>
        <Menu />  
      </Container>
      <Routes>
        <Route  path="home" element={<Accueil />}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="experience" element={<Experience/>}  />
        <Route path="about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
