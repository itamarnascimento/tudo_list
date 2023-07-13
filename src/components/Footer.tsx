// CSS
import styles from "./Footer.module.css";

const Footer = () => {
   return (
      <footer className={styles.footer}>
         <div className={styles.redes}>
            <a
               href="https://www.linkedin.com/in/wevesson-madson-9a5a4615a/"
               target="_blank"
            >
               <img
                  src="src/assets/linkedin-icon.png"
                  alt="icone do linkedin"
               />
            </a>
            <a href="https://github.com/WevessonMadson" target="_blank">
               <img src="src/assets/github-icon.png" alt="icone do github" />
            </a>
         </div>
         <p>&copy;WevessonMadson</p>
      </footer>
   );
};

export default Footer;
