import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CbBtvlQf.mjs';
import 'piccolore';
import { $ as $$Base } from '../chunks/Base_CFMBqDb8.mjs';
import { g as getCollection } from '../chunks/_astro_content_Bfu9kHDx.mjs';
export { renderers } from '../renderers.mjs';

const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "blog", "description": "the studio - reflections and learnings" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>the studio</h1> <p style="color: var(--fg-dim); font-size: 0.85rem; margin-bottom: 1.5rem;">my reflections and learnings</p> ${posts.length === 0 ? renderTemplate`<p style="color: var(--fg-dim);">no posts yet.</p>` : posts.map((post) => renderTemplate`<div class="post-item"> <div> <a${addAttribute(`/blog/${post.id}`, "href")} class="post-title">${post.data.title}</a> ${post.data.description && renderTemplate`<div class="post-desc">${post.data.description}</div>`} </div> <span class="post-date"> ${new Date(post.data.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </span> </div>`)}` })}`;
}, "/Users/kiaghods/Desktop/Academics/Projects/kiaghods-site/src/pages/blog.astro", void 0);

const $$file = "/Users/kiaghods/Desktop/Academics/Projects/kiaghods-site/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
