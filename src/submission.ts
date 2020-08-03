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

export class Submission {
  constructor(private readonly sections: string[]) {
    this.sections = shuffleFisherYates(this.sections);
  }

  toString() {
    const introduction = SUBMISSION_HEADER, conclusion = SUBMISSION_FOOTER;
    const body = this.sections.join(' ');
    const map = SUBSTITUION_MAP;
    let submission = `
${introduction}

${body}

${conclusion}`.trim();
    for (const entry of map) {
      submission = submission.replace(entry[0], getContent(entry[1]));
    }
    return submission;
  }
}
