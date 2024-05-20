import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'

import './App.css';
import MainLayout from './Layout/MainLayout';
import HomePage from './Pages/HomePage';
import DestinationsPage from './Pages/DestinationsPage';
import CrewPage from './Pages/CrewPage';
import TechnologyPage from './Pages/TechnologyPage';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
    <Route index element={<HomePage/>}/>
    <Route path='/dest' element={<DestinationsPage/>}/>
    <Route path='/crew' element={<CrewPage/>}/>
    <Route path='/tech' element={<TechnologyPage/>}/>
    </Route>
    
)
);

const App = () => {
  return <RouterProvider router={router}/>
}

export default App
