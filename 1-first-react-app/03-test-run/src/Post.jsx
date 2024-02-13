import userImage from "./hippocorn.png";
import postImage from "./post-image.png";

function Post() {
  return (
    <div className="post">
      <div className="user-info">
        <img id="profile-img" src={userImage} alt="Profile Image" />
        <p>Hipthehippocorn</p>
        {/* Follow Button Here */}
      </div>
      <img id="post-img" src={postImage} alt="Post Image" />
      {/* Like Button Here */}
    </div>
  );
}

export default Post;
