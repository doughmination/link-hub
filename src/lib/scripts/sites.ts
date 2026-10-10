/* src/lib/scripts/sites.ts
 * Copyright (c) 2026 Clove Nytrix Doughmination Twilight
 * Licensed under the DASL-1.2 Licence.
 * See LICENCE.md in the project root for full licence information.
 */

export type Site = {
	title: string;
	description: string;
	href: string;
	// Any iconsax icon name, e.g. 'home' or 'shield-tick'
	icon: string;
};

// Edit me: add or change your sites here
export const sites: Site[] = [
	{
		title: 'Doughmination Gay',
		description: 'My personal website',
		href: 'https://doughmination.gay',
		icon: 'home'
	},
	{
		title: 'CDN',
		description: 'My random assets and images',
		href: 'https://m.doughmination.gay',
		icon: 'gallery'
	},
	{
		title: 'Doughmination Auth',
		description: 'My auth server for public access',
		href: 'https://auth.doughmination.gay',
		icon: 'shield-tick'
	},
	{
		title: 'Dough Git',
		description: 'My public git backup system',
		href: 'https://backup.doughmination.gay',
		icon: 'save-2'
	},
	{
		title: 'Pastebin',
		description: 'My public dump location',
		href: 'https://pastes.doughmination.gay',
		icon: 'clipboard-text'
	},
	{
		title: 'Doughmination Mail',
		description: 'My private email service',
		href: 'https://mail.doughmination.gay',
		icon: 'sms'
	},
	{
		title: 'Doughmination API',
		description: 'Public API I have made',
		href: 'https://doughmination.uk',
		icon: 'code'
	},
	{
		title: 'Doughmination System',
		description: 'System tracker and headmate management',
		href: 'https://doughmination.co.uk',
		icon: 'profile-2user'
	},
	{
		title: 'PKViewer',
		description: 'Look up public PluralKit systems and their members',
		href: 'https://pkviewer.xyz',
		icon: 'search-normal'
	}
];

export function hostOf(href: string) {
	return new URL(href).host;
}
