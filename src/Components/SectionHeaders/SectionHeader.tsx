import { Col } from "react-bootstrap";
import "../../Styles/Section.css";
import "../../Styles/Header.css";


interface SectionHeaderProps {
  selectedSectionName: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ selectedSectionName }) => {
  return (
    <Col>
      <h1 className="h1-header">
        {selectedSectionName} <span className="h1-bracket">{"{"}</span>
      </h1>
    </Col>
  );
};

export default SectionHeader;