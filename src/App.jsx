import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu'
import Main from './components/Main'
import ItemDetailContainer from "./components/ItemDetailContainer";
import './App.css'


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Menu />
      <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/category/:idCategory" element={<Main/>} />
          <Route path="/productDetail/:idProduct" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App