/* eslint-disable react/prop-types */
import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const EventCard = ({
  name,
  imag,
  month,
  time,
  day,
  location,
  user1,
  user2,
  user3,
  user4,
}) => {
  return (
    <>
      <Card sx={{ minWidth: { xs: "100%", sm: "49%" }, position: "relative" }}>
        <CardMedia
          sx={{ height: 220, p: "15px", borderRadius: "20px" }}
          component="img"
          image={imag}
          title="green iguana"
        />
        <CardContent>
          <Box
            width={"90%"}
            height={"25%"}
            position={"absolute"}
            top={"45%"}
            display={"flex"}
            justifyContent={"end"}
          >
            <Box
              boxShadow={"initial"}
              height={"90%"}
              width={"25%"}
              bgcolor={"white"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              pl={2}
              pr={2}
              borderRadius={"10px"}
            >
              <Typography variant="h6" fontWeight={"bold"} color="gray">
                {month}
              </Typography>
              <Typography variant="h3" fontWeight={"bold"}>
                {day}
              </Typography>
            </Box>
          </Box>
          <Typography
            gutterBottom
            variant="subtitle2"
            component="div"
            color="#2EFE9A"
          >
            {time}
          </Typography>
          <Typography variant="h6" fontWeight={"bold"}>
            {name}
          </Typography>

          <Typography variant="subtitle2" color="gray">
            {location}
          </Typography>
        </CardContent>

        <hr style={{ width: "90%", opacity: "0.3" }} />
        <CardActions>
          <AvatarGroup total={6}>
            <Avatar alt="Remy Sharp" src={user1} />
            <Avatar alt="Travis Howard" src={user2} />
            <Avatar alt="Agnes Walker" src={user3} />
            <Avatar alt="Trevor Henderson" src={user4} />
          </AvatarGroup>
        </CardActions>
      </Card>
    </>
  );
};
export default EventCard;
