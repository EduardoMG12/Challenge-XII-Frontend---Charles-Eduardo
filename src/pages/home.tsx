import SectionFindRide from "../components/sectionFindRide";
import SectionClassRides from "../components/sectionClassRides";

const Home = () => {
  return (
    <div className='min-h-dvh min-w-full max-w-full'>
        <SectionFindRide />
        <SectionClassRides />
    </div>
  )
}

export default Home