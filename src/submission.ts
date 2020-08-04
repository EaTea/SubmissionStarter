import {getContent} from './section.js';
import {SUBMISSION_FOOTER, SUBMISSION_HEADER, SUBSTITUION_MAP} from './strings.js';

function shuffleFisherYates<T>(array: T[]) {
  let i = array.length;
  while (i--) {
    const ri = Math.floor(Math.random() * (i + 1));
    [array[i], array[ri]] = [array[ri], array[i]];
  }
  return array;
}

function substitute(section: string) {
  const split = section.split(' ');
  const newSplitSection = [];
  for (const word of split) {
    let sub = word;
    for (const entry of SUBSTITUION_MAP) {
      sub = sub.replace(entry[0], getContent(entry[1]));
    }
    newSplitSection.push(sub);
  }
  return newSplitSection.join(' ');
}

export class Submission {
  constructor(private readonly sections: string[]) {
    this.sections = shuffleFisherYates(this.sections);
  }

  toString() {
    const introduction = substitute(SUBMISSION_HEADER);
    const conclusion = substitute(SUBMISSION_FOOTER);
    const body = [...this.sections.map(section => substitute(section))].join('\n\n');
    const submission = `
${introduction}

${body}

${conclusion}`.trim();
    return submission;
  }
}
