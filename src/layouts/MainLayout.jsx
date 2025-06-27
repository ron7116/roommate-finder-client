import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../pages/Loader";

const MainLayout = () => {
  const { state } = useNavigation();

  return (
    <>
      {/* Sticky Header */}
      <header className="sticky top-0 z-50">
        <div className="w-11/12 mx-auto">
          <Header />
        </div>
      </header>

      {/* Main content */}
      <main className="w-11/12 min-h-[calc(100vh-325px)] mx-auto my-5">
        {state === "loading" ? <Loader /> : <Outlet />}
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
