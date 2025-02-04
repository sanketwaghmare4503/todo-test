import React from 'react';
import AddTask from './components/AddTask';
import ShowTask from './components/ShowTask';
import { TodoProvider } from './utility/TodoContext';





const App: React.FC = () => {


  return (
    <TodoProvider>
    <div id='main-container'>
    
      <AddTask/>    

      <ShowTask/>
    </div>

    </TodoProvider>
  
  );
}

export default App;
