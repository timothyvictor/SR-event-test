import { mount } from 'avoriaz';
import EventDetails from '../../../../src/components/EventDetails.vue';
import test from 'tape';
import data from '../../../../src/data';

const event = data.event;
const details = mount(EventDetails, { propsData: { event } });

test('details contains 4 sections', (assert) => {
  const sections = details.find('section');
  assert.equals(sections.length, 4, 'details contains 4 sections');
  assert.end();
});
