import { Box, Stack } from "@mui/material";
import CardVideo from "./CardVideo";
import { videos } from "../data/videosData";

const WatchVideos = () => {
  return (
    <>
      <Box
        sx={{ scrollbarWidth: "none" }}
        width={{ xs: "100%", sm: "60%" }}
        maxHeight={"87.9vh"}
        overflow={"auto"}
      >
        <Stack direction={"column"} gap={2}>
          {videos.map((item) => (
            <CardVideo
              key={item.username}
              userImage={item.userImage}
              username={item.username}
              date={item.date}
              title={item.title}
              body={item.body}
              video={item.video}
              likes={item.likes}
              comments={item.comments}
              shares={item.shares}
              saves={item.saves}
            />
          ))}
        </Stack>
      </Box>
    </>
  );
};
export default WatchVideos;
