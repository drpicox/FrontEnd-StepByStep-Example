import React from 'react';

export default ({ list }) => (
  <ul>
    {list.map(issue => (
      <li key={issue.number}>
        {issue.number}: {issue.title}
      </li>
    ))}
  </ul>
);
