import './App.css'
import Logo from './components/logo'
import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import { Landing } from './pages/landing';
import  { Login }  from './pages/login';
import { Join } from './pages/join';
import { Waitlist } from './pages/waitlist';

function App() {
  // const [count, setCount] = useState(0)

  return (
      <div className='h-dvh w-dvw'>
        <header className="flex h-[10vh] justify-start items-center fixed top-0 left-3 right-0 z-20 px-2 sm:px-6 md:px-8">
          <Logo/>
        </header>
        <Router>
          <Routes>
            <Route path = '/' element = {<Landing/>}  />
            <Route path = '/login' element = {<Login/>} />
            <Route path = '/join' element = {<Join/>} />
            <Route path = '/waitlist' element = {<Waitlist/>}  />
            <Route/>
          </Routes>
        </Router>
      </div>
  )
}

export default App
