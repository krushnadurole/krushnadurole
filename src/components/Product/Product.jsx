import React from 'react';
import "./Product.css";

const Product = ({ img, descr }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>

      <img src={process.env.PUBLIC_URL + img} alt="" className="p-img" />
      {/* <img src={process.env.PUBLIC_URL + "/atre_c.png"} alt="" className="p-img" /> */}

      <p className='p-descr'>
        {descr}
      </p>
    </div>
  );
};

export default Product;