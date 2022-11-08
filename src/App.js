import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './routes/Routes/Roues';

function App() {
  return (
    <div className='mx-auto max-w-screen-xl'>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
