import { Stack, Tab, Tabs, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { users } from "../data/FeedData";

const Messages = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        overflow={"auto"}
        sx={{
          scrollbarWidth: "none",
          maxWidth: "100%",
          height: { xs: "100%", sm: "490px" },
          bgcolor: "background.paper",
          p: 1.5,
          borderRadius: "10px",
        }}
      >
        <Box height={"10%"} display={"flex"} justifyContent={"space-between"}>
          <Typography variant="h6" fontWeight={"bold"}>
            Messages
          </Typography>
          <CreateIcon />
        </Box>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            bgcolor: "#FAFAFA",
            px: 1,
            borderRadius: "10px",
          }}
        >
          <SearchIcon />

          <TextField
            placeholder="Search..."
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
              },
            }}
          />
          <FilterListIcon />
        </Box>

        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable prevent tabs example"
        >
          <Tab label="Primary" />
          <Tab label="General" />
        </Tabs>

        {users.map((user) => (
          <Stack
            key={user.username}
            direction={"row"}
            alignItems={"center"}
            gap={1}
            width={"100%"}
            mt={1}
          >
            <img
              src={user.image}
              alt=""
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            />
            <Typography variant="body1" fontWeight={"bold"}>
              {user.username}
            </Typography>
          </Stack>
        ))}
      </Box>
    </>
  );
};
export default Messages;
