import { useState, ChangeEvent, FormEvent, useEffect } from "react";

// CSS
import styles from "./TaskForm.module.css";

// Interface
import { ITask } from "../interfaces/Task";

type Props = {
   btnText: string;
   taskList: ITask[];
   setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
   task?: ITask | null;
   handleUpdate?(id: number, title: string, difficulty: number): void;
};

const TaskForm = ({
   btnText,
   taskList,
   setTaskList,
   task,
   handleUpdate,
}: Props) => {
   const [id, setId] = useState<number>(0);
   const [title, setTitle] = useState<string>("");
   const [difficulty, setDifficulty] = useState<number>(0);

   const tituloHtml = document.getElementsByName("title");
   const dificultHtml = document.getElementsByName("difficulty");

   useEffect(() => {
      if (task) {
         setId(task.id);
         setTitle(task.title);
         setDifficulty(task.difficulty);
      }
   }, [task]);

   const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (handleUpdate) {
         if (title === "" || !title) {
            if (difficulty <= 0) {
               alert(
                  "Não é possível cadastrar sem o título da tarefa!\nNão é possível cadastrar sem informar a dificuldade!"
               );
            } else {
               alert("Não é possível cadastrar sem o título da tarefa!");
            }
            tituloHtml[0].focus();
         } else if (difficulty <= 0) {
            alert("Não é possível cadastrar sem informar a dificuldade!");
            dificultHtml[0].focus();
         } else {
            handleUpdate(id, title, difficulty);
            tituloHtml[1].focus();
         }
      } else {
         if (title === "" || !title) {
            if (difficulty <= 0) {
               alert(
                  "Não é possível cadastrar sem o título da tarefa!\nNão é possível cadastrar sem informar a dificuldade!"
               );
            } else {
               alert("Não é possível cadastrar sem o título da tarefa!");
            }
            tituloHtml[1].focus();
         } else if (difficulty <= 0) {
            alert("Não é possível cadastrar sem informar a dificuldade!");
            dificultHtml[1].focus();
         } else {
            const id = Math.floor(Math.random() * 1000);

            const newTask: ITask = { id, title, difficulty };

            setTaskList!([...taskList, newTask]);

            setTitle("");
            setDifficulty(0);

            tituloHtml[1].focus();
         }
      }
   };

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.name === "title") {
         setTitle(e.target.value);
      } else {
         setDifficulty(Number(e.target.value));
      }
   };

   return (
      <form onSubmit={addTaskHandler} className={styles.form}>
         <div className={styles.input_container}>
            <label htmlFor="title">Título:</label>
            <input
               type="text"
               name="title"
               placeholder="Título da tarefa  "
               onChange={handleChange}
               value={title}
               className="form-control"
            />
         </div>
         <div className={styles.input_container}>
            <label htmlFor="difficulty">Dificuldade:</label>
            <input
               type="number"
               name="difficulty"
               placeholder="Dificuldade da tarefa"
               onChange={handleChange}
               value={difficulty}
               className="form-control"
            />
         </div>
         <input type="submit" value={btnText} />
      </form>
   );
};

export default TaskForm;
