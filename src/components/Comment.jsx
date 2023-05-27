import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";

function Comment() {
  return (
    <div className={styles.comment}>
      <img
        src="https://github.com/thealfredohenrique.png"
        alt="Profile photo"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.commentInfo}>
              <strong>Alfredo Henrique</strong>
              <time title="26 de maio às 21:38h" dateTime="2023-05-26 21:38:00">
                Cerca de 30min atrás
              </time>
            </div>

            <button title="Apagar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Comment;
