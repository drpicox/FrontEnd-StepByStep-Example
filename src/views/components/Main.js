import React from 'react';

import SelectCurrentRepo from '../containers/SelectCurrentRepo';
import ListAllIssues from '../containers/ListAllIssues';
import ListAllPulls from '../containers/ListAllPulls';

export default () => (
  <div>
    Hello<br />
    <SelectCurrentRepo />
    <br />
    Issues: <br />
    <ListAllIssues />
    <br />
    Pulls: <br />
    <ListAllPulls />
  </div>
);
