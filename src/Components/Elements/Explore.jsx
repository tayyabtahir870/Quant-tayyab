import React from "react";

function Explore() {
  return (
    <div>
      <div className="text-center">
        <p className=" font">
          <b> Explore the future</b>{" "}
        </p>

        <p className=" font2" >
        Much of the financial world’s digital future <br />
will be built on blockchain. Find out why.
              </p>
      </div>

      <div className="container">
        <div className="pic py-5">
          <div className="cardpic card" style={{ width: "300px" }}>
            <div class="card-body">
              <p className="text-start fontt "> Events</p>
              <p className="text-start">3 October 2022</p>
              <p className="card-text text-start font7">
                <b>Yours guide to Sibos 2022</b>{" "}
              </p>
              <span className="badge text-bg-info fonnt">
                FINANCIAL INSTITUTUONS
              </span>{" "}
              &nbsp;
              <span className="badge text-bg-info fonnt">
                PARTNERS
              </span>&nbsp; <br />
              <span className="badge text-bg-info fonnt">SIBOS</span>
            </div>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row">
          <div class="col">
            <div class="card" style={{ width: "18rem;" }}>
              <div class="card-body">
                <p className="text-start fontt "> News</p>
                <p className="text-start">29 September 2011</p>
                <p className="card-text text-start font7">
                  <b>
                    Martin Hargreaves <br /> on the benefits of <br /> CBDCs for{" "}
                    <br /> consumers
                  </b>{" "}
                </p>
                <span className="badge text-bg-info fonnt">CBDC</span> &nbsp;
                <span className="badge text-bg-info fonnt">
                  CITYAM
                </span>&nbsp; <br />
                <span className="badge text-bg-info fonnt">ENTERPRISES</span>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card" style={{ width: "18rem;" }}>
              <div class="card-body">
                <p className="text-start fontt "> News</p>
                <p className="text-start">15 September 2011</p>
                <p className="card-text text-start font7">
                  <b>
                    Gilbert Verdian <br /> explains The Merge
                  </b>
                </p>{" "}
                <br />
                <br />
                <br />
                <span className="badge text-bg-info fonnt">
                  BLOCKCHAIN
                </span>{" "}
                &nbsp;
                <span className="badge text-bg-info fonnt">DEVELOPERS</span>
                &nbsp; <br />
                <span className="badge text-bg-info fonnt">ENTERPRISES</span>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card" style={{ width: "18rem;" }}>
              <div class="card-body">
                <p className="text-start fontt "> Events</p>
                <p className="text-start">12 September 2011</p>
                <p className="card-text text-start font7">
                  <b>
                    The multi-chain <br /> future: sidechains, <br /> layer 2s
                    and The <br /> Merge
                  </b>
                </p>
                <span className="badge text-bg-info fonnt">ARCHITECTURE</span>{" "}
                &nbsp;
                <span className="badge text-bg-info fonnt">ASSOCIATIONS</span>
                &nbsp; <br />
                <span className="badge text-bg-info fonnt">DEVELOPERS</span>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card" style={{ width: "18rem;" }}>
              <div class="card-body">
                <p className="text-start fontt "> News</p>
                <p className="text-start">5 September 2011</p>
                <p className="card-text text-start font7">
                  <b>
                    Overledger 2.2.14 is <br /> an engineering <br /> release{" "}
                  </b>
                </p>{" "}
                <br />
                <span className="badge text-bg-info fonnt">
                  DEVELOPERS
                </span>{" "}
                &nbsp;
                <span className="badge text-bg-info fonnt">OVERLEDGER</span>
                &nbsp; <br />
                <span className="badge text-bg-info fonnt">PRODUCT RELESE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
