"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// lib/index.ts
var lib_exports = {};
__export(lib_exports, {
  plugin: () => plugin
});
module.exports = __toCommonJS(lib_exports);
var import_plugin = __toESM(require("tailwindcss/plugin"));

// utils/index.ts
var defaultOptions = {
  neutralColor: "slate",
  accentColor: "blue",
  destructiveColor: "red",
  scaling: "1",
  radius: "1",
  overlayColor: "white",
  withRadixThemes: false
};
var getRadixVariableObject = (prefix, fromPalette) => {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].reduce((scaleObject, scale) => {
    scaleObject[`${prefix}-${scale}`] = `var(--${fromPalette}-${scale})`;
    scaleObject[`${prefix}-a${scale}`] = `var(--${fromPalette}-a${scale})`;
    return scaleObject;
  }, {});
};

// lib/plugin.core.ts
var createPluginWithOptions = (options = {}) => {
  return function createPlugin({ addBase, addUtilities }) {
    var _a, _b, _c, _d, _e;
    addBase({
      ":root": {
        ...getRadixVariableObject("--neutral-color", (_a = options.neutralColor) != null ? _a : defaultOptions.neutralColor),
        ...getRadixVariableObject("--accent-color", (_b = options.accentColor) != null ? _b : defaultOptions.accentColor),
        ...getRadixVariableObject("--destructive-color", (_c = options.destructiveColor) != null ? _c : defaultOptions.destructiveColor),
        ...getRadixVariableObject("--overlay-color", "white"),
        "--scaling": (_d = options.scaling) != null ? _d : defaultOptions.scaling,
        "--radius-factor": (_e = options.radius) != null ? _e : defaultOptions.radius
      }
    });
  };
};

// lib/plugin.theme.ts
var import_defaultTheme = require("tailwindcss/defaultTheme");
var import_tailwindcss_animate = __toESM(require("tailwindcss-animate"));
var extendUserTheme = (options = {}) => {
  return {
    darkMode: ["class"],
    content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px"
        }
      },
      extend: {
        colors: {
          border: "var(--border)",
          input: "var(--input)",
          ring: "var(--ring)",
          background: "var(--background)",
          foreground: "var(--foreground)",
          primary: {
            DEFAULT: "var(--primary)",
            foreground: "var(--primary-foreground)"
          },
          secondary: {
            DEFAULT: "var(--secondary)",
            foreground: "var(--secondary-foreground)"
          },
          // destructive: {
          //   DEFAULT: "var(--destructive)",
          //   foreground: "var(--destructive-foreground)",
          // },
          muted: {
            DEFAULT: "var(--muted)",
            foreground: "var(--muted-foreground)"
          },
          accent: {
            DEFAULT: "var(--accent)",
            foreground: "var(--accent-foreground)"
          },
          popover: {
            DEFAULT: "var(--popover)",
            foreground: "var(--popover-foreground)"
          },
          card: {
            DEFAULT: "var(--card)",
            foreground: "var(--card-foreground)"
          }
        },
        borderRadius: {
          "3xl": "var(--radius-6)",
          "2xl": "var(--radius-5)",
          xl: "var(--radius-4)",
          lg: "var(--radius-3)",
          md: "var(--radius-2)",
          sm: "var(--radius-1)"
        },
        fontFamily: {
          sans: ["var(--font-sans)", ...import_defaultTheme.fontFamily.sans]
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" }
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" }
          }
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out"
        }
      }
    },
    plugins: [import_tailwindcss_animate.default]
  };
};

// lib/index.ts
var plugin = import_plugin.default.withOptions(createPluginWithOptions, extendUserTheme);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  plugin
});
