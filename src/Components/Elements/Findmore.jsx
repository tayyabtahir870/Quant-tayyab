import React from "react";

function Findmore() {
  return (
    <div class="container ">
      <div class="row">
        <div class="col-md-6 col-12 fluid images ">
          <img
            className="image-fluid"
            src="Assests/box.svg"
            alt=""
            width="90%"
          />
        </div>

        <div class="col-md-6 col-12 images ">
          <div className="text-start  ">
            <p className=" font5 ">
              <b>Interoperability solved</b>{" "}
            </p>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <p className=" font6">
            Reduce costs and access wider markets by deploying any app on any blockchain. That’s the power of our single, standard, multi-chain API.
            </p>
            <button type="button" className="btn ">
              <b> Find out more</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Findmore;
