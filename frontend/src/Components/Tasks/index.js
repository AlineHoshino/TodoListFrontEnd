import React from 'react';
import { AiTwotoneDelete, AiOutlineExclamationCircle} from 'react-icons/ai';
import './style.css';
import './style-priority.css';
import api from '../../services/api';

function Tasks({data}){
  const [changedTask, setChangedTask] = React.useState('');
  const [changeStatus, setChangeStatus] = React.useState('')
  console.log(changeStatus)
  async function handleSave(e){
    if(changedTask || changeStatus){
      await api.put(`/content/${data._id}`,{
        task:changedTask,
        status:changeStatus,
      })
    }
  }
    return (
       <>
             <li className={data.priority ?"notepad-infos-priority":"notepad-infos"}>
        <div>
          <strong>{data.title}</strong>
          <div>
            < AiTwotoneDelete size="24"/>
          </div>
        </div>
        <textarea 
        defaultValue={data.task} 
        onChange={e => setChangedTask(e.target.value) }
        onBlur= {e=> handleSave(e)}
        />
        <span><AiOutlineExclamationCircle size="24"/></span>
        <select name="status" defaultValue={data.status} 
        onChange={e=>setChangeStatus(e.target.value)}
        onBlur={e=>handleSave(e)}
        >
              <option value="pendente" >pendente</option>
              <option value="andamento">andamento</option>
              <option value="pronto">pronto</option>
        </select>
        <span>{data.date}</span>
        </li>
       </>
    )
}

export default Tasks