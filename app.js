const themes = [
  { id: "culture", area: "Accelerate Born in Culture Impact", label: "Born in Culture Impact", tone: "red" },
  { id: "relationships", area: "Moving from Order Takers to Order Makers", label: "Order Makers", tone: "black" },
  { id: "ai", area: "Future Proofing Ourselves with AI", label: "AI Advantage", tone: "rose" },
  { id: "craft", area: "Delivering Core Excellence Enablers", label: "Core Excellence", tone: "gray" }
];

const goalOptions = [
  {
    "role": "Copywriter",
    "category": "culture",
    "title": "Culture-led ideas",
    "specific": "Develop copy and concepts that are more informed by culture, audience behaviour and platform context.",
    "measurable": "Measured through stronger creative reviews, clearer strategic relevance and improved manager feedback.",
    "achievable": "Achieved by researching trends, communities, brand tone and audience conversations before writing.",
    "relevant": "Helps create work that feels sharper, more human and more culturally useful.",
    "timeous": "Review progress by the end of 2026 through selected writing and campaign examples."
  },
  {
    "role": "Copywriter",
    "category": "culture",
    "title": "Stronger writing craft",
    "specific": "Improve the quality of my writing across headlines, scripts, social copy, decks and campaign ideas.",
    "measurable": "Measured by fewer copy reverts, stronger feedback and more polished final work.",
    "achievable": "Achieved by allowing time for editing, proofreading and sharper word choices.",
    "relevant": "Raises the standard of creative writing across the studio.",
    "timeous": "Track improvement across projects during 2026."
  },
  {
    "role": "Copywriter",
    "category": "culture",
    "title": "Platform-native writing",
    "specific": "Write copy that feels native to the platforms, formats and audiences it is made for.",
    "measurable": "Measured by stronger feedback on tone, format fit and social-first thinking.",
    "achievable": "Achieved by studying platform language, creator behaviour and current content formats.",
    "relevant": "Helps clients show up in ways that feel relevant, not forced.",
    "timeous": "Apply this consistently across social and digital work in 2026."
  },
  {
    "role": "Copywriter",
    "category": "culture",
    "title": "Better brand voice understanding",
    "specific": "Build a stronger understanding of the brands, markets and tone of voice I work with.",
    "measurable": "Measured by fewer tone reverts, stronger first drafts and more confident creative decisions.",
    "achievable": "Achieved by reviewing brand guides, previous campaigns, client feedback and audience context.",
    "relevant": "Helps me write with more confidence, consistency and strategic value.",
    "timeous": "Build this knowledge across my key accounts during 2026."
  },
  {
    "role": "Copywriter",
    "category": "culture",
    "title": "Proactive idea contribution",
    "specific": "Bring more proactive copy-led ideas, campaign lines and content concepts to the team.",
    "measurable": "Measured by the number of ideas shared, developed or presented.",
    "achievable": "Achieved by setting aside time to think beyond immediate copy tasks.",
    "relevant": "Supports a more ambitious and opportunity-driven creative culture.",
    "timeous": "Present clear proactive thinking across at least two projects by the end of 2026."
  },
  {
    "role": "Copywriter",
    "category": "relationships",
    "title": "Clearer creative point of view",
    "specific": "Build confidence in sharing a clear point of view on messaging, ideas and creative direction.",
    "measurable": "Measured by stronger participation in reviews, brainstorms and client discussions.",
    "achievable": "Achieved by preparing thoughts before meetings and backing opinions with reasoning.",
    "relevant": "Helps move from writing to shaping the work.",
    "timeous": "Show consistent improvement throughout 2026."
  },
  {
    "role": "Copywriter",
    "category": "relationships",
    "title": "Better brief interrogation",
    "specific": "Ask sharper questions about audience, message, objective and tone before writing begins.",
    "measurable": "Measured by clearer direction, fewer rewrites and stronger first-round copy.",
    "achievable": "Achieved by reviewing briefs carefully and identifying gaps early.",
    "relevant": "Helps solve the right communication problem.",
    "timeous": "Apply this to all major briefs during 2026."
  },
  {
    "role": "Copywriter",
    "category": "relationships",
    "title": "Stronger creative partnerships",
    "specific": "Build stronger working relationships with art directors, designers, motion designers and account teams.",
    "measurable": "Measured through peer feedback, smoother workflows and stronger integrated ideas.",
    "achievable": "Achieved by involving partners early and staying open to visual and strategic input.",
    "relevant": "Helps create ideas that work as a whole, not just as words.",
    "timeous": "Review progress through feedback by the end of 2026."
  },
  {
    "role": "Copywriter",
    "category": "relationships",
    "title": "More confident presenting",
    "specific": "Improve how I present copy, scripts and ideas so the thinking lands clearly.",
    "measurable": "Measured by manager feedback, clearer presentations and stronger buy-in.",
    "achievable": "Achieved by preparing the story behind the work, not just reading the work.",
    "relevant": "Helps clients and teams understand the value of the idea.",
    "timeous": "Practice across key presentations in 2026."
  },
  {
    "role": "Copywriter",
    "category": "relationships",
    "title": "Earlier problem-solving",
    "specific": "Flag message, tone, timing or content issues earlier in the process.",
    "measurable": "Measured by fewer last-minute rewrites and smoother delivery.",
    "achievable": "Achieved by tracking work closely and speaking up before issues become urgent.",
    "relevant": "Builds trust and improves the quality of output.",
    "timeous": "Apply this behaviour consistently throughout 2026."
  },
  {
    "role": "Copywriter",
    "category": "ai",
    "title": "Practical AI usage",
    "specific": "Use AI to support research, idea generation, copy exploration and editing.",
    "measurable": "Measured by examples where AI improved speed, range or clarity of writing.",
    "achievable": "Achieved by testing approved tools on live briefs.",
    "relevant": "Helps me work faster without lowering writing craft.",
    "timeous": "Build a small record of AI-assisted writing by the end of 2026."
  },
  {
    "role": "Copywriter",
    "category": "ai",
    "title": "AI for first-round thinking",
    "specific": "Use AI to explore territories, references, audience insights and rough copy routes.",
    "measurable": "Measured by stronger starting points and more varied options in reviews.",
    "achievable": "Achieved by using AI during early thinking, not only final copy polishing.",
    "relevant": "Helps create better creative foundations.",
    "timeous": "Apply this to selected briefs throughout 2026."
  },
  {
    "role": "Copywriter",
    "category": "ai",
    "title": "AI for efficiency",
    "specific": "Use AI to reduce time spent on repetitive writing and summarising tasks.",
    "measurable": "Measured by time saved on drafts, summaries, tone shifts, clean-ups and variations.",
    "achievable": "Achieved by identifying repeat tasks and testing approved AI workflows.",
    "relevant": "Creates more time for thinking, craft and refinement.",
    "timeous": "Show clear examples of improved efficiency by the end of 2026."
  },
  {
    "role": "Copywriter",
    "category": "ai",
    "title": "AI craft improvement",
    "specific": "Use AI as a writing partner to sharpen structure, tone, grammar and clarity.",
    "measurable": "Measured by cleaner drafts, stronger logic and fewer basic copy issues.",
    "achievable": "Achieved by reviewing and rewriting AI outputs with my own judgment.",
    "relevant": "Supports better writing while keeping the work human-led.",
    "timeous": "Demonstrate improved AI-assisted craft across 2026 projects."
  },
  {
    "role": "Copywriter",
    "category": "ai",
    "title": "AI knowledge sharing",
    "specific": "Share useful AI prompts, writing workflows or examples with the team.",
    "measurable": "Measured by at least one shared example, demo or simple guide.",
    "achievable": "Achieved by documenting what worked and where it added value.",
    "relevant": "Helps grow the team\u2019s collective AI confidence.",
    "timeous": "Share learnings before the end of 2026."
  },
  {
    "role": "Copywriter",
    "category": "craft",
    "title": "Build a writing specialism",
    "specific": "Identify and grow one writing strength, such as scripts, social copy, headlines, long-form or presentation storytelling.",
    "measurable": "Measured by stronger work examples and being asked for input in that area.",
    "achievable": "Achieved through focused practice, references and feedback.",
    "relevant": "Helps me become more valuable to my team and clients.",
    "timeous": "Show clear progress by the end of 2026."
  },
  {
    "role": "Copywriter",
    "category": "craft",
    "title": "Better copy delivery discipline",
    "specific": "Improve how I prepare, proof, organise and hand over copy.",
    "measurable": "Measured by fewer errors, cleaner documents and smoother team handovers.",
    "achievable": "Achieved through stronger QA, version control and clearer labelling.",
    "relevant": "Supports professional delivery and reduces unnecessary rework.",
    "timeous": "Apply consistently across all projects in 2026."
  },
  {
    "role": "Copywriter",
    "category": "craft",
    "title": "Stronger ownership",
    "specific": "Take more ownership of copy and messaging from brief to final delivery.",
    "measurable": "Measured by reliability, fewer missed details and positive feedback.",
    "achievable": "Achieved by tracking next steps and following work through properly.",
    "relevant": "Builds trust and improves the final creative product.",
    "timeous": "Demonstrate stronger ownership across 2026 work."
  },
  {
    "role": "Copywriter",
    "category": "craft",
    "title": "Improve creative judgement",
    "specific": "Strengthen my ability to judge what makes copy clearer, sharper and more effective.",
    "measurable": "Measured by stronger choices, fewer unnecessary routes and better review feedback.",
    "achievable": "Achieved by studying good work and learning from critique.",
    "relevant": "Helps me make better creative decisions.",
    "timeous": "Track growth through manager feedback during 2026."
  },
  {
    "role": "Copywriter",
    "category": "craft",
    "title": "Share writing expertise",
    "specific": "Share useful writing tips, references or feedback with teammates.",
    "measurable": "Measured by informal coaching, shared examples or feedback sessions.",
    "achievable": "Achieved by turning what I learn into practical examples others can use.",
    "relevant": "Helps raise the standard of writing across the team.",
    "timeous": "Share at least one useful learning or resource by the end of 2026."
  },
  {
    "role": "Art Director",
    "category": "culture",
    "title": "Culture-led visual ideas",
    "specific": "Develop visual ideas that are more informed by culture, audience behaviour and platform context.",
    "measurable": "Measured through stronger creative reviews, clearer visual relevance and manager feedback.",
    "achievable": "Achieved by researching visual trends, communities, brands and cultural references before concepting.",
    "relevant": "Helps create work that feels distinctive, current and culturally useful.",
    "timeous": "Review progress by the end of 2026 through selected visual work examples."
  },
  {
    "role": "Art Director",
    "category": "culture",
    "title": "Stronger art direction craft",
    "specific": "Improve the quality of my art direction across concepts, layouts, references, decks and executions.",
    "measurable": "Measured by fewer visual reverts, stronger feedback and more polished final work.",
    "achievable": "Achieved by allowing time for refinement, visual consistency and QA.",
    "relevant": "Raises the standard of visual thinking across the studio.",
    "timeous": "Track improvement across projects during 2026."
  },
  {
    "role": "Art Director",
    "category": "culture",
    "title": "Platform-native art direction",
    "specific": "Create visual work that feels native to the platforms and formats it is designed for.",
    "measurable": "Measured by stronger feedback on format fit, social-first thinking and visual relevance.",
    "achievable": "Achieved by studying platform aesthetics, creator formats and user behaviour.",
    "relevant": "Helps clients show up in ways that feel modern and natural.",
    "timeous": "Apply this consistently across social and digital work in 2026."
  },
  {
    "role": "Art Director",
    "category": "culture",
    "title": "Better brand world understanding",
    "specific": "Build a stronger understanding of the visual worlds, brand systems and markets I work with.",
    "measurable": "Measured by fewer design reverts, stronger first-round visuals and more confident choices.",
    "achievable": "Achieved by reviewing brand guides, previous work, photography, motion systems and client feedback.",
    "relevant": "Helps me protect and evolve the brand visually.",
    "timeous": "Build this knowledge across my key accounts during 2026."
  },
  {
    "role": "Art Director",
    "category": "culture",
    "title": "Proactive visual contribution",
    "specific": "Bring more proactive visual ideas, campaign routes and executional options to the team.",
    "measurable": "Measured by the number of ideas shared, developed or presented.",
    "achievable": "Achieved by setting aside time to think beyond immediate layout or execution tasks.",
    "relevant": "Supports a more ambitious and opportunity-driven creative culture.",
    "timeous": "Present clear proactive thinking across at least two projects by the end of 2026."
  },
  {
    "role": "Art Director",
    "category": "relationships",
    "title": "Clearer visual point of view",
    "specific": "Build confidence in sharing a clear point of view on visual direction, ideas and execution.",
    "measurable": "Measured by stronger participation in reviews, brainstorms and client discussions.",
    "achievable": "Achieved by preparing visual reasoning before meetings.",
    "relevant": "Helps move from executing visuals to shaping the work.",
    "timeous": "Show consistent improvement throughout 2026."
  },
  {
    "role": "Art Director",
    "category": "relationships",
    "title": "Better brief interrogation",
    "specific": "Ask sharper questions about audience, visual role, format, brand system and production needs.",
    "measurable": "Measured by clearer direction, fewer reverts and stronger first-round visuals.",
    "achievable": "Achieved by reviewing briefs carefully and identifying gaps early.",
    "relevant": "Helps solve the right visual and communication problem.",
    "timeous": "Apply this to all major briefs during 2026."
  },
  {
    "role": "Art Director",
    "category": "relationships",
    "title": "Stronger creative partnerships",
    "specific": "Build stronger working relationships with copywriters, designers, motion designers and account teams.",
    "measurable": "Measured through peer feedback, smoother workflows and stronger integrated ideas.",
    "achievable": "Achieved by involving partners early and staying open to copy, design and motion input.",
    "relevant": "Helps ideas work as complete creative systems.",
    "timeous": "Review progress through feedback by the end of 2026."
  },
  {
    "role": "Art Director",
    "category": "relationships",
    "title": "More confident presenting",
    "specific": "Improve how I present visual ideas, references and art direction.",
    "measurable": "Measured by manager feedback, clearer presentations and stronger buy-in.",
    "achievable": "Achieved by explaining the thinking behind visual choices, not just showing references.",
    "relevant": "Helps teams and clients understand the value of the creative direction.",
    "timeous": "Practice across key presentations in 2026."
  },
  {
    "role": "Art Director",
    "category": "relationships",
    "title": "Earlier problem-solving",
    "specific": "Flag visual, production, timing or executional issues earlier in the process.",
    "measurable": "Measured by fewer last-minute visual changes and smoother delivery.",
    "achievable": "Achieved by tracking work closely and speaking up before issues become urgent.",
    "relevant": "Builds trust and protects the quality of the work.",
    "timeous": "Apply this behaviour consistently throughout 2026."
  },
  {
    "role": "Art Director",
    "category": "ai",
    "title": "Practical AI usage",
    "specific": "Use AI to support visual research, moodboards, concept exploration and executional options.",
    "measurable": "Measured by examples where AI improved speed, range or visual quality.",
    "achievable": "Achieved by testing approved tools on live briefs.",
    "relevant": "Helps me work faster without lowering art direction standards.",
    "timeous": "Build a small record of AI-assisted visual work by the end of 2026."
  },
  {
    "role": "Art Director",
    "category": "ai",
    "title": "AI for first-round thinking",
    "specific": "Use AI to explore visual territories, references, styles and creative routes.",
    "measurable": "Measured by stronger starting points and more varied options in reviews.",
    "achievable": "Achieved by using AI during early visual thinking, not only final execution.",
    "relevant": "Helps create better creative foundations.",
    "timeous": "Apply this to selected briefs throughout 2026."
  },
  {
    "role": "Art Director",
    "category": "ai",
    "title": "AI for efficiency",
    "specific": "Use AI to reduce time spent on repetitive visual tasks and rough exploration.",
    "measurable": "Measured by time saved on moodboards, mock-ups, resizing, clean-ups and visual options.",
    "achievable": "Achieved by identifying repeat tasks and testing approved AI workflows.",
    "relevant": "Creates more time for craft, judgment and refinement.",
    "timeous": "Show clear examples of improved efficiency by the end of 2026."
  },
  {
    "role": "Art Director",
    "category": "ai",
    "title": "AI craft improvement",
    "specific": "Use AI as a visual exploration tool while keeping art direction human-led.",
    "measurable": "Measured by stronger visual routes, better references and cleaner executional options.",
    "achievable": "Achieved by refining AI outputs for brand fit, cultural relevance and craft.",
    "relevant": "Supports better visual work without replacing creative judgment.",
    "timeous": "Demonstrate improved AI-assisted craft across 2026 projects."
  },
  {
    "role": "Art Director",
    "category": "ai",
    "title": "AI knowledge sharing",
    "specific": "Share useful AI visual workflows, prompts or examples with the team.",
    "measurable": "Measured by at least one shared example, demo or guide.",
    "achievable": "Achieved by documenting what worked and where it added value.",
    "relevant": "Helps grow the team\u2019s collective AI confidence.",
    "timeous": "Share learnings before the end of 2026."
  },
  {
    "role": "Art Director",
    "category": "craft",
    "title": "Build an art direction specialism",
    "specific": "Identify and grow one visual strength, such as social art direction, campaign systems, shoots, decks or visual storytelling.",
    "measurable": "Measured by stronger work examples and being asked for input in that area.",
    "achievable": "Achieved through focused practice, references and feedback.",
    "relevant": "Helps me become more valuable to my team and clients.",
    "timeous": "Show clear progress by the end of 2026."
  },
  {
    "role": "Art Director",
    "category": "craft",
    "title": "Better visual delivery discipline",
    "specific": "Improve how I prepare, organise and hand over visual work.",
    "measurable": "Measured by cleaner files, clearer references and smoother team handovers.",
    "achievable": "Achieved through better naming, versioning, asset management and QA.",
    "relevant": "Supports professional delivery and reduces unnecessary rework.",
    "timeous": "Apply consistently across all projects in 2026."
  },
  {
    "role": "Art Director",
    "category": "craft",
    "title": "Stronger ownership",
    "specific": "Take more ownership of visual direction from brief to final delivery.",
    "measurable": "Measured by reliability, fewer missed details and positive feedback.",
    "achievable": "Achieved by tracking next steps and following work through properly.",
    "relevant": "Builds trust and improves the final creative product.",
    "timeous": "Demonstrate stronger ownership across 2026 work."
  },
  {
    "role": "Art Director",
    "category": "craft",
    "title": "Improve creative judgement",
    "specific": "Strengthen my ability to judge what makes visual work clearer, sharper and more effective.",
    "measurable": "Measured by stronger choices, fewer unnecessary routes and better review feedback.",
    "achievable": "Achieved by studying strong work and learning from critique.",
    "relevant": "Helps me make better creative and visual decisions.",
    "timeous": "Track growth through manager feedback during 2026."
  },
  {
    "role": "Art Director",
    "category": "craft",
    "title": "Share visual expertise",
    "specific": "Share useful references, visual thinking, art direction tips or feedback with teammates.",
    "measurable": "Measured by informal coaching, shared examples or feedback sessions.",
    "achievable": "Achieved by turning what I learn into practical examples others can use.",
    "relevant": "Helps raise the visual standard of the team.",
    "timeous": "Share at least one useful learning or resource by the end of 2026."
  },
  {
    "role": "Designer",
    "category": "culture",
    "title": "Culture-led design",
    "specific": "Develop design work that is more informed by culture, audience behaviour and platform context.",
    "measurable": "Measured through stronger creative reviews, clearer design relevance and improved feedback.",
    "achievable": "Achieved by researching visual trends, formats, brands and audience behaviour before designing.",
    "relevant": "Helps create design that feels modern, useful and culturally aware.",
    "timeous": "Review progress by the end of 2026 through selected design examples."
  },
  {
    "role": "Designer",
    "category": "culture",
    "title": "Stronger design craft",
    "specific": "Improve the quality of my design craft across layout, typography, hierarchy, composition and finishing.",
    "measurable": "Measured by fewer design reverts, stronger feedback and more polished final outputs.",
    "achievable": "Achieved by allowing time for refinement, QA and craft checks.",
    "relevant": "Raises the design standard of the studio\u2019s work.",
    "timeous": "Track improvement across projects during 2026."
  },
  {
    "role": "Designer",
    "category": "culture",
    "title": "Platform-native design",
    "specific": "Design assets that feel native to the platforms and formats they are made for.",
    "measurable": "Measured by stronger feedback on format fit, legibility and social-first execution.",
    "achievable": "Achieved by studying platform specs, behaviours, formats and design conventions.",
    "relevant": "Helps brands show up clearly and effectively across channels.",
    "timeous": "Apply this consistently across social and digital work in 2026."
  },
  {
    "role": "Designer",
    "category": "culture",
    "title": "Better brand system understanding",
    "specific": "Build a stronger understanding of the brand systems, templates and design rules I work with.",
    "measurable": "Measured by fewer brand reverts, cleaner first rounds and stronger consistency.",
    "achievable": "Achieved by reviewing guidelines, toolkits, previous work and client feedback.",
    "relevant": "Helps me protect brand consistency while improving execution.",
    "timeous": "Build this knowledge across my key accounts during 2026."
  },
  {
    "role": "Designer",
    "category": "culture",
    "title": "Proactive design contribution",
    "specific": "Bring more proactive design ideas, layout improvements and visual options to the team.",
    "measurable": "Measured by the number of useful suggestions shared, developed or applied.",
    "achievable": "Achieved by looking for ways to improve the work beyond the basic ask.",
    "relevant": "Supports a stronger design culture and better final output.",
    "timeous": "Present clear proactive design thinking across at least two projects by the end of 2026."
  },
  {
    "role": "Designer",
    "category": "relationships",
    "title": "Clearer design point of view",
    "specific": "Build confidence in sharing a clear point of view on design choices and execution.",
    "measurable": "Measured by stronger participation in reviews and clearer design rationale.",
    "achievable": "Achieved by preparing reasons for layout, type, image and format decisions.",
    "relevant": "Helps move from making assets to shaping better work.",
    "timeous": "Show consistent improvement throughout 2026."
  },
  {
    "role": "Designer",
    "category": "relationships",
    "title": "Better brief interrogation",
    "specific": "Ask sharper questions about formats, specs, hierarchy, audience, brand rules and delivery needs.",
    "measurable": "Measured by fewer reverts, clearer direction and smoother production.",
    "achievable": "Achieved by reviewing briefs carefully and identifying missing information early.",
    "relevant": "Helps solve the right design and production problem.",
    "timeous": "Apply this to all major briefs during 2026."
  },
  {
    "role": "Designer",
    "category": "relationships",
    "title": "Stronger collaboration",
    "specific": "Build stronger working relationships with copywriters, art directors, motion designers and PMs.",
    "measurable": "Measured through peer feedback, smoother workflows and better shared ownership.",
    "achievable": "Achieved by communicating clearly and involving the right people early.",
    "relevant": "Supports better work and fewer production issues.",
    "timeous": "Review progress through feedback by the end of 2026."
  },
  {
    "role": "Designer",
    "category": "relationships",
    "title": "More confident presenting",
    "specific": "Improve how I explain design decisions and layout choices.",
    "measurable": "Measured by manager feedback, clearer presentations and stronger buy-in.",
    "achievable": "Achieved by preparing simple rationale for design choices.",
    "relevant": "Helps teams and clients understand the value of good design.",
    "timeous": "Practice across key presentations in 2026."
  },
  {
    "role": "Designer",
    "category": "relationships",
    "title": "Earlier problem-solving",
    "specific": "Flag design, format, timing or asset issues earlier in the process.",
    "measurable": "Measured by fewer last-minute fixes and smoother delivery.",
    "achievable": "Achieved by checking specs, assets and timelines early.",
    "relevant": "Builds trust and protects the quality of final work.",
    "timeous": "Apply this behaviour consistently throughout 2026."
  },
  {
    "role": "Designer",
    "category": "ai",
    "title": "Practical AI usage",
    "specific": "Use AI to support design research, layout exploration, asset generation and visual options.",
    "measurable": "Measured by examples where AI improved speed, range or design quality.",
    "achievable": "Achieved by testing approved tools on live briefs.",
    "relevant": "Helps me work faster without lowering design standards.",
    "timeous": "Build a small record of AI-assisted design work by the end of 2026."
  },
  {
    "role": "Designer",
    "category": "ai",
    "title": "AI for first-round thinking",
    "specific": "Use AI to explore design territories, references, styles and layout routes.",
    "measurable": "Measured by stronger starting points and more varied options in reviews.",
    "achievable": "Achieved by using AI during early design exploration.",
    "relevant": "Helps create better creative foundations.",
    "timeous": "Apply this to selected briefs throughout 2026."
  },
  {
    "role": "Designer",
    "category": "ai",
    "title": "AI for efficiency",
    "specific": "Use AI to reduce time spent on repetitive design and production tasks.",
    "measurable": "Measured by time saved on resizing, clean-ups, image improvements, variations and layout options.",
    "achievable": "Achieved by identifying repeat tasks and testing approved AI workflows.",
    "relevant": "Creates more time for craft and quality control.",
    "timeous": "Show clear examples of improved efficiency by the end of 2026."
  },
  {
    "role": "Designer",
    "category": "ai",
    "title": "AI craft improvement",
    "specific": "Use AI as a design support tool while keeping final design judgment human-led.",
    "measurable": "Measured by stronger visual options, cleaner assets and better executional quality.",
    "achievable": "Achieved by refining AI outputs for brand fit, legibility and craft.",
    "relevant": "Supports better design without replacing design thinking.",
    "timeous": "Demonstrate improved AI-assisted craft across 2026 projects."
  },
  {
    "role": "Designer",
    "category": "ai",
    "title": "AI knowledge sharing",
    "specific": "Share useful AI design workflows, tools or examples with the team.",
    "measurable": "Measured by at least one shared example, demo or simple guide.",
    "achievable": "Achieved by documenting what worked and where it added value.",
    "relevant": "Helps grow the team\u2019s collective AI confidence.",
    "timeous": "Share learnings before the end of 2026."
  },
  {
    "role": "Designer",
    "category": "craft",
    "title": "Build a design specialism",
    "specific": "Identify and grow one design strength, such as typography, social templates, deck design, layout systems or image craft.",
    "measurable": "Measured by stronger work examples and being asked for input in that area.",
    "achievable": "Achieved through focused practice, references and feedback.",
    "relevant": "Helps me become more valuable to my team and clients.",
    "timeous": "Show clear progress by the end of 2026."
  },
  {
    "role": "Designer",
    "category": "craft",
    "title": "Better file and delivery discipline",
    "specific": "Improve how I prepare, package, organise and hand over design files.",
    "measurable": "Measured by cleaner files, fewer production issues and smoother handovers.",
    "achievable": "Achieved through better naming, versioning, exports, links and QA.",
    "relevant": "Supports efficient delivery and reduces unnecessary rework.",
    "timeous": "Apply consistently across all projects in 2026."
  },
  {
    "role": "Designer",
    "category": "craft",
    "title": "Stronger ownership",
    "specific": "Take more ownership of design delivery from brief to final assets.",
    "measurable": "Measured by reliability, fewer missed details and positive feedback.",
    "achievable": "Achieved by tracking next steps, checking specs and following work through properly.",
    "relevant": "Builds trust and improves the final creative product.",
    "timeous": "Demonstrate stronger ownership across 2026 work."
  },
  {
    "role": "Designer",
    "category": "craft",
    "title": "Improve design judgement",
    "specific": "Strengthen my ability to judge what makes design clearer, sharper and more effective.",
    "measurable": "Measured by stronger choices, fewer unnecessary routes and better review feedback.",
    "achievable": "Achieved by studying good design and learning from critique.",
    "relevant": "Helps me make better design decisions.",
    "timeous": "Track growth through manager feedback during 2026."
  },
  {
    "role": "Designer",
    "category": "craft",
    "title": "Share design expertise",
    "specific": "Share useful design tips, references, templates or feedback with teammates.",
    "measurable": "Measured by informal coaching, shared resources or feedback sessions.",
    "achievable": "Achieved by turning what I learn into practical examples others can use.",
    "relevant": "Helps raise the design standard of the team.",
    "timeous": "Share at least one useful learning or resource by the end of 2026."
  },
  {
    "role": "Motion Designer",
    "category": "culture",
    "title": "Culture-led motion ideas",
    "specific": "Develop motion work that is more informed by culture, platform behaviour and audience expectations.",
    "measurable": "Measured through stronger creative reviews, clearer motion relevance and improved feedback.",
    "achievable": "Achieved by researching motion trends, social formats, creator styles and brand behaviour.",
    "relevant": "Helps create motion work that feels current, engaging and culturally aware.",
    "timeous": "Review progress by the end of 2026 through selected motion examples."
  },
  {
    "role": "Motion Designer",
    "category": "culture",
    "title": "Stronger motion craft",
    "specific": "Improve the quality of my motion craft across pacing, transitions, typography, animation and finishing.",
    "measurable": "Measured by fewer reverts, stronger feedback and more polished final outputs.",
    "achievable": "Achieved by allowing time for refinement, QA and technical checks.",
    "relevant": "Raises the standard of motion work across the studio.",
    "timeous": "Track improvement across projects during 2026."
  },
  {
    "role": "Motion Designer",
    "category": "culture",
    "title": "Platform-native motion",
    "specific": "Create motion assets that feel native to the platforms and formats they are made for.",
    "measurable": "Measured by stronger feedback on pacing, format fit, legibility and social-first execution.",
    "achievable": "Achieved by studying platform specs, trends, user behaviour and content formats.",
    "relevant": "Helps brands show up clearly and effectively in motion.",
    "timeous": "Apply this consistently across social and digital work in 2026."
  },
  {
    "role": "Motion Designer",
    "category": "culture",
    "title": "Better brand motion understanding",
    "specific": "Build a stronger understanding of the motion systems, design rules and brand worlds I work with.",
    "measurable": "Measured by fewer brand reverts, stronger first rounds and more consistent motion output.",
    "achievable": "Achieved by reviewing brand guides, previous animations, templates and client feedback.",
    "relevant": "Helps me protect and evolve brands through motion.",
    "timeous": "Build this knowledge across my key accounts during 2026."
  },
  {
    "role": "Motion Designer",
    "category": "culture",
    "title": "Proactive motion contribution",
    "specific": "Bring more proactive motion ideas, animation improvements and executional options to the team.",
    "measurable": "Measured by the number of ideas shared, developed or applied.",
    "achievable": "Achieved by looking for ways motion can improve the work beyond the basic ask.",
    "relevant": "Supports a stronger, more inventive motion culture.",
    "timeous": "Present clear proactive motion thinking across at least two projects by the end of 2026."
  },
  {
    "role": "Motion Designer",
    "category": "relationships",
    "title": "Clearer motion point of view",
    "specific": "Build confidence in sharing a clear point of view on animation, pacing and motion direction.",
    "measurable": "Measured by stronger participation in reviews and clearer motion rationale.",
    "achievable": "Achieved by preparing reasons for timing, movement, sequence and format decisions.",
    "relevant": "Helps move from executing assets to shaping the work.",
    "timeous": "Show consistent improvement throughout 2026."
  },
  {
    "role": "Motion Designer",
    "category": "relationships",
    "title": "Better brief interrogation",
    "specific": "Ask sharper questions about timing, formats, assets, specs, usage and delivery needs.",
    "measurable": "Measured by fewer reverts, clearer direction and smoother production.",
    "achievable": "Achieved by reviewing briefs carefully and identifying missing information early.",
    "relevant": "Helps solve the right motion and production problem.",
    "timeous": "Apply this to all major briefs during 2026."
  },
  {
    "role": "Motion Designer",
    "category": "relationships",
    "title": "Stronger collaboration",
    "specific": "Build stronger working relationships with copywriters, art directors, designers, editors and PMs.",
    "measurable": "Measured through peer feedback, smoother workflows and better shared ownership.",
    "achievable": "Achieved by involving partners early and communicating production needs clearly.",
    "relevant": "Supports better work and fewer executional issues.",
    "timeous": "Review progress through feedback by the end of 2026."
  },
  {
    "role": "Motion Designer",
    "category": "relationships",
    "title": "More confident presenting",
    "specific": "Improve how I explain motion choices, animation routes and production recommendations.",
    "measurable": "Measured by manager feedback, clearer presentations and stronger buy-in.",
    "achievable": "Achieved by preparing simple rationale for pacing, movement and format decisions.",
    "relevant": "Helps teams and clients understand the value of motion craft.",
    "timeous": "Practice across key presentations in 2026."
  },
  {
    "role": "Motion Designer",
    "category": "relationships",
    "title": "Earlier problem-solving",
    "specific": "Flag motion, timing, asset, render or production issues earlier in the process.",
    "measurable": "Measured by fewer last-minute fixes, cleaner exports and smoother delivery.",
    "achievable": "Achieved by checking assets, specs and timings early.",
    "relevant": "Builds trust and protects the quality of final work.",
    "timeous": "Apply this behaviour consistently throughout 2026."
  },
  {
    "role": "Motion Designer",
    "category": "ai",
    "title": "Practical AI usage",
    "specific": "Use AI to support motion research, animation exploration, asset creation and production support.",
    "measurable": "Measured by examples where AI improved speed, range or motion quality.",
    "achievable": "Achieved by testing approved tools on live briefs.",
    "relevant": "Helps me work faster without lowering motion craft standards.",
    "timeous": "Build a small record of AI-assisted motion work by the end of 2026."
  },
  {
    "role": "Motion Designer",
    "category": "ai",
    "title": "AI for first-round thinking",
    "specific": "Use AI to explore motion references, visual treatments, storyboards and animation routes.",
    "measurable": "Measured by stronger starting points and more varied options in reviews.",
    "achievable": "Achieved by using AI during early motion exploration.",
    "relevant": "Helps create better creative and production foundations.",
    "timeous": "Apply this to selected briefs throughout 2026."
  },
  {
    "role": "Motion Designer",
    "category": "ai",
    "title": "AI for efficiency",
    "specific": "Use AI to reduce time spent on repetitive motion and production tasks.",
    "measurable": "Measured by time saved on clean-ups, resizes, rough tests, asset prep, subtitles or variations.",
    "achievable": "Achieved by identifying repeat tasks and testing approved AI workflows.",
    "relevant": "Creates more time for animation craft and finishing.",
    "timeous": "Show clear examples of improved efficiency by the end of 2026."
  },
  {
    "role": "Motion Designer",
    "category": "ai",
    "title": "AI craft improvement",
    "specific": "Use AI as a motion support tool while keeping timing, pacing and creative judgment human-led.",
    "measurable": "Measured by stronger motion tests, cleaner assets and better executional options.",
    "achievable": "Achieved by refining AI outputs for brand fit, platform fit and craft.",
    "relevant": "Supports better motion work without replacing creative judgment.",
    "timeous": "Demonstrate improved AI-assisted craft across 2026 projects."
  },
  {
    "role": "Motion Designer",
    "category": "ai",
    "title": "AI knowledge sharing",
    "specific": "Share useful AI motion workflows, tools or examples with the team.",
    "measurable": "Measured by at least one shared example, demo or simple guide.",
    "achievable": "Achieved by documenting what worked and where it added value.",
    "relevant": "Helps grow the team\u2019s collective AI confidence.",
    "timeous": "Share learnings before the end of 2026."
  },
  {
    "role": "Motion Designer",
    "category": "craft",
    "title": "Build a motion specialism",
    "specific": "Identify and grow one motion strength, such as kinetic type, editing rhythm, social animation, transitions, 3D or compositing.",
    "measurable": "Measured by stronger work examples and being asked for input in that area.",
    "achievable": "Achieved through focused practice, references and feedback.",
    "relevant": "Helps me become more valuable to my team and clients.",
    "timeous": "Show clear progress by the end of 2026."
  },
  {
    "role": "Motion Designer",
    "category": "craft",
    "title": "Better file and delivery discipline",
    "specific": "Improve how I prepare, organise, export and hand over motion files.",
    "measurable": "Measured by cleaner project files, fewer export issues and smoother handovers.",
    "achievable": "Achieved through better naming, versioning, folder structures, exports and QA.",
    "relevant": "Supports efficient delivery and reduces unnecessary rework.",
    "timeous": "Apply consistently across all projects in 2026."
  },
  {
    "role": "Motion Designer",
    "category": "craft",
    "title": "Stronger ownership",
    "specific": "Take more ownership of motion delivery from brief to final export.",
    "measurable": "Measured by reliability, fewer missed details and positive feedback.",
    "achievable": "Achieved by tracking next steps, checking specs and following work through properly.",
    "relevant": "Builds trust and improves the final creative product.",
    "timeous": "Demonstrate stronger ownership across 2026 work."
  },
  {
    "role": "Motion Designer",
    "category": "craft",
    "title": "Improve motion judgement",
    "specific": "Strengthen my ability to judge what makes motion clearer, sharper and more effective.",
    "measurable": "Measured by stronger pacing choices, fewer unnecessary effects and better review feedback.",
    "achievable": "Achieved by studying strong motion work and learning from critique.",
    "relevant": "Helps me make better animation and production decisions.",
    "timeous": "Track growth through manager feedback during 2026."
  },
  {
    "role": "Motion Designer",
    "category": "craft",
    "title": "Share motion expertise",
    "specific": "Share useful motion tips, references, templates or workflows with teammates.",
    "measurable": "Measured by informal coaching, shared resources or feedback sessions.",
    "achievable": "Achieved by turning what I learn into practical examples others can use.",
    "relevant": "Helps raise the motion standard of the team.",
    "timeous": "Share at least one useful learning or resource by the end of 2026."
  }
];

