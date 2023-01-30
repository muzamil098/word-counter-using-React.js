import Navbbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
       <Navbbar />
      <div className="container">
        <TextForm />
      </div>
      <Routes>
        <Route path="About" element={<div>hello page</div>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
