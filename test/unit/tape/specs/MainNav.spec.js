import { mount } from 'avoriaz';
import MainNav from '../../../../src/components/MainNav.vue';
import test from 'tape';

const nav = mount(MainNav);

test('renders a nav with class main-nav', (assert) => {
  assert.true(nav.hasClass('main-nav'))
  assert.end();
});

test('main-nav contains a main-menu and a sub-menu', (assert) => {
  assert.true(nav.find('.main-menu'));
  assert.true(nav.find('.sub-menu'));
  assert.end();
});

test('main menu contains two main menu links', (assert) => {
  assert.equal(nav.find('.main-menu .main-menu__item .main-menu__link').length, 2);
  assert.end();
});

// test('')