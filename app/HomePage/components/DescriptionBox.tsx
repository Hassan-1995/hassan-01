import { Box, Text } from "@radix-ui/themes";
import React from "react";

const DescriptionBox = () => {
  return (
    <Box className="my-5 w-3/4 text-justify">
      <Text className="text-gray-50 font-bold text-xs text-wrap">
        Hello! I am an Electrical Engineer with expertise in IoT, Automation,
        Mobile App Development, and SEO-driven Websites. I specialize in
        creating innovative, user-friendly digital solutions and have a passion
        for combining technology with real-world applications. Let’s connect to
        explore new opportunities!
      </Text>
    </Box>
  );
};

export default DescriptionBox;
