/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";

import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { Box } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const ExpandMore = styled((props) => {
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

const Post = ({
  userImage,
  username,
  date,
  title,
  body,
  postImage,
  likes,
  comments,
  shares,
  saves,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={username}
          subheader={date}
        />

        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {title}
          </Typography>
        </CardContent>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography sx={{ marginBottom: 2 }}>{body}</Typography>
          </CardContent>
        </Collapse>

        <CardMedia
          sx={{ pl: "2%", pr: "2%", borderRadius: "4%" }}
          component="img"
          height="300"
          image={postImage}
          alt=""
        />
        <hr style={{ width: "95%", opacity: "0.3", marginTop: "20px" }} />

        <CardActions
          disableSpacing
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box display={"flex"} alignItems={"center"}>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon sx={{ color: "red" }} />
            </IconButton>
            <Typography>{likes}</Typography>

            <IconButton aria-label="add to favorites">
              <ChatBubbleOutlineIcon />
            </IconButton>
            <Typography>{comments}</Typography>

            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <Typography>{shares}</Typography>
          </Box>

          <Box display={"flex"} alignItems={"center"}>
            <IconButton>
              <BookmarkBorderOutlinedIcon />
              <Typography>{saves}</Typography>
            </IconButton>
          </Box>
        </CardActions>
      </Card>
    </>
  );
};
export default Post;
