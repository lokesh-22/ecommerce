
import './App.css'
import fields from './assets/fields'
import DynamicForm from './components/DynamicForm'
import DashBoard from './components/DashBoard'



function App() {

    return (
      <div className="App">
        <DynamicForm fields={fields} />
      </div>
         
      
    )
 
 

  
}

export default App
