
export function getContent(list: string[]) {
  return list[Math.floor(Math.random() * list.length)];
}

export class Section {
  constructor(private readonly headers: string[], private readonly linkers: string[], private readonly body: string[]) {}

  isLink: boolean = false;

  toString() {
    const prep = this.isLink ? getContent(this.linkers) : getContent(this.headers);

    return `${prep}

${getContent(this.body)}`;
  }
}
