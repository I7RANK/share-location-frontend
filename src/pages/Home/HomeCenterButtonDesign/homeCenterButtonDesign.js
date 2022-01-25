import './homeCenterButtonDesign.css';
  // eslint-disable-next-line no-unused-vars
import socketConnection from './../../../utils/socket-io/socketConnection';
import { Link } from 'react-router-dom';

function HomeCenterButtonDesign() {
    return (
        <div className='content_home-center-button'>
            <div>
                <Link to={'/map'} className='txt-btn_emit'>
                    Share my location
                </Link>
                {/* <button className='txt-btn_follow_up'>Follow up</button> */}
                <svg className='polygon_btn-center-back' width="136" height="125" viewBox="0 0 136 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45.7626 13.2792C55.77 -4.05409 80.7885 -4.05409 90.7959 13.2792L132.365 85.2792C142.373 102.613 129.863 124.279 109.848 124.279H26.71C6.69522 124.279 -5.81404 102.613 4.19336 85.2792L45.7626 13.2792Z" fill="url(#paint0_linear_19_4)" />
                    <defs>
                        <linearGradient id="paint0_linear_19_4" x1="-31.7208" y1="-25.7208" x2="168.279" y2="174.279" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="#363636" />
                        </linearGradient>
                    </defs>
                </svg>


                <svg className='polygon_btn-center-front' width="119" height="110" viewBox="0 0 119 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.7626 13.2792C46.77 -4.05412 71.7885 -4.0541 81.7959 13.2792L114.705 70.2793C124.712 87.6126 112.203 109.279 92.1882 109.279H26.3702C6.35542 109.279 -6.15381 87.6126 3.8536 70.2792L36.7626 13.2792Z" fill="url(#paint0_linear_19_6)" />
                    <defs>
                        <linearGradient id="paint0_linear_19_6" x1="-30.7208" y1="-25.7208" x2="149.279" y2="154.279" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#B3B3B3" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    );
}

export default HomeCenterButtonDesign;