const state = {
  plan: [],
  activeTheme: "culture"
};

const byId = (id) => document.getElementById(id);

function setStatus(message) {
  const status = byId("goalStatus");
  if (!status) return;
  status.textContent = message;
}

function currentRole() {
  return byId("role")?.value || "Copywriter";
}

function smartToPlainText(goal) {
  return `Specific: ${goal.specific}
Measurable: ${goal.measurable}
Achievable: ${goal.achievable}
Relevant: ${goal.relevant}
Timeous: ${goal.timeous}`;
}

function smartListHtml(goal) {
  return `
    <dl class="smart-goal">
      <div><dt>Specific</dt><dd>${goal.specific}</dd></div>
      <div><dt>Measurable</dt><dd>${goal.measurable}</dd></div>
      <div><dt>Achievable</dt><dd>${goal.achievable}</dd></div>
      <div><dt>Relevant</dt><dd>${goal.relevant}</dd></div>
      <div><dt>Timeous</dt><dd>${goal.timeous}</dd></div>
    </dl>
  `;
}

function goalCard(goal, index) {
  const theme = themes.find((item) => item.id === goal.category);
  const card = document.createElement("article");
  card.className = "goal-card";
  card.dataset.tone = theme.tone;

  card.innerHTML = `
    <p class="meta">${theme.label} | ${goal.role}</p>
    <h3>${goal.title}</h3>
    ${smartListHtml(goal)}
  `;

  const button = document.createElement("button");
  button.className = "button secondary";
  button.type = "button";
  button.dataset.goalIndex = String(index);
  button.textContent = "Use this goal";

  card.appendChild(button);
  return card;
}

