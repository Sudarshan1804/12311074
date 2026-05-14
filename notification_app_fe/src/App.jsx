import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Button,
  Container
} from "@mui/material";

import AllNotifications
from "./pages/AllNotifications";

import PriorityInbox
from "./pages/PriorityInbox";

function App() {

  return (

    <BrowserRouter>

      <AppBar position="static">

        <Toolbar>

          <Button
            color="inherit"
            component={Link}
            to="/"
          >
            All Notifications
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/priority-inbox"
          >
            Priority Inbox
          </Button>

        </Toolbar>

      </AppBar>

      <Container>

        <Routes>

          <Route
            path="/"
            element={<AllNotifications />}
          />

          <Route
            path="/priority-inbox"
            element={<PriorityInbox />}
          />

        </Routes>

      </Container>

    </BrowserRouter>
  );
}

export default App;