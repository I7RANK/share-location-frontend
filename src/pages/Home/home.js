import './home.css';
import StartButton from "./StartButton/startButton";
import Banner from "./Banner/banner";
import Description from "./Description/description";

function Home() {
  return (
    <>
      <section className="home">
        <Description />
        <StartButton />
        <Banner />
      </section>
    </>
  );
}

export default Home;
