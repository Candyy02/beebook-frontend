import Button from "../ui/Button";
import "./../styles/BookDetail.scss";
function BookDetail() {
  return (
    <div className="book-detail flex a-start">
      <div className="dark-overlay"></div>
      <div className="book-detail__ctn">
        <div className="book-detail__image">
          <img src="book-img.png" alt="Book Cover" />
        </div>
        <div className="book-detail__info">
          <h1>ĐẮC NHÂN TÂM</h1>
          <div className="page flex a-center">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.745 0.329333L15.3589 0.732543C19.4082 1.74574 20.6452 3.88585 19.6981 8.20744L18.751 12.529C17.9392 16.2613 16.335 17.7708 13.3197 17.4606C12.8365 17.4192 12.3146 17.3262 11.7541 17.1815L10.1305 16.7679C6.10056 15.7444 4.85388 13.6146 5.80097 9.29301L6.74806 4.96108C6.94135 4.08229 7.17329 3.31722 7.46322 2.68656C8.59393 0.184591 10.5171 -0.487426 13.745 0.329333ZM12.8365 11.7743C13.1651 11.7743 13.455 11.5468 13.542 11.1953C13.6386 10.7818 13.4067 10.3579 13.0105 10.2545L10.1982 9.48944C9.81162 9.38605 9.41539 9.63418 9.31874 10.0477C9.2221 10.4613 9.45404 10.8852 9.84061 10.9886L12.6529 11.7536C12.6615 11.7549 12.6699 11.7562 12.6782 11.7575C12.7353 11.7664 12.7859 11.7743 12.8365 11.7743ZM15.6681 8.27981C15.9967 8.27981 16.2866 8.05236 16.3736 7.70084C16.4703 7.27695 16.2383 6.85307 15.8421 6.76002L11.1549 5.48836C10.7684 5.38497 10.3721 5.6331 10.2755 6.04665C10.1789 6.4602 10.4108 6.88408 10.7974 6.98747L15.4845 8.25913C15.4931 8.26045 15.5015 8.26176 15.5098 8.26305C15.5669 8.27193 15.6175 8.27981 15.6681 8.27981ZM10.6646 18.9088C10.9423 18.8104 10.9146 18.4363 10.6287 18.3656L9.49118 18.0843C4.80725 16.9004 3.20617 14.152 4.30008 9.17325L5.27465 4.74416C5.33221 4.49129 5.39124 4.24943 5.4529 4.01859C5.56231 3.60898 5.16457 3.21379 4.76465 3.35456L4.24041 3.5391C0.292385 4.89214 -0.761747 7.11198 0.511168 11.3085L1.78408 15.4839C3.06694 19.6805 5.14537 20.8115 9.0934 19.4585L10.6646 18.9088Z"
                fill="white"
              ></path>
            </svg>
            <p>200 trang</p>
          </div>
          <p className="book-detail__buttons ">
            <Button variation="primary" className="buy-button">
              <span>Mua ngay</span>
              <span className="price">500</span>
              <img src="/point-icon.png" alt="point icon" />
            </Button>
            <Button variation="secondary">Lưu lại</Button>
          </p>
          <p>
            <span>Tác giả:</span> Dale Carnegie
          </p>
          <p>
            <span>Thể loại:</span> Self-help
          </p>
          <p>
            <span>Mô tả:</span> Tại sao Đắc Nhân Tâm luôn trong Top sách bán
            chạy nhất thế giới? Bởi vì đó là cuốn sách mọi người đều nên đọc.
            Hiện nay có một sự hiểu nhầm đã xảy ra. Tuy Đắc Nhân Tâm là tựa sách
            hầu hết mọi người đều biết đến, vì những danh tiếng và mức độ phổ
            biến, nhưng một số người lại “ngại” đọc. Lý do vì họ tưởng đây là
            cuốn sách “dạy làm người” xem thêm... Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nam fuga quia, provident neque
            accusantium cum laudantium sequi incidunt eum optio, a, dicta magni
            deleniti vitae ab nobis enim eligendi esse? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Deserunt laboriosam ea excepturi
            qui corporis? Nam ea odio distinctio modi exercitationem iusto
            quidem veniam voluptates, expedita mollitia numquam ut optio
            consectetur. 123123123
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
