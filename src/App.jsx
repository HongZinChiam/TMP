import './App.css'
import Header from './Header.jsx'
import NavBar from './NavBar.jsx'
import ProductBacklog from './ProductBacklog.jsx'

function App() {
  return (
    <>
      <Header />
      <div class="grid">
        <NavBar />
        <ProductBacklog />
      </div>
    </>
  )
}

export default App
