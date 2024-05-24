import { Link } from "react-router-dom";

export default function Yeti() {
  return (
    <div className="waterbottle">
      <h1>yeti 🍊</h1>
      <img
        src="https://southernseason.com/cdn/shop/files/yeti-rambler-36-oz-water-bottle-with-chug-cap-navy-38238674026659_5000x.png?v=1706023343"
        width={200}
        alt="yeti"
      />
      <p>
        You like efficiency and are a realist. Loyal to personal items and people come easy to you. Minimalist at heart.
      </p>
      <footer>
        <p>
          Back to <Link to="/">Home</Link>{" "}
        </p>
      </footer>
    </div>
  );
}
