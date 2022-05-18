import React from 'react';
import './global.css';
import './sidebar.css';


function App() {
  return (
    <div>
      <aside>
        <strong>Suas tarefas</strong>
        <form>
          <div className="input-block">
          <label htmlFor="title">Título da tarefa</label>
          <input />
          </div>
          <div className="input-block">
            <label htmlFor="nota">Tarefas</label>
            <textarea></textarea>
          </div>
          <div className="input-block">
            <label htmlFor="status">Status</label>
            <select>
    <option></option>
            </select>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
    </div>
  );
}

export default App;
