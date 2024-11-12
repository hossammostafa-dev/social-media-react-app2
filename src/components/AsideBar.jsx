/* eslint-disable react/prop-types */
import { Box, Stack } from "@mui/material";
import FollowFeed from "./FollowFeed";
import EventFollow from "./EventFollow";
import FollowVideos from "./FollowVideos";
import FollowMarketPlace from "./FollowMarketplace";

const AsideBar = ({ show }) => {
  return (
    <>
      <Box
        sx={{ scrollbarWidth: "none" }}
        width={"20%"}
        maxHeight={"87.9vh"}
        overflow={"auto"}
        display={{ xs: "none", sm: "block" }}
      >
        <Stack direction={"column"} gap={"15px"} width={"100%"}>
          {show === "Feed" && <FollowFeed />}
          {show === "Events" && <EventFollow />}
          {show === "Videos" && <FollowVideos />}
          {show === "Marketplace" && <FollowMarketPlace />}
        </Stack>
      </Box>
    </>
  );
};
export default AsideBar;
