import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default ({ list }) => (
  <ListGroup>
    {list.map(issue => (
      <ListGroupItem key={issue.number}>
        {issue.number}: {issue.title}
      </ListGroupItem>
    ))}
  </ListGroup>
);
