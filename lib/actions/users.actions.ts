"use server";

const backendUrl = process.env.BACKEND_URL;

export async function createUser({
  username,
  key,
}: {
  username: string;
  key: string;
}) {
  const user = {
    username: username,
    key: key,
  };
  try {
    const res = await fetch(`${backendUrl}/users/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("Error from server:", errorData);
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Failed to create user!", error);
    throw error;
  }
}
