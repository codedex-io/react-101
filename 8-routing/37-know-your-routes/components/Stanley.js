import { Link } from "react-router-dom";

export default function Stanley() {
  return (
    <div className="waterbottle">
      <h1>stanley 🚛</h1>
      <img src="https://images.squarespace-cdn.com/content/v1/65527b8af387e265ab2a36ce/1703783897336-BOR0WWT7P56OCKQKL8R0/Alpine.png" width={200} alt="stanley" />
      <p>
        You're a hard worker, and you're always on the move. You're a fan of the outdoors and you're always ready for an adventure. Sippy cup version!
      </p>
      <footer>
        <p>
          Back to <Link to="/">Home</Link>{" "}
        </p>
      </footer>
    </div>
  );
}
