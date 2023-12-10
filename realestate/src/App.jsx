import Gallery from "./component/Gallery";
import About from "./component/About";
import Header from "./component/Header";
import Home from "./component/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignIn from "./component/Sign-in";
import SignOut from "./component/Sign-out";
import "./../src/index.css";
import SignUp from "./component/Sign-up";

function App(){
  return(
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-out" element={<SignOut />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
  )
}
export default App;