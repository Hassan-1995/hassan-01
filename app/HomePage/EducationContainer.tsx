import { Box, Text } from "@radix-ui/themes";
import EducationCourses from "./components/EducationCourses";

const EducationContainer = () => {
  const courses = [
    {
      title: "Web Developer",
      description: "Next JS, HTML, CSS, Tailwind, Java Script",
    },
    {
      title: "App Developer",
      description: "React Native, Java Script, API Integration",
    },
    {
      title: "Data Base Basics",
      description: "MySQL, Firebase",
    },
    {
      title: "IoT and Automation",
      description: "C++, Microcontrolers, Real Time Data-Base",
    },
  ];

  return (
    <Box className="flex h-full w-full">
      <Box className="h-full flex bg-transparent" />
      <Box className="bg-gray-950 h-full flex-grow flex flex-col pb-5 pt-10 px-5 ml-32">
        <Box className="mb-8">
          <Text className="text-4xl text-gray-50 font-extrabold mb-2">
            Education
          </Text>
          <br />
          <Text className="text-xl font-bold text-sky-200">Studied At</Text>
        </Box>
        <Box className="my-5  text-justify flex justify-between">
          <Box className="">
            <div className="flex mb-5">
              <div className="-rotate-90 h-auto w-16 text-cyan-200 text-xs font-bold">
                Bachelors
              </div>
              <div className="h-30 text-cyan-200 text-6xl font-bold">
                F.A.S.T
              </div>
            </div>
            <div className="text-cyan-200">Karachi, Paskitan</div>
          </Box>
          <Box className="">
            <div className="flex mb-5">
              <div className="-rotate-90 h-auto w-16  text-cyan-200 text-sm font-bold">
                Masters
              </div>
              <div className="h-30 text-cyan-200 text-6xl font-bold">
                Tsinghua
              </div>
            </div>
            <div className="text-cyan-200">Beijing, China</div>
          </Box>
        </Box>
        <Box className="my-8">
          <Text className="text-xl font-bold text-sky-200">Courses</Text>
        </Box>

        <EducationCourses items={courses} />
      </Box>
    </Box>
  );
};

export default EducationContainer;
