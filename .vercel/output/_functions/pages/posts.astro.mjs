import { _ as __vite_glob_0_0 } from '../chunks/Growing Up_ClZRdWgB.mjs';
import { _ as __vite_glob_0_1 } from '../chunks/I\'m tired_BZ-r2OGL.mjs';
import { _ as __vite_glob_0_2 } from '../chunks/Judgement_B2SyhnDq.mjs';
import { _ as __vite_glob_0_3 } from '../chunks/My First Blog_ Let\'s play an AAA Game_CxF8fDBR.mjs';
import { _ as __vite_glob_0_4 } from '../chunks/Sonder Effect_DukTLRL2.mjs';
import { _ as __vite_glob_0_5 } from '../chunks/The World Does Disappear When You Close Your Eyes_ytoFWSow.mjs';
import { _ as __vite_glob_0_6 } from '../chunks/Unplugged_DIu8woGX.mjs';
import { _ as __vite_glob_0_7 } from '../chunks/Vemödalen_CaXPkJvP.mjs';
import { _ as __vite_glob_0_8 } from '../chunks/We Are All Broken - Friendships_B1au9lvx.mjs';
import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_1lYeUgex.mjs';
import 'kleur/colors';
import { $ as $$Base, a as $$Section, A as AppConfig } from '../chunks/Base_BRSuc5Ev.mjs';
import { $ as $$Card } from '../chunks/Card_BFzey4GN.mjs';
import { $ as $$Heading } from '../chunks/Heading_CWYK7oy7.mjs';
import { s as sortPostsByDate } from '../chunks/post_CiVlvn4n.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const { title } = AppConfig;
  const { description } = AppConfig;
  const allPosts = Object.values(
    [__vite_glob_0_0,__vite_glob_0_1,__vite_glob_0_2,__vite_glob_0_3,__vite_glob_0_4,__vite_glob_0_5,__vite_glob_0_6,__vite_glob_0_7,__vite_glob_0_8]
  );
  allPosts.sort(sortPostsByDate);
  const images = /* #__PURE__ */ Object.assign({"/src/images/anohana.jpg": () => import('../chunks/anohana_Bb9Xz3BQ.mjs'),"/src/images/black-myth-wukong.jpg": () => import('../chunks/black-myth-wukong_ITqvNXRo.mjs'),"/src/images/hero.png": () => import('../chunks/hero_Dm0dpby0.mjs'),"/src/images/hong-kong-image.jpg": () => import('../chunks/hong-kong-image_BFWOwSPL.mjs'),"/src/images/i'm_tired.png": () => import('../chunks/i\'m_tired_BrFC4Z7s.mjs'),"/src/images/naruto.png": () => import('../chunks/naruto_DagagIeE.mjs'),"/src/images/pakistan-image.jpg": () => import('../chunks/pakistan-image_D2fFm95f.mjs'),"/src/images/random.jpg": () => import('../chunks/random_Cth3RIgL.mjs'),"/src/images/rat_race.jpg": () => import('../chunks/rat_race_Du5WHgn-.mjs'),"/src/images/silent_voice.jpg": () => import('../chunks/silent_voice_DhvwwXVp.mjs'),"/src/images/steinsgate.png": () => import('../chunks/steinsgate_CKeHeCX5.mjs'),"/src/images/vinland-saga.png": () => import('../chunks/vinland-saga_BrQD9v4W.mjs'),"/src/images/world_disappers.jpg": () => import('../chunks/world_disappers_ByC-7DfV.mjs')});
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "head": { title, description } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Heading", $$Heading, { "title": "Posts" })}` })} ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2"> ${allPosts.map((post) => renderTemplate`<div class="mb-4 basis-1 last:mb-0"> ${renderComponent($$result3, "Card", $$Card, { "post": post, "image": images })} </div>`)} </div> ` })} ` })}`;
}, "/home/sloth/Documents/blog/src/pages/posts/index.astro", void 0);

const $$file = "/home/sloth/Documents/blog/src/pages/posts/index.astro";
const $$url = "/posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
