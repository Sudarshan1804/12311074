import { useEffect } from "react";
import { fetchNotifications } from "./api/notificationService";

function App() {
  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchNotifications();
        alert(JSON.stringify(data));
      } catch (error) {
  alert(error.message);
}
    }
    loadData();
  }, []);
  return (
    <div>
      <h1>Notification App</h1>
    </div>
  );
}
export default App;