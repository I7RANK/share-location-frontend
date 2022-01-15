import Header from "../Header/header";
import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Home;
