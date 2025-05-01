// Notifications 🔴
// Codédex

import Notification from "./Notification.js";

export default function App() {
  return (
    <div>
      <h1>Notifications</h1>
      <Notification message="Fatima commented on your post." isRead={true} />
      <Notification message="Daniel's birthday is today! 🎂" isRead={false} />
      <Notification message="Rhea just posted on their feed!" isRead={false} />
    </div>
  );
}
