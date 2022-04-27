/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {Suspense, lazy} from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import Html from './Html';
import Spinner from './Spinner';
import Layout from './Layout';

const Metrics = lazy(() => import('./Metrics' /* webpackPrefetch: true */));
const Sidebar = lazy(() => import('./Sidebar' /* webpackPrefetch: true */));
const Details = lazy(() => import("./Details" /* webpackPrefetch: true */));

export default function App({assets}) {
  return (
    <Html assets={assets} title="Hello">
      <Suspense fallback={<Spinner />}>
        <ErrorBoundary FallbackComponent={Error}>
          <Content />
        </ErrorBoundary>
      </Suspense>
    </Html>
  );
}

function Content() {
  return (
    <Layout>
      <aside className="sidebar">
        <Suspense fallback={<Spinner />}>
          <Sidebar />
        </Suspense>
      </aside>
      <article className="details">
        <Suspense fallback={<Spinner />}>
          <Details />
        </Suspense>
        <section className="metrics">
          <h2>Metrics</h2>
          <Suspense fallback={<Spinner />}>
            <Metrics />
          </Suspense>
        </section>
      </article>
    </Layout>
  );
}

function Error({error}) {
  return (
    <div>
      <h1>Application Error</h1>
      <pre style={{whiteSpace: 'pre-wrap'}}>{error.stack}</pre>
    </div>
  );
}
