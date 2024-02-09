import userImage from "./hippocorn.png";
import postImage from "./post-image.png";

import FollowButton from "./FollowButton";
import LikeButton from "./LikeButton";

function Post() {
  return (
    <div className="post">
      <div className="user-info">
        <img id="profile-img" src={userImage} alt="Profile Image" />
        <p>Hipthehippocorn</p>
        <FollowButton />
      </div>
      <img id="post-img" src={postImage} alt="Post Image" />
      <LikeButton />
    </div>
  );
}

export default Post;
