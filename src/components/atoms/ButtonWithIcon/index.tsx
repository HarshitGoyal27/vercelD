import React, { ReactNode, ReactEventHandler } from "react";
import IconButton from "@mui/material/IconButton";
import hireDevStyles from "./../../../styles/hireDevStyles.module.css";
interface IconTextButtonProps {
  icon?: ReactNode;
  text: string;
  onClick: ReactEventHandler<HTMLButtonElement>;
  iconFontSize?: string; // New prop for icon font size
}
function videoPlay() {
  alert("Video Played");
}
const IconTextButton: React.FC<IconTextButtonProps> = ({
  icon,
  text,
  onClick,
  iconFontSize,
}) => {
  return (
    <div>
      <div
        onClick={videoPlay}
        className={`${hireDevStyles.hireDevWatchVideoButton}`}
      >
        {icon && (
          <IconButton
            onClick={videoPlay}
            sx={{ '& .MuiSvgIcon-root': { fontSize: 38 } }}
            style={{ color: "black", fontSize: iconFontSize || "inherit" }}
          >
            {icon}
          </IconButton>
        )}
        {text}
      </div>
    </div>
  );
};

export default IconTextButton;
