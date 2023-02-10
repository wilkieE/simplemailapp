export const countUnreadMessages = (messages) => {
  let unreadCount = 0;
  //Iterate over an array of messages to count the number of unread messages
  for (let i = 0; i < messages.length; i++) {
    if (!messages[i].isRead) {
      unreadCount++;
    }
  }
  return unreadCount;
};
