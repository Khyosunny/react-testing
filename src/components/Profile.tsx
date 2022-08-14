interface ProfileProps {
  image: string;
  username: string;
}

function Profile({ image, username }: ProfileProps) {
  return (
    <div>
      <img alt="profile" src={image} data-testid="image" width={500} />
      <p>{username}</p>
    </div>
  );
}

export default Profile;
