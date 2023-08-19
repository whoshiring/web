import * as tailwindcss from 'tailwindcss';
import * as tailwindcss_types_config from 'tailwindcss/types/config';

declare const plugin: {
    (options: {} | undefined): {
        handler: tailwindcss_types_config.PluginCreator;
        config?: Partial<tailwindcss.Config> | undefined;
    };
    __isOptionsFunction: true;
};

export { plugin };
