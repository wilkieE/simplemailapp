const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");

const app = express();
const clientUrl = "https://simplemailapp.vercel.app";
const serverUrl = "https://s-ooio.onrender.com";
app.use(
  cors({
    origin: clientUrl,
  })
);
const swaggerDocument = require("./swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Define an array of users, each with their own messages
const users = [
  {
    user: "jim",
    messages: [
      {
        id: 0,
        subject: "Hello",
        content: "Hello, how are you?",
        isRead: false,
      },
      {
        id: 1,
        subject: "Important",
        content: "This is an important message.",
        isRead: true,
      },
      {
        id: 2,
        subject: "Greeting",
        content: "Good morning!",
        isRead: false,
      },
    ],
  },
  {
    user: "Jane",
    messages: [
      {
        id: 0,
        subject: "Hi",
        content: "Hi there!",
        isRead: false,
      },
      {
        id: 1,
        subject: "Urgent",
        content: "This is an urgent message.",
        isRead: true,
      },
      {
        id: 2,
        subject: "Greeting",
        content: "Good afternoon!",
        isRead: false,
      },
    ],
  },
];

// Define an API route to retrieve a specific user and their messages
app.get("/:user/messages", (req, res) => {
  const userName = req.params.user;
  const user = users.find((u) => u.user === userName);

  if (user) {
    res.json({ messages: user.messages });
  } else {
    res.status(404).json({ message: `User ${userName} not found` });
  }
});

// Define an API route to update a specific user's messages
app.patch("/:user/messages/:id", (req, res) => {
  const userName = req.params.user;
  const messageId = req.params.id;
  const user = users.find((u) => u.user === userName);

  if (user) {
    console.log(user);
    messages = user.messages;
    for (let i = 0; i < messages.length; i++) {
      if (messages[i].id == messageId) {
        messages[i].isRead = true;
        break;
      }
    }
    res.json(messages);
  } else {
    res.status(404).json({ message: `User ${userName} not found` });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
  console.log(`Swagger UI is available at ${serverUrl}:${port}/api-docs`);
});