function renderGoals() {
  const wrap = byId("recommendationCards");
  const role = currentRole();
  wrap.innerHTML = "";
  goalOptions
    .map((goal, index) => ({ goal, index }))
    .filter((item) => item.goal.category === state.activeTheme && item.goal.role === role)
    .forEach((item) => wrap.appendChild(goalCard(item.goal, item.index)));
}

function useGoal(goalIndex) {
  const goal = goalOptions[goalIndex];
  if (!goal) return;
  byId("goalArea").value = goal.category;
  byId("specificText").value = goal.specific;
  byId("measurableText").value = goal.measurable;
  byId("achievableText").value = goal.achievable;
  byId("relevantText").value = goal.relevant;
  byId("timeousText").value = goal.timeous;
  setStatus("Goal loaded. Review the SMART fields, then add it to your plan.");
  byId("plan").scrollIntoView({ behavior: "smooth" });
}

function renderGoalAreaOptions() {
  const select = byId("goalArea");
  select.innerHTML = themes.map((theme) => `<option value="${theme.id}">${theme.area}</option>`).join("");
}

function renderPlan() {
  const list = byId("planList");
  byId("goalCount").textContent = `${state.plan.length} goal${state.plan.length === 1 ? "" : "s"} added`;

  if (!state.plan.length) {
    list.innerHTML = '<p class="empty-state">Add SMART goals from the goal browser or write your own draft.</p>';
    return;
  }

  list.innerHTML = "";
  state.plan.forEach((goal, index) => {
    const item = document.createElement("article");
    item.className = "plan-item";
    item.innerHTML = `
      <header>
        <div>
          <p class="meta">${goal.area}</p>
          <h3>Goal ${index + 1}</h3>
        </div>
        <button class="remove" type="button" aria-label="Remove goal ${index + 1}">x</button>
      </header>
      ${smartListHtml(goal)}
    `;
    item.querySelector(".remove").addEventListener("click", () => {
      state.plan.splice(index, 1);
      setStatus("Goal removed from your plan.");
      renderPlan();
    });
    list.appendChild(item);
  });
}

function addGoal() {
  const area = themes.find((item) => item.id === byId("goalArea").value);
  const goal = {
    area: area.area,
    category: area.id,
    specific: byId("specificText").value.trim(),
    measurable: byId("measurableText").value.trim(),
    achievable: byId("achievableText").value.trim(),
    relevant: byId("relevantText").value.trim(),
    timeous: byId("timeousText").value.trim()
  };

  if (!goal.specific || !goal.measurable || !goal.achievable || !goal.relevant || !goal.timeous) {
    setStatus("Complete all five SMART fields before adding this goal.");
    return;
  }

  state.plan.push(goal);
  byId("specificText").value = "";
  byId("measurableText").value = "";
  byId("achievableText").value = "";
  byId("relevantText").value = "";
  byId("timeousText").value = "";
  renderPlan();
  setStatus("Goal added to your 2026 plan.");
}

function planText() {
  if (!state.plan.length) return "";
  return state.plan
    .map((goal, index) => `Goal ${index + 1}: ${goal.area}\n${smartToPlainText(goal)}`)
    .join("\n\n");
}

function copyPlan() {
  const text = planText();
  if (!text) {
    setStatus("Add at least one goal before copying your plan.");
    return;
  }
  navigator.clipboard?.writeText(text);
  setStatus("Plan copied.");
}

