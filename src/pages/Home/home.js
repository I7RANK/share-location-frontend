import './home.css';
import StartButton from "./StartButton/startButton";
import Banner from "./Banner/banner";
import Description from "./Description/description";

function Home() {
  return (
    <>
      <section className="home">
        <StartButton />
        <Banner />
        <Description />
      </section>
    </>
  );
}

export default Home;
