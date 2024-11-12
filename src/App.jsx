import "./App.css";
import Header from "./components/Header";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Fragment, useState } from "react";
import NavBar from "./components/NavBar";
import AsideBar from "./components/AsideBar";
import { Outlet } from "react-router-dom";

function App() {
  //const navigate = useNavigate()
  const [show, setShow] = useState("Feed");

  const handleAsid = (conpName) => {
    setShow(conpName);
  };

  return (
    <>
      <Header />

      <Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          <Box sx={{ display: "flex", gap: "20px", mt: "15px" }}>
            <NavBar handleAsid={handleAsid} />

            <Outlet />

            <AsideBar show={show} />
          </Box>
        </Container>
      </Fragment>
    </>
  );
}

export default App;
