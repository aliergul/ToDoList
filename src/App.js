import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddTaskForm from './Components/AddTaskForm.jsx';
import ToDo from './Components/ToDo.jsx';
import UpdateForm from './Components/UpdateForm.jsx';


function App() {

  //yapılacaklar listesine ait state
  const [toDo, setToDo] = useState([]);

  //yeni task ekleme işlevine ait state
  const [newTask, setNewTask] = useState('');

  //task güncelleme işlevine ait state
  const [updateData, setUpdateData] = useState('');

  //işleri filtrelemek için gereken state
  //const [filter, setFilter] = useState('')

  
  //task ekleme fonksiyonu
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([...toDo, newEntry]);
      setNewTask('');
    }
  }

  //task silme fonksiyonu
  const deleteTask = (id) => {
    let newTasks = toDo.filter(task => task.id !== id)
    setToDo(newTasks)
  }

  //taskları yapıldı olarak markerlamak için gerekli olan fonksiyon
  const markDone = (id) => {
    let newTask = toDo.map(task => {
      if (task.id === id) {
        return ({ ...task, status: !task.status })
      }
      return task
    })
    setToDo(newTask)
  }

  //taskları yapılmadı olarak markerlamak için gerekli olan fonksiyon
  const cancelUpdate = () => {
    setUpdateData('');
  }

  //taskları değiştirmek için gerekli olan fonksiyon
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  }

  //taskları güncellemek için gerekli olan fonksiyon
  const updateTask = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setToDo(updatedObject);
    setUpdateData('');
  }

  return (
    <div className="container App">
      <br /><br />
      <h1>Yapılacaklar Listesi</h1>
      <br /><br />

      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (

        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />

      )}

      <br/>
      {toDo && toDo.length ? '' : 'Herhangi bir yapılacak iş yok...'}

      <ToDo
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
