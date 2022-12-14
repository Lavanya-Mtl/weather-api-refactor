import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/homePage';
import CityPage from './components/CityPage';
import { useState } from 'react';
import FavoriteCityContext from './context';
/*
function App() {
  const [activeTab,setActiveTab] = useState('home');
  function changeState(newTab) {
    setActiveTab(newTab);
    let url
    if(newTab==='home') {
      url = 'http://localhost:3000/';
    }
    else if (newTab === 'city') {
      url = 'http://localhost:3000/city'
    }
    alert(url)
    window.history.pushState({'tab':'tab'},newTab,'http://localhost:3000/')
  }
  let page
  if (activeTab === 'home') {
    page = (
      <div className='content'>
        <Header />
        <FavouriteCities cities={[]}/>
      </div>
    );
  } else if(activeTab==='city') {
    page=(
      <div className='content'>
        <CityTab />
      </div>
    );
  }
  return (
    <>
      <Sidebar activeTab={{activeTab,changeState}}/>
      {page}
      
    </>
  );
}
*/
const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"city",
    element:<CityPage/>
  }
])

function App() {
  const [favoriteCities, setFavoriteCities] = useState([]);
  
  return (
    <> 
    
      <FavoriteCityContext.Provider value={{favoriteCities,setFavoriteCities}} >
        <RouterProvider router={router}/>
      </FavoriteCityContext.Provider>
    </>
  );
}
export default App;
