import { Link } from "react-router-dom";

export default function Owala() {
  return (
    <div className="waterbottle">
      <h1>owala 🐨</h1>
      <img src="https://i.pinimg.com/originals/bc/61/99/bc6199ab2efee2366878be13c7e320b4.png" width={200} alt="owala" />
      <p>
        You're creative, adventurous, and are either incredibly minimalistic or go full deco. You love nature, greens, and pastels. A soft aura at heart.
      </p>
      <footer>
        <p>Back to <Link to="/">Home</Link> </p>
      </footer>
    </div>
  );
  }