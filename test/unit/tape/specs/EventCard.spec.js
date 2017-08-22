import { mount } from 'avoriaz';
import EventCard from '../../../../src/components/EventCard.vue';
import test from 'tape';
import data from '../../../../src/data';

const event = data.event
const card = mount(EventCard, {propsData:{event}});

test('event-card renders an article with class .event-header', (assert) => {
  assert.true(card.is('article'));
  assert.true(card.hasClass('event-card'));
  assert.end();
});

test('event-card has a header with title and event date and time details', (assert) => {
  const header = card.find('.event-card__header')[0];
  assert.true(header.is('header'));

  const title = header.find('.event-card__title')[0];
  assert.true(title.is('h1'));
  assert.equals(title.text(), event.location.name);

  const date = header.find('.event-card__date')[0];
  assert.equals(date.text(), 'Tuesday, June 27');
  
  const time = header.find('.event-card__time')[0];
  assert.equals(time.text(), '7:00 PM - 9:00 PM');
  assert.end();
});

test('event-card renders a link to the venue\'s map and directions', (assert) => {
  const link = card.find('.event-card__map-link')[0];
  assert.true(link.is('a'));
  assert.equals(link.text(), `Venue's map and directions`);
  assert.end();
});