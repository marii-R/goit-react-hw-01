import css from "./Profile.module.css"

export default function Profile ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes }
}) {
  return (
  <div className={css.profile}>
   <div>
    <img
     src={avatar}
     alt="User avatar"
    />
    <h2>{username}</h2>
    <p>{tag}</p>
    <p>{location}</p>
   </div>

   <ul className={css.stats}>
    <li>
     <span>Followers</span>
     <span>{followers}</span>
    </li>
    <li>
     <span>Views</span>
     <span>{views}</span>
    </li>
    <li>
     <span>Likes</span>
     <span>{likes}</span>
    </li>
   </ul>
  </div>

  );
}