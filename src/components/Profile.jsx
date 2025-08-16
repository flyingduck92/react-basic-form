const Profile = ({ profile }) => {
  const { name, hobby } = profile
  return (
    <li>
      <h1>{name}</h1>
      <p>{hobby}</p>
    </li>
  )
}

export default Profile