import { Box } from "@radix-ui/themes";
import ContactFooter from "./components/ContactFooter";
import DescriptionBox from "./components/DescriptionBox";
import NameCircle from "./components/NameCircle";
import TransitionWords from "./components/TransitionWords";

const InformationContainer = () => {
  return (
    <Box className="flex h-screen w-full">
      <Box className="h-screen flex bg-transparent pt-36 z-10">
        <NameCircle />
      </Box>
      <Box className="bg-gray-950 h-screen flex-grow flex flex-col justify-end pb-5 pl-10 -ml-32">
        <TransitionWords />
        <DescriptionBox />
        <ContactFooter/>
      </Box>
    </Box>
  );
};

export default InformationContainer;
