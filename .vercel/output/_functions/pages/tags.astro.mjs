import { _ as __vite_glob_0_0 } from '../chunks/Growing Up_ClZRdWgB.mjs';
import { _ as __vite_glob_0_1 } from '../chunks/I\'m tired_BZ-r2OGL.mjs';
import { _ as __vite_glob_0_2 } from '../chunks/Judgement_B2SyhnDq.mjs';
import { _ as __vite_glob_0_3 } from '../chunks/My First Blog_ Let\'s play an AAA Game_CxF8fDBR.mjs';
import { _ as __vite_glob_0_4 } from '../chunks/Sonder Effect_DukTLRL2.mjs';
import { _ as __vite_glob_0_5 } from '../chunks/The World Does Disappear When You Close Your Eyes_ytoFWSow.mjs';
import { _ as __vite_glob_0_6 } from '../chunks/Unplugged_DIu8woGX.mjs';
import { _ as __vite_glob_0_7 } from '../chunks/Vemödalen_CaXPkJvP.mjs';
import { _ as __vite_glob_0_8 } from '../chunks/We Are All Broken - Friendships_B1au9lvx.mjs';
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_1lYeUgex.mjs';
import 'kleur/colors';
import { $ as $$Heading } from '../chunks/Heading_CWYK7oy7.mjs';
import { $ as $$Base, a as $$Section, A as AppConfig } from '../chunks/Base_BRSuc5Ev.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://astro-tech-blog-ten.vercel.app/");
const $$Tag = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tag;
  const { tag, withHref } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(`mb-2 mr-2 rounded-xl bg-stone-600 px-3 py-1 text-xs font-bold uppercase text-white group-hover:bg-stone-500 ${withHref ? "hover:bg-stone-500" : ""}`, "class")}>
#${tag} </span>`;
}, "/home/sloth/Documents/blog/src/components/Tag.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const { title } = AppConfig;
  const { description } = AppConfig;
  const allPosts = Object.values(
    [__vite_glob_0_0,__vite_glob_0_1,__vite_glob_0_2,__vite_glob_0_3,__vite_glob_0_4,__vite_glob_0_5,__vite_glob_0_6,__vite_glob_0_7,__vite_glob_0_8]
  );
  const allTags = allPosts.map((post) => post.frontmatter.tags).flat();
  const uniqueTags = new Set(allTags);
  let tagMap = {};
  [...uniqueTags].forEach((tag) => {
    const count = allTags.filter((t) => t === tag).length;
    tagMap[tag] = count;
  });
  tagMap = Object.fromEntries(Object.entries(tagMap).sort((a, b) => b[1] - a[1]));
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "head": { title, description } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Heading", $$Heading, { "title": "Posts by Tag" })}` })} ${maybeRenderHead()}<div class="mx-auto grid w-full max-w-screen-md grid-cols-1 gap-x-6 px-4 md:grid-cols-2 md:px-0"> ${Object.entries(tagMap).map(([tag, count]) => renderTemplate`<a class="group row-span-1 flex justify-between py-2 hover:text-orange-600"${addAttribute(`/tags/${tag}`, "href")}> ${renderComponent($$result2, "Tag", $$Tag, { "tag": tag })} <p>${count}</p> </a>`)} </div> ` })}`;
}, "/home/sloth/Documents/blog/src/pages/tags/index.astro", void 0);

const $$file = "/home/sloth/Documents/blog/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
