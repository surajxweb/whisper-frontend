import { Sixtyfour } from "next/font/google";

const font = Sixtyfour({ subsets: ["latin"] });

const Logo = ({ size, large }: { size: number; large: boolean }) => {
  return (
    <div style={{ fontSize: size }} className={font.className}>
      {large ? "Whisper Board" : "WB"}
    </div>
  );
};

export default Logo;
