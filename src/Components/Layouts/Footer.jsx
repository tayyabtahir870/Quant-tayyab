import React from "react";
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

function Footer() {
  return (
    <div className="mt-5">
      <div class="container text-center">
        <div class="row">
          <div class="col ">
            <ul className="list-unstyled text-start">
              <li>
                <b>WHO WE SERVE </b>
              </li>{" "}
              <br />
              <li>Financial institutions</li>
              <li>Enterprises</li>
              <li>Partners</li>
              <li>Developers</li>
            </ul>
          </div>

          <div class="col">
            <ul className="list-unstyled text-start">
              <li>
                <b>WHAT WE DO</b>
              </li>{" "}
              <br />
              <li>Digital currencies</li>
              <li>Payments</li>
              <li>Supply chain and trade finance</li>
              <li>Capital markets</li>
              <li>Compliance</li>
              <li>Insurance</li>
            </ul>
          </div>

          <div class="col">
            <ul className="list-unstyled text-start">
              <li>
                <b>HOW WE DO IT</b>
              </li>{" "}
              <br />
              <li>Products</li>
              <li>- Overledger Integrate</li>
              <li>- Overledger Tokenise</li>
              <li>Networks</li>
              <li>Ecosystem</li>
              <li>- Developer programme</li>
              <li>- Partners</li>
              <li>- Associations</li>
            </ul>
          </div>

          <div class="col">
            <ul className="list-unstyled text-start">
              <li>
                <b>WHY IT MATTERS</b>
              </li>{" "}
              <br />
              <li>All</li>
              <li>News</li>
              <li>Events</li>
              <li>Perspectives</li>
              <li>Research</li>
              <li>Use cases</li>
            </ul>
          </div>

          <div class="col">
            <ul className="list-unstyled text-start">
              <li>
                <b>ABOUT US</b>
              </li>
              <br />
              <li>Mission and values</li>
              <li>Leadership</li>
              <li>Careers</li>
              <li>Media centre</li>
              <li>Contact</li>
            </ul>
          </div>
          <hr />

          <div>

<div className="footer">
      <div class="container text-center">
        
        <div class="row">
          <div class="col-md-6 text-start">
            <img src="Assests/logo-2.png" alt="" width={"150px"}></img>
            <p className="last-p">
              © 2022 Quant Network Limited. All rights reserved.
            </p>
          </div>
          <div class="col-md-6">
            <div className="mt-3 text-end">
              <b>Privacy policy</b> &nbsp; &nbsp;&nbsp;
              <b>Terms of use</b>&nbsp; &nbsp;&nbsp;&nbsp;
              <AiFillTwitterCircle size='20px'/>&nbsp;&nbsp;
              <AiFillLinkedin size='20px'/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>





        </div>
      </div>
    </div>
  );
}

export default Footer;
