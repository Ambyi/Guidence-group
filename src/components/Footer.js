import React from "react";
import "./footer.css";
import { HiLocationMarker } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-col">
        <h4 className="footer-head">Mumbai Head Office</h4>
        <div className="footer-lists">
          <div className="left-side">
            <HiLocationMarker className="footer-icons" />
          </div>
          <div className="right-side">
            Address: Mukund Mansion, 1st Floor, Ranade Rd, opp. Nakshatra Mall,
            Dadar West, Mumbai, Maharashtra 400028
          </div>
        </div>
        <div className="footer-lists">
          <div className="left-side">
            <IoCall className="footer-icons" />
          </div>
          <div className="right-side">Mobile: 9665614272</div>
        </div>
        <div className="footer-lists">
          <div className="left-side">
            <MdEmail className="footer-icons" />
          </div>
          <div className="right-side">Email:guidanceeducon@gmail.com</div>
        </div>
      </div>
      <div className="footer-col">
        <h4 className="footer-head">Pune Office</h4>
        <div className="footer-lists">
          <div className="left-side">
            <HiLocationMarker className="footer-icons" />
          </div>
          <div className="right-side">
            Address:1st Floor, Nutan Classic Bldg, Appa Balwant Chowk, above
            K-Sagar Book Shop, Pune, Maharashtra 411030
          </div>
        </div>
        <div className="footer-lists">
          <div className="left-side">
            <IoCall className="footer-icons" />
          </div>
          <div className="right-side">Mobile: 9665614272</div>
        </div>
        <div className="footer-lists">
          <div className="left-side">
            <MdEmail className="footer-icons" />
          </div>
          <div className="right-side">Email:guidanceeducon@gmail.com</div>
        </div>
      </div>
      <div className="footer-col">
        <h4 className="footer-head" >
          Pen Office
        </h4>
        <div className="footer-lists">
          <div className="left-side">
            <HiLocationMarker className="footer-icons" />
          </div>
          <div className="right-side">
            Address:Guidance Group, Nene Wada, Chawdi Naka, Pen, Raigad-4
          </div>
        </div>
        <div className="footer-lists">
          <div className="left-side">
            <IoCall className="footer-icons" />
          </div>
          <div className="right-side">Mobile: 9665614272</div>
        </div>
        <div className="footer-lists">
          <div className="left-side">
            <MdEmail className="footer-icons" />
          </div>
          <div className="right-side">Email:guidanceeducon@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
