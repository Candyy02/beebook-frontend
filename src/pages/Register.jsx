import "../styles/Register.css";
function Register() {
  return (
    <div className="register">
      <div className="heading">
        <div className="regis-head">
          <div className="regis-wrapper">
            <a href="/" className="logo">
              <img className="logo-image" alt="logo" src="/images/logo.png" />
            </a>
          </div>

          <a href="/" className="regis-help">
            Bạn cần giúp đỡ?
          </a>
        </div>
      </div>

      <div className="regis-form">
        <form action="" method="POST" className="form" id="form-1">
          <h3 className="heading-form">ĐĂNG KÝ THÀNH VIÊN</h3>

          <p className="success-message">Đăng ký thành công!</p>
          <div className="spacer"></div>

          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Tên đầy đủ
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="VD: Quốc Tuấn"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="VD: email@domain.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Mật khẩu
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Nhập mật khẩu"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password_confirmation" className="form-label">
              Nhập lại mật khẩu
            </label>
            <input
              id="password_confirmation"
              name="password_confirmation"
              placeholder="Nhập lại mật khẩu"
              type="password"
            />
          </div>

          <button className="form-submit" type="submit">
            Đăng ký
          </button>
        </form>
        <div className="regis-span">
          Bạn đã có tài khoản?
          <a href="/login" className="regis-span__login">
            Đăng nhập
          </a>
        </div>
      </div>
    </div>
  );
}

export default Register;
