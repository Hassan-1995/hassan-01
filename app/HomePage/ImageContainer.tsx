import { Avatar } from "@radix-ui/themes";

const ImageContainer = () => {
  return (
    <div className="bg-blue-900 flex overflow-hidden opacity-40">
      <Avatar src="/test.jpg" fallback="A" className="h-screen w-screen" />
    </div>
  );
};

export default ImageContainer;
