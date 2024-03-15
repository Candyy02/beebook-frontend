import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import '../styles/Detail.css';
import { Footer, Header } from '~/container';

const Detail = () => {
    return (
        <div className="detail">
            <Header />
            <div className="container">
                <div className="detail-background">
                    <img src="/images/image-21.png" className="img-fluid" alt="Loading" />
                </div>
                <div className="detail-book--header d-flex">
                    <div className="book-image">
                        <img src="/images/ky-luat-tu-giac.png" className="img-fluid" alt="Loading" />
                    </div>
                    <div className="book-text">
                        <div className="book-text--first">
                            <h5>Kỷ luật tự giác</h5>
                            <div className="action d-flex align-items-center">
                                <div className="page-action d-flex align-items-center">
                                    <i className="fa-regular fa-file-lines"></i>
                                    <p className="action-text--first">216</p>
                                    <p>Trang</p>
                                </div>
                                <div className="comment-action d-flex align-items-center">
                                    <i className="fa-regular fa-comment"></i>
                                    <p className="action-text--first">90</p>
                                    <p>Bình luận</p>
                                </div>
                                <div className="report-action d-flex align-items-center">
                                    <button>
                                        <i className="fa-solid fa-circle-exclamation"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="book-text--second d-flex">
                            <button className="first-btn">
                                <a href="thue-ngay">Đọc Ngay</a>
                            </button>
                            <button className="second-btn">
                                <a href="thue-ngay">Lưu Lại</a>
                            </button>
                        </div>
                        <div className="book-text--third">
                            <div className="d-flex align-items-center mb-4">
                                <h5>Tác giả: </h5>
                                <p>Tên tác giả</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <h5>Thể loại: </h5>
                                <p>Tên thể loại</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Tabs
                    defaultActiveKey="home"
                    id="uncontrolled-tab-example"
                    className="book-tab d-flex justify-content-center"
                >
                    <Tab eventKey="home" title="Giới thiệu" className="sub-tab book-review--tab">
                        <div className="book-review--tab-container">
                            <h5>Review</h5>
                            <p>
                                Theo bạn thì, thế nào là tự do? <br />
                                Là có thể nằm ườn trên ghế sô pha xem phim, ôm điện thoại lướt mạng cả ngày?Hay là được
                                ăn thoải mái các thể loại đồ ăn nhanh, trà sữa… bất chấp ảnh hưởng của chúng tới sức
                                khỏe?
                                <br />
                                Trời mưa thì tự cho phép bản thân nghỉ làm, thích đồ gì thì mua luôn đồ nấy, dù cho chưa
                                đến cuối tháng đã hết sạch tiền?
                                <br />
                                Những điều trên trông thì có vẻ thoải mái thật đấy, nhưng dần dần bạn sẽ nhận ra cuộc
                                sống của mình ngày càng mơ hồ, sợ sệt, bởi bạn không có SỰ LỰA CHỌN. Lãng phí thời gian,
                                tiền bạc vô ích chỉ càng tạo nên sự chậm chạp trong tư duy, bệnh tật cho cơ thể và sự
                                cằn cỗi trong tâm hồn mà thôi.
                                <br />
                                KÝ LUẬT TỰ GIÁC, cuốn sách đã thành công chỉnh đốn lối sống của hàng triệu người trẻ
                                Trung Quốc, sẽ giúp bạn hiểu: “Tự do” thực sự không phải là tùy theo ý thích, mà là tự
                                mình làm chủ.
                                <br />
                                <br />
                                Thông tin sách
                                <br />
                                Tên sách: Kỷ Luật Tự giác
                                <br />
                                Tác giả: Tiểu Dã
                                <br />
                                Thể loại: Kỹ năng sống
                                <br />
                                Số trang: 216 trang
                                <br />
                                Mã ISBN: 9786047784165
                                <br />
                                Nhà Xuất Bản: Thế Giới
                                <br />
                                Phát hành: 19/11/2020
                            </p>
                        </div>
                    </Tab>
                    <Tab eventKey="comment" title="Bình luận" className="sub-tab book-comment--tab">
                        <div className="book-comment--tab-container">
                            <form className="mb-5">
                                <div className="form-group d-flex align-items-center">
                                    <i className="fa-solid fa-user"></i>
                                    <input type="text" placeholder="Bình luận..." />
                                    <button type="submit">
                                        <i className="fa-solid fa-paper-plane"></i>
                                    </button>
                                </div>
                            </form>
                            <div className="show-comment mb-3">
                                <div className="show-comment--first d-flex">
                                    <i className="fa-solid fa-user"></i>
                                    <div className="show-comment--first-text">
                                        <h5>Username</h5>
                                        <p>Quá hay quá tuyệt vời.</p>
                                    </div>
                                </div>
                                <div className="show-comment--second d-flex justify-content-between mt-2">
                                    <span className="footer-comment--left">2 days ago.</span>
                                    <div className="footer-comment--right">
                                        <span className="mx-3">Thích</span>
                                        <span className="mx-3">Trả lời</span>
                                        <span className="mx-3">
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="show-comment mb-3">
                                <div className="show-comment--first d-flex">
                                    <i className="fa-solid fa-user"></i>
                                    <div className="show-comment--first-text">
                                        <h5>Donald Trump</h5>
                                        <p>Rất hợp lý</p>
                                    </div>
                                </div>
                                <div className="show-comment--second d-flex justify-content-between mt-2">
                                    <span className="footer-comment--left">2 days ago.</span>
                                    <div className="footer-comment--right">
                                        <span className="mx-3">Thích</span>
                                        <span className="mx-3">Trả lời</span>
                                        <span className="mx-3">
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="show-comment mb-3">
                                <div className="show-comment--first d-flex">
                                    <i className="fa-solid fa-user"></i>
                                    <div className="show-comment--first-text">
                                        <h5>Trần Dần</h5>
                                        <p>
                                            Tao có súng nha mày. Tui là nhà tiên tri vũ trụ trần dần, là đệ nhứt quốc sư
                                            hoa kỳ
                                        </p>
                                    </div>
                                </div>
                                <div className="show-comment--second d-flex justify-content-between mt-2">
                                    <span className="footer-comment--left">2 days ago.</span>
                                    <div className="footer-comment--right">
                                        <span className="mx-3">Thích</span>
                                        <span className="mx-3">Trả lời</span>
                                        <span className="mx-3">
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </span>
                                    </div>
                                </div>

                                <div className="show-comment mb-3 mt-2">
                                    <div className="show-comment--first d-flex">
                                        <i className="fa-solid fa-user"></i>
                                        <div className="show-comment--first-text">
                                            <h5>Trần Dần</h5>
                                            <p>
                                                Tao có súng nha mày. Tui là nhà tiên tri vũ trụ trần dần, là đệ nhứt
                                                quốc sư hoa kỳ
                                            </p>
                                        </div>
                                    </div>
                                    <div className="show-comment--second d-flex justify-content-between">
                                        <span className="footer-comment--left">2 days ago.</span>
                                        <div className="footer-comment--right">
                                            <span className="mx-3">Thích</span>
                                            <span className="mx-3">Trả lời</span>
                                            <span className="mx-3">
                                                <i className="fa-solid fa-ellipsis"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
            <Footer />
        </div>
    );
};

export default Detail;