function setTheme(button) {
  state.activeTheme = button.dataset.theme;
  document.querySelectorAll(".theme-filter").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  renderGoals();
}

function updateRocketTilt() {
  const rocket = document.querySelector(".rocket-visual");
  const section = byId("recommendations");
  if (!rocket || !section) return;

  const rect = section.getBoundingClientRect();
  const viewport = window.innerHeight || 1;
  const progress = Math.min(1, Math.max(0, (viewport - rect.top) / (viewport + rect.height)));
  const tilt = -9 + progress * 18;
  const lift = -10 + progress * 20;

  rocket.style.setProperty("--rocket-tilt", `${tilt.toFixed(2)}deg`);
  rocket.style.setProperty("--rocket-lift", `${lift.toFixed(2)}px`);
}

document.addEventListener("DOMContentLoaded", () => {
  renderGoalAreaOptions();
  renderGoals();
  renderPlan();
  updateRocketTilt();

  byId("role").addEventListener("change", renderGoals);
  byId("recommendationCards").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-goal-index]");
    if (!button) return;
    document.querySelectorAll(".goal-card.is-selected").forEach((card) => card.classList.remove("is-selected"));
    button.closest(".goal-card")?.classList.add("is-selected");
    useGoal(Number(button.dataset.goalIndex));
  });
  byId("addGoal").addEventListener("click", addGoal);
  byId("copyPlan").addEventListener("click", copyPlan);
  byId("printPlan").addEventListener("click", () => window.print());
  window.addEventListener("scroll", updateRocketTilt, { passive: true });
  window.addEventListener("resize", updateRocketTilt);

  document.querySelectorAll(".theme-filter").forEach((button) => {
    button.addEventListener("click", () => setTheme(button));
  });
});
