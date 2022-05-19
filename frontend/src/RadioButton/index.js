import React from 'react';
import Radio from '@mui/material/Radio';
import './style.css';

function RadioButton({selectedValue, handleChange, tasksInProgress, tasksDone, tasksPending}){
  return(
    <div>
        <Radio 
        checked={selectedValue ==='all'}
        onChange={e => handleChange(e.target)}
        value="all"
        sx={{
        color: '#FFD3CA',
        '&.Mui-checked': {
        color: '#EB8F7A',
            },
        }}/>
        <span>Todos</span>
        <Radio 
        checked={selectedValue ==='true'}
        onChange={e => handleChange(e.target)}
        value="true"
        sx={{
        color: '#FFD3CA',
        '&.Mui-checked': {
        color: '#EB8F7A',         
            },
        }}/>
        <span>Prioridade</span>
        <div>
        <Radio 
        checked={selectedValue ==='false'}
        onChange={e => handleChange(e.target)}
        value="false"
        sx={{
            color: '#FFD3CA',
            '&.Mui-checked': {
                color: '#EB8F7A',         
            },
        }}/>
        <span> Sem Prioridade</span>
        <div id="buttons-filter">
        <button value="andamento" onClick={e=> tasksInProgress(e)}>andamento</button>
        <button value="pendente" onClick={e=> tasksPending(e)}>pendente</button>
        <button value="pronto" onClick={e=> tasksDone(e)}>pronto</button>
        </div>
        </div>
    </div>
    )
}

export default RadioButton