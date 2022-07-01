import React from "react";
import logo from "../assets/img/logo.jpg";
import icon1 from "../assets/img/icon1.jpg";
import icon2 from "../assets/img/icon2.jpg";
import icon3 from "../assets/img/icon3.jpg";
import icon4 from "../assets/img/icon4.jpg";
import lp from "../assets/img/lp.jpg";
import vani from "../assets/img/vani.jpg";
import nha from "../assets/img/nha.jpg";
import nha2 from "../assets/img/nha2.jpg";
import nha3 from "../assets/img/nha3.jpg";
import nha4 from "../assets/img/nha4.jpg";
import Modal from "./Modal";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { md5 } from "../md5";
import NotFound from "./NotFound";
function Vani() {
  const [modalOpen, setModalOpen] = useState(0, 1, 2);
  const { voucher_id } = useParams();
  const md5VoucherId = md5(voucher_id);
  
  console.log(md5VoucherId);
  return (
    <>
      {process.env.REACT_APP_VANI_KEY.includes(md5VoucherId) ? (
        <div>
          <div className="fixed-top hopthu">
            <p>Hộp thư</p>
          </div>
          <header>
            <div className="row">
              <img className="logo" src={logo} alt />
            </div>
            <div className="row dong1">
              <div className="col-2 col-lg-1 col1">
                <img className="icon1" src={icon1} alt />
                <p className="txt1">Tất cả</p>
              </div>
              <div className="col-2 col-lg-1 col1">
                <img className="icon1" src={icon2} alt />
                <p className="txt2">vani</p>
              </div>
              <div className="col-2 col-lg-1 col1">
                <img className="icon1" src={icon3} alt />
                <p className="txt2">Coupon</p>
              </div>
              <div className="col-2 col-lg-1 col1">
                <img className="icon1" src={icon4} alt />
                <p className="txt2">Thông báo</p>
              </div>
            </div>
          </header>
          <div className="section">
            <div className="nen">
              <div className="the">
                <div className="row">
                  <div className="col-2 col-lg-1">
                    <img className="iconlp" src={lp} alt />
                  </div>
                  <div className="col txt3">
                    <h5 className="txtlp">L.POINT</h5>
                    <p className="time">4 phút trước</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col" id="div1">
                    <p className="txt4">🎉 Coupon cho thành viên mới!</p>
                    <p id="coupon">
                      [Mã coupon] {voucher_id} <br />
                      Phiếu giảm giá này có thể đổi lấy Set gà rán của Lotteria{" "}
                      <br />
                    </p>
                  </div>
                </div>
                <div className="row phieu m-1">
                  <div className="col">
                    <p className="txt5">Set Gà Rán Lotteria</p>
                    <pie className="tron" />
                    <p className="txt6">Hết hạn ngày 31/07/2022</p>
                  </div>
                  {/* Button trigger modal */}
                  <button
                    type="button"
                    id="send"
                    className={`col-4 phieuphai ${
                      modalOpen === 2 ? "change" : ""
                    }`}
                    data-toggle="modal"
                    data-target="#myModal"
                    data-dismiss="modal"
                    data-backdrop="false"
                    onClick={() => {
                      setModalOpen(1);
                    }}
                  >
                    <i className="bi bi-check" style={{ fontSize: 25 }} />
                    {modalOpen == 0 && <p className="txtsd">Sử dụng</p>}

                    {modalOpen == 2 && <p className="txtdsd">Đã sử dụng</p>}
                  </button>
                  {modalOpen == 1 && (
                    <Modal
                      setOpenModal={setModalOpen}
                      voucher_id={voucher_id}
                    />
                  )}
                </div>
              </div>
              <div className="the">
                <div className="row">
                  <div className="col-2 col-lg-1">
                    <img className="iconlp" src={vani} alt />
                  </div>
                  <div className="col txt3">
                    <h5 className="txtlp">vani</h5>
                    <p className="time">Ngày 4 tháng 5</p>
                  </div>
                  <div>
                    <button className="btn1">Đã hết hạn</button>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p className="txt4">
                      Sử dụng Mã vạch Vani, tích lũy Ice Cream, nhận Xu
                    </p>
                    <p className="txt4">
                      🎁 Nếu bạn tích/ sử dụng điểm bằng Mã vạch Vani tại cửa
                      hàng của đối tác, bạn sẽ nhận được Ice Cream(tối đa 15
                      chiếc mỗi tháng)! Nhấn vào Ice Cream để nhận Vani Xu ngẫu
                      nhiên.
                    </p>
                  </div>
                </div>
                <button className="btn2">Xem Ice Cream</button>
              </div>
              <div className="the">
                <div className="row">
                  <div className="col-2 col-lg-1">
                    <img className="iconlp" src={vani} alt />
                  </div>
                  <div className="col txt3">
                    <h5 className="txtlp">vani</h5>
                    <p className="time">Ngày 12 tháng 4</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p className="txt4">
                      Dù có đi bốn phương trời: mua sắm hay ăn uống, café hay
                      xem phim, vani cũng theo chân bạn tích điểm mọi nơi!
                    </p>
                    <p className="txt4">
                      👉 Quên ngay đi những thủ tục làm t...{" "}
                      <span>Xem thêm</span>
                    </p>
                  </div>
                </div>
                <button className="btn2">Xem chi tiết</button>
              </div>
            </div>
          </div>
          <div className="fixed-bottom menu">
            <div className="row">
              <div className="col col1">
                <img className="icon2" src={nha} alt />
                <p className="txt2">Trang chủ</p>
              </div>
              <div className="col col1">
                <img className="icon2" src={nha2} alt />
                <p className="txt2">Vani Xu</p>
              </div>
              <div className="col col1">
                <img className="icon2" src={nha3} alt />
                <p />
                <button className="txtht" onClick="openFullscreen();">
                  Hộp thư
                </button>
              </div>
              <div className="col col1">
                <img className="icon2" src={nha4} alt />
                <p className="txt2">Cài đặt</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
}

export default Vani;



