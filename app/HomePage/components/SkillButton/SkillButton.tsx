import React from "react";
import "./SkillButton.css"; // Import the CSS file
import { Avatar } from "@radix-ui/themes";

interface SkillButtonProps {
  frontText: string;
  backText: string;
  img: string;
}

const SkillButton: React.FC<SkillButtonProps> = ({
  frontText,
  backText,
  img,
}: SkillButtonProps) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front flex-col">
          <Avatar
            src={img}
            fallback="A"
            className="h-16 w-16 mb-10 flex transition-opacity duration-500"
          />
          <h1>{frontText}</h1>
        </div>
        <div className="flip-card-back">
          <h1>{backText}</h1>
        </div>
      </div>
    </div>
  );
};

export default SkillButton;
