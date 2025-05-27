import s from "./Profile.module.css";

const Profile = ({
  image,
  name,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={s.profileCard}>
      <div className={s.profileInfo}>
        <img src={image} alt={name} className={s.profileImage} />
        <p className={s.profileName}>{name}</p>
        <p className={s.profileTag}>@{tag}</p>
        <p className={s.profileLocation}>{location}</p>
      </div>
      <ul className={s.statsList}>
        <li className={s.statsItem}>
          <span className={s.statsLabel}>Followers</span>
          <span className={s.statsValue}>{followers}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.statsLabel}>Views</span>
          <span className={s.statsValue}>{views}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.statsLabel}>Likes</span>
          <span className={s.statsValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
