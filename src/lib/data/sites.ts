/* linkhub-beta/src/lib/data/sites.ts
 * Copyright (c) 2026 Clove Nytrix Doughmination Twilight
 * Licensed under the DASL-1.0 Licence.
 * See LICENCE.md in the project root for full licence information.
 */

import {
	ClipboardPaste,
	FileCode,
	Globe,
	House,
	Mail,
	Save,
	Search,
	Shield,
	User,
	type LucideIcon
} from '@lucide/svelte';

export type Site = {
	title: string;
	description: string;
	href: string;
	icon: LucideIcon;
};

// Edit me: add or change your sites here. Icons come from @lucide/svelte
export const sites: Site[] = [
	{
		title: 'Doughmination Gay',
		description: 'My personal website',
		href: 'https://doughmination.gay',
		icon: House
	},
	{
		title: 'CDN',
		description: 'My random assets and images',
		href: 'https://m.doughmination.gay',
		icon: Globe
	},
	{
		title: 'Doughmination Auth',
		description: 'My auth server for public access',
		href: 'https://auth.doughmination.gay',
		icon: Shield
	},
	{
		title: 'Dough Git',
		description: 'My public git backup system',
		href: 'https://backup.doughmination.gay',
		icon: Save
	},
	{
		title: 'Pastebin',
		description: 'My public dump location',
		href: 'https://pastes.doughmination.gay',
		icon: ClipboardPaste
	},
	{
		title: 'Doughmination Mail',
		description: 'My private email service',
		href: 'https://mail.doughmination.gay',
		icon: Mail
	},
	{
		title: 'Doughmination API',
		description: 'Public API I have made',
		href: 'https://doughmination.uk',
		icon: FileCode
	},
	{
		title: 'Doughmination System',
		description: 'System tracker and headmate management',
		href: 'https://doughmination.co.uk',
		icon: User
	},
	{
		title: 'PKViewer',
		description: 'Lookup public PluralKit systems and their members, with full customization!',
		href: 'https://pkviewer.xyz',
		icon: Search
	}
];

export function hostOf(href: string) {
	return new URL(href).host;
}

export function siteForHost(host: string) {
	return sites.find((site) => hostOf(site.href) === host) ?? null;
}
