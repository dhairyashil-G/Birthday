import AnimatedTitle from "./AnimatedTitle";
import FloatingBalloons from "./FloatingBalloons";
import PolaroidStack from "./PolaroidStack";

type Props = {
  name: string;
  title: string;
  subtitle: string;
  photos: string[];
};

export default function CoverPage({
  name,
  title,
  subtitle,
  photos,
}: Props) {
  return (
    <section className="cover-page">

      <FloatingBalloons />

      <div className="content">

        <AnimatedTitle text={title} />

        <h2 className="recipient">
          {name} ❤️
        </h2>

        <PolaroidStack photos={photos} />

        <p className="subtitle">
          {subtitle}
        </p>

        <button className="open-btn">
          Open Scrapbook
        </button>

      </div>

    </section>
  );
}