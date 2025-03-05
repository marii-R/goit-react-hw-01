import styles from "./FriendListItem.module.css";
export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className={styles.friendListItem}>
      <img src={avatar} alt={`Avatar of ${name}`} width="48" />
      <p>{name}</p>
      <p style={{ color: isOnline ? "green" : "red" }}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}