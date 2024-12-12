"use client";
import { createUser } from "@/lib/actions/users.actions";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const MakeAPost = () => {
  const [username, setUsername] = useState("");
  const makeAPost = () => {};

  const createWhisperer = async (e: any) => {
    e.preventDefault();
    try {
      const res = await createUser({ username: username, key: uuidv4() });
      console.log("res for user creation -- ", res);
    } catch (error) {
      console.error("Error creating user : ", error);
    }
  };

  return (
    <div>
      <h1>Make a Whisper</h1>
      <form>
        <FormControl>
          <FormLabel>Topic</FormLabel>
          <Input type="text" placeholder="Enter topic" />
        </FormControl>

        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input type="text" placeholder="Enter title" />
        </FormControl>

        <FormControl>
          <FormLabel>Description</FormLabel>
          <Input type="text" placeholder="Enter description" />
        </FormControl>

        <FormControl>
          <FormLabel>Author</FormLabel>
          <Input type="text" placeholder="Enter author name" />
        </FormControl>

        <Button type="submit">Submit</Button>
      </form>

      <form>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            value={username}
            onChange={(e: any) => setUsername(e.target.value)}
            type="text"
            placeholder="Enter username"
          />
        </FormControl>

        <Button type="submit" onClick={createWhisperer}>
          Create New Whisperer
        </Button>
      </form>
    </div>
  );
};

export default MakeAPost;
