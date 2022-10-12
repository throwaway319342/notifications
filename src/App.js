import logo from './logo.svg';
import './App.css';
import NotificationInbox from './components/NotificationInbox'
import NotificationCard from './components/NotificationCard';

const notifs = [
  {
    name: "Mark Weber",
    content: {
      action: "reacted",
      post: "My first tournament today!"
    },
    time: "1m ago",
    profilePic: "assets/images/avatar-mark-webber.webp",
    read: false
  },
  {
    name: "Angela Gray",
    content: {
      action: "follow",
      post: "",
    },
    time: "5m ago",
    profilePic: "assets/images/avatar-angela-gray.webp",
    read: false
  },
  {
    name: "Jacob Thompson",
    content: {
      action: "join group",
      post: "Chess Club"
    },
    time: "1 day ago",
    profilePic: "assets/images/avatar-jacob-thompson.webp",
    read: false
  },
  {
    name: "Rizky Hasanuddin",
    content: {
      action: "message",
      post: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
    },
    time: "5 days ago",
    profilePic: "assets/images/avatar-rizky-hasanuddin.webp",
    read: true
  },
  {
    name: "Kimberly Smith",
    content: {
      action: "comment",
      post: "assets/images/image-chess.webp"
    },
    time: "1 week ago",
    profilePic: "assets/images/avatar-kimberly-smith.webp",
    read: true
  },
  {
    name: "Nathan Peterson",
    content: {
      action: "reacted",
      post: "5 end-game strategies to increase your win rate"
    },
    time: "2 weeks ago",
    profilePic: "assets/images/avatar-nathan-peterson.webp",
    read: true
  },
  {
    name: "Anna Kim",
    content: {
      action: "left group",
      post: "Chess Club"
    },
    time: "2 weeks ago",
    profilePic: "assets/images/avatar-anna-kim.webp",
    read: true
  }
]

function App() {
  return (
    <div className="page__container">
      <NotificationInbox notifications={notifs}>
      </NotificationInbox>
    </div>
  );
}

export default App;
