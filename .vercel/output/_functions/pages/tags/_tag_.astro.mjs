import { _ as __vite_glob_0_0 } from '../../chunks/Growing Up_SWw2PC8U.mjs';
import { _ as __vite_glob_0_1 } from '../../chunks/I\'m tired_9r8BIDfy.mjs';
import { _ as __vite_glob_0_2 } from '../../chunks/Judgement_CfgU3sSq.mjs';
import { _ as __vite_glob_0_3 } from '../../chunks/My First Blog_ Let\'s play an AAA Game_CiVBrEfV.mjs';
import { _ as __vite_glob_0_4 } from '../../chunks/Sonder Effect_BEMsXg7C.mjs';
import { _ as __vite_glob_0_5 } from '../../chunks/The World Does Disappear When You Close Your Eyes_CKk-zbeG.mjs';
import { _ as __vite_glob_0_6 } from '../../chunks/Unplugged_DWbFO_4R.mjs';
import { _ as __vite_glob_0_7 } from '../../chunks/Vemödalen_CMU91VQg.mjs';
import { _ as __vite_glob_0_8 } from '../../chunks/We Are All Broken - Friendships_BWJfdYIU.mjs';
import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CuAn_-OB.mjs';
import 'kleur/colors';
import { $ as $$Base, a as $$Section, A as AppConfig } from '../../chunks/Base_CqsbpIij.mjs';
import { $ as $$Card } from '../../chunks/Card_eos-JQZH.mjs';
import { $ as $$Heading } from '../../chunks/Heading_CKOuLbNr.mjs';
import { s as sortPostsByDate } from '../../chunks/post_DxFaWH7s.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://astro-tech-blog-ten.vercel.app/");
async function getStaticPaths() {
  const allPosts = Object.values(
    [__vite_glob_0_0,__vite_glob_0_1,__vite_glob_0_2,__vite_glob_0_3,__vite_glob_0_4,__vite_glob_0_5,__vite_glob_0_6,__vite_glob_0_7,__vite_glob_0_8]
  );
  const allTags = new Set(
    allPosts.map((post) => post.frontmatter.tags).flat()
  );
  return [...allTags].map((tag) => {
    const filteredPosts = allPosts.filter(
      (post) => post.frontmatter.tags.includes(tag)
    );
    filteredPosts.sort(sortPostsByDate);
    return {
      params: { tag },
      props: {
        posts: filteredPosts
      }
    };
  });
}
const $$tag = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const title = AppConfig.title;
  const description = AppConfig.description;
  const { posts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "head": { title, description } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, { "title": `Posts with #${tag}` })} ${maybeRenderHead()}<div class="pt-2 text-center"> <a href="/tags" class="underline hover:text-orange-600">all tags →</a> </div> ` })} ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate`${posts.filter((post) => post.frontmatter.tags?.includes(tag)).map((post) => renderTemplate`<div class="mb-4 basis-1 last:mb-0"> ${renderComponent($$result3, "Card", $$Card, { "post": post, "image": null })} </div>`)}` })} ` })}`;
}, "/home/sloth/Documents/blog/src/pages/tags/[tag].astro", void 0);

const $$file = "/home/sloth/Documents/blog/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$tag,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
