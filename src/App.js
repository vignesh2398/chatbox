import { Route, Routes } from "react-router-dom";
import LoginPage from "./Components/LoginPage/loginPage";


function App() {
  return (
<>
<Routes>
<Route path="/" element={<LoginPage/>}/>

</Routes>
</>
  );
}

export default App;
