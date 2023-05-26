import { PencilSimpleLine } from "@phosphor-icons/react";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1683464133488-c7d7d0916c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=512&q=60"
        alt="Cover photo"
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/thealfredohenrique.png"
          alt="Profile photo"
        />
        <strong>Alfredo Henrique</strong>
        <span>Software Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}

export default Sidebar;
