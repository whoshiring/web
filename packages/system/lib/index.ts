import pluginFactory from "tailwindcss/plugin";
import { createPluginWithOptions } from "./plugin.core";
import { extendUserTheme } from "./plugin.theme";

const plugin = pluginFactory.withOptions(createPluginWithOptions, extendUserTheme);

export { plugin };
