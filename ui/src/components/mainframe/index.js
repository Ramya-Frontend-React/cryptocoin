import React from "react";
import { useState } from "react";
import { ResponsiveAppBar } from "../header/appbar";
import img2 from "../../assets/images/hero-1.png";
import img1 from "../../assets/images/icon-1.png";
import { Layout1 } from "../body/layout1";
import "../../assets/css/mainframe.css";
import icon1 from "../../assets/images/icon-9.png";
import icon2 from "../../assets/images/icon-10.png";
import icon3 from "../../assets/images/icon-2.png";
import icon4 from "../../assets/images/icon-4.png";
import icon5 from "../../assets/images/icon-5.png";
import icon6 from "../../assets/images/icon-6.png";
import icon11 from "../../assets/images/icon-11.png";
import icon12 from "../../assets/images/icon-12.png";
import icon13 from "../../assets/images/icon-13.png";
import icon14 from "../../assets/images/icon-14.png";
import icon15 from "../../assets/images/icon-15.png";
import img3 from "../../assets/images/about.png";
import pay1 from "../../assets/images/payment-1.png";
import pay2 from "../../assets/images/payment-2.png";
import pay3 from "../../assets/images/payment-3.png";
import pay4 from "../../assets/images/payment-4.png";
import { Layout2 } from "../body/layout2";
import { Layout3 } from "../body/layout3";
import { Layout4 } from "../body/layout4";
import { Layout5 } from "../body/layout5";
import Layout6 from "../body/layout6";
import { Layout7 } from "../body/layout7";
import { Layout8 } from "../body/layout8";
import { Footer } from "../footter";
import clsx from "clsx";
import useStyles from "../../assets/animations";

export const MainFrame = () => {
  const classes = useStyles();
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const displayloader = () => {
    if (window.scrollY >= 90) {
      setShow1(true);
    }
    if (window.scrollY >= 700) {
      setShow2(true);
    }
    if (window.scrollY >= 1000) {
      setShow3(true);
    }
    if (window.scrollY >= 1500) {
      setShow4(true);
    }
    if (window.scrollY >= 2200) {
      setShow5(true);
    }
    if (window.scrollY >= 2800) {
      setShow6(true);
    }
    if (window.scrollY >= 3400) {
      setShow7(true);
    }
    if (window.scrollY >= 4200) {
      setShow8(true);
    }
  };
  window.addEventListener("scroll", displayloader);
  return (
    <div>
      <div className="header">
        <ResponsiveAppBar img1={img1} />
      </div>
      <br />

      <div className="Layout1">
        <div className={clsx(classes.animatedItem)}>
          <Layout1 img2={img2} />
        </div>
      </div>
      <br />
      <div>
        {show1 ? (
          <div className={clsx(classes.animatedItemExiting)}>
            <Layout2 img3={img3} />
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        {show2 ? (
          <div className={clsx(classes.animatedItemExiting)}>
            <Layout3 icon1={icon1} icon2={icon2} icon3={icon3} />
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        {show3 ? (
          <div className={clsx(classes.animatedItemExiting)}>
            <Layout4
              icon4={icon4}
              icon5={icon5}
              icon6={icon6}
              icon11={icon11}
              icon12={icon12}
              icon13={icon13}
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        {show4 ? (
          <div className={clsx(classes.animatedItemExiting)}>
            <Layout5
              icon4={icon4}
              icon5={icon12}
              icon6={icon14}
              icon11={icon11}
              icon12={icon15}
              icon13={icon13}
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        {show5 ? (
          <div className={clsx(classes.animatedItemExiting)}>
            <Layout6 />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="layout6">
        {show6 ? (
          <div className={clsx(classes.animatedItemExiting)}>
            <Layout7 pay1={pay1} pay2={pay2} pay3={pay3} pay4={pay4} />
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        {show7 ? (
          <div className={clsx(classes.animatedItemExiting)}>
            <Layout8 />
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        {show8 ? (
          <div className={clsx(classes.animatedItemExiting)}>
            <Footer img1={img1} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
