import {
  useState
} from "react";

import {
  Container,
  Typography,
  Select,
  MenuItem
} from "@mui/material";

import NotificationCard
from "../components/NotificationCard";

import mockNotifications
from "../data/mockNotifications";

import {
  getTopNotifications
} from "../utils/priorityUtils";

function PriorityInbox() {

  const [topN, setTopN]
    = useState(10);

  const topNotifications =
    getTopNotifications(
      mockNotifications,
      topN
    );

  return (

    <Container sx={{ marginTop: 4 }}>

      <Typography
        variant="h4"
        gutterBottom
      >
        Priority Inbox
      </Typography>

      <Select
        value={topN}
        onChange={(e) =>
          setTopN(e.target.value)
        }
        sx={{ marginBottom: 3 }}
      >

        <MenuItem value={10}>
          Top 10
        </MenuItem>

        <MenuItem value={15}>
          Top 15
        </MenuItem>

        <MenuItem value={20}>
          Top 20
        </MenuItem>

      </Select>

      {topNotifications.map(
        (notification) => (

        <NotificationCard
          key={notification.id}
          notification={notification}
          viewed={false}
        />

      ))}

    </Container>
  );
}

export default PriorityInbox;