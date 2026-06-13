type Props = {
  heading: string;

  contentTop: string;

  image1?: string;
  contentImgRight?: string;

  image2?: string;
  contentImgLeft?: string;

  contentBottom: string;

  signature: string;
};

export default function LetterPage({
  heading,

  contentTop,

  image1,
  contentImgRight,

  image2,
  contentImgLeft,

  contentBottom,

  signature,
}: Props) {
  return (
    <section
      id="letter-page"
      className="letter-page"
    >
      <div className="letter-paper">

        <h2 className="letter-heading">
          {heading}
        </h2>

        <p className="letter-text">
          {contentTop}
        </p>

        {image1 && (
          <div className="memory-row">

            <div className="polaroid">
              <div className="tape"></div>

              <img
                src={image1}
                alt=""
              />

              <p className="caption">
               Where it all started ❤️
              </p>
            </div>

            <div className="memory-text">
              {contentImgRight}
            </div>

          </div>
        )}

        {image2 && (
          <div className="memory-row reverse">

            <div className="memory-text">
              {contentImgLeft}
            </div>

            <div className="polaroid">
              <div className="tape"></div>

              <img
                src={image2}
                alt=""
              />

              <p className="caption">
                Becoming part of the family ✨
              </p>
            </div>

          </div>
        )}

        <p className="letter-text">
          {contentBottom}
        </p>

        <div className="signature">
          With Love,
          <br />
          {signature} ❤️
        </div>

      </div>
    </section>
  );
}