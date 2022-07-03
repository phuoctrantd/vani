import React from "react";
import setting from "../assets/img/cai-dat.jpg";
import nha from "../assets/img/nha.jpg";
import nha2 from "../assets/img/nha2.jpg";
import nha3 from "../assets/img/nha3.png";
import nha4 from "../assets/img/nha4.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function Setting() {
  
  const { voucher_id } = useParams();
  return (
    <>
      <img className="pageOther" src={setting}></img>
      <div className="fixed-bottom menu">
        <div className="row">
          <div className="col col1">
            <Link to={`/Home/${voucher_id}`}>
              <img className="icon2 " src={nha} alt />
              <p className="txt2">Trang chủ</p>
            </Link>
          </div>

          <div className="col col1">
            <Link to={`/Coin/${voucher_id}`}>
              <img className="icon2 " src={nha2} alt />
              <p className="txt2">Vani Xu</p>
            </Link>
          </div>
          <div className="col col1">
            <Link to={`/Lotteria/${voucher_id}`}>
              <img className="icon2 imgnull" src={nha3} alt />
              <p className="txt2">Hộp thư</p>
            </Link>
          </div>
          <div className="col col1">
            
              <img className="icon2 imgactive" src={nha4} alt />
              <button className="txtht">Cài đặt</button>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Setting;
