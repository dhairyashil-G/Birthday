type Props = {
  text: string;
};

export default function AnimatedTitle({
  text,
}: Props) {
  return (
    <h1 className="title">
      {text.split("").map((char, index) => (
        <span
          key={index}
          style={{
            animationDelay: `${index * 0.08}s`,
          }}
          className="letter"
        >
          {char}
        </span>
      ))}
    </h1>
  );
}