import { Card } from "react-bootstrap";
import FilterListItems from "./FilterListItem";

const FilterList = (props) => {
  const { filters } = props;

  return (
    <div id="filters">
      {filters.length &&
        filters.map((filter) => (
          <div key={filter.id}>
            <Card.Subtitle>
              <h5>
                <b>{filter.name}</b>
              </h5>
            </Card.Subtitle>
            <FilterListItems items={filter.items} group={filter.id} />
          </div>
        ))}
    </div>
  );
};

export default FilterList;