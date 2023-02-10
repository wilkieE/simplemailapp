import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Inbox from "./pages/Inbox";
import Message from "./pages/Message";
import { fetchMessages, fetchUpdatedMessages } from "./utils/fetchData";
import { countUnreadMessages } from "./utils/helpers";

function App() {
  //Predefine the username as "jim"
  const userName = "jim";
  const [messages, setMessages] = useState([]);
  const [unreadMessageCount, setUnreadMessageCount] = useState(0);

  const updateMessages = async (id) => {
    const data = await fetchUpdatedMessages(id, userName);
    setUnreadMessageCount(countUnreadMessages(data));
    setMessages(data);
  };

  useEffect(() => {
    // Fetch the message count from the API and update state
    const fetchMessageData = async () => {
      const data = await fetchMessages(userName);
      setMessages(data.messages);
      setUnreadMessageCount(countUnreadMessages(data.messages));
    };
    fetchMessageData();
  }, [userName]);

  return (
    <div className="App">
      <Navbar userName={userName} unreadCount={unreadMessageCount} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              unreadMessageCount={unreadMessageCount}
              totalMessages={messages.length}
            />
          }
          errorElement={<ErrorPage />}
        ></Route>
        <Route
          path="/inbox"
          element={
            <Inbox messages={messages} updateMessages={updateMessages} />
          }
          errorElement={<ErrorPage />}
        />
        <Route
          path="/message/:messageId"
          element={<Message messages={messages} />}
          errorElement={<ErrorPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
