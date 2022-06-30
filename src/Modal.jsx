import React from "react";


function Modal({ setOpenModal }) {
    return (
        <>

            <div id="modals">
                <div id="myModal" className="modal fade" role="dialog" required>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="col" />
                                <button type="button" className="col btnclose" data-dismiss="modal" aria-label="Close">
                                    <span className="close" aria-hidden="true">
                                        <i className="bi bi-x-lg" style={{ fontSize: 20 }} />
                                    </span>
                                </button>
                                <p className="txtga">Set Gà Rán Lotteria</p>
                                <p className="txtend">Hết hạn ngày 31/07/2022</p>
                                <div className="barcode"><img src="https://img.giftpop.vn/barcode.php?barcode=999286175636&mode=3" width={280} height={200} /></div><div className="barcodeNum ">999286175636</div>
                                <p className="txtnut"><span className="bold">Nút [Nhân viên xác nhận] </span> sẽ được sử
                                    <br /> dụng khi nhân viên phải xác nhận việc <br /> sử dụng coupon tại cửa hàng.
                                </p>
                                <button type="button" className="btnnut" data-dismiss="modal"  >Nhân viên xác
                                    nhận</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;