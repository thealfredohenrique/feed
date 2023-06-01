import { useState } from "react";
import { ThumbsUp, Trash } from "@phosphor-icons/react";
import Avatar from "./Avatar";
import styles from "./Comment.module.css";

function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((value) => value + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/thealfredohenrique.png"
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

            <button onClick={handleDeleteComment} title="Apagar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Comment;
