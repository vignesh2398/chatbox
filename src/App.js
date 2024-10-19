import { Route, Routes } from "react-router-dom";
import LoginPage from "./Components/LoginPage/loginPage";
import { Home } from "./Components/home/Home";


function App() {
  return (
<>
<Routes>
<Route path="/" element={<LoginPage/>}/>
<Route path="/home" element={<Home/>}/>

</Routes>
</>
  );
}

export default App;
