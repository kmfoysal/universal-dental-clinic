import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="bg-gray-100">
      <AuthProvider>
          <BrowserRouter>
          <Header></Header>
              <Switch>
                <Route exact path='/'>
                  <Home></Home>
                </Route>
                <Route path='/home'>
                  <Home></Home>
                </Route>
                <Route path='/about'>
                  <About></About>
                </Route>
                <PrivateRoute path='/serviceDetails/:serviceId'>
                  <ServiceDetails></ServiceDetails>
                </PrivateRoute>
                <Route path='/login'>
                  <Login></Login>
                </Route>
                <Route path='*'>
                  <NotFound></NotFound>
                </Route>
              </Switch>
              <Footer></Footer>
          </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
