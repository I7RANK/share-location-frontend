import './banner.css';
import streetsImg from '../../../img/streets_design.png';

function Banner() {
  return (
    <>
      <div className='banner-content'>
        <img src={streetsImg} className='img-banner'></img>
        <div className='img-banner-shadow'></div>
      </div>
    </>
  );
}

export default Banner;
