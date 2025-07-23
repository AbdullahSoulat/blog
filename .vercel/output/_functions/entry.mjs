import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CJrWlKyn.mjs';
import { manifest } from './manifest_CGkWYbaN.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page2 = () => import('./pages/404.astro.mjs');
const _page3 = () => import('./pages/about.astro.mjs');
const _page4 = () => import('./pages/api/comments.astro.mjs');
const _page5 = () => import('./pages/api/contact.astro.mjs');
const _page6 = () => import('./pages/api/test.astro.mjs');
const _page7 = () => import('./pages/imprint.astro.mjs');
const _page8 = () => import('./pages/posts/growing up.astro.mjs');
const _page9 = () => import('./pages/posts/i\'m tired.astro.mjs');
const _page10 = () => import('./pages/posts/judgement.astro.mjs');
const _page11 = () => import('./pages/posts/my first blog: let\'s play an aaa game.astro.mjs');
const _page12 = () => import('./pages/posts/sonder effect.astro.mjs');
const _page13 = () => import('./pages/posts/the world does disappear when you close your eyes.astro.mjs');
const _page14 = () => import('./pages/posts/unplugged.astro.mjs');
const _page15 = () => import('./pages/posts/vemödalen.astro.mjs');
const _page16 = () => import('./pages/posts/we are all broken - friendships.astro.mjs');
const _page17 = () => import('./pages/posts.astro.mjs');
const _page18 = () => import('./pages/rss.xml.astro.mjs');
const _page19 = () => import('./pages/tags/_tag_.astro.mjs');
const _page20 = () => import('./pages/tags.astro.mjs');
const _page21 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/astro/dist/actions/runtime/route.js", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/about.astro", _page3],
    ["src/pages/api/comments.ts", _page4],
    ["src/pages/api/contact.ts", _page5],
    ["src/pages/api/test.ts", _page6],
    ["src/pages/imprint.astro", _page7],
    ["src/pages/posts/Growing Up.md", _page8],
    ["src/pages/posts/I'm tired.md", _page9],
    ["src/pages/posts/Judgement.md", _page10],
    ["src/pages/posts/My First Blog: Let's play an AAA Game.md", _page11],
    ["src/pages/posts/Sonder Effect.md", _page12],
    ["src/pages/posts/The World Does Disappear When You Close Your Eyes.md", _page13],
    ["src/pages/posts/Unplugged.md", _page14],
    ["src/pages/posts/Vemödalen.md", _page15],
    ["src/pages/posts/We Are All Broken - Friendships.md", _page16],
    ["src/pages/posts/index.astro", _page17],
    ["src/pages/rss.xml.js", _page18],
    ["src/pages/tags/[tag].astro", _page19],
    ["src/pages/tags/index.astro", _page20],
    ["src/pages/index.astro", _page21]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_astro-internal_actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d82f0b57-88d8-41d9-ab1f-95bce89876e7",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
