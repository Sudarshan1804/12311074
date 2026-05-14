import {Card,CardContent,Typography,Chip} from "@mui/material";
function NotificationCard({
  notification,
  viewed,
  onClick
}){
  return (
    <Card onClick={onClick}
    sx={{
        marginBottom: 2,
        cursor: "pointer",
        backgroundColor: viewed
          ? "#f5f5f5"
          : "#e3f2fd"
      }}
    >
      <CardContent>
        <Chip
          label={notification.type}
          color={
            notification.type === "Placement"
              ? "success"
              : notification.type === "Result"
              ? "primary"
              : "warning"
          }
          sx={{ marginBottom: 1 }}
        />
        <Typography variant="h6" fontWeight={viewed ? "normal" : "bold"}>
          {notification.message}
        </Typography>

        <Typography variant="body2">
          {notification.timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default NotificationCard;