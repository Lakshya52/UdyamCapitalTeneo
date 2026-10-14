import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Outlet } from "react-router-dom"
import Landing from "./pages/Landing"
import About from "./pages/About"
import ServiceDetail from "./pages/ServiceDetail"
import Blogs from "./pages/Blogs"
import News from "./pages/News"
import PostDetail from "./pages/PostDetail"
import Contact from "./pages/Contact"
import Careers from "./pages/Careers"
import JobDetail from "./pages/JobDetail"
import NotFound from "./pages/NotFound"
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Landing />} />
          <Route path='/about' element={<About />} />
          <Route path='/services/:slug' element={<ServiceDetail />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blogs/:slug' element={<PostDetail kind="blog" />} />
          <Route path='/news' element={<News />} />
          <Route path='/news/:slug' element={<PostDetail kind="news" />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/careers/:slug' element={<JobDetail />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
