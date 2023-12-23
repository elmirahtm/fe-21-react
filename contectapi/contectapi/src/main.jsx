import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UserContextProvider from './components/UserContext.jsx'
import "./style.css"
import ModeContexProvider from './components/ModeContex.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 
<ModeContexProvider>
<UserContextProvider>
     <App />
 </UserContextProvider>
 
</ModeContexProvider>
)
