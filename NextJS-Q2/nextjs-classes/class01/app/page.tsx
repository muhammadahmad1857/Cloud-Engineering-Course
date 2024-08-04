import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.text}>
        <span className={styles.text1}>hello World </span>
        <strong className={styles.text2}>In Nextjs.</strong>
      </h1>

      <h1>Difference Between Block-Level and Inline Elements</h1>
      <div className={styles.blockLevel}>
        <h2>Block-Level Element</h2>
        <p className={styles.block}>This is a block-level element.</p>
        <p className={styles.block}>
          It occupies its own line and can contain other elements.
        </p>
      </div>

      <div className={styles.inlineLevel}>
        <h2>Inline Element</h2>
        <span className={styles.inline}>This is an inline element.</span>
        <span className={styles.inline}>
          It does not start on a new line and only takes as much width as
          necessary.
        </span>
      </div>

      <p className={styles.differenceExplanation}>
        Block-level elements like <code>&lt;div&gt;</code> and{" "}
        <code>&lt;p&gt;</code> typically start on a new line and stretch out to
        the full width available. They create a "block" of content. Inline
        elements, such as <code>&lt;span&gt;</code> and <code>&lt;a&gt;</code>,
        only take up as much width as they need and do not break the flow of
        content. They are used within block-level elements and do not start on a
        new line.
      </p>
    </div>
  );
}
