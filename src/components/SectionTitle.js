import "./SectionTitle.css";

const SectionTitle = ({ title }) => {
  return (
    <div className="section-container">
      <span className={`section-title ${title.toLowerCase()}`}>{title}</span>
    </div>
  );
};

export default SectionTitle;
