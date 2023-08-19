import { defaultOptions, getRadixVariableObject } from "../utils";

const createPluginWithOptions = (options = {}) => {
  return function createPlugin({ addBase, addUtilities }) {
    //   do plugin stuff
    addBase({
      ":root": {
        ...getRadixVariableObject("--neutral-color", options.neutralColor ?? defaultOptions.neutralColor),
        ...getRadixVariableObject("--accent-color", options.accentColor ?? defaultOptions.accentColor),
        ...getRadixVariableObject("--destructive-color", options.destructiveColor ?? defaultOptions.destructiveColor),
        ...getRadixVariableObject("--overlay-color", "white"),
        "--scaling": options.scaling ?? defaultOptions.scaling,
        "--radius-factor": options.radius ?? defaultOptions.radius,
      },
    });
  };
};

export { createPluginWithOptions };
