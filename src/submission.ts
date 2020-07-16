import {getContent, Section} from './section.js';
import {CLOSINGS, OPENINGS} from './strings.js';

function shuffleFisherYates<T>(array: T[]) {
  let i = array.length;
  while (i--) {
    const ri = Math.floor(Math.random() * (i + 1));
    [array[i], array[ri]] = [array[ri], array[i]];
  }
  return array;
}

export class Submission {
  constructor(private readonly sections: Section[]) {
    this.sections = shuffleFisherYates(this.sections);
  }

  toString() {
    const introduction = getContent(OPENINGS), conclusion = getContent(CLOSINGS);
    let body = '';
    this.sections.forEach((section, index) => {
      section.isLink = !!index;
      body += section;
      if (index !== this.sections.length - 1) body += '\n';
    });
    return `${introduction}

${body}

${conclusion}`;
  }
}
