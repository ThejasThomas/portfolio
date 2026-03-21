import { useEffect } from "react";
import "./globals.css";

interface AppProps {
  children?: React.ReactNode;
}

export default function App({ children }: AppProps) {

  useEffect(() => {
    document.title = "Thejas Thomas - MERN Developer Portfolio";

    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Professional portfolio showcasing MERN stack expertise, projects, and technical skills";
    document.head.appendChild(metaDescription);

    const icon = document.createElement("link");
    icon.rel = "icon";
    icon.href = "/icon.svg";
    document.head.appendChild(icon);
  }, []);

  return (
    <div className="font-sans antialiased">
      {children}
    </div>
  );
}