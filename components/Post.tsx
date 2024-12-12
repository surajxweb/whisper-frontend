import { Button } from "@chakra-ui/react";
import styles from "./Post.module.css";

const Post = ({
  name,
  author,
  description,
  genre,
  children,
}: {
  name: string;
  author: string;
  description: string;
  genre: string;
  children?: [];
  fileUrl: string;
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.description}>{description}</div>
      <div className={styles.genre}>{genre}</div>
      <div className={styles.author}>By : {author}</div>
      <div className={styles.children}>
        Responses : {children?.length ? children?.length : 0}
      </div>
      <Button
        colorScheme="itsDark"
        background={"#444"}
        color={"#ccc"}
        border={"1px solid #ccc"}
      >
        Read Whisper
      </Button>
    </div>
  );
};

export default Post;
