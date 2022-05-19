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
    getAllTasks()
  },[])

  async function getAllTasks(){
    const response = await api.get('/todo');
    console.log(response)
    setAllTasks(response.data)
  }

  async function loadTasks(option){
    const params = {priority:option};
    const response = await api.get('/priorities', { params });
    if(response) {
      setAllTasks(response.data)
    }
  }

  function handleChange(e) {
    setSelectedValue(e.value);

    if(e.checked && e.value !=='all'){
      loadTasks(e.value);
    }else {
      getAllTasks();
    }
  }
  const [title, setTitle] = React.useState('');
  const [task, setTask] = React.useState('');
  const [allTasks, setAllTasks] = React.useState([]);
  const [status, setStatus] = React.useState('pendente');
  const [data, setData] = React.useState();
  const [selectedValue, setSelectedValue] = React.useState('all');

//Aqui deleta tarefa
 async function handleDelete(id) {
   const deletedTask = await api.delete(`todo/${id}`);
   if(deletedTask){
     setAllTasks(allTasks.filter(task => task._id !== id))
   }
}

// Function para pegar tasks em andamento
async function tasksInProgress(e){
  if(e.target.value ==="andamento"){
  setAllTasks(allTasks.filter(task => task.status ==="andamento"))
  }
  else{
    getAllTasks()
  }
}

async function tasksDone(e){
  if(e.target.value ==="pronto"){
  setAllTasks(allTasks.filter(task => task.status ==="pronto"))
  }
  else{
    getAllTasks()
  }
}

async function tasksPending(e){
  if(e.target.value ==="pendente"){
  setAllTasks(allTasks.filter(task => task.status ==="pendente"))
  }
  else{
    getAllTasks()
  }
}

// Função para mudar a prioridade de true para false
async function handleChangePriority(id) {
  const task = await api.post(`priorities/${id}`);
  if(task) {
    getAllTasks();
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
          <RadioButton 
          selectedValue={selectedValue} 
          handleChange={handleChange}
          tasksInProgress={tasksInProgress}
          tasksDone={tasksDone}
          tasksPending={tasksPending}
          />
        </form>
      </aside>
      <main>
      <ul>
        {allTasks.map(data=>(
          <Tasks key={ data._id }
          data={data}
          handleDelete={handleDelete}
          handleChangePriority={handleChangePriority}
          />
        ))}
      </ul>
      </main>
    </div>
  );
}

export default App;
