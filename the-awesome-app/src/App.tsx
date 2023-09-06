import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Counter from './components/Counter';
import FnCounter from './components/FnCounter';
import ListProducts from './components/ListProducts';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EditProduct from './components/EditProduct';
import Login from './components/Login';
import {appRoutes} from './routes/routes';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className='container'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">React</a>
            {/* <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/counter">Counter</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fncounter">FnCounter</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul> */}
            <ul className="nav">
              {appRoutes.filter(item => item.isInMainMenu).map(item => {
                return (
                  <li key={item.path} className="nav-item">
                    <Link className="nav-link" to={item.path}>{item.title}</Link>
                  </li>
                )
              })}
            </ul>

          </div>
        </nav>

        <main>
          <Routes>
            {/* <Route path='/' element={<Hello message='Hello React'/>}/>
            <Route path='/counter' element={<Counter initValue={10}/>}/>
            <Route path='/fncounter' element={<FnCounter initValue={10}/>}/>
            <Route path='/products' element={<ListProducts/>}/>
            <Route path='/products/:id' element={<EditProduct/>}/>
            <Route path='/login' element={<Login/>}/> */}

            {appRoutes.map(item => {

              if(item.isProtected){
                return (
                  <Route key={item.path} path={item.path} 
                          element={<ProtectedRoute><item.component {...item.props}/></ProtectedRoute>}/>
                )
              }
              else{
                return (
                  <Route key={item.path} path={item.path} element={<item.component {...item.props}/>}/>
                )
              }
             

            })}
            
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
