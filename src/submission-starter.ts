/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import {css, customElement, html, LitElement} from 'lit-element';
import {Section} from './section';
import {FIRST_NATIONS_BODY, FIRST_NATIONS_HEADER, FIRST_NATIONS_LINK} from './strings';
import {Submission} from './submission';

@customElement('submission-starter')
export class SubmissionStarter extends LitElement {
  static styles = css`
    :host {
      display: block;
      height: 100%;
      width: 100%;
    }

    #your-submission {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      margin-left: auto;
      margin-right: auto;
      max-width: 800px;
      text-align: center;
      white-space: pre-wrap;
    }

    #next-steps {
      white-space: pre-wrap;
    }
  `;

  render() {
    return html`
    <h1>Stop the Narrabri Gas Project.</h1>
    <h2>Don't let nature fade into the past.</h2>
    <div id="your-submission">${new Submission([
      new Section(FIRST_NATIONS_HEADER, FIRST_NATIONS_LINK, FIRST_NATIONS_BODY)
    ])}
    </div>
    <div id="next-steps">
    What you should do:
      <ol>
        <li>Copy the submission text above into a <a href="https://docs.google.com/new">Google doc</a>, and save that doc as a PDF.</li>
        <li>Visit <a href="https://www.ipcn.nsw.gov.au/have-your-say?project=4f5799b9-781a-453a-ab46-62f2ca2a83f3">the IPC's submission page</a>.</li>
        <li>Fill in the form, leaving as much or as little detail as you'd like. If you can leave more that's great, but it's not necessary if you don't want to.</li>
        <li>Attach the PDF you created at the beginning to your submission.</li>
        <li>Select "Oppose" as the reason of your submission.</li>
        <li>Submit your letter.</li>
      </ol>
    </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'submission-starter': SubmissionStarter;
  }
}
