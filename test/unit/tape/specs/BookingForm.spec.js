import { mount } from 'avoriaz';
import BookingForm from '../../../../src/components/BookingForm.vue';
import test from 'tape';

const form = mount(BookingForm);

test('booking-form renders a form with class .form', (assert) => {
  assert.true(form.is('form'));
  assert.true(form.hasClass('form'));
  assert.end();
});

test('booking-form correct form input fields', (assert) => {
  const radios = form.find('.form__label--wrap');
  const needRoom = radios[0];
  const haveRoom = radios[1];
  assert.equal('I need a room Places available', needRoom.text().trim());
  assert.true(needRoom.find('input')[0].hasAttribute('type', 'radio'), 'need a room is a radio button');
  assert.equal('I have a room Places available', haveRoom.text().trim());
  assert.true(haveRoom.find('input')[0].hasAttribute('type', 'radio'), 'have a room is a radio button');

  // this is the right way to go, but will have to wait for this pull request to be merged: https://github.com/eddyerburgh/avoriaz/pull/101/files
  // const nameInput = form.find('input[type="text"][required]')[0];
  // const emailInput = form.find('input[type="email"][required]')[0];
  // assert.true(nameInput.hasAttribute('required', true));
  // assert.true(emailInput.hasAttribute('required', true));

  assert.true(form.find('input[type="text"][required]')[0]);
  assert.true(form.find('input[type="email"][required]')[0]);

  assert.end();

});

test('booking from contains a privacy statement with link to privacy policy', (assert) => {
  const statement = form.find('.privacy-statement')[0];
  assert.equals(`We won't give your email address to anyone else. See our privacy policy for more details`, statement.text().trim(), 'The statement text is present and correct');
  const link = statement.find('.privacy-statement__link')[0];
  assert.true(link.is('a'), 'link is indeed an anchor element');
  assert.true(link.hasAttribute('href', '#'), 'link has the "correct" href');
  assert.equals('privacy policy', link.text(), 'link displays the correct text');
  assert.end();
});

test('booking form has button with text book', (assert) => {
  const button = form.find('button.form__submit')[0];
  assert.true(button.is('button'), 'button is a button element');
  assert.equals('Book', button.text(), 'button has the text Book');
  assert.end();
});
