import { mount } from 'avoriaz';
import EventDetail from '../../../../src/components/EventDetail.vue';
import test from 'tape';

const detail = mount(EventDetail, {
  propsData: {
    heading: 'This is the heading',
    text: 'Knees up mother brown',
  },
});

test('event detail renders a section with heading and paragraph', (assert) => {
  assert.true(detail.is('section'), 'event detail is a section');
  assert.true(detail.hasClass('event-detail'), 'event detail has class .event-detail');
  const heading = detail.find('.event-detail__heading')[0];
  assert.true(heading.is('h4'), 'event-detail__heading is an h4');
  assert.equals(heading.text().trim(), 'This is the heading', 'event-detail__heading text is correct');
  const paragraph = detail.find('.event-detail__text')[0];
  assert.true(paragraph.is('p'), '.event-detail__text is a p');
  assert.equals(paragraph.text().trim(), 'Knees up mother brown', 'event-text__heading text is correct');
  assert.end();
});
