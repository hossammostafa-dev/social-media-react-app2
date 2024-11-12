import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Feed from "./components/Feed";
import Event from "./components/Event";
import WatchVideos from "./components/WatchVideos";
import Marketplace from "./components/MarketPlace";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Feed />} />
      <Route path="event" element={<Event />} />
      <Route path="videos" element={<WatchVideos />} />
      <Route path="marketplace" element={<Marketplace />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
