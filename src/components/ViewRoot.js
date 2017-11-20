import React from 'react';

import CurrentPost from '../containers/CurrentPost';
import Welcome from './Welcome';

export default function ViewRoot(props) {
  switch (props.root) {
    case 'welcome':
      return <Welcome />;
    case 'post':
      return <CurrentPost />;
    default:
      return <span>Not Found 404</span>;
  }
}
