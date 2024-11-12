import { Box, IconButton, Paper, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { channels } from "../data/videosData";
import { subscriptions } from "../data/videosData";

const FollowVideos = () => {
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
            Your Watchlist
          </Typography>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
        <hr style={{ width: "98%" }} />

        {channels.map((channel) => (
          <Box
            key={channel.name}
            display={"flex"}
            alignItems={"center"}
            gap={1.5}
            mt={1}
            justifyContent={"space-between"}
          >
            <Box display={"flex"} alignItems={"center"} gap={2}>
              <img
                src={channel.image}
                alt=""
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
              <Box>
                <Typography
                  variant="subtitle1"
                  fontSize={"15px"}
                  fontWeight={"bold"}
                >
                  {channel.name}
                </Typography>
                <Typography variant="subtitle2" fontSize={"13px"} color="gray">
                  {" "}
                  {channel.newVideo}
                </Typography>
              </Box>
            </Box>
            <IconButton sx={{ bgcolor: "#F2F2F2" }}>
              <PlayArrowIcon />
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
            Your subscriptions
          </Typography>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
        <hr style={{ width: "98%" }} />

        {subscriptions.map((channelSub) => (
          <Box
            key={channelSub.name}
            display={"flex"}
            alignItems={"center"}
            gap={1}
            mt={2}
          >
            <img
              src={channelSub.image}
              alt=""
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            />
            <Box>
              <Typography variant="body2" fontSize={"15px"} fontWeight={"bold"}>
                {channelSub.name}
              </Typography>
            </Box>
          </Box>
        ))}
      </Paper>
    </>
  );
};
export default FollowVideos;
