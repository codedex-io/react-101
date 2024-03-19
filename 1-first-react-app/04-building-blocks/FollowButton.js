// Building Blocks 🧱
// Codédex

import { useState } from "react";

export default function FollowButton() {
  const [following, setFollowing] = useState(false);
  return (
    <div id="follow-button" className={following ? "following" : "not-following"} onClick={() => setFollowing(!following)}>
      {following == true ? "Following" : "Follow"}
    </div>
  );
}