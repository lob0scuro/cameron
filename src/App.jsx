import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import RootLayout from "./layout/RootLayout";
import Home from "./routes/home/Home";
import Projects from "./routes/projects/Projects";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
