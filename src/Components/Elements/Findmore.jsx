import React from "react";

function Findmore() {
  return (
    <div class="container ">
      <div class="row">
        <div class="col-md-6 col-12 fluid images ">
          <img
            className="image-fluid"data-aos="fade-right"
            src="Assests/box.svg"
            alt=""
            width="90%"
          />
        </div>

        <div class="col-md-6 col-12 images ">
          <div className="text-start  ">
            <p className=" font5 "data-aos="fade-right">
              <b>Interoperability solved</b>{" "}
            </p>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <p className=" font6"data-aos="fade-right">
            Reduce costs and access wider markets by deploying any app on any blockchain. That’s the power of our single, standard, multi-chain API.
            </p>
            <button type="button" className="btn "data-aos="fade-right">
              <b> Find out more</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Findmore;
