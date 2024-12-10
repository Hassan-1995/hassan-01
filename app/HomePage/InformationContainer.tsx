import ContactFooter from "./components/ContactFooter";
import DescriptionBox from "./components/DescriptionBox";
import NameCircle from "./components/NameCircle";
import TransitionWords from "./components/TransitionWords";

const InformationContainer = () => {
  return (
    <div className="flex h-screen">
      <div className="flex mt-40 z-10">
        <NameCircle />
      </div>
      <div className="bg-gray-950 flex-grow flex flex-col justify-end pb-5 pl-10 -ml-32">
        <TransitionWords />
        <DescriptionBox />
        <ContactFooter />
      </div>
    </div>
  );
};

export default InformationContainer;
