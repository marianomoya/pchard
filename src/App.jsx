
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu'
import ItemListContainer from './components/ItemListContainer'
import './App.css'


const App = () => {
  return (
    <>
    <Menu />
    <ItemListContainer message="Hola ItemListContainer"/>
    </>
  )
}

export default App