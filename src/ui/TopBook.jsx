const TopBook = ({ book, index }) => {
  let rankStr = "";
  switch (index) {
    case 0:
      rankStr = "rank-one";
      break;
    case 1:
      rankStr = "rank-two";
      break;
    case 2:
      rankStr = "rank-three";
      break;
    case 3:
      rankStr = "rank-four";
      break;
    case 4:
      rankStr = "rank-five";
      break;
    default:
      rankStr = "sub-rank";
  }
  return (
    <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
      <div className="bxh-box d-flex align-items-center mb-4">
        <div className="bxh-box--left p-5">
          <div className={`bxh-box--left-title ${rankStr}`}>#{index + 1}</div>
        </div>
        <div className="bxh-box--right d-flex align-items-center text-center">
          <div className="bxh-box--right-image">
            <img
              className="img-fluid"
              alt="Banner"
              src="/images/image-7-19.png"
            />
          </div>
          <div className="bxh-box--right-text d-flex flex-column text-white px-2">
            <h5>{book.name}</h5>
            <p>{book.types.map((type) => type.name).join(",")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBook;
