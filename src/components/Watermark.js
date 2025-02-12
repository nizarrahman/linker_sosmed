import { InstagramFilled } from "@ant-design/icons";
import React from "react";

export default function Watermark({ appearance }) {
  return (
    <div
      style={{
        color: appearance.data().font_color,
        backgroundColor: `${appearance.data().button_color}90`,
      }}
      className="text-sm flex items-center justify-center gap-2 font-semibold backdrop-blur-sm py-2 rounded"
    >
      <InstagramFilled /> Follow the owner : {" "}
      <a href=" https://instagram.com/nizarrrahman.f_" className="hover:text-white transition-all" target="_blank">
        Nizar Rahman
      </a>
    </div>
  );
}
