import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CbBtvlQf.mjs';
import 'piccolore';
import { $ as $$Base } from '../chunks/Base_CFMBqDb8.mjs';
export { renderers } from '../renderers.mjs';

const $$Publications = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "publications", "description": "publications by Kia Ghods" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>publications</h1> <p class="section-header">*, ^ denotes equal author contribution</p> <div class="pub-item"> <div class="pub-title">Visual serial processing deficits explain divergences in human and VLM reasoning</div> <div class="pub-authors">Nicholas Budny*, Kia Ghods*, Declan Campbell*, Raja Marjieh, Amogh Joshi, Sreejan Kumar, Jonathan D. Cohen^, Taylor W. Webb^, Thomas L. Griffiths^</div> <div class="pub-venue">Under Review, 2025</div> <div class="pub-links"> <a href="https://arxiv.org/abs/2509.25142">[arxiv]</a> </div> </div> <div class="pub-item"> <div class="pub-title">Understanding the Limits of Vision Language Models Through the Lens of the Binding Problem</div> <div class="pub-authors">Declan Campbell, Sunayana Rane, Tyler Giallanza, Nicolo De Sabbata, Kia Ghods, Amogh Joshi, Alexander Ku, Steven M. Frankland, Thomas L. Griffiths^, Jonathan D. Cohen^, Taylor Webb^</div> <div class="pub-venue">NeurIPS, 2024</div> <div class="pub-links"> <a href="https://proceedings.neurips.cc/paper_files/paper/2024/file/cdcc6d47c1627350014a3076112ab824-Paper-Conference.pdf">[paper]</a> <a href="https://arxiv.org/abs/2411.00238">[arxiv]</a> </div> </div> <div class="pub-item"> <div class="pub-title">Validation of a Multi-Strain HIV Within-Host Model with AIDS Clinical Studies</div> <div class="pub-authors">Necibe Tuncer, Kia Ghods, Vivek Sreejithkumar, Adin Garbowit, Mark Zagha, Maia Martcheva</div> <div class="pub-venue">Mathematics, 2024</div> <div class="pub-links"> <a href="https://www.mdpi.com/2227-7390/12/16/2583">[paper]</a> </div> </div> <div class="pub-item"> <div class="pub-title">Modeling the interplay between albumin-globulin metabolism and HIV infection</div> <div class="pub-authors">Vivek Sreejithkumar, Kia Ghods, Tharusha Bandara, Maia Martcheva, Necibe Tuncer</div> <div class="pub-venue">Mathematical Biosciences and Engineering, 2023</div> <div class="pub-links"> <a href="https://www.aimspress.com/article/doi/10.3934/mbe.2023865">[paper]</a> <a href="https://www.youtube.com/watch?v=iCQo-TN3kDI">[video]</a> </div> </div> ` })}`;
}, "/Users/kiaghods/Desktop/Academics/Projects/kiaghods-site/src/pages/publications.astro", void 0);

const $$file = "/Users/kiaghods/Desktop/Academics/Projects/kiaghods-site/src/pages/publications.astro";
const $$url = "/publications";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Publications,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
