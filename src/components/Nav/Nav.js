import "./Nav.css";
function Nav() {
  return (
    <div className="container-fluid py-md-4 nav_div">
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center  nav_div">
        <a className="navbar-brand" href="#">
          <div className="col-6 justify-content-center">Navbar</div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="col-6 ">
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Livecamera
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Photos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
