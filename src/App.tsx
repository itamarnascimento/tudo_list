import { useEffect, useState } from "react";

// Components
import Modal from "./components/Modal";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

// CSS
import styles from "./App.module.css";

// Interface
import { ITask } from "./interfaces/Task";

function App() {
   const [taskList, setTaskList] = useState<ITask[]>([]);
   const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

   const deleteTask = (id: number) => {
      if (confirm("Tem certeza que deseja deletar a tarefa?")) {
         setTaskList(
            taskList.filter((task) => {
               return task.id !== id;
            })
         );
      }
   };

   const hideOrShowModal = (display: boolean) => {
      const modal = document.querySelector("#modal");
      if (display) {
         modal!.classList.remove("hide");
      } else {
         modal!.classList.add("hide");
      }
   };

   const editTask = (task: ITask): void => {
      hideOrShowModal(true);
      setTaskToUpdate(task);
   };

   const updateTask = (id: number, title: string, difficulty: number) => {
      const updatedTask: ITask = { id, title, difficulty };

      const updatedItems = taskList.map((task) => {
         return task.id === updatedTask.id ? updatedTask : task;
      });

      setTaskList(updatedItems);

      hideOrShowModal(false);
   };

   useEffect(() => {
      const memoTaskList = localStorage.getItem("tasklist");
      if (memoTaskList) {
         setTaskList(JSON.parse(memoTaskList));
      }
      document.getElementsByName("title")[1].focus();
   }, []);

   useEffect(() => {
      if (taskList.length > 0) {
         localStorage.setItem("tasklist", JSON.stringify(taskList));
         document.getElementsByName("title")[1].focus();
      }
   }, [taskList]);

   return (
      <>
         <Modal
            children={
               <TaskForm
                  btnText="Salvar edição "
                  taskList={taskList}
                  task={taskToUpdate}
                  handleUpdate={updateTask}
               />
            }
         />
         <Header />
         <main className={styles.main}>
            <div>
               <h2>O que você vai fazer?</h2>
               <TaskForm
                  btnText="Criar Tarefa"
                  taskList={taskList}
                  setTaskList={setTaskList}
               />
            </div>
            <div>
               <h2>Suas tarefas:</h2>
               <TaskList
                  taskList={taskList}
                  handleDelete={deleteTask}
                  handleEdit={editTask}
               />
            </div>
         </main>
         <Footer />
      </>
   );
}

export default App;
