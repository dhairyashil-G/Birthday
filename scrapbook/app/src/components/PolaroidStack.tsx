export default function PolaroidStack({
  photos = [],
}: {
  photos?: string[];
}) {
  return (
    <div className="polaroid-stack">
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`polaroid-card card-${index}`}
        >
          <img
            src={photo}
            alt={`Photo ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
}