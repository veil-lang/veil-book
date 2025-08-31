import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import { useVeilVersion } from "../hooks/useVeilVersion";

function VeilHeader() {
  const version = useVeilVersion();
  return (
    <header className={styles["veil-header"]}>
      <div className={styles["veil-logo"]}>
        <h1>Veil</h1>
      </div>
      <Link className={styles["cta-button"]} to="/docs">
        Get started
      </Link>
      <div className={styles["veil-version"]}>
        <span className={styles["version-text"]}>Current version:</span>
        <span className={styles["version-number"]}>{version}</span>
        <span className={styles["version-separator"]}>/</span>
        <Link
          to="/docs/intro/installation"
          className={styles["installation-link"]}
        >
          Installation Guide
        </Link>
      </div>
    </header>
  );
}

function VeilIntro() {
  const exampleCode = (
    <>
      <span className={styles["code-keyword"]}>fn</span>{" "}
      <span className={styles["code-function"]}>main</span>() {"{"}
      {"\n"}
      {"    "}
      <span className={styles["code-function"]}>println</span>(
      <span className={styles["code-string"]}>"Hello, World!"</span>);{"\n"}
      {"}"}
    </>
  );

  return (
    <section id="intro" className={styles["veil-intro"]}>
      <div className={styles["intro-content"]}>
        <h2>The Veil Programming Language</h2>
        <p className={styles["subtitle"]}>
          Intuitive syntax meets high performance through seamless compilation
          to C
        </p>
      </div>
      <div className={styles["veil-code-example"]}>
        <pre>
          <code className={styles["language-veil"]}>{exampleCode}</code>
        </pre>
      </div>
    </section>
  );
}

function VeilFeatures() {
  const features = [
    {
      icon: "fas fa-shield-alt",
      title: "Memory Safety",
      description:
        "Built-in memory safety without garbage collection overhead.",
    },
    {
      icon: "fas fa-puzzle-piece",
      title: "Module System",
      description:
        "Simple and straightforward module system with sensible defaults.",
    },
    {
      icon: "fas fa-cogs",
      title: "C Interoperability",
      description:
        "Seamless integration with existing C/C++ codebases and libraries.",
    },
    {
      icon: "fas fa-bolt",
      title: "Zero-Cost Abstractions",
      description:
        "High-level features that compile down to efficient machine code.",
    },
    {
      icon: "fas fa-cube",
      title: "Modern Syntax",
      description:
        "Clean, expressive syntax that makes code readable and maintainable.",
    },
    {
      icon: "fas fa-globe",
      title: "Cross-platform",
      description:
        "Write once, compile anywhere: Linux, macOS, Windows and more.",
    },
  ];

  return (
    <section id="features" className={styles["veil-section"]}>
      <div className={styles["features-grid"]}>
        {features.map((feature, idx) => (
          <div key={idx} className={styles["feature-card"]}>
            <div className={styles["icon"]}>
              <i className={feature.icon}></i>
            </div>
            <div className={styles["feature-text"]}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function VeilGetStarted() {
  return (
    <section id="get-started" className={styles["veil-get-started"]}>
      <h2>Get Started with Veil Lang</h2>
      <p>Ready to dive in? Check out our documentation!</p>
      <Link className={styles["cta-button"]} to="/docs">
        Documentation
      </Link>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A modern programming language designed for simplicity and performance"
      wrapperClassName={styles["veil-layout"]}
    >
      <VeilHeader />
      <main className={styles["veil-main"]}>
        <VeilIntro />
        <VeilFeatures />
      </main>
    </Layout>
  );
}
