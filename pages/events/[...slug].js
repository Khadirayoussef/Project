import EventList from "@/components/events/event-list";
import { getFilteredEvents } from "@/dummy-data";
import  { useRouter } from "next/router";

function FilteredEventsPage() {
  const router = useRouter();
  const filtereData = router.query.slug;
  if(!filtereData){
    return<p className='center'>Loading...</p>
  }
  const filteredYear = filtereData[0];
  const filteredMonth = filtereData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2020 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return <h1>Unvalid filter please adjust your values</h1>;
  }

  const events = getFilteredEvents({ year: numYear, month: numMonth });
  if(events.length !== 0){
    return (
        <div>
          <h1 className='center'>Filtered Events</h1>
          <EventList items={events}></EventList>
        </div>
      );
  }else{
    return <h1 className="center">No event found for this date.</h1>
  }

}
export default FilteredEventsPage;
