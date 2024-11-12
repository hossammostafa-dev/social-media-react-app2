import {
  Box,
  Button,
  Divider,
  FormControl,
  MenuItem,
  Modal,
  Paper,
  Select,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { admin } from "../data/FeedData";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2.5,
};

const CreateSection = () => {
  const [postType, setPostType] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    setPostType(event.target.value);
  };

  let buttons = [
    { icon: <PhotoOutlinedIcon sx={{ color: "blue" }} />, text: "Image/Video" },
    {
      icon: <InsertLinkOutlinedIcon sx={{ color: "orange" }} />,
      text: "Atttachment",
    },
    { icon: <VideoCallOutlinedIcon sx={{ color: "red" }} />, text: "live" },
    { icon: <TagOutlinedIcon sx={{ color: "green" }} />, text: "Hashtag" },
  ];
  return (
    <>
      <Paper sx={{ height: "130px", width: "100%", p: 3 }}>
        <Box width={"100%"} display={"flex"} flexDirection={"column"} gap={1}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <img
              src={admin.image}
              alt=""
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            />
            <Box
              sx={{ bgcolor: "#F2F2F2", width: "70%", borderRadius: "10px" }}
            >
              <TextField
                onClick={handleOpen}
                placeholder="What's on your mind"
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                    },
                  },
                }}
              />
            </Box>
            <Button
              variant="contained"
              size="small"
              sx={{
                width: { xs: "10%", sm: "20%" },
                fontWeight: "bold",
                textTransform: "none",
                fontSize: { xs: "14px", sm: "16px" },
              }}
            >
              Share
            </Button>
          </Box>

          <Divider sx={{ width: "99.9%" }} />

          <Box
            overflow={"auto"}
            display={"flex"}
            flexDirection={"row"}
            gap={3}
            alignItems={"center"}
            sx={{ scrollbarWidth: "none" }}
          >
            {buttons.map((button) => (
              <Button
                key={button.icon}
                variant="outlined"
                sx={{
                  color: "#585858",
                  textTransform: "capitalize",
                  border: "none",
                  display: "flex",
                  gap: 0.5,
                  alignItems: "center",
                }}
              >
                {button.icon}
                {button.text}
              </Button>
            ))}
          </Box>
        </Box>
      </Paper>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={style}
            width={{ xs: "90%", sm: "50%" }}
            borderRadius={"15px"}
          >
            <Stack direction={"column"} justifyContent={"center"} gap={2}>
              <Box
                display={"flex"}
                width={"100%"}
                justifyContent={"space-between"}
                alignItems={"center"}
                p={1}
              >
                <Box display={"flex"} gap={1} width={"50%"}>
                  <img
                    src={admin.image}
                    alt=""
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                  <Box display={"flex"} flexDirection={"column"}>
                    <Typography variant="body2">{admin.username}</Typography>

                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <Select
                          sx={{
                            width: "70%",
                            height: "30px",
                            fontSize: "11px",
                            border: "none",
                            "& fieldset": {
                              border: "none",
                            },
                          }}
                          value={postType}
                          defaultValue="public"
                          displayEmpty
                          size="small"
                          onChange={handleChange}
                        >
                          <MenuItem value="" defaultChecked>
                            Public
                          </MenuItem>
                          <MenuItem value="special">Special</MenuItem>
                          <MenuItem value="friendonly">FriendOnly</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Box>
                </Box>
                <CloseIcon
                  sx={{ color: "gray", cursor: "pointer" }}
                  onClick={handleClose}
                />
              </Box>

              <TextareaAutosize
                placeholder="What's on your mind ?"
                style={{
                  width: "100%",
                  border: "none",
                  backgroundColor: "#F2F2F2",
                  height: "200px",
                  borderRadius: "10px",
                  fontFamily: "monospace",
                  fontSize: "18px",
                  padding: "10px",
                }}
              />

              <Box
                width={"100%"}
                display={"flex"}
                flexDirection={"row"}
                flexWrap={{ xs: "wrap", sm: "nowrap" }}
                gap={2}
                alignItems={"center"}
              >
                {buttons.map((button) => (
                  <Button
                    key={button.icon}
                    variant="outlined"
                    sx={{
                      color: "gray",
                      textTransform: "capitalize",
                      border: "none",
                      display: "flex",
                      gap: 0.5,
                      alignItems: "center",
                    }}
                  >
                    {button.icon}
                    {button.text}
                  </Button>
                ))}
              </Box>

              <hr style={{ width: "100%", opacity: "0.4" }} />
              <Button
                sx={{
                  textTransform: "capitalize",
                  bgcolor: "#CEECF5",
                  borderRadius: "10px",
                }}
              >
                Share
              </Button>
            </Stack>
          </Box>
        </Modal>
      </div>
    </>
  );
};
export default CreateSection;
