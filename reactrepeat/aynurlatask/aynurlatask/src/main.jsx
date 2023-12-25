import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./App.css"
import MOodeContextProvider from './components/ModeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<MOodeContextProvider>
<App />

</MOodeContextProvider>
   )
