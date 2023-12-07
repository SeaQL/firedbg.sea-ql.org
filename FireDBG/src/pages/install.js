import React, { useEffect, useState } from "react";
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './install.module.css';

function InstallBashScript() {
    return (
        <div>
            <pre>
                <code>{`curl https://raw.githubusercontent.com/SeaQL/FireDBG.for.Rust/main/install.sh -sSf | sh`}</code>
            </pre>
        </div>
    )
}

function InstallPageHeader({ mounted }) {
    return (
        <header className={styles.heroBanner}>
            <div className="container">
                <img className={styles.homepageLogo} width="90%" src="/img/FireDBG logo.png" />
                <img className={styles.homepageBanner} width="90%" src="/img/FireDBG logo.png" />
                <h1>Install <code>FireDBG</code></h1>
                <div id="platform-instructions-unix" style={{ display: 'none' }}>
                    <p>
                        You appear to be running one of Unix, Linux, MacOS.
                        Install by running:
                    </p>
                    <InstallBashScript />
                </div>

                <div id="platform-instructions-win64" style={{ display: 'none' }}>
                    <p>
                        You appear to be running Windows 64-bit.
                        Install by running command in Windows Subsystem for Linux user:
                    </p>
                    <InstallBashScript />
                </div>

                <div id="platform-instructions-unknown" style={{ display: 'none' }}>
                    <p>I don't recognize your platform.</p>
                    <p>
                        We would appreciate it if you
                        <a href="https://github.com/SeaQL/FireDBG.for.Rust/issues/new"> reported an issue</a>,
                        along with the following values:
                    </p>
                    <div>
                        <div>navigator.platform:</div>
                        <code id="nav-plat"></code>
                        <div>navigator.appVersion:</div>
                        <code id="nav-app"></code>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
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

            var platform = detect_platform();

            platforms.forEach(function (platform_elem) {
                var platform_div = document.getElementById("platform-instructions-" + platform_elem);
                if (platform_div) {
                    platform_div.style.display = "none";
                    if (platform === platform_elem) {
                        platform_div.style.display = "block";
                    }
                }
            });
        }

        function fill_in_bug_report_values() {
            var nav_plat = document.getElementById("nav-plat");
            var nav_app = document.getElementById("nav-app");
            if (nav_plat) {
                nav_plat.textContent = navigator.platform;
            }
            if (nav_app) {
                nav_app.textContent = navigator.appVersion;
            }
        }

        adjust_for_platform();
        fill_in_bug_report_values();
    });

    return (
        <Layout
            description={siteConfig.tagline}>
            <main>
                <InstallPageHeader mounted={mounted} />
            </main>
        </Layout>
    );
}
