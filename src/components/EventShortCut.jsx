import { Box, IconButton, Paper, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";
import { events } from "../data/EventsData";
import { useNavigate } from "react-router-dom";

const EventShortCut = () => {
  const navigate = useNavigate();

  return (
    <>
      <Paper sx={{ p: 1.5, borderRadius: "10px" }}>
        <Box
          display={"flex"}
          alignItems={"center"}
          width={"100%"}
          justifyContent={"space-between"}
        >
          <Typography variant="h6" fontWeight={"bold"}>
            Events
          </Typography>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
        <hr style={{ width: "98%" }} />

        {events.map((event) => (
          <Box
            key={event.name}
            sx={{ cursor: "pointer" }}
            display={"flex"}
            alignItems={"center"}
            gap={1}
            mt={2}
            onClick={() => {
              navigate("/event");
            }}
          >
            <TodayOutlinedIcon />
            <Typography variant="body1" fontWeight={"bold"}>
              {event.name}{" "}
            </Typography>
          </Box>
        ))}
      </Paper>
    </>
  );
};
export default EventShortCut;
