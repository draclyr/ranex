import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center text-black">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">Ranex Template</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
                🏩website based on reactjs
                <br />
                Create by Hesam Shahmoradi
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;