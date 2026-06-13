type Props = {
  photos: string[];
};

export default function PolaroidStack({
  photos,
}: Props) {
  return (
    <div className="polaroid-container">
      {photos.map((photo, index) => (
        <div
          key={photo}
          className={`polaroid polaroid-${index}`}
        >
          <img src={photo} alt="" />
        </div>
      ))}
    </div>
  );
}