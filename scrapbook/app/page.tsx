import config from "./src/config/anu.json";

import CoverPage from "./src/components/CoverPage";
import LetterPage from "./src/components/LetterPage";

import "./src/components/css/CoverPage.css";
import "./src/components/css/LetterPage.css";

const componentMap = {
  cover: CoverPage,
  letter: LetterPage,
};

export default function Home() {
  return (
    <>
      {config.pages.map((page, index) => {
        const Component =
          componentMap[
            page.type as keyof typeof componentMap
          ];

        if (!Component) return null;

        return (
          <Component
            key={index}
            {...page}
            name={config.recipient.name}
          />
        );
      })}
    </>
  );
}