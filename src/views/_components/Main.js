import React from 'react';

import SelectCurrentRepo from '../_containers/SelectCurrentRepo';
import ListAllIssues from '../_containers/ListAllIssues';
import ListAllPulls from '../_containers/ListAllPulls';

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
