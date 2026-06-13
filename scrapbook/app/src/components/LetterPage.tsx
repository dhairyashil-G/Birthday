type Props = {
  heading: string;
  content: string;
  signature: string;
};

export default function LetterPage({
  heading,
  content,
  signature,
}: Props) {
  return (
    <section
      id="letter-page"
      className="letter-page"
    >
      <div className="letter-paper">
        <h2>{heading}</h2>

        <p>{content}</p>

        <div className="signature">
          With Love,
          <br />
          {signature} ❤️
        </div>
      </div>
    </section>
  );
}