
import './App.css';
import React , {useEffect , useState }  from 'react'
import Login from './components/Login'
function App() {

 
  
  const [data , setData] = useState({})
  const [id , setId] = useState(1)

  return (
    
    <div>
      <Login />
    </div>

  );
}

export default App;
