import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <>
      <header>
        <nav className="w-11/12 mx-auto">
          <Header></Header>
        </nav>
      </header>
      <main className="w-11/12 min-h-[calc(100vh-325px)] mx-auto my-5">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default MainLayout;
