import styles from "../styles/Home.module.css";

export default function AppLayout({ children }) {
  return (
    <>
      <main className={styles.main}>{children}</main>
      <style jsx global>
        {`
          h1 {
            font-size: 36px;
            color: red;
          }
        `}
      </style>
    </>
  );
}
