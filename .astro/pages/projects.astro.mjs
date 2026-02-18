import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CbBtvlQf.mjs';
import 'piccolore';
import { $ as $$Base } from '../chunks/Base_CFMBqDb8.mjs';
export { renderers } from '../renderers.mjs';

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "projects", "description": "projects by Kia Ghods" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>projects</h1> <h3>some machine learning</h3> <div class="project-item"> <strong>[Re]FlashAttention</strong> <p>
Triton implementation of FlashAttention1 with Multi-Query Attention (MQA).
</p> <div class="project-links"> <a href="https://github.com/kiaghods/FlashAttentionTriton_NLP">[github]</a> <a href="https://kiaghods.com/assets/pdfs/[Re]FlashAttention.pdf">[paper]</a> <a href="https://kiaghods.com/assets/pdfs/[Re]FlashAttentionPoster.pdf">[poster]</a> </div> </div> <div class="project-item"> <strong>LLM Homogenization in Creative Writing</strong> <p>
Investigated claims of LLM homogenization in creative writing; our work shows that with sufficient initial context, LLM-generated text corpora achieve stylistic and semantic diversity on par with human writers.
</p> <div class="project-links"> <a href="https://kiaghods.com/assets/pdfs/LLMHomogenization.pdf">[paper]</a> </div> </div> <div class="project-item"> <strong>Astralis</strong> <p>
Contributed to an early-stage startup using AI and geospatial data to optimize real estate development and demand forecasting. Built intelligent document ingestion pipelines (RAG) using Python, LLMs, and ML clustering.
</p> <div class="project-links"> <a href="https://github.com/pranav270-create/ingest">[github]</a> <a href="https://www.astralis.sh/">[site]</a> </div> </div> <h3>more kernels and numerics</h3> <div class="project-item"> <strong>[Re]Spectral Methods</strong> <p>
An implementation of "A Fast and Well-Conditioned Spectral Method" (Olver and Townsend, 2013).
</p> <div class="project-links"> <a href="https://github.com/kiaghods/spectral-method">[github]</a> <a href="https://kiaghods.com/assets/pdfs/[Re]SpectralMethod.pdf">[paper]</a> </div> </div> <div class="project-item"> <strong>GPU MODE!</strong> <p>
Wrote some kernels in Triton for <a href="https://www.gpumode.com/v2/home">GPU MODE</a> competitions.
</p> </div> <div class="project-item"> <strong>Butterfly Matrix Kernel</strong> <p>
Optimized implementation of butterfly matrix multiplication using Triton, enabling fast structured transforms for deep learning workloads.
</p> <div class="project-links"> <a href="https://github.com/kiaghods/butterfly_matrix_kernel">[github]</a> </div> </div> <h3>hacks</h3> <div class="project-item"> <strong>Propagation of In-Context Scheming in Multi-Agent Systems</strong> <p>
Designed experiments to measure how corrupted instructions spread through networks of language models. Awarded 2nd place at Anthropic Alignment Hackathon (2025).
</p> </div> <div class="project-item"> <strong>SearchDestroy</strong> <p>
Robust multi-drone search algorithm (DARP + heuristics) for area sweeping, handling drone loss and online path re-computation. Physics simulation & visualization using AirSim. Awarded 2nd place (100+ participants) at AGI House Robotics Hackathon (2024).
</p> <div class="project-links"> <a href="https://github.com/Astoria-ni/drone-hackathon">[github]</a> </div> </div> <h3>bio/chem/neuro</h3> <div class="project-item"> <strong>Development of covalent binders of c-Myc mRNA</strong> <p>
Synthesized covalent binders to target cancer-linked c-Myc RNA and repeated genetic patterns (i.e. r(CAG) expansion). Conducted at the <a href="https://disney.scripps.ufl.edu/">Disney Lab</a> at the <a href="https://wertheim.scripps.ufl.edu/">UF Scripps Research Institute</a> and presented at the <a href="https://mpfi.org/">Max Planck Florida Institute for Neuroscience</a>.
</p> <div class="project-links"> <a href="https://kiaghods.com/assets/pdfs/DisneyLab_Abstract_KG.pdf">[abstract]</a> </div> </div> ` })}`;
}, "/Users/kiaghods/Desktop/Academics/Projects/kiaghods-site/src/pages/projects.astro", void 0);

const $$file = "/Users/kiaghods/Desktop/Academics/Projects/kiaghods-site/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
