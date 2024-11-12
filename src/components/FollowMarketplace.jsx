import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import DataSaverOffOutlinedIcon from "@mui/icons-material/DataSaverOffOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";

const FollowMarketPlace = () => {
  let listItem = [
    { icon: <LocalMallOutlinedIcon />, text: "Products", path: "defulte" },
    { icon: <BusinessCenterOutlinedIcon />, text: "Servicese" },
    { icon: <VideocamOutlinedIcon />, text: "NFT/Digital art" },
    { icon: <HomeOutlinedIcon />, text: "Housiing" },
    { icon: <WatchOutlinedIcon />, text: "Electronics" },
    { icon: <DataSaverOffOutlinedIcon />, text: "Finance & Stocks" },
  ];
  return (
    <>
      <Paper sx={{ width: "100%" }}>
        <Box sx={{ width: "100%" }}>
          <Box
            display={"flex"}
            alignItems={"center"}
            width={"100%"}
            justifyContent={"space-between"}
            px={2}
            pt={1}
          >
            <Typography variant="body1" fontWeight={"bold"}>
              Top Categories
            </Typography>

            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Box>
          <hr style={{ width: "90%" }} />

          <List>
            {listItem.map((item) => (
              <ListItemButton
                key={item.icon}
                sx={{
                  display: "flex",
                  borderRadius: "10px",
                  gap: 1,
                  bgcolor: item.path === "defulte" ? "#CEECF5" : null,
                  color: item.path === "defulte" ? "blue" : null,
                  fontWeight: "bold",
                }}
              >
                {item.icon}

                <ListItemText primary={item.text} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Paper>

      <Paper sx={{ width: "100%" }}>
        <Box sx={{ width: "100%" }}>
          <Box
            display={"flex"}
            alignItems={"center"}
            width={"100%"}
            justifyContent={"space-between"}
            px={2}
            pt={1}
          >
            <Typography variant="body1" fontWeight={"bold"}>
              Filter
            </Typography>
          </Box>
          <hr style={{ width: "90%" }} />
          <Box p={2}>
            <Typography fontWeight={"bold"}>Suppliers Types</Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Trade Assurance"
              />
              <FormControlLabel control={<Checkbox />} label="Verifed" />
            </FormGroup>
          </Box>

          <Box px={2}>
            <Typography fontWeight={"bold"}>Condition</Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="New Stuff"
              />
              <FormControlLabel control={<Checkbox />} label="Secand Hand" />
            </FormGroup>
          </Box>

          <Box px={2} pt={1.5}>
            <Typography fontWeight={"bold"}>Price</Typography>

            <Box display={"flex"} alignItems={"center"}>
              <PaidOutlinedIcon
                sx={{
                  bgcolor: "#BDBDBD",
                  width: "40px",
                  height: "30px",
                  p: 0.3,
                }}
              />
              <TextField
                placeholder="Minimum..."
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

            <Box display={"flex"} alignItems={"center"}>
              <PaidOutlinedIcon
                sx={{
                  bgcolor: "#BDBDBD",
                  width: "40px",
                  height: "30px",
                  p: 0.3,
                }}
              />
              <TextField
                placeholder="Maxmum..."
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
          </Box>
        </Box>
      </Paper>
    </>
  );
};
export default FollowMarketPlace;
