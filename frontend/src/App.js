import React, { useEffect } from 'react';
import api from './services/api';
import './app.css';
import './global.css';
import './sidebar.css';
import './main.css';
import Tasks from './Components/Tasks';
import RadioButton from './RadioButton';

//Aqui lista todas as tarefas
function App() {
  useEffect(() =>{
    async function getAllTasks(){
      const response = await api.get('/todo');
      console.log(response)
      setAllTasks(response.data)
    }
    getAllTasks()
  },[])

  const [title, setTitle] = React.useState('');
  const [task, setTask] = React.useState('');
  const [allTasks, setAllTasks] = React.useState([]);
  const [status, setStatus] = React.useState('pendente');
  const [data, setData] = React.useState();

//Aqui deleta tarefa
 async function handleDelete(id) {
   const deletedTask = await api.delete(`todo/${id}`);
   if(deletedTask){
     setAllTasks(allTasks.filter(task => task._id !== id))
   }
}

//Aqui cria novas tarefas
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.post('/todo', {
    title,
    task,
    priority:false,
    status,
    date:data,
    })
    setTitle('');
    setTask('');
    setStatus('pendente')
    setData('')
    setAllTasks([...allTasks, response.data])
  }
  return (
    <div id="app">
      <aside>
        <strong>Suas tarefas</strong>
        <form onSubmit={handleSubmit}>
          <div className="input-block">
          <label htmlFor="title">Título da tarefa</label>
          <input maxLength="30" value={title} onChange={e=> setTitle(e.target.value)}/>
          </div>
          <div className="input-block">
            <label htmlFor="nota">Tarefas</label>
            <textarea value={task} onChange={e=>setTask(e.target.value)}/>
          </div>
          <div className="input-block">
          <label htmlFor="status">Status</label>
            <select name="status" value={status} onChange={e=> setStatus(e.target.value)}>
              <option value="pendente">pendente</option>
              <option value="andamento">andamento</option>
              <option value="pronto">pronto</option>
            </select>
            <input type="date" value={data} onChange={e=>setData(e.target.value)}></input>
          </div>
          <button type="submit">Salvar</button>
          <RadioButton/>
        </form>
      </aside>
      <main>
      <ul>
        {allTasks.map(data=>(
          <Tasks key={ data._id }
          data={data}
          handleDelete={handleDelete}
          />
        ))}
      </ul>
      </main>
    </div>
  );
}

export default App;
