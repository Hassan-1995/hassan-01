import { Box, Text } from "@radix-ui/themes";

const AboutContainer = () => {
  return (
    <Box className="flex h-full w-full">
      <Box className="h-full flex bg-transparent" />
      <Box className="bg-gray-950 h-full flex-grow flex flex-col pb-5 pt-10 px-5 ml-32">
        <Box className="mb-8">
          <Text className="text-4xl text-gray-50 font-extrabold mb-2">
            About Me
          </Text>
          <br />
          <Text className="text-xl font-bold text-sky-200">My Story</Text>
        </Box>
        <Box className="my-5  text-justify">
          <Text className="text-gray-50 font-bold text-xs ml-4 mb-4">
            Hello! I am an experienced professional with expertise in IoT,
            Automation, Web Development, and Mobile Application Development. I
            am passionate about technology and love creating user-friendly
            digital solutions that make life easier. Let&apos;s connect to
            explore new opportunities and share ideas!
          </Text>
          <br />
          <Text className="text-gray-50 font-bold text-xs ml-4 mb-4">
            I am a passionate and innovative Electrical Engineer with a deep
            expertise in IoT, Automation, Mobile App Development, and SEO-driven
            websites. My journey has been driven by a commitment to bridging the
            gap between technology and real-world applications. From crafting
            smart solutions in IoT to designing user-friendly mobile apps, I
            thrive on turning complex ideas into accessible, impactful results.
          </Text>
          <br />
          <Text className="text-gray-50 font-bold text-xs ml-4 mb-4">
            With a strong foundation in web development, I excel at creating
            aesthetically pleasing and highly functional websites tailored to
            user needs. My proficiency in SEO ensures that these websites not
            only look good but also perform exceptionally in search engine
            rankings. I find immense satisfaction in developing solutions that
            merge technical excellence with creative vision.
          </Text>
          <br />
          <Text className="text-gray-50 font-bold text-xs ml-4 mb-4">
            Over the years, I have gained substantial experience working on
            automation projects that simplify daily processes. Leveraging IoT
            and modern technologies, I design systems that enhance efficiency,
            reduce costs, and provide seamless integration with other digital
            platforms. Whether it&apos;s home automation, industrial
            applications, or smart devices, I take pride in delivering reliable,
            scalable solutions.
          </Text>
          <br />
          <Text className="text-gray-50 font-bold text-xs ml-4 mb-4">
            In addition to my technical skills, I am deeply invested in
            mentoring and guiding others. As a consultant and mentor, I enjoy
            helping individuals and teams unlock their potential by sharing my
            knowledge and insights. Collaboration and knowledge exchange are at
            the heart of my approach, fostering growth and innovation in every
            project I undertake.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutContainer;
