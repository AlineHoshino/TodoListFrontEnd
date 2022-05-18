import React from 'react';
function Tasks({data}){
    return (
       <>
             <li className="notepad-infos">
        <div>
          <strong>{data.title}</strong>
          <div>
            x
          </div>
        </div>
        <textarea>{data.task}</textarea>
        <span>!</span>
        <span>{data.status}</span>
        <span>{data.date}</span>
        </li>
       </>
    )
}

export default Tasks