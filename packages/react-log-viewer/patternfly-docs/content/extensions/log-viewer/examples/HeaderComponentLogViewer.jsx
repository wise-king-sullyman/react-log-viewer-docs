import React from 'react';
import { data } from './realTestData.js';
import { LogViewer } from '@patternfly/react-log-viewer';
import { Banner } from '@patternfly/react-core';

HeaderComponentLogViewer = () => {
  return (
    <LogViewer
      hasLineNumbers={false}
      height={300}
      data={data.data}
      theme="dark"
      header={<Banner>5019 lines</Banner>}
    />
  );
};