declare module "astro:actions" {
	type Actions = typeof import("/home/sloth/Documents/blog/src/actions/index.ts")["server"];

	export const actions: Actions;
}