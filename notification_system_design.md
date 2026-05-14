# Notification System Design

## Overview
The Notification System is a frontend application developed using React and Material UI. The application displays notifications based on priority and recency. It also includes filtering, priority inbox management, viewed/unviewed notifications, and reusable logging middleware integration.


# Frontend Architecture
The project follows a modular frontend architecture.

## Folder Structure
notification_app_fe/
│
├── src/
│   ├── api/
│   ├── components/
│   ├── middleware/
│   ├── pages/
│   ├── utils/
│   └── App.jsx


# Components

## NotificationCard Component

Responsible for:
- Displaying notification details
- Showing notification type
- Viewed/unviewed styling
- Reusable UI structure


# Pages

## All Notifications Page

Features:
- Display all notifications
- Filtering by notification type
- Viewed/unviewed notification handling

## Priority Inbox Page
Features:
- Displays top priority notifications
- User can select Top 10, Top 15, or Top 20 notifications
- Notifications sorted based on priority and timestamp


# Notification Priority Logic
Notifications are prioritized based on type.

Priority order:
1. Placement
2. Result
3. Event

Weight mapping:
Placement = 3
Result = 2
Event = 1


Sorting is performed based on:
1. Higher priority weight
2. More recent timestamp


# Priority Algorithm
Example sorting logic:
notifications.sort((a, b) => {
  if (weights[b.type] !== weights[a.type]) {
    return weights[b.type] - weights[a.type];
  }
  return new Date(b.timestamp) - new Date(a.timestamp);

});


After sorting, Top N notifications are displayed in the Priority Inbox.
# Time Complexity

Sorting Complexity:
O(N log N)

Top N extraction complexity:
O(N)


# Viewed and Unviewed Notifications
Viewed notification IDs are stored using browser localStorage.

Unread notifications:
- Bold text
- Highlighted background

Read notifications:
- Normal text
- Gray background



# Logging Middleware
A reusable logging middleware was implemented.

Function signature:
Log(stack, level, packageName, message)


Features:
- API-based centralized logging
- Error logging
- API activity logging
- Reusable logging utility



# Frontend Technologies Used

- React.js
- Material UI
- Axios
- React Router DOM
- JavaScript



# Conclusion
The system provides a structured frontend notification application with reusable logging middleware, notification prioritization, filtering, and responsive UI design.