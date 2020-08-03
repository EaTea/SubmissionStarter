import * as jsPDF from 'jspdf';
import {css, customElement, html, LitElement} from 'lit-element';
import {Section} from './section';
import {FIRST_NATIONS_BODY, FIRST_NATIONS_HEADER, FIRST_NATIONS_LINK} from './strings';
import {Submission} from './submission';

@customElement('submission-starter')
export class SubmissionStarter extends LitElement {
  getAsPdf() {
    const doc = new jsPDF();
    const text = doc.splitTextToSize(
      (this.shadowRoot!.querySelector('#your-submission')! as HTMLTextAreaElement).value!,
      180);
    doc.text(10, 20, text);
    doc.save('submission.pdf');
  }

  static styles = css`
    :host {
      display: block;
      font-family: "Open Sans",sans-serif;
      height: 100%;
      width: 100%;
    }

    h1, h2 {
      padding: 0;
    }

    #main-container {
      display: grid;
      grid-template: auto 1fr auto / auto 1fr auto;
    }

    #left-gap, #right-gap {
      width: 50px;
    }

    #left-gap {
      grid-column: 1 / 2;
    }

    #right-gap {
      grid-column: 3 / 3;
    }

    header {
      padding: 1rem;
      grid-column: 1 / 4;
    }

    main {
      grid-column: 2 / 3;
      display: grid;
      place-items: center;
    }

    footer {
      grid-column: 1 / 4;
      padding: 1rem;
    }

    #your-submission {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      white-space: pre-wrap;
      max-width: 80%;
      width: 60%;
      height: 300px;
      max-height: 1000px;
    }

    #next-steps {
      white-space: pre-wrap;
    }

    button {
      margin-top: 5px;
    }
  `;

  render() {
    return html`
    <div id="main-container">
      <header>
      <h1>Stop the Narrabri Gas Project.</h1>
      <h2>Don't let nature fade into the past.</h2>
  </header>
  <div id="left-gap"></div>
  <div id="right-gap"></div>
  <main>
      <textarea id="your-submission">${new Submission([
      new Section(FIRST_NATIONS_HEADER, FIRST_NATIONS_LINK, FIRST_NATIONS_BODY)
    ])}
      </textarea>
      <button @click=${this.getAsPdf}>To PDF</button>
    </main>
    <footer>
        <div id="next-steps">
        What you should do:
          <ol>
            <li>Visit <a href="https://www.ipcn.nsw.gov.au/have-your-say?project=4f5799b9-781a-453a-ab46-62f2ca2a83f3">the IPC's submission page</a>.</li>
            <li>Fill in the form, leaving as much or as little detail as you'd like. If you can leave more that's great, but it's not necessary if you don't want to.</li>
            <li>Attach the PDF you created at the beginning to your submission.</li>
            <li>Select "Oppose" as the reason of your submission.</li>
            <li>Submit your letter.</li>
          </ol>
        </div>
        </footer>
    </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'submission-starter': SubmissionStarter;
  }
}
