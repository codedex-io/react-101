// Social Post 📱
// Codédex

import FollowButton from "./FollowButton.js";
import LikeButton from "./LikeButton.js";

const postImage = "https://i.imgur.com/ZUZiJ4y.png";
const userImage = "https://i.imgur.com/lfoiQZs.png";

export default function Post() {
  return (
    <div className="post">
      <div className="user-info">
        <img id="profile-img" src={userImage} alt="Profile Image" /> <p>Hipthehippocorn</p>
        <FollowButton />
      </div>
      <img id="post-img" src={postImage} alt="Post Image" />
      <LikeButton />
    </div>
  );
}