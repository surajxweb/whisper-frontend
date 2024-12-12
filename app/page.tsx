import Post from "@/components/Post";
import styles from "./page.module.css";
import Logo from "@/components/Logo";

const backendUrl = process.env.BACKEND_URL;

const fetchSomeData = async () => {
  try {
    const res = await fetch(`${backendUrl}/all-posts`, {
      next: { revalidate: 3600 },
    });
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export default async function Home() {
  const data = await fetchSomeData();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>
          <Logo large={true} size={60} />
        </h1>
        <h2>Your (Actully Everyone&apos;s) Feed</h2>
        <div className={styles.posts}>
          {data.posts?.map((post: any) => (
            <Post
              name={post?.title}
              author={post?.author}
              description={post?.description}
              genre={post?.genre}
              key={post?.id}
              fileUrl={post?.fileUrl}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
