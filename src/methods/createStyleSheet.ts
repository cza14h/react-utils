export const createStyleSheet = (inlineStyle: string) => {
  const style = document.createElement('style');
  style.innerHTML = inlineStyle;
  document.head.appendChild(style);
};
