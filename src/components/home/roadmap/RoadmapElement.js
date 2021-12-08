export default function RoadmapElement({ title, content, last }) {
  return (
    <>
      <div className="roadmap__info__title">
        <p>{title}</p>
      </div>
      <div className="roadmap__info__content">
        <p>{content}</p>
      </div>
      {last ? null : <div className="roadmap__info__line"></div>}
    </>
  );
}
