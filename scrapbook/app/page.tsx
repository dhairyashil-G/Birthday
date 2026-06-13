import config from "./src/config/anu.json";
import CoverPage from "./src/components/CoverPage";

const componentMap = {
  cover: CoverPage,
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
          />
        );
      })}
    </>
  );
}