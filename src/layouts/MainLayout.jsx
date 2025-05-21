import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../pages/Loader";

const MainLayout = () => {
  const { state } = useNavigation();
  return (
    <>
      <header>
        <nav className="w-11/12 mx-auto">
          <Header></Header>
        </nav>
      </header>
      <main className="w-11/12 min-h-[calc(100vh-325px)] mx-auto my-5">
        {state == "loading" ? <Loader></Loader> : <Outlet></Outlet>}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default MainLayout;
