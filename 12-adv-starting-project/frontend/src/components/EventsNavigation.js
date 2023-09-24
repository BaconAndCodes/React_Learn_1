import classes from "./EventsNavigation.module.css";
import { Link } from "react-router-dom";
function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <a><Link to =''>All Events</Link></a>
          </li>
          <li>
            <a><Link to='new'>New Event</Link></a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
