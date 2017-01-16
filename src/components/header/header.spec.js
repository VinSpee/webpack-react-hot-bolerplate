import {
  MemoryRouter,
} from 'react-router';
import { Header } from './';

describe('Header Component', () => {
  it('Should render', () => {
    const actual = shallow(<Header />);
    expect(actual.length).toEqual(1);
    expect(actual).toMatchSnapshot();
  });
  describe('Authentication', () => {
    const actual = shallow(
      <Header />,
    );
    it('should be logged out by default', () => {
      const expected = false || undefined;
      expect(actual.prop('authenticated')).toEqual(expected);
    });
    it('should take an authentication prop', () => {
      actual.setProps({ authenticated: true });
      const expected = true;
      expect(actual.instance().props.authenticated).toEqual(expected);
    });
  });
  describe('Menu Items', () => {
    const actual = mount(
      <MemoryRouter initialEntries={[window.location.pathname]}>
        <Header authenticated />
      </MemoryRouter>,
    );
    describe('Home Link', () => {
      const link = actual.find('Link').first();
      it('Should be a link with a \'home\' label', () => {
        const expected = 'Home';
        expect(link.text()).toEqual(expected);
      });
      it('Should link to the path `/`', () => {
        const expected = '/';
        expect(link.prop('to')).toEqual(expected);
      });
    });
    describe('Dashboard Link', () => {
      const link = actual.find('Link').last();
      it('Should be a link with a \'dashboard\' label', () => {
        const expected = 'Dashboard';
        expect(link.text()).toEqual(expected);
      });
      it('Should link to the path `/dashboard`', () => {
        const expected = '/dashboard';
        expect(link.prop('to')).toEqual(expected);
      });
    });
  });
});
