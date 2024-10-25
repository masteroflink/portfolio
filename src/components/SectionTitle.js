import './SectionTitle.css';

const SectionTitle = ({ title }) => {

    return (
        <h2 className={`section-title ${title.toLowerCase()}`}>
            {title}
        </h2>
    )
}

export default SectionTitle;
