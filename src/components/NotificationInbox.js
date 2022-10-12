import NotificationCard from "./NotificationCard";
import "./NotificationInbox.css";

function NotificationInbox(props) {
  return (
    <div className="notification__inbox__container">
      <div className="notification__inbox__headers">
        <div className="header__title">
            <h1>Notifications</h1>
            <div className="header__notif__count">
                <button className="notif__count__btn">3</button>
            </div>
        </div>
        <button className="read__btn">Mark as all read</button>
      </div>
      <div className="notification__inbox__notifs">
        {/* <NotificationCard user="Mark Webber" action="reacted to your recent post"></NotificationCard> */}
        {props.notifications.map((notif) => {
            return <NotificationCard name={notif.name} content={notif.content} time={notif.time} profilePic={notif.profilePic} read={notif.read}></NotificationCard>
        })}
      </div>
    </div>
  );
}

export default NotificationInbox;
