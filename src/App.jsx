

import About from './components/global/About';
import Achievements from './components/global/Achievements';
import { Header } from './components/global/Header'
import { MainSection } from './components/global/MainSection'
import './global.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 
  return (
    <>
      <div className="flex flex-col min-h-[100vh] bg-black">
           {/* Header    */}
           <Header />
           {/* Main Section */}
           <MainSection />
           {/* about */}
           < About />
           {/* Achievements */}
           <Achievements />
        </div>
    </>
  )
}

export default App
