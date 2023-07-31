import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/notFound";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { RegisterLoginProvider } from "../contexts/contexRegisterLogin";
import { Home } from "../pages/home";
import { HomeProvider } from "../contexts/contexHome";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<HomeProvider />}>
        <Route path="/" element={<Home />} />:
      </Route>
      <Route element={<RegisterLoginProvider />}>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
