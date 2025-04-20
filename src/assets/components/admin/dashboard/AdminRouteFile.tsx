import { Routes, Route } from "react-router-dom";
import D from "./d";
import Users from "./users";
import Tests from "./tests";
import Settings from "./settings";
import Resources from "./resources";
import Home from "./Home";

const AdminRouteFile = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>

        </Route>
      </Routes>
    </>
  )
}

export default AdminRouteFile;