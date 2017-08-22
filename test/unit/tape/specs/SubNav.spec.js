import { mount } from 'avoriaz';
import SubNav from '../../../../src/components/SubNav.vue';
import test from 'tape';

const sub = mount(SubNav);

test('renders a nav menu with class sub-menu', (assert) => {
  assert.true(sub.hasClass('sub-menu'))
  assert.end();
});

test('passing navItems array as props generates necessary links', (assert) => {
  const navItems = [
    { text: 'Link 1', url: "#1" },
    { text: 'Link 2', url: "#2" },
    { text: 'Link 3', url: "#3" },
  ];
  sub.setProps({navItems});
  const links = sub.find('.sub-menu__link');
  assert.equal(links.length, 3);
  assert.true(links[1].hasAttribute('href', '#2'));
  assert.end();
});