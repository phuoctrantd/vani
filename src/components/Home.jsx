import React from 'react'
import home from '../assets/img/home.jpg'
import { Link } from "react-router-dom";
import nha from "../assets/img/nha.png";
import nha2 from "../assets/img/nha2.jpg";
import nha3 from "../assets/img/nha3.png";
import nha4 from "../assets/img/nha4.jpg";
import { useParams } from "react-router-dom";

function Home() {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  let voucher_id = params.voucher_id; 
  return (
    <>
    <img className='pageOther' src={home}></img>
    <div className="fixed-bottom menu">
        <div className="row">
          <div className="col col1">
          <img className="icon2 imgactive" src={nha} alt />
            <button className="txtht">Trang chủ</button>
          </div>

          <div className="col col1">
          <Link to={`/Coin/${voucher_id}`}>
          <img className="icon2 " src={nha2} alt />
              <p className="txt2">Vani Xu</p>
            </Link>
          </div>
          <div className="col col1">
            <Link to={`/lotteria/?voucher_id=${voucher_id}`}>
              <img className="icon2 imgnull" src={nha3} alt />
              <p className="txt2">Hộp thư</p>
            </Link>
          </div>
          <div className="col col1">
            <Link to={`/Setting/${voucher_id}`}>
              <img className="icon2 " src={nha4} alt />
              <p className="txt2">Cài đặt</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home