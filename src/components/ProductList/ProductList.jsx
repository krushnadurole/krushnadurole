import "./ProductList.css";
import Product from "../Product/Product";
import { products } from "../../data";
const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        
        <h1 className="pl-title"> | Achievements and Awards Recieved | </h1>
        <p className="pl-desc">
          <blockquote cite="https://www.goodreads.com/quotes/tag/success-quotes">
          “Whenever I am in a difficult situation where there seems to be no way out, I think about all the times I have been in such situations and say to myself, "I did it before, so I can do it again.”
          </blockquote>
          {/* <cite>Idowu Koyenikan, Wealth for All: Living a Life of Success at the Edge of Your Ability</cite> */}
        </p>
      </div>
      <hr className="h" />
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} descr={item.descr} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;