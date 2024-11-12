/* eslint-disable react/prop-types */
import { Box, Card, CardMedia, Stack, Typography } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const ProductCard = ({ productImage, price, name, reviw, sales }) => {
  return (
    <>
      <Card sx={{ minWidth: { xs: "95%", sm: "48%" } }}>
        <CardMedia
          sx={{ height: 150, borderRadius: "0px 0px 15px 15px" }}
          image={productImage}
          title="green iguana"
        />
        <Box height={"100px"} width={"100%"} p={1}>
          <Typography fontWeight={"bold"}>{price}</Typography>
          <Typography fontWeight={"bold"} fontSize={"15px"} color="gray">
            {name}
          </Typography>
          <hr style={{ opacity: "0.5" }} />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              gap={0.5}
            >
              <StarBorderIcon sx={{ color: "yellow" }} />
              <Typography fontWeight={"bold"} fontSize={"15px"} color="gray">
                {reviw}
              </Typography>
            </Box>

            <Typography variant="subtitle2" fontWeight={"bold"} color="gray">
              {sales}
            </Typography>
          </Stack>
        </Box>
      </Card>
    </>
  );
};

export default ProductCard;
