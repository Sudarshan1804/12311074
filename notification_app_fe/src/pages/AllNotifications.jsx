import {
  useEffect,
  useState
} from "react";

import {
  Container,
  Typography,
  Select,
  MenuItem,
  Button
} from "@mui/material";

import NotificationCard from "../components/NotificationCard";

import { fetchNotifications }
from "../api/notificationService";

import { Log }
from "../middleware/logger";

function AllNotifications() {

  const [notifications, setNotifications]
    = useState([]);

  const [page, setPage]
    = useState(1);

  const [filter, setFilter]
    = useState("");

  const [viewed, setViewed]
    = useState([]);

  useEffect(() => {

    loadNotifications();

  }, [page, filter]);

  async function loadNotifications() {

    try {

      const data =
        await fetchNotifications(
          page,
          10,
          filter
        );

      setNotifications(data);

      await Log(
        "frontend",
        "info",
        "page",
        "Notifications loaded"
      );

    } catch (error) {

      await Log(
        "frontend",
        "error",
        "page",
        "Failed loading notifications"
      );
    }
  }

  function markAsViewed(id) {

    const updated =
      [...viewed, id];

    setViewed(updated);

    localStorage.setItem(
      "viewedNotifications",
      JSON.stringify(updated)
    );
  }

  return (

    <Container sx={{ marginTop: 4 }}>

      <Typography
        variant="h4"
        gutterBottom
      >
        All Notifications
      </Typography>

      <Select
        value={filter}
        onChange={(e) =>
          setFilter(e.target.value)
        }
        displayEmpty
        sx={{ marginBottom: 3 }}
      >

        <MenuItem value="">
          All
        </MenuItem>

        <MenuItem value="Placement">
          Placement
        </MenuItem>

        <MenuItem value="Result">
          Result
        </MenuItem>

        <MenuItem value="Event">
          Event
        </MenuItem>

      </Select>

      {notifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
          viewed={viewed.includes(
            notification.id
          )}
          onClick={() =>
            markAsViewed(
              notification.id
            )
          }
        />
      ))}

      <Button variant="contained" onClick={() =>setPage(page - 1)} disabled={page === 1}sx={{ marginRight: 2 }}>
        Previous
      </Button>

      <Button variant="contained" onClick={() =>setPage(page + 1)}>
        Next
      </Button>
    </Container>
  );
}
export default AllNotifications;