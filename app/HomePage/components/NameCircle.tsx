import { Text } from "@radix-ui/themes";

const NameCircle = () => {
  return (
    <div className="bg-gray-950 h-60 w-60 rounded-full flex items-center justify-center">
      <Text className="text-gray-50 font-extrabold text-4xl leading-[3.5rem]">
        Hassan
        <br />
        Mansoor
      </Text>
    </div>
  );
};

export default NameCircle;
