export const fetchMessages = async (username) => {
  // Fetch the message count from the API and update state
  const response = await fetch(`http://localhost:3000/${username}/messages`);
  const data = await response.json();
  return data;
};

export const fetchUpdatedMessages = async (id, userName) => {
  const response = await fetch(
    `http://localhost:3000/${userName}/messages/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isRead: true,
      }),
    }
  );
  const data = await response.json();
  return data;
};
