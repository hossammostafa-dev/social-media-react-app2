import { Box, Stack, Typography } from "@mui/material";
import { users } from "../data/FeedData";

const Stories = () => {
  return (
    <>
      <Box
        overflow={"auto"}
        sx={{ scrollbarWidth: "none", boxShadow: "4px 1px 5px #cacaca" }}
      >
        <Stack
          bgcolor={"white"}
          borderRadius={"10px"}
          pl={2}
          height={"130px"}
          direction={"row"}
          alignItems={"center"}
          overflow={"auto"}
          gap={2}
          sx={{ scrollbarWidth: "none" }}
        >
          {users.map((user, index) => (
            <Box
              key={user.image}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              {index === 0 ? (
                <img
                  src={user.image}
                  alt=""
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    border: "solid gray 2px",
                    padding: 2,
                  }}
                />
              ) : (
                <img
                  src={user.image}
                  alt=""
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    border: "solid blue 2px",
                    padding: 2,
                  }}
                />
              )}

              {index === 0 ? (
                <Typography color="gray" fontWeight={500}>
                  Your Story
                </Typography>
              ) : (
                <Typography>{user.username}</Typography>
              )}
            </Box>
          ))}
        </Stack>
      </Box>
    </>
  );
};
export default Stories;
