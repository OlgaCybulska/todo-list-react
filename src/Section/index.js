import "./style.css";

const Section = ({ title, body, extrHeaderContent }) => (
  <section className="section">
    <div className="section__item section__grid">
      <h2 className="section__header">{title}</h2>
      {extrHeaderContent}
    </div>
    <div className="section__item">{body}</div>
  </section>
);

export default Section;
