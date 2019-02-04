import React from 'react';
import { Loader, PageLoading } from './preloderStyle';

const Preloader = () => (
  <PageLoading className="page-loading">
    <Loader className="loader" />
  </PageLoading>
);

export default Preloader;
