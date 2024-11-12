/* eslint-disable react/prop-types */
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import { admin } from "../data/FeedData";
import { pagesLike } from "../data/FeedData";

const NavBar = ({ handleAsid }) => {
  const navigate = useNavigate();
  let location = useLocation();

  let listItems = [
    { icon: <HomeOutlinedIcon />, text: "Feed", path: "/", followPath: "Feed" },
    {
      icon: <GroupOutlinedIcon />,
      text: "Friends",
      path: "",
      followPath: "Feed",
    },
    {
      icon: <TodayOutlinedIcon />,
      text: "Events",
      path: "/event",
      followPath: "Events",
    },
    {
      icon: <VideocamOutlinedIcon />,
      text: "Watch Videos",
      path: "/videos",
      followPath: "Videos",
    },
    {
      icon: <InsertPhotoOutlinedIcon />,
      text: "Photos",
      path: "",
      followPath: "Feed",
    },
    {
      icon: <ShoppingCartOutlinedIcon />,
      text: "Marketplace",
      path: "/marketplace",
      followPath: "Marketplace",
    },
  ];

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
          <Paper
            sx={{
              width: "100%",
              height: "160px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <Box
              width={"90%"}
              height={"90%"}
              borderRadius={"10px"}
              bgcolor={"#F2F2F2"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={3}
            >
              <Box
                sx={{
                  width: "85%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <img
                  src={admin.image}
                  style={{ width: "37px", height: "37px", borderRadius: "50%" }}
                />
                <b style={{ fontSize: "16px" }}>{admin.username}</b>
              </Box>
              <Stack direction={"row"} gap={2}>
                <Typography
                  fontSize={"14px"}
                  fontWeight={"bold"}
                  color="#6E6E6E"
                >
                  2.3k
                  <br />
                  Follower
                </Typography>
                <Typography
                  fontSize={"14px"}
                  fontWeight={"bold"}
                  color="#6E6E6E"
                >
                  285
                  <br />
                  Following
                </Typography>
                <Typography
                  fontSize={"14px"}
                  fontWeight={"bold"}
                  color="#6E6E6E"
                >
                  80
                  <br />
                  Post
                </Typography>
              </Stack>
            </Box>
          </Paper>

          <Paper sx={{ width: "100%", borderRadius: "10px" }}>
            <Box sx={{ width: "100%" }}>
              <List>
                {listItems.map((item) => (
                  <ListItemButton
                    key={item.icon}
                    sx={{
                      display: "flex",
                      borderRadius: "10px",
                      gap: 1,
                      bgcolor: location.pathname === item.path ? "blue" : null,
                      color:
                        location.pathname === item.path ? "white" : "#585858",
                      ":hover": { bgcolor: "blue", color: "white" },
                    }}
                    onClick={() => {
                      navigate(item.path);
                      handleAsid(item.followPath);
                    }}
                  >
                    {item.icon}

                    <ListItemText primary={item.text} />
                  </ListItemButton>
                ))}
              </List>

              <Divider />

              <Typography fontWeight={"bold"} color="#6E6E6E" pl={2.5} pt={2}>
                Pages You Like
              </Typography>

              <List>
                {pagesLike.map((page) => (
                  <ListItem
                    key={page.name}
                    sx={{
                      display: "flex",
                      gap: 1,
                      cursor: "pointer",
                      ":hover": { bgcolor: "#F2F2F2" },
                    }}
                  >
                    <img
                      src={page.image}
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                      }}
                      alt=""
                    />
                    <Typography
                      variant="body1"
                      fontWeight={"bold"}
                      fontSize={"17px"}
                    >
                      {page.name}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Paper>
        </Stack>
      </Box>
    </>
  );
};
export default NavBar;
