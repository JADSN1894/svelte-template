import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '$root/tailwind.config.ts';

export const TAILWIND_CONFIG = resolveConfig(tailwindConfig);