import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Index from "./components/Index";
import Favorite from "./components/Favorite";
import ContextProvider from "./context/Context";
import Footer from "./components/Footer";

function App() {
  return (
    <ContextProvider>
      <div className="container">
      <div className="header-position">
      <Header />
      </div>
      <div className="main-position">
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/favorite" element={<Favorite />}/>
      </Routes>
      </div>
      <Footer/>
      </div>
    </ContextProvider>
  );
}

export default App;
