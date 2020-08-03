export const OPENINGS = [
  'Thank you for the opportunity to state my opposition to the Narrabri Gas Project.',

  `I'd like to thank the commission for the opportunity to make a submission.`,

  `I'd like to thank the IPC for giving the wider community a voice in the planning process.`,

  `I'm writing to the IPC to state my opposition to the Narrabri Gas Project.`,

  `I am writing this submission to state my opposition to the Narrabri Gas Project.`
];

export const CLOSINGS = [
  `Thank you for considering my submission, and please don't let the Narrabri Gas Project continue.`,

  `Thank you for accepting this submission. I strongly believe the Narrabri Gas Project should not go ahead because it hurts regional New South Wales in the longer term.`,

  `Thank you for considering what I've said in this submission. Please don't destroy Northwest New South Wales.`,

  `Thanks for accepting this submission. Please save Northwest NSW from CSG.`,

  `No CSG in Northwest NSW!`,
];

export const FIRST_NATIONS_HEADER = [
  `I'm opposed to the Narrabri Gas Project because of the injustice it does to our First Nations Peoples.`,

  `I'm opposed to Santos' project because of its injustice to the Gamilaroi people of the Eora nation, where the project is planned.`,

  `The primary reason I don't want this project to go ahead is because of its adverse impact on the sacred sites of the Gamilaroi people, who's connection to the land is not being respected.`
];

export const FIRST_NATIONS_LINK = [
  `I'm also opposed to the Narrabri Gas Project on the grounds of the injustice it does to our First Nations Peoples.`,

  `I'm also opposed to Santos' project because of its injustice to the Gamilaroi people of the Eora nation, where the project is planned.`,

  `Another reason I don't want this project to go ahead is because of its adverse impact on the sacred sites of the Gamilaroi people, who's connection to the land is not being respected.`
];

export const FIRST_NATIONS_BODY = [
  `As shown in [ARTICLE HERE] this region is already the home of many sites that are significant to the Gamilaroi people. Santos has not even considered trying to identify them, even though they are aware that many of them are undiscovered. Instead, in this report [ARTICLE HERE] Santos has shown that they are willing to destroy these sites without consideration as acceptable collateral damage. It is part of a trend of extraction companies to destroy sacred Aboriginal sites without consultation or care, continuing destruction that already occurred in Western Australia (e.g. ARTICLE HERE).`,

  `Santos has not gotten the permission of the local Aboriginal groups that have ties to the area in order to start their planning. Elders such as [Uncle A], [Auntie B], and [Uncle C] have voiced their opposition to the project here. Rather than consulting with our First Nations folks, Santos has deemed it too hard to preserve their sacred sites and has opted to look for the sites only after they've committed to destroying this land as shown here [ARTICLE HERE].`,

  `Only one extraction project has significantly changed extraction plans upon finding Aboriginal sacred sites. Out of [HOW MANY SITES]. Santos already knows there are a significant, unknown number of sites in Northwest New South Wales, and they plan to look for sites after their plan has been approved by the IPC [ARTICLE HERE]. Given the poor track record of extraction companies to save sacred sites, it is highly unlikely that these sites and the local Gamilaroi people's connection to the land will be respected and preserved; rather, it will be treated as collateral damage in order for Santos to continue extraction.`,
];

export const SUBMISSION_HEADER = `

I'd like to thank the commission for giving me the opportunity to state my case. I am opposed to the Narrabri gas project, and I believe the right thing to do is to reject the project. I think the case against the project has shown the harm CSG could bring, while offering little benefit.
`.trim();

export const SUBMISSION_BODY = [
  `
  We have seen that CSG will likely bring a higher level of fugitive submissions. It will accelerate our path towards climate change and global warming. This project flouts the precautionary principle by not considering these impacts.
  `.trim(),
  `
  There is little economic benefit to NSW. The Department of Planning has said that this project will not decrease gas prices. Experts have already testified to the panel that this project is expensive and subpar compared to the market's interest in investment in renewables.`.trim(),
  `
  Extracting gas in northwest NSW will increase the risk of fire, expose towns to the risk of permanent groundwater pollution or depletion by penetrating the bedrock, and still not bring significant new jobs to the area. If anything, this project will increase rents and cost of living in northwest NSW.`.trim(),
  `
  Our Indigeneous communities are against this project. It puts their ability to practice culture in danger, without their consent, as was stated by Dolly Talbott.
  `.trim(),
];

export const SUBMISSION_FOOTER = `
In summary, I think there is ample evidence to show that this project should not go ahead and is harmful to the future of Narrabri and NSW. Commissioners, please reject this proposal.
`.trim();

export const SUBSTITUION_MAP = new Map<string, string[]>(
  [['to thank', ['to express my thanks to', 'to say thank you to', 'to thank']],
  ['opportunity', ['option', 'platform', 'opportunity']],
  ['accelerate', ['accelerate', 'hasten', 'quicken']],
  ['little', ['little', 'paltry', 'diminished']],
  ['danger', ['danger', 'peril', 'jeopardy']],
  ['economic', ['economic', 'financial', 'monetary']],
  ['ample', ['ample', 'sufficient', 'plentiful']],
  ['Indigenous', ['Indigenous', 'First Nations', 'Aboriginal', 'Gomeroi']],
  ['likely', ['likely', 'probably', 'certainly']],
  ['risk', ['likelihood', 'potential', 'hazard', 'risk']],
  ['decrease', ['decrease', 'lower', 'cheapen']],
  ['think', ['believe', 'think', 'opine']],
  ['against this project', ['opposed to this project', 'against this project', 'in opposition to this project']],
  ['practice culture', ['continue traditions', 'practice culture']],
  ['consent', ['consent', 'agreement', 'consideration']],
  ['summary', ['conclusion', 'summary']],
  ['harmful', ['harmful', 'damaging', 'perilous']],
  ['permanent', ['irreversible', 'irrevocable', 'permanent']]]
);
