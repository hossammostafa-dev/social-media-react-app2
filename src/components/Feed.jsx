import { Box, Stack } from "@mui/material";
import Post from "./Post";
import Stories from "./Stories";
import CreateSection from "./CreateSection";
import { posts } from "../data/FeedData";

const Feed = () => {
  return (
    <>
      <Box
        sx={{ scrollbarWidth: "none" }}
        width={{ xs: "100%", sm: "60%" }}
        maxHeight={"87.9vh"}
        overflow={"auto"}
      >
        <Stack direction={"column"} gap={1}>
          <Stories />

          <CreateSection />

          {posts.map((post) => (
            <Post
              key={post.username}
              userImage={post.userImage}
              username={post.username}
              date={post.date}
              title={post.title}
              body={post.body}
              postImage={post.postImage}
              likes={post.likes}
              comments={post.comments}
              shares={post.shares}
              saves={post.saves}
            />
          ))}
        </Stack>
      </Box>
    </>
  );
};
export default Feed;
