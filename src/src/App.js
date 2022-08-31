import SelectCountryRoutes from './pages/SelectCountry';
import Main from './pages/main';
import {BrowserRouter, Route, Routes} from "react-router-dom"


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/SelectCountry' element={<SelectCountryRoutes />} />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App