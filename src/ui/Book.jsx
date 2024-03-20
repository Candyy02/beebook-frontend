import { useNavigate } from "react-router-dom";

const Book = ({ book, key }) => {
  const navigate = useNavigate();

  return (
    <div
      className="col-lg-2 col-md-4 col-sm-6"
      onClick={() => navigate(`/book/${book.book_id}`)}
      key={key}
    >
      <div className="product-image">
        <a>
          <img
            className="img-fluid"
            alt="Banner"
            src="/images/image-6-14.png"
          />
        </a>
      </div>
      <div className="new-product--namebook">{book.book_name}</div>
    </div>
  );
};

export default Book;
