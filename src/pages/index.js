import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Declarative',
    imageUrl: 'img/bullhorn-solid.svg',
    description: (
      <>
        Lucia provides a declarative API similar to Vue to create views, making development
        predictable and intuitive through markup-centric code.
      </>
    ),
  },
  {
    title: 'Reactive',
    imageUrl: 'img/magic-solid.svg',
    description: (
      <>
        When the state is changed and trapped by the observer, the internal AST will
        automatically react and will update and render the new view in realtime.
      </>
    ),
  },
  {
    title: 'Lightweight',
    imageUrl: 'img/feather-solid.svg',
    description: (
      <>
        Lucia is extremely light and performant as it renders directives only if necessary by
        skipping static nodes through element references.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img
            style={{ filter: 'invert(1)' }}
            className={styles.featureImage}
            src={imgUrl}
            alt={title}
          />
        </div>
      )}
      <h3 class="text--center">{title}</h3>
      <p class="text--center">{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Home`}
      description="3kb library for tiny web apps"
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img
            className={clsx(styles.heroBannerLogo, 'margin-vert--md')}
            alt="Lucia logo"
            src={useBaseUrl('img/logo.svg')}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--primary button--lg', styles.getStarted)}
              to={useBaseUrl('docs/fundementals/installation')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <div className={styles.gettingStartedSection}>
        <div className="container padding-vert--xl text--left">
          <div className="row">
            <div className="col col--4 col--offset-1">
              <h2>Get started in seconds</h2>
              <p>
                Lucia allows development to be completely done in the markup, allowing you to{' '}
                <strong>focus on code, not abstraction hell</strong>.
                <br />
                <br />
                To get started with Lucia, import this CDN link as a script:
              </p>
              <CodeBlock className="language-sh">https://unpkg.com/lucia</CodeBlock>
              <br />
            </div>
            <div className="col col--5 col--offset-1 text--center">
              <img
                alt="Easy to get started in seconds"
                style={{
                  width: '250px',
                  height: '250px',
                  filter: 'invert(var(--inversion))',
                }}
                src={useBaseUrl('img/demo1.svg')}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tinted}>
        <div className="container padding-vert--xl text--left">
          <div className="row">
            <div className="col col--4 col--offset-1 text--center">
              <img
                alt="Easy to update"
                style={{
                  width: '210px',
                  height: '210px',
                  filter: 'invert(var(--inversion))',
                }}
                src={useBaseUrl('img/demo2.svg')}
              />
            </div>
            <div className="col col--5 col--offset-1">
              <h2>Easy to Maintain</h2>
              <p>
                Writing small-scale applications shouldn't be hard. Lucia helps you write{' '}
                <strong>simple, declarative, and unopiniated</strong> code, while having a light
                footprint on performance.
                <br />
                <br />
                Lucia not only supports markup oriented code, but also supports APIs for JavaScript
                usage, such as components, state access and more!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
