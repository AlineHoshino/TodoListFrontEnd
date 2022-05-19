import React from 'react';
import Radio from '@mui/material/Radio';

function RadioButton(){
  return(
    <div>
        <Radio sx={{
        color: '#FFD3CA',
        '&.Mui-checked': {
        color: '#EB8F7A',
            },
        }}/>
        <span>Todos</span>
        <Radio sx={{
        color: '#FFD3CA',
        '&.Mui-checked': {
        color: '#EB8F7A',         
            },
        }}/>
        <span>Prioridade</span>
        <Radio sx={{
        color: '#FFD3CA',
        '&.Mui-checked': {
        color: '#EB8F7A',         
            },
        }}/>
        <span>Status</span>
        <Radio sx={{
        color: '#FFD3CA',
        '&.Mui-checked': {
        color: '#EB8F7A',         
            },
        }}/>
        <span>Data</span>
    </div>
    )
}

export default RadioButton