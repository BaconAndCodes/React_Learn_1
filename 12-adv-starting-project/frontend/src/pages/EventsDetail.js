import { useParams } from "react-router-dom";
const EventDetailPage = () => {
  const params = useParams();
  return (
    <>
      <h1>Detail page</h1>
      <p>{params.eventId}</p>
    </>
  );
};
export default EventDetailPage;
