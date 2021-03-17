import React from "react";

function NavbarView(props) {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="btn btn-outline text-white font-weight-bold"
            data-toggle="drawer"
            data-target="#amazonDrawer"
          >
            <i className="fa fa-sliders-h"></i> All
          </button>

          <div
            className="drawer drawer-left slide"
            tabindex="-1"
            role="dialog"
            aria-labelledby="drawer-demo-title"
            aria-hidden="true"
            id="amazonDrawer"
          >
            <div
              className="drawer-content drawer-content-scrollable"
              role="document"
            >
              <div className="drawer-header bg-dark text-white">
                <h5
                  className="drawer-title font-weight-bold m-auto"
                  id="drawer-demo-title"
                >
                  <i className="fas fa-user-circle fa-1x px-2"></i> Hello Sign
                  in
                </h5>
              </div>
              <div className="drawer-body">
                <h6 className="text-muted text-uppercase">Help & Setting</h6>
                <a
                  href="your_account.html"
                  className="btn btn-outline-success btn-sm my-2"
                >
                  Your Account
                </a>
                <a href="login.html" className="btn btn-warning btn-sm my-2">
                  Singn In
                </a>
              </div>
              <div className="drawer-footer">
                <button
                  type="button"
                  className="btn btn-outline-danger btn-sm"
                  data-dismiss="drawer"
                  aria-label="Close"
                >
                  <i className="fas fa-times fa-2x"></i>
                </button>
              </div>
            </div>
          </div>

          <a className="navbar-brand pl-2" href="#">
            <img
              src="assets/img/amazon_logo_light.png"
              height="30"
              width="100"
              alt="log"
            />
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline px-lg-5" bovalidate method="GET">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="dropdown">
                    <button
                      className="btn btn btn-secondary dropdown-toggle"
                      name="btnCategory"
                      type="button"
                      id="btnCategoryDropdownMenu"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <b>All</b>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="btnCategoryDropdownMenu"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Mobile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Clothes
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Kitchen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Prime Deals
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Book
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  size="100"
                  name="query"
                  id="query"
                />
                <input
                  type="text"
                  name="category"
                  id="category"
                  hidden
                  value="book"
                />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-warning">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </form>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown px-2">
                <a
                  className="nav-link"
                  href="#"
                  id="prefLanguageDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-language text-danger fa-2x"></i>
                </a>
                <div
                  className="dropdown-menu px-2"
                  aria-labelledby="prefLanguageDropdown"
                >
                  <form className="p-2">
                    <div className="custom-control custom-radio mb-2">
                      <input
                        className="custom-control-input"
                        type="radio"
                        name="prefLang"
                        id="englishLang"
                        value="english"
                        checked
                      />
                      <label className="custom-control-label" for="englishLang">
                        <img
                          src="assets/img/flag/eng.png"
                          alt="uk flag"
                          width="40"
                          height="20"
                        />
                      </label>
                    </div>

                    <div className="custom-control custom-radio mb-2">
                      <input
                        className="custom-control-input"
                        type="radio"
                        name="prefLang"
                        id="hindiLang"
                        value="hindi"
                      />
                      <label className="custom-control-label" for="hindiLang">
                        <img
                          src="assets/img/flag/india.jpg"
                          alt="uk flag"
                          width="40"
                          height="20"
                        />
                      </label>
                    </div>
                    <div className="dropdown-divider"></div>

                    <div className="custom-control custom-radio">
                      <input
                        className="custom-control-input"
                        type="radio"
                        name="prefLang"
                        id="banglaLeng"
                        value="bangla"
                      />
                      <label className="custom-control-label" for="banglaLeng">
                        <img
                          src="assets/img/flag/bangla.jpg"
                          alt="uk flag"
                          width="40"
                          height="20"
                        />
                      </label>
                    </div>
                  </form>
                </div>
              </li>

              <li className="nav-item dropdown px-2">
                <a
                  className="nav-link"
                  href="#"
                  id="userAccount"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-user-circle fa-2x"></i>
                </a>
                <div
                  className="dropdown-menu px-3"
                  aria-labelledby="userAccount"
                >
                  <div className="d-flex row justify-content-center">
                    <a
                      href="login.html"
                      className="btn btn-warning w-75 font-weight-bold"
                    >
                      Signin
                    </a>
                    <small className="text-muted">
                      New Customer?
                      <a href="register.html">Start here.</a>
                    </small>
                  </div>
                </div>
              </li>

              <li className="nav-item px-2">
                <a className="nav-link" href="" area-disabled="true">
                  <i className="fas text-light fa-shopping-cart fa-2x"></i>
                  <span className="badge badge-warning badge-pill">0</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarView;
