export const SUBMISSION_HEADER = `

I'd like to thank the commission for giving me the opportunity to state my case. I am against this project, and I think the right thing to do is to reject Santos' Narrabri Gas Project. I think the case against the project has shown the danger CSG places NSW in, while offering little benefit.
`.trim();

export const SUBMISSION_BODY = [
  `
  We have seen that CSG will likely bring a higher level of fugitive emissions. It will accelerate our path towards climate change and global warming. This project flouts the precautionary principle by not considering these impacts. This was shown in former Chief Scientist Professor Penny Sackett's submission.
  `.trim(),
  `
  There is little economic benefit to NSW. The Department of Planning has said that this project will not decrease gas prices. Experts such as Bruce Robertson and Alistair Davy have already shown to the panel that this project is expensive and subpar compared to the market's interest in investment in renewables, and thus makes no economic sense.`.trim(),
  `
  Extracting gas in northwest NSW will likely increase the risk of fire, as shown by Greg Mullins, the former NSW fire commissioner. It was shown to expose towns to the risk of permanent groundwater pollution or depletion by penetrating the bedrock, and still not bring significant new jobs to the area. If anything, this project will increase rents and cost of living in northwest NSW.`.trim(),
  `
  Our Indigeneous communities are against this project. It puts their ability to practise the traditional culture of that land in danger, without their consent, as was shown by Dolly Talbott and Maria Cutmore.
  `.trim(),
];

export const SUBMISSION_FOOTER = `
In summary, I think there is ample evidence that has shown that this project should not go ahead and is harmful to the future of Narrabri and NSW. Commissioners, please reject this proposal.
`.trim();

export const SUBSTITUION_MAP = new Map<string, string[]>(
  [['thank', ['express my thanks to', 'say thank you to', 'thank']],
  ['opportunity', ['option', 'platform', 'opportunity']],
  ['accelerate', ['accelerate', 'hasten', 'quicken']],
  ['little', ['little', 'paltry', 'diminished']],
  ['danger', ['danger', 'peril', 'jeopardy']],
  ['economic', ['economic', 'financial', 'monetary']],
  ['ample', ['ample', 'sufficient', 'plentiful']],
  ['Indigenous', ['Indigenous', 'First Nations', 'Aboriginal', 'Gomeroi']],
  ['likely', ['likely', 'definitely', 'certainly']],
  ['risk', ['likelihood', 'potential', 'hazard', 'risk']],
  ['decrease', ['decrease', 'lower', 'cheapen']],
  ['think', ['believe', 'think', 'opine']],
  ['against', ['opposed to', 'against', 'in opposition to']],
  ['practise', ['observe', 'practise', 'follow']],
  ['consent', ['consent', 'agreement', 'consideration']],
  ['summary', ['conclusion', 'summary']],
  ['harmful', ['harmful', 'damaging', 'perilous']],
  ['permanent', ['irreversible', 'irrevocable', 'permanent']],
  ['shown', ['evidenced', 'shown', 'outlined']]]
);
