import { Box, Grid, Text } from "@radix-ui/themes";
import SkillButton from "./components/SkillButton/SkillButton";

const SkillsContainer = () => {
  const buttons = [
    {
      title: "Web Development",
      description:
        "Possess a deep understanding of web design principles, content creation and both client-side and server-side scripting. I am proficient in crafting responsive, user-friendly and SEO-optimized websites.",
      img: "/webDevelopment.png",
    },
    {
      title: "UI/UX Design",
      description:
        "Excel in creating visually appealing and user-centric designs that enhance digital experiences. From wireframes to prototypes, I ensure intuitive navigation and aesthetic appeal, keeping the user journey seamless.",
      img: "/ui_uxDesign.png",
    },
    {
      title: "Mobile Application",
      description:
        "Specialize in developing cross-platform and native mobile applications that deliver optimal performance and engaging user experiences. My expertise includes feature-rich apps tailored to business or personal needs.",
      img: "/mobileApp1.png",
    },
    {
      title: "Automation Process",
      description:
        "Streamline operations through process automation, integrating cutting-edge tools to enhance efficiency, reduce errors and save time. My solutions are designed to maximize productivity and scalability.",
      img: "/automation.png",
    },
    {
      title: "Database Management",
      description:
        "Skilled in designing, implementing and maintaining robust database systems. With expertise in SQL technologies, I ensure data integrity, security and efficient retrieval.",
      img: "/database.png",
    },
    {
      title: "IoT Solution",
      description:
        "Design innovative IoT solutions by integrating sensors, devices and platforms to enable seamless connectivity and data exchange. My approach emphasizes real-time monitoring, analytics and automation for smarter systems.",
      img: "/iot.png",
    },
  ];

  return (
    <Box className="flex w-full pb-11">
      <Box className="h-full flex bg-transparent" />
      <Box className="bg-gray-950 h-full flex-grow flex flex-col pb-5 pt-10 px-5 ml-32">
        <Box className="mb-8">
          <Text className="text-4xl text-gray-50 font-extrabold mb-2">
            Skills
          </Text>
          <br />
          <Text className="text-xl font-bold text-sky-200">
            What services I provide
          </Text>
        </Box>

        <Grid className="grid grid-cols-2 grid-rows-2 gap-x-10 gap-y-10">
          {buttons.map((button) => (
            <SkillButton
              key={button.title}
              frontText={button.title}
              backText={button.description}
              img={button.img}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default SkillsContainer;
