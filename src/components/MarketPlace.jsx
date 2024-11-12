import { Box, Stack } from "@mui/material";
import ProductCard from "./ProductCard";
import { products } from "../data/marketPlaceData";

const Marketplace = () => {
  return (
    <>
      <Box
        sx={{ scrollbarWidth: "none" }}
        width={{ xs: "100%", sm: "60%" }}
        maxHeight={"87.9vh"}
        overflow={"auto"}
      >
        <Stack direction={"column"} gap={2}>
          {products.map((product) => (
            <Stack
              key={product.id}
              direction={{ xs: "column", sm: "row" }}
              gap={2}
              width={"100%"}
            >
              <Stack direction={"row"} width={"50%"} gap={2}>
                <ProductCard
                  productImage={product.image}
                  price={product.price}
                  name={product.name}
                  reviw={product.review}
                  sales={product.sales}
                />
                <ProductCard
                  productImage={product.image}
                  price={product.price}
                  name={product.name}
                  reviw={product.review}
                  sales={product.sales}
                />
              </Stack>
              <Stack direction={"row"} width={"50%"} gap={2}>
                <ProductCard
                  productImage={product.image}
                  price={product.price}
                  name={product.name}
                  reviw={product.review}
                  sales={product.sales}
                />
                <ProductCard
                  productImage={product.image}
                  price={product.price}
                  name={product.name}
                  reviw={product.review}
                  sales={product.sales}
                />
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Box>
    </>
  );
};
export default Marketplace;
