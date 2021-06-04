import React from 'react';
import { Toolbar } from '@fluentui/react-teams';

const ChildComponent: React.FunctionComponent = () => {
    const toolbarConfig = {
        actionGroups: {},
        filters: [
          {
            id: "i1",
            title: "Edible flowers",
            items: [
              { id: "i1i1", title: "Dianthus" },
              { id: "i1i2", title: "Mentha" },
              { id: "i1i3", title: "Passiflora" },
            ],
          },
          { id: "i2", title: "Podded vegetables" },
        ],
        filtersSingleSelect: true,
        find: true,
      };
  return (
    <Toolbar {...toolbarConfig}   />
  )
};

export default ChildComponent;