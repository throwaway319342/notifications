import { useState, useEffect } from "react";
import "./NotificationCard.css";

function NotificationCard(props) {

    // const [notificationStyle, setNotificationStyle] = useState('')

  function pData() {
    let jsxData = "";

    switch (props.content.action) {
        case "message":
            return (
                <div className="action">
                  <div className="action__info">
                    <div>
                      <p><span className="text--bold">{props.name}</span> has sent you a private message</p>
                    </div>
                  </div>
                  <div className="action__time">
                    <p className="text--grey">{props.time}</p>
                  </div>
                  <div className="private__msg">
                    <p>{props.content.post}</p>
                  </div>
                </div>
              );
        case "reacted":
            return (
                <div className="action">
                    <div className="action__info">
                        <div>
                            <p><span className="text--bold">{props.name}</span> reacted to your recent post <span className="post__title">{props.content.post}</span></p>
                        </div>
                    </div>
                    <div className="action__time">
                        <p className="text--grey">{props.time}</p>
                    </div>
                </div>
            )
        case "left group":
            return (
                <div className="action">
                    <div className="action__info">
                        <div>
                            <p><span className="text--bold">{props.name}</span> has left group <span className="group__name">{props.content.post}</span></p>
                        </div>
                    </div>
                    <div className="action__time">
                        <p className="text--grey">{props.time}</p>
                    </div>
                </div>
            )
        case "join group":
            return (
                <div className="action">
                    <div className="action__info">
                        <div>
                            <p><span className="text--bold">{props.name}</span> has joined group <span className="group__name">{props.content.post}</span></p>
                        </div>
                    </div>
                    <div className="action__time">
                        <p className="text--grey">{props.time}</p>
                    </div>
                </div>
            )
        case "comment":
            return (
                <div className="comment">
                    <div className="action__info">
                        <div>
                            <p><span className="text--bold">{props.name}</span> has commented on your picture</p>
                            <p className="text--grey">{props.time}</p>
                        </div>
                    </div>
                    <div className="picture">
                        <img src={props.content.post} height="32" width="32"></img>
                    </div>
                </div>
            )
        case "follow":
            return (
                <div className="action">
                    <div className="action__info">
                        <div>
                            <p><span className="text--bold">{props.name}</span> has followed you</p>
                        </div>
                    </div>
                    <div className="action__time">
                        <p className="text--grey">{props.time}</p>
                    </div>
                </div>
            )
        default:
            return ( <div><p>Test Data</p></div> )
    }

    // if (props.content.action === "message") {
    //   return (
    //     <div className="action">
    //       <div className="action__info">
    //         <div>
    //           <p>{props.name} has sent you a private message</p>
    //         </div>
    //       </div>
    //       <div className="action__time">
    //         <p>{props.time}</p>
    //       </div>
    //       <div>
    //         <p>{props.content.post}</p>
    //       </div>
    //     </div>
    //   );
    // }

    // return <p>Test data</p>;
  }

//   useEffect(() => {
//     if (props.read) {
//         setNotificationStyle('notification__card read')
//     }
//     else {
//         setNotificationStyle('notification__card')
//     }
//   }, [notificationStyle])

  return (
    <div className={props.read ? 'notification__card read' : 'notification__card unread'}>
      <div className="profile__pic">
        <img src={props.profilePic} height="32" width="32"></img>
      </div>
      {pData()}
      {/* <div className="action">
        <div className="action__info">
          <p>
            {props.name} {props.action}
          </p>
        </div>
        <div className="action__time">
          <p>{props.time}</p>
        </div>
      </div> */}
    </div>
  );
}

export default NotificationCard;
