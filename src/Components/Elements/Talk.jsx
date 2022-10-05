import React from "react";

function Talk() {
  return (

      <div class="container ">
        <div class="row">
          <div class="col-md-6 col-12 fluid images" data-aos="fade-left">
            <img className="image-fluid" src="Assests/page2.svg" alt="" width="90%" />
          </div>

          <div class="col-md-6 col-12 images ">
            <div className="text-start  ">
              <p className=" font1 " data-aos="fade-left">
                <b> Unlocking the power of blockchain for everyone</b>{" "}
              </p>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <p className=" font2">
                We deliver interoperable ecosystems and real-world solutions
                that lower costs, enable new business, and mitigate risk.
              </p>
              <button type="button" className="btn ">
                <b> Let's talk</b>
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Talk;
