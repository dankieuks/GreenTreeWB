import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Page/Contact/Contact";
import Home from "./Page/Home/Home";
import DefaultLayout from "./Components/Layout/DefaultLayout";
import { Fragment } from "react";
import "./App.css";
import Servies from "./Page/Contact/Servies";
import ServiesDetail from "./Page/Servies/ServiesDetail.jsx";
import Admin from "./Components/Admin/Admin.jsx";
import Dashboard from "./Components/Admin/Dashboard/Dashbroad.jsx";

import Blog from "./Components/Admin/Blog/Blog.jsx";
import Login from "./Components/Admin/Auth/login.jsx";
import ProtectedRoute from "./Components/Admin/Auth/ProtectedRoute.jsx";
import Products from "./Components/Admin/Products/Products.jsx";

function App() {
  const publicRouter = [
    { path: "/dich-vu", pages: Servies },
    { path: "/lien-he", pages: Contact },
    { path: "/du-an/:id", pages: ServiesDetail },
  ];
  return (
    <Router>
      <Routes>
        {publicRouter.map((route, index) => {
          const Layout = route.layout === null ? Fragment : DefaultLayout;
          const Page = route.pages;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<ProtectedRoute element={Admin} />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="product" element={<Products/>} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
