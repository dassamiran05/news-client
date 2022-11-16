import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes'
import { Toaster } from 'react-hot-toast';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster />
      {/* <ToastContainer /> */}
    </div>
  )
}

export default App;
