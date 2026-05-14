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

import NotificationCard
from "../components/NotificationCard";

import mockNotifications
from "../data/mockNotifications";

function AllNotifications() {

  const [notifications,
    setNotifications]
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

  function loadNotifications() {

    let filtered =
      [...mockNotifications];

    if (filter) {

      filtered =
        filtered.filter(
          (item) =>
            item.type === filter
        );
    }

    setNotifications(filtered);
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

      {notifications.map(
        (notification) => (

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

      <Button
        variant="contained"
        onClick={() =>
          setPage(page - 1)
        }
        disabled={page === 1}
        sx={{ marginRight: 2 }}
      >
        Previous
      </Button>

      <Button
        variant="contained"
        onClick={() =>
          setPage(page + 1)
        }
      >
        Next
      </Button>

    </Container>
  );
}

export default AllNotifications;