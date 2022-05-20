/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import { AiTwotoneDelete, AiOutlineExclamationCircle } from 'react-icons/ai';
import './style.css';
import './style-priority.css';
import api from '../../services/api';

// eslint-disable-next-line react/prop-types
function Tasks({ data, handleDelete, handleChangePriority }) {
  const [changedTask, setChangedTask] = React.useState('');
  async function handleSave(e, notes) {
    if (changedTask && changedTask !== notes) {
      await api.post(`/content/${data._id}`, {
        task: changedTask,
      });
    }
  }
  return (
    <li className={data.priority ? 'notepad-infos-priority' : 'notepad-infos'}>
      <div>
        <strong>{data.title}</strong>
        <div>
          <AiTwotoneDelete
            size="24"
            // eslint-disable-next-line no-underscore-dangle
            onClick={() => handleDelete(data._id)}
          />
        </div>
      </div>
      <textarea
        defaultValue={data.task}
        onChange={(e) => setChangedTask(e.target.value)}
        onBlur={(e) => handleSave(e.target, data.notes)}
      />
      <span><AiOutlineExclamationCircle size="24" onClick={() => handleChangePriority(data._id)} /></span>
      <span>{data.status}</span>
      <span>{data.date}</span>
    </li>
  );
}

export default Tasks;
