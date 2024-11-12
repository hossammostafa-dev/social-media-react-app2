import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import EventCard from "./EventCard";
import { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import { events } from "../data/EventsData";
//import {events} from '../data/EventsData'

const Event = () => {
  const [postType, setPostType] = useState("");

  const handleChange = (event) => {
    setPostType(event.target.value);
  };
  return (
    <>
      <Box
        sx={{ scrollbarWidth: "none" }}
        width={{ xs: "100%", sm: "60%" }}
        maxHeight={"87.9vh"}
        overflow={"auto"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Stack width={"100%"} direction={"column"} gap={2}>
          <Stack
            width={"100%"}
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            p={1}
          >
            <Typography variant="h6" fontWeight={"bold"}>
              Upcoming Event
            </Typography>

            <Stack direction={"row"} alignItems={"center"}>
              <Typography variant="body1" fontWeight={"bold"}>
                Sort by:
              </Typography>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <Select
                    sx={{
                      width: "70%",
                      height: "30px",
                      fontWeight: "bold",
                      fontSize: "13px",
                      border: "none",
                      "& fieldset": {
                        border: "none",
                      },
                    }}
                    value={postType}
                    defaultValue="public"
                    displayEmpty
                    size="small"
                    onChange={handleChange}
                  >
                    <MenuItem value="" defaultChecked>
                      Public
                    </MenuItem>
                    <MenuItem value="special">Special</MenuItem>
                    <MenuItem value="friendonly">FriendOnly</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <FilterListIcon />
            </Stack>
          </Stack>

          <Stack width={"100%"} direction={{ xs: "column", sm: "row" }} gap={2}>
            {events.map((eventItem) => (
              <EventCard
                key={eventItem.name}
                name={eventItem.name}
                imag={eventItem.image}
                month={eventItem.month}
                time={eventItem.time}
                day={eventItem.day}
                location={eventItem.location}
                user1={eventItem.users.user1}
                user2={eventItem.users.user2}
                user3={eventItem.users.user3}
                user4={eventItem.users.user4}
              />
            ))}
          </Stack>

          <Stack width={"100%"} direction={{ xs: "column", sm: "row" }} gap={2}>
            {events.map((eventItem) => (
              <EventCard
                key={eventItem.name}
                name={eventItem.name}
                imag={eventItem.image}
                month={eventItem.month}
                time={eventItem.time}
                day={eventItem.day}
                location={eventItem.location}
                user1={eventItem.users.user1}
                user2={eventItem.users.user2}
                user3={eventItem.users.user3}
                user4={eventItem.users.user4}
              />
            ))}
          </Stack>

          <Stack width={"100%"} direction={{ xs: "column", sm: "row" }} gap={2}>
            {events.map((eventItem) => (
              <EventCard
                key={eventItem.name}
                name={eventItem.name}
                imag={eventItem.image}
                month={eventItem.month}
                time={eventItem.time}
                day={eventItem.day}
                location={eventItem.location}
                user1={eventItem.users.user1}
                user2={eventItem.users.user2}
                user3={eventItem.users.user3}
                user4={eventItem.users.user4}
              />
            ))}
          </Stack>
        </Stack>
      </Box>
    </>
  );
};
export default Event;
