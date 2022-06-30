import React from "react";

function Modal({ setOpenModal, voucher_id }) {
    console.log(voucher_id);
  return (
    
    <>
      <div id="modals">
        <div id="myModal" className="modal fade" role="dialog" required>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div className="col" />
                <button
                  type="button"
                  className="col btnclose"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    setOpenModal(0);
                  }}
                >
                  <span className="close" aria-hidden="true">
                    <i className="bi bi-x-lg" style={{ fontSize: 20 }} />
                  </span>
                </button>
                <p className="txtga">Set Gà Rán Lotteria</p>
                <p className="txtend">Hết hạn ngày 31/07/2022</p>
                <div className="barcode">
                  <img
                    src={`https://img.giftpop.vn/barcode.php?barcode=${voucher_id}&mode=3`}
                    width={280}
                    height={200}
                  />
                </div>
                <div className="barcodeNum ">{voucher_id}</div>
                <p className="txtnut">
                  <span className="bold">Nút [Nhân viên xác nhận] </span> sẽ
                  được sử
                  <br /> dụng khi nhân viên phải xác nhận việc <br /> sử dụng
                  coupon tại cửa hàng.
                </p>
                <button
                  type="button"
                  className="btnnut"
                  data-dismiss="modal"
                  onClick={() => {
                    setOpenModal(2);
                  }}
                >
                  Nhân viên xác nhận
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
