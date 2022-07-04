import React from "react";
import coin from "../assets/img/xu.jpg";
import nha from "../assets/img/nha.jpg";
import nha2 from "../assets/img/nha2.png";
import nha3 from "../assets/img/nha3.png";
import nha4 from "../assets/img/nha4.jpg";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Coin() {
  const { voucher_id } = useParams();
  
  return (
    <>
      <img className="pageOther" src={coin}></img>
      <div className="fixed-bottom menu">
        <div className="row">
          <div className="col col1">
            <Link to={`/Home/${voucher_id}`}>
              <img className="icon2" src={nha} alt />
              <p className="txt2">Trang chủ</p>
            </Link>
          </div>

          <div className="col col1">
            <img className="icon2 imgactive" src={nha2} alt />
            <button className="txtht">Vani Xu</button>
          </div>
          <div className="col col1">
            <Link to={`/Lotteria/${voucher_id}`}>
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
  );
}

export default Coin;
