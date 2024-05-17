import SectionFindRide from "../components/sectionFindRide";
import SectionClassRides from "../components/sectionClassRides";
import SectionFormulary from "../components/sectionFormulary";

const Home = () => {
    return (
        <div className="min-h-dvh min-w-full max-w-full">
            <SectionFindRide />
            <SectionClassRides />
            <SectionFormulary />
        </div>
    );
};

export default Home;
