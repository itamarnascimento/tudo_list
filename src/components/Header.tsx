import styles from "./Header.module.css";

const Header = () => {
   return (
      <header className={styles.header}>
         <h1>To Do List</h1>
         <span>(React + TS)</span>
      </header>
   );
};

export default Header;
