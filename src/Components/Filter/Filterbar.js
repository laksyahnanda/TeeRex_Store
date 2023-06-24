import { Card } from "react-bootstrap";
import FilterList from "./FilterList";

const FilterBar = (props) => {
  return (
    <Card className="bg-secondary text-light" style={{ fontSize: "100%" }}>
      <Card.Body>
        <Card.Title className="mb-3">
          <h4>Apply Filters</h4>
        </Card.Title>
        <FilterList filters={props.filters} id="filters" />
      </Card.Body>
    </Card>
  );
};

export default FilterBar;