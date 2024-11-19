import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center bg-light">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0">Create by {" "}
              <a href="https://github.com/draclyr" className="text-decoration-underline text-dark fs-5" target="_blank" rel="noreferrer">Hesam Shahmoradi</a>
            </p>
            <a className="text-dark fs-4 m-2" href="https://github.com/draclyr" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a>
            <a className="text-dark fs-4 m-2" href="https://github.com/draclyr" target="_blank" rel="noreferrer">
              <i className="fa fa-twitter"></i>
            </a>
            <a className="text-dark fs-4 m-2" href="https://github.com/draclyr" target="_blank" rel="noreferrer">
              <i className="fa fa-telegram"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
