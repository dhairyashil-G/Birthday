import configJson from "./src/config/anu.json";

import CoverPage from "./src/components/CoverPage";
import LetterPage from "./src/components/LetterPage";

import "./src/components/css/CoverPage.css";
import "./src/components/css/LetterPage.css";

import type { ScrapbookConfig } from "./src/types/scrapbook";

const config = configJson as ScrapbookConfig;

export default function Home() {
  const { name } = config.recipient;

  return (
    <>
      {config.pages.map((page, index) => {
        if (page.type === "cover") {
          return (
            <CoverPage
              key={index}
              name={name}
              title={page.title}
              subtitle={page.subtitle}
              photos={page.photos}
            />
          );
        }

        if (page.type === "letter") {
          return (
            <LetterPage
              key={index}
              heading={page.heading}
              contentTop={page.contentTop}
              image1={page.image1}
              contentImgRight={page.contentImgRight}
              image2={page.image2}
              contentImgLeft={page.contentImgLeft}
              contentBottom={page.contentBottom}
              signature={page.signature}
            />
          );
        }

        return null;
      })}
    </>
  );
}
