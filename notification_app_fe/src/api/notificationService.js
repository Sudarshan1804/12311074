import axios from "axios";

import { Log }
from "../middleware/logger";

const BASE_URL =
  "http://4.224.186.213/evaluation-service/notifications";

const ACCESS_TOKEN =
  import.meta.env.VITE_ACCESS_TOKEN;

export async function fetchNotifications(
  page = 1,
  limit = 10,
  type = ""
) {

  try {

    await Log(
      "frontend",
      "info",
      "api",
      "Fetching notifications"
    );

    let url =
      `${BASE_URL}?page=${page}&limit=${limit}`;

    if (type) {
      url +=
        `&notification_type=${type}`;
    }

    const response =
      await axios.get(url, {
        headers: {
          Authorization:
            `Bearer ${ACCESS_TOKEN}`
        }
      });

    // TEMPORARY DEBUG
    alert(JSON.stringify(response.data));

    // Format data correctly
    const formattedNotifications =
      response.data.notifications?.map(
        (item) => ({
          id:
            item.ID || item.id,

          type:
            item.Type || item.type,

          message:
            item.Message || item.message,

          timestamp:
            item.Timestamp ||
            item.timestamp
        })
      ) || [];

    await Log(
      "frontend",
      "info",
      "api",
      "Notifications fetched successfully"
    );

    return {
      notifications:
        formattedNotifications
    };

  } catch (error) {

    await Log(
      "frontend",
      "error",
      "api",
      `Failed fetching notifications: ${error.message}`
    );

    throw error;
  }
}