type ValidCSSCustomVariableName = `--${string}`;
export const defaultOptions = {
  neutralColor: "slate",
  accentColor: "blue",
  destructiveColor: "red",
  scaling: "1",
  radius: "1",
  overlayColor: "white",
  withRadixThemes: false,
};

export const getRadixVariableObject = (prefix: ValidCSSCustomVariableName, fromPalette: string) => {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].reduce((scaleObject, scale) => {
    scaleObject[`${prefix}-${scale}`] = `var(--${fromPalette}-${scale})`;
    scaleObject[`${prefix}-a${scale}`] = `var(--${fromPalette}-a${scale})`;
    return scaleObject;
  }, {} as Record<ValidCSSCustomVariableName, string>);
};
