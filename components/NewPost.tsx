import styles from "./NewPost.module.css";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const NewPost = () => {
  return (
    <form>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input type="title" />
      </FormControl>
      <FormControl>
        <FormLabel>What is this about?</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>Content</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>File</FormLabel>
        <input type="file" />
      </FormControl>
      <Button mt={"10px"} type="submit">
        Create Post
      </Button>
    </form>
  );
};

export default NewPost;
