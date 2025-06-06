import FriendListItem from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css";
// import friends from "../../data/friends.json";
const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map((friend) => (
        <li className={s.friendListItem} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
