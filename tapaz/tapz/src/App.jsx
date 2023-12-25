import React from 'react'
import Header from './components/Header';
import "./App.css"
import HeaderList from './components/HeaderList';
import HeaderBody from './components/HeaderBody';
import HeaderInput from './components/HeaderInput';
const App = () => {
  return (
    <div>
<Header/>
<HeaderInput/>
<HeaderList/>
<HeaderBody/>
      </div>
  )
}

export default App;