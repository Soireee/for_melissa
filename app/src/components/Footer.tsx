import React from "react";
import { StyledFooter } from "./styles/StyledFooter";

export const Footer = () => {
  return (
    <StyledFooter>
      <footer>
        <div>
          <div className="copyright">
            <p>© 2020 - Melissa Kinrenka</p>
          </div>
          {/* <div className="sns">
            <a href="#" className="fb">
              <i className="fa fa-facebook fa-fw" aria-hidden="true"></i>
            </a>
            <a href="#" className="tw">
              <i className="fa fa-twitter fa-fw" aria-hidden="true"></i>
            </a>
            <a href="#" className="insta">
              <i className="fa fa-instagram fa-fw" aria-hidden="true"></i>
            </a>
          </div> */}
        </div>
      </footer>
    </StyledFooter>
  );
};