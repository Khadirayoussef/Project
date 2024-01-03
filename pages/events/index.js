import EventList from "@/components/events/event-list";
import { getAllEvents } from "@/dummy-data";
import EventsSearch from "@/components/events/events-search";
import { useRouter } from "next/router";

function AllEventsPage() {
  const Allevents = getAllEvents();
  const router = useRouter();
  function findEventsHnadler(year,month){
    const fullpath=`/events/${year}/${month}`
    router.push(fullpath);
 
  }
  return (
    <div>
      <EventsSearch onSearch={findEventsHnadler}/>
      <EventList items={Allevents}></EventList>
    </div>
  );
}
export default AllEventsPage;
