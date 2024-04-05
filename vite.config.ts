import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, searchForWorkspaceRoot } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: [
				// Search up for workspace root
				searchForWorkspaceRoot(process.cwd()),

				// My custom rules
				'./tailwind.config.ts',
			],
		},
	},
});
