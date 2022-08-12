import React from "react";
import alex from "../../images/alex.png";
import airbnb from "../../images/airbnb.png";
import tinder from "../../images/tinder.png";
import facebook from "../../images/facebook.png";
import hubspot from "../../images/hubspot.png";
import microsoft from "../../images/microsoft.png";
const Banner = () => {
  return (
    <div>
      <div class="avatar mt-12">
        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={alex} width="120" />
        </div>
      </div>
      <h2 className="text-xl text-primary my-5">Hello, myself Alex....</h2>
      <div className=" mx-auto lg:w-2/4 lg:px-12">
        <p className="text-5xl capitalize  mx-auto font-extrabold my-5">
          Creating fast website and softwares
        </p>

        <p className="px-24 my-5">
          Lorem ipsum dolor sit amet, consecttur adipiscing Orci fauff cibus
          urna, sed senectus iaculis leo condimentum. Maenas nec adipiscing
          neque, pellentesque in. Metus fusce.
        </p>

        <button className="btn btn-primary rounded-full text-white text-xs capitalize">
          Know About Me
        </button>
      </div>
      {/* branding */}
      <div className=" mx-auto lg:flex my-28 justify-center">
        <img src={facebook} alt="" className="m-5"/>
        <img src={tinder} alt="" className="m-5"/>
        <img src={airbnb} alt="" className="m-5"/>
        <img src={microsoft} alt="" className="m-5"/>
        <img src={hubspot} alt="" className="m-5"/>
        <img src={tinder} alt="" className="m-5"/>
      </div>
    </div>
  );
};

export default Banner;
