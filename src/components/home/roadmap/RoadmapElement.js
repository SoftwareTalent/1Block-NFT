export default function RoadmapElement({ title, content, last }) {
  return (
    <>
      <div className="roadmap__info__title">
        <p>{title}</p>
      </div>
      <div className="roadmap__info__content">
        {content.map((el) => (
          <p>• {el}</p>
        ))}
      </div>
      {last ? null : <div className="roadmap__info__line"></div>}
    </>
  );
}
