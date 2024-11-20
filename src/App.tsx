import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import LayOut from './Components/LayOut/LayOut.tsx';
import Bio from './Pages/Bio/Bio.tsx';
import Archive from './Pages/Archive/Archive.tsx';
import Cv from './Pages/CV/Cv.tsx';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <LayOut/>, children: [
      {path: '/', element: <Bio/>},
      

    ]},
    {path: '/archive', element: <Archive/>},
    {path: '/AhmedHussieny.pdf', element: <Cv/>},
    {path: '*', element: <div>Not Found</div>}
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
