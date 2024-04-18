import { Route, Routes } from "react-router-dom";
import "./App.css";
import Accueil from "./Composant/Accueil.jsx";
import Blog from "./Composant/Blog.jsx";
import Contact from "./Composant/Contact.jsx";
import Realisation from "./Composant/Realisation.jsx";
import Service from "./Composant/Service.jsx";

function App() {
  return (
    <div className="App img">
      <Routes>
        <Route path="/" element={<Accueil></Accueil>} />
        <Route path="/Blog" element={<Blog></Blog>} />
        <Route path="/Realisation" element={<Realisation></Realisation>} />
        <Route path="/Service" element={<Service></Service>} />
        <Route path="/Contact" element={<Contact></Contact>} />
      </Routes>
    </div>
  );
}

export default App;
