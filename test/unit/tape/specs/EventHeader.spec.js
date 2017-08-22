import { mount } from 'avoriaz';
import EventHeader from '../../../../src/components/EventHeader.vue';
import test from 'tape';
import data from '../../../../src/data';

const event = data.event
const header = mount(EventHeader, {propsData:{event}});

test('renders a header with class .event-header', (assert) => {
  assert.true(header.is('header'));
  assert.true(header.hasClass('event-header'));
  assert.end();
});

test('renders an h1 with correct text as direct child of header', (assert) => {
  const title = header.find('.event-header>h1.event-header__title')[0];
  assert.true(title);
  assert.equals(title.text(), `SpeedRoomMating ${event.location.address.city} @ ${event.location.name}`);
  assert.end();
});

test('header contains a div with class .splash that wraps the event card component', (assert) => {
  const splash = header.find('.splash');
  assert.equals(splash.length, 1);
  assert.true(splash[0].is('div'));
  assert.true(splash[0].find('.event-card')[0], '.splash wraps .event-card');
  assert.end();
});