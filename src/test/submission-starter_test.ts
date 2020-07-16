import {fixture, html} from '@open-wc/testing';
import {SubmissionStarter} from '../submission-starter.js';

const assert = chai.assert;

suite('submission-starter', () => {
  test('is defined', () => {
    const el = document.createElement('submission-starter');
    assert.instanceOf(el, SubmissionStarter);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<submission-starter></submission-starter>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<submission-starter name="Test"></submission-starter>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('handles a click', async () => {
    const el = (await fixture(html`<submission-starter></submission-starter>`)) as SubmissionStarter;
    const button = el.shadowRoot!.querySelector('button')!;
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `
    );
  });
});
