import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Content from './components/Content';
import Particles from 'react-particles-js';
import particlesConfig from './components/particlesConfig';
import ReactGA from 'react-ga';
import RouteChangeTracker from './components/RouteChangeTracker';
ReactGA.initialize('UA-289192892');

// import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
// import About from './About';
// import Home from './home';
// class App extends React.Component {
//   render() {
//       return (
//         <div className="App">
//           <BrowserRouter>
//           <div>
//             <nav>
//               <ul id="navigation">
//                 {/* <li>
//                   <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                 <Link to="/about">About</Link>
//                 </li>
//                 <li>
//                 <Link to="/contact">Contact</Link>
//                 </li> */}
//               </ul>
//             </nav>
//           </div>
          
//             <Switch>
//             <Route exact path="/">
//               <Home />
//             </Route>
//             <Route path="/about">
//               <About />
//             </Route>
//           </Switch>
//           </BrowserRouter>
//           </div>
//             );
//   }
// }
function App() {
  return (
    <>
        <div style={{ position: 'absolute'}}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
        </div>
        <Navbar />
        <Hero />
        <RouteChangeTracker />
        {/* <Content /> */}
    </>

  );
}

export default App;