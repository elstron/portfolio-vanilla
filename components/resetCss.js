export const globalResetStyles = new CSSStyleSheet();
globalResetStyles.replaceSync(`
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
`);