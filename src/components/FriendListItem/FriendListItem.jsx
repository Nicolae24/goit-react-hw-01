import s from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={s.card}>
      <img src={avatar} alt={name} className={s.avatar} />
      <div className={s.info}>
        <p className={s.name}>{name}</p>
        <p className={`${s.status} ${isOnline ? s.isGreen : s.isRed}`}>
          {isOnline ? "online" : "offline"}
        </p>
      </div>
    </div>
  );
}

export default FriendListItem;
