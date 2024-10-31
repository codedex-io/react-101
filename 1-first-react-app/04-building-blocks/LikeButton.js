// Building Blocks 🧱
// Codédex

import { useState } from "react";

const emptyHeartImage = "https://i.imgur.com/wIq3Wbq.png";
const fullHeartImage = "https://i.imgur.com/vyX9Vnx.png";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
	@@ -14,7 +14,7 @@ export default function LikeButton() {
      <div className="like-button" onClick={() => setLikes(likes + 1)}>
        {likes > 0 ? <img src={fullHeartImage} alt="Heart for like button" /> : <img src={emptyHeartImage} alt="Empty heart for like button" />}
      </div>
      <p>{likes === 1 ? `  ${likes} Like` : `${likes} Likes`}</p>
    </div>
  );
}
