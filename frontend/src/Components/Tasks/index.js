import React from 'react';
import { AiTwotoneDelete, AiOutlineExclamationCircle} from 'react-icons/ai'

function Tasks({data}){
    return (
       <>
             <li className="notepad-infos">
        <div>
          <strong>{data.title}</strong>
          <div>
            < AiTwotoneDelete/>
          </div>
        </div>
        <textarea>{data.task}</textarea>
        <span><AiOutlineExclamationCircle/></span>
        <span>{data.status}</span>
        <span>{data.date}</span>
        </li>
       </>
    )
}

export default Tasks