import Header from "./components/Header";
import Post, { PostType } from "./components/Post";
import Sidebar from "./components/Sidebar";
import styles from "./App.module.css";
import "./global.css";

const posts: PostType[] = [
  {
    id: 0,
    author: {
      avatar: "https://github.com/thealfredohenrique.png",
      name: "Alfredo Henrique",
      role: "Software Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "👉 jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2023-05-30 20:00:00"),
  },
  {
    id: 1,
    author: {
      avatar: "https://github.com/thealfredohenrique.png",
      name: "Alfredo Henrique",
      role: "Software Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala pessoal 👋",
      },
      {
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻",
      },
      {
        type: "paragraph",
        content: "Acesse e deixe seu feedback 👉 devonlane.design",
      },
      {
        type: "link",
        content: "👉 devonlane.design",
      },
    ],
    publishedAt: new Date("2023-05-30 21:00:00"),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
