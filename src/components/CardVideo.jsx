/* eslint-disable react/prop-types */

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Button } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

// eslint-disable-next-line no-unused-vars
const ExpandMore = styled((props) => {
  // eslint-disable-next-line no-unused-vars
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

const CardVideo = ({
  userImage,
  username,
  date,
  title,
  body,
  video,
  likes,
  comments,
  shares,
  saves,
}) => {
  return (
    <>
      <Card sx={{ maxWidth: "100%" }}>
        <CardHeader
          avatar={
            <img
              src={userImage}
              alt=""
              style={{ width: "45px", height: "45px", borderRadius: "50%" }}
            />
          }
          action={
            <Box>
              <Button sx={{ textTransform: "capitalize", fontWeight: "bold" }}>
                {" "}
                + Follow
              </Button>
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            </Box>
          }
          title={username}
          subheader={date}
        />
        <video style={{ width: "100%", height: "300px" }} controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <CardContent>
          <Typography variant="h5" fontWeight={"bold"}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {body}
          </Typography>
        </CardContent>
        <hr style={{ width: "95%", opacity: "0.3", margin: "0" }} />

        <CardActions
          disableSpacing
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box display={"flex"} justifyContent={"space-between"} gap={2}>
            <Box display={"flex"} alignItems={"center"}>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>

              <Typography fontWeight={"bold"} fontSize={"15px"} color="gray">
                {likes} like
              </Typography>
            </Box>

            <Box display={"flex"} alignItems={"center"}>
              <IconButton aria-label="add to favorites">
                <ChatBubbleOutlineIcon />
              </IconButton>
              <Typography fontWeight={"bold"} fontSize={"15px"} color="gray">
                {comments} Comment
              </Typography>
            </Box>

            <Box display={"flex"} alignItems={"center"}>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Typography fontWeight={"bold"} fontSize={"15px"} color="gray">
                {shares} Share
              </Typography>
            </Box>
          </Box>

          <Box display={"flex"} alignItems={"center"}>
            <IconButton aria-label="share">
              <BookmarkBorderOutlinedIcon />
            </IconButton>
            <Typography fontWeight={"bold"} fontSize={"15px"} color="gray">
              {saves} Saved
            </Typography>
          </Box>
        </CardActions>
      </Card>
    </>
  );
};

export default CardVideo;
