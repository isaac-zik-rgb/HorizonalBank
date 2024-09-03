import React from "react";
import { Form, InputGroup } from "react-bootstrap";

const SearchBar: React.FC = () => {
  return (
    <Form>
      <InputGroup>
        <InputGroup.Text>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fddd009ff5792fce86ef31defd8ace7e48ca792e51dd23fd6ce9f957a6c6815?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22"
            alt=""
            style={{ width: "20px", aspectRatio: "1" }}
          />
        </InputGroup.Text>
        <Form.Control type="search" placeholder="Search" aria-label="Search" />
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
