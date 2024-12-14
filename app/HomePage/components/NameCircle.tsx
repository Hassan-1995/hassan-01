import { Box, Text } from "@radix-ui/themes";

const NameCircle = () => {
  return (
    <Box className="bg-gray-950 h-64 w-64 rounded-full flex items-center justify-center">
      <Text className="text-gray-50 font-extrabold text-4xl leading-[3.5rem]">
        Hassan
        <br />
        Mansoor
      </Text>
    </Box>
  );
};

export default NameCircle;
