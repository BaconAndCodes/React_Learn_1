import EventsNavigation from "../components/EventsNavigation";
import { Link } from "react-router-dom";
const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Some events",
  },
  {
    id: "e2",
    title: "Some events",
  },
  {
    id: "e3",
    title: "Some events",
  },
];
const EventsPage = () => {
  return (
    <>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            {" "}
            <Link to={event.id}>{event.title} </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default EventsPage;
