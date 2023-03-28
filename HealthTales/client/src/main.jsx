import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { QueryClientProvider, QueryClient } from 'react-query'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const queryClient = new QueryClient()

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AuthProvider>   */}
    {/* <RouterProvider router={router} /> */}
   <QueryClientProvider client={queryClient}>
    <App/>
   </QueryClientProvider>
   {/* </AuthProvider> */}
  </React.StrictMode>,
)
