import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  if (!data.isError) {
    return <p>{data.message}</p>;
  }
  const events = data.events;
  return <EventsList events={events} />;
}
export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw { message: "Could not fetch events" };
  } else {
    return response;
  }
};

export default EventsPage;
