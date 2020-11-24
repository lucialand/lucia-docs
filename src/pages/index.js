import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
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
        Lucia provides a declarative API similar to Vue/Alpine to create views, making development
        predictable and intuitive through markup-centric code.
      </>
    ),
  },
  {
    title: 'Reactive',
    imageUrl: 'img/magic-solid.svg',
    description: (
      <>
        When the view is changed, the internal reference Virtual DOM will automatically react and
        will update and render the new view in realtime.
      </>
    ),
  },
  {
    title: 'Lightweight',
    imageUrl: 'img/feather-solid.svg',
    description: (
      <>
        Lucia is extremely light and performant as it does not use a traditional Virtual DOM, rather
        it renders directives only if necessary by skipping static nodes through DOM references.
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
          <img className={styles.featureImage} src={imgUrl} alt={title} />
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
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div style={{ background: '#1D1E32', padding: '10px 0', lineHeight: 2 }}>
        <div className="container">
          <div
            style={{
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Black Lives Matter.
            <a
              style={{
                display: 'inline-block',
                color: 'white',
                fontWeight: 'bold',
                margin: '0 10px',
                padding: '7px 20px',
                border: '1px solid white',
              }}
              href="https://support.eji.org/give/153413"
              target="_blank"
              rel="noopener noreferrer"
            >
              Support the Equal Justice Initiative.
            </a>
          </div>
        </div>
      </div>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--secondary button--lg', styles.getStarted)}
              to={useBaseUrl('docs/essentials/installation')}
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
    </Layout>
  );
}

export default Home;
