// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Platform {
			env: Env;
			ctx: ExecutionContext;
			caches: CacheStorage;
			cf?: IncomingRequestCfProperties;
		}

		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
	}
}

// <iconsax-icon> is registered by `import 'iconsax'` in src/hooks.client.ts
declare module 'svelte/elements' {
	export interface SvelteHTMLElements {
		'iconsax-icon': HTMLAttributes<HTMLElement> & {
			name: string;
			type?: 'bold' | 'broken' | 'bulk' | 'linear' | 'outline' | 'twotone';
			size?: number | string;
			color?: string;
			pro?: boolean;
		};
	}
}

export {};
