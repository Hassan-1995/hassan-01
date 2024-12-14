import { Box, Flex, Grid, Section } from "@radix-ui/themes";
import AboutContainer from "./AboutContainer";
import ImageContainer from "./ImageContainer";
import InformationContainer from "./InformationContainer";
import SkillsContainer from "./SkillsContainer";
import EducationContainer from "./EducationContainer";

const HomePage = () => {
  return (
    // <EducationContainer />
    <Grid className="h-screen flex bg-gray-950">
      <Box className="w-1/2">
        <ImageContainer />
      </Box>
      <Flex direction="column" className="z-10 -ml-36 flex-1 overflow-y-auto">
        <Section id="main" />
        <InformationContainer />
        <Section id="about" className="mb-24" />
        <AboutContainer />
        <Section id="skills" className="mb-24"/>
        <SkillsContainer />
        <Section id="education" className="mb-24" />
        <EducationContainer />
      </Flex>
    </Grid>
  );
};

export default HomePage;
