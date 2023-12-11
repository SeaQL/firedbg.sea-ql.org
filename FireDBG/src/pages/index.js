import React, { useEffect, useState } from "react";
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageCompare from '../components/HomepageCompare';
import HomepageExample from '../components/HomepageExample';
import HomepageMascot from '../components/HomepageMascot';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <img className={styles.homepageLogo} width="90%" src="img/FireDBG logo.png" />
        <img className={styles.homepageBanner} width="90%" src="img/FireDBG logo.png" />
        <h2 className="hero__subtitle">{siteConfig.tagline}</h2>
        <p className="hero__subtitle">Visualize and debug Rust programs with a new lens</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/blog/2023-12-12-introducing-firedbg">
            Learn More
          </Link>
          &nbsp;&nbsp;
          <Link
            className="button button--primary button--lg"
            to="/blog/2023-12-13-getting-started/">
            Getting Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        {/* <HomepageCompare /> */}
        {/* <HomepageExample /> */}
        <Video />
        <HomepageMascot />
      </main>
    </Layout>
  );
}

function Video() {
  const { colorMode } = useColorMode();
  const { siteConfig } = useDocusaurusContext();
  const [mounted, setMounted] = useState(false);
  // The Prism theme on SSR is always the default theme but the site theme
  // can be in a different mode. React hydration doesn't update DOM styles
  // that come from SSR. Hence force a re-render after mounting to apply the
  // current relevant styles. There will be a flash seen of the original
  // styles seen using this current approach but that's probably ok. Fixing
  // the flash will require changing the theming approach and is not worth it
  // at this point.
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    var platforms = ["unknown", "win64", "unix"];
    var platform_override = null;

    function detect_platform() {
      "use strict";

      if (platform_override !== null) {
        return platforms[platform_override];
      }

      var os = "unknown";

      if (navigator.platform == "Linux x86_64") { os = "unix"; }
      if (navigator.platform == "Linux i686") { os = "unix"; }
      if (navigator.platform == "Linux i686 on x86_64") { os = "unix"; }
      if (navigator.platform == "Linux aarch64") { os = "unix"; }
      if (navigator.platform == "Linux armv6l") { os = "unix"; }
      if (navigator.platform == "Linux armv7l") { os = "unix"; }
      if (navigator.platform == "Linux armv8l") { os = "unix"; }
      if (navigator.platform == "Linux ppc64") { os = "unix"; }
      if (navigator.platform == "Linux mips") { os = "unix"; }
      if (navigator.platform == "Linux mips64") { os = "unix"; }
      if (navigator.platform == "Mac") { os = "unix"; }
      if (navigator.platform == "Win64" ||
        navigator.userAgent.indexOf("WOW64") != -1 ||
        navigator.userAgent.indexOf("Win64") != -1) { os = "win64"; }
      if (navigator.platform == "FreeBSD x86_64") { os = "unix"; }
      if (navigator.platform == "FreeBSD amd64") { os = "unix"; }
      if (navigator.platform == "NetBSD x86_64") { os = "unix"; }
      if (navigator.platform == "NetBSD amd64") { os = "unix"; }

      if (os == "unknown") {
        if (navigator.appVersion.indexOf("Mac") != -1) { os = "unix"; }
        if (navigator.appVersion.indexOf("FreeBSD") != -1) { os = "unix"; }
      }

      if (navigator.oscpu) {
        if (navigator.oscpu.indexOf("Win64") != -1) { os = "win64"; }
        if (navigator.oscpu.indexOf("Mac") != -1) { os = "unix"; }
        if (navigator.oscpu.indexOf("Linux") != -1) { os = "unix"; }
        if (navigator.oscpu.indexOf("FreeBSD") != -1) { os = "unix"; }
        if (navigator.oscpu.indexOf("NetBSD") != -1) { os = "unix"; }
      }

      return os;
    }

    function adjust_for_platform() {
      "use strict";

      let platform = detect_platform();
      const theme = colorMode == 'dark' ? 'dark' : 'light';

      if (platform == 'win64') {
        platform = 'win';
      } else {
        platform = 'mac';
      }

      const video = document.getElementById('demo-vid');
      video.getElementsByTagName('source')[0].setAttribute('src', `/img/quicksort-${platform}-${theme}.mp4`)
      video.load();
    }
  });

  useEffect(() => {
    const video = document.getElementById('demo-vid');
    const source = video.getElementsByTagName('source')[0];
    const src = source.getAttribute('src');
    if (colorMode == 'dark') {
      source.setAttribute('src', src.replace('-light.mp4', '-dark.mp4'));
    } else {
      source.setAttribute('src', src.replace('-dark.mp4', '-light.mp4'));
    }
    video.load();
  }, [colorMode]);

  return (
    <video id="demo-vid" className={styles.demoVideo} controls muted autoPlay loop>
      <source src="/img/quicksort-mac-light.mp4" type="video/mp4" />
    </video>
  );
}
