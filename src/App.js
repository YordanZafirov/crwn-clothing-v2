import { Routes, Route } from "react-router-dom";
import Nav from "./routes/navigaton/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />} >
        <Route index element={<Home />}/>
        <Route path="auth" element={<Authentication />}/>
      </Route>
    </Routes>
  )
};

export default App;
