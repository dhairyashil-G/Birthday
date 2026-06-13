type Props = {
  title: string;
  subtitle: string;
};

export default function CoverPage({
  title,
  subtitle,
}: Props) {
  return (
    <section
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  );
}