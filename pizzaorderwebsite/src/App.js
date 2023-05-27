import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import { Route, Routes } from 'react-router-dom';
import Pages from './Components/Pages/Pages';
import Menu from './Components/Menu/Menu';
import Blog from './Components/Blog/Blog';
import Landing from './Components/Landing/Landing';
import Productdetails from './Components/Productdetails/Productdetails';
import Addtocart from './Components/Addtocart/Addtocart';
import Sucesspage from './Components/SucessPage/Sucesspage';
import Suscribe from './Components/Suscribe/Suscribe';
import { useSelector } from 'react-redux';

function App() {

const{isSuscribe}=useSelector((storedata)=>{
  return storedata;
})

  return (
    <>
    
    <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='/pages'element={<Pages/>}/>
    <Route path='/menu'element={<Menu/>}/>
    <Route path='/blog'element={<Blog/>}/>
    <Route path='/landing'element={<Landing/>}/>
    <Route path='/quickview/:id/'element={<Productdetails/>}/>
    <Route path='/addtocart'element={<Addtocart/>}/>
    <Route path='/sucesspage'element={<Sucesspage/>}/>
    <Route path='/orderonline'element={<Menu/>}/>
   
    </Routes>


    
    </>
  );
}

export default App;
