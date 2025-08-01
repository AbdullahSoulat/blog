import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CuAn_-OB.mjs';
import 'kleur/colors';
import { $ as $$Base, a as $$Section } from '../chunks/Base_CqsbpIij.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "head": { title: "404", description: "Page not found" } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-center min-h-[70vh] gap-4"> <h1 class="text-4xl text-center">We seemed to have misplaced something</h1> <p class="text-center">The page you are looking for does not exist. It might have been moved or deleted.</p> <a href="/" class="text-blue-500 hover:text-blue-600">Go back to the home page</a> </div> ` })} ` })}`;
}, "/home/sloth/Documents/blog/src/pages/404.astro", void 0);

const $$file = "/home/sloth/Documents/blog/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
