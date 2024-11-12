import { Box, IconButton, Paper, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import { SuggestedData } from "../data/EventsData";
import { latestActivityData } from "../data/EventsData";

const FollowEvent = () => {
  return (
    <>
      <Paper sx={{ p: 1.5 }}>
        <Box
          display={"flex"}
          alignItems={"center"}
          width={"100%"}
          justifyContent={"space-between"}
        >
          <Typography variant="body1" fontWeight={"bold"}>
            Suggested for you
          </Typography>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
        <hr style={{ width: "98%" }} />

        {SuggestedData.map((item) => (
          <Box
            key={item.username}
            display={"flex"}
            alignItems={"center"}
            gap={1.5}
            mt={1}
            justifyContent={"space-between"}
          >
            <Box display={"flex"} alignItems={"center"} gap={2}>
              <img
                src={item.image}
                alt=""
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
              <Box>
                <Typography
                  variant="subtitle1"
                  fontSize={"15px"}
                  fontWeight={"bold"}
                >
                  {item.name}
                </Typography>
                <Typography variant="subtitle2" fontSize={"13px"} color="gray">
                  {item.username}
                </Typography>
              </Box>
            </Box>
            <IconButton sx={{ bgcolor: "#F2F2F2" }}>
              <PersonAddAltOutlinedIcon />
            </IconButton>
          </Box>
        ))}
      </Paper>

      {/* section tow*/}

      <Paper sx={{ p: 1.5 }}>
        <Box
          display={"flex"}
          alignItems={"center"}
          width={"100%"}
          justifyContent={"space-between"}
        >
          <Typography variant="body1" fontWeight={"bold"}>
            Latest Activity
          </Typography>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>

        <hr style={{ width: "98%" }} />

        {latestActivityData.map((item) => (
          <Box
            key={item.title}
            display={"flex"}
            alignItems={"center"}
            gap={1}
            mt={1}
          >
            <img
              src={item.image}
              alt=""
              style={{ width: "40px", height: "40px", borderRadius: "15%" }}
            />
            <Box>
              <Typography
                variant="subtitle1"
                fontSize={"15px"}
                fontWeight={"bold"}
              >
                {item.title}
              </Typography>
              <Typography variant="subtitle2" fontSize={"13px"} color="gray">
                {item.title2}
              </Typography>
            </Box>
          </Box>
        ))}
      </Paper>
    </>
  );
};
export default FollowEvent;
