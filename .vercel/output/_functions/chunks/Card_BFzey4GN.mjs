import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, d as renderComponent, e as renderTransition, r as renderTemplate } from './astro/server_1lYeUgex.mjs';
import 'kleur/colors';
import { f as formatDate } from './post_CiVlvn4n.mjs';
import './index_MaT6fT73.mjs';
import { $ as $$Image } from './_astro_assets_B-fMIsV-.mjs';
/* empty css                         */

const $$Astro = createAstro("https://astro-tech-blog-ten.vercel.app/");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { post, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(post.url, "href")}${addAttribute(renderTransition($$result, "v5jflahd", "", post.frontmatter.image.src), "data-astro-transition-scope")}> <div class="text-sm border-2 border-neutral-950 flex flex-col text-gray-900 
				dark:bg-stone-800 dark:text-white dark:bg-gray-900 dark:border-neutral-50
				hover:text-blue-600 dark:hover:text-blue-300"> ${renderComponent($$result, "Image", $$Image, { "src": image[post.frontmatter.image.src](), "alt": post.frontmatter.image.alt, "format": "avif", "class": "h-64 object-cover w-full" })} <div class="p-4"> <p class="text-lg font-bold mb-4">${post.frontmatter.title}</p> <div class="flex justify-between"> <p>${formatDate(post.frontmatter.pubDate)}</p> <p class="font-bold">${post.frontmatter.minutesRead}</p> </div> </div> </div> </a>`;
}, "/home/sloth/Documents/blog/src/components/Card.astro", "self");

export { $$Card as $ };
