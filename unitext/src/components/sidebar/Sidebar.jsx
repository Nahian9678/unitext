import "./sidebar.css";
import {
  Group,
  School,
  Announcement,
  Book,
} from "@material-ui/icons";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          
          
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
        
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">NSU</span>
          </li>
          <li className="sidebarListItem">
            <Announcement className="sidebarIcon" />
            <span className="sidebarListItemText">Announcement</span>
          </li>
          
          <li className="sidebarListItem">
            <Book className="sidebarIcon" />
            <span className="sidebarListItemText">Department</span>
          </li>
        </ul>
        <button className="sidebarButton">Academic Calender</button>
        <hr className="sidebarHr" />
      </div>
    </div>
  );
}


