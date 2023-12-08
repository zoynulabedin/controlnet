import logo from "./logo.svg";
import "./App.css";
import "../src/assets/css/auth.css";

import { BrowserRouter, Route, RouterProvider, Routes, useLocation  } from "react-router-dom";
import router from "./router";
import SignInPage from "./pages/Auth/signIn";
import SignUpPage from "./pages/Auth/signUp";
import Dashboard from "./pages/Dashboard/dashboard";
import CreateVideo from "./pages/CreateVideo/createVideo";
import Admin from "./layout/Admin";
import Middleware from "./pages/Admin/middleware";
import Submission from "./pages/Admin/submission";
import Users from "./pages/Admin/users";
import Team from "./pages/Admin/team";
import Analytics from "./pages/Admin/analytics";
import Product from "./pages/Product/Product";
import Model from "./pages/Model/Model";
import DropPhygital from "./pages/DropPhygital/DropPhygital";
import ModelUpload from "./pages/3DModelUpload/ModelUpload";

function App() {
  function RouterComponent() {
    const location = useLocation();
    const routesWithAppClass = ["/product/", "/model/","/dropPhygital/","/modelUpload/"];
    const shouldUseAppClass = routesWithAppClass.includes(location.pathname);

    console.log(shouldUseAppClass);
    return (
      <div className={shouldUseAppClass ? "" : "App"}>
        <Routes>
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createVideo" element={<CreateVideo />} />
          <Route path="/product" element={<Product />} />
          <Route path="/model/" element={<Model />} />
          <Route path="/dropPhygital/" element={<DropPhygital />} />
          <Route path="/modelUpload/" element={<ModelUpload />} />

          <Route path="/admin" element={<Admin />}>
            <Route path="/admin/tools" element={<Middleware />} />
            <Route path="/admin/submission" element={<Submission />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/team" element={<Team />} />
            <Route path="/admin/analytics" element={<Analytics />} />
          </Route>
        </Routes>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <RouterComponent />
    </BrowserRouter>
  );
}

export default App;
