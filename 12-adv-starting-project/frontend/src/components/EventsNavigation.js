import classes from "./EventsNavigation.module.css";
import { NavLink } from "react-router-dom";
function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <a>
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                All Events
              </NavLink>
            </a>
          </li>
          <li>
            <a>
              <NavLink
                to="new"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                {" "}
                New Event
              </NavLink>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
