import { VueWrapper, mount } from '@vue/test-utils';
import { ComponentPublicInstance } from 'vue';
import SiteLogo from '../SiteLogo.vue';

describe('SiteLogo.vue', () => {
  let wrapper: VueWrapper<ComponentPublicInstance<typeof SiteLogo>>;
  const someLogo = 'logo.png';

  beforeEach(() => {
    expect.hasAssertions();
    wrapper = mount(SiteLogo, {
      props: {
        logoUrl: someLogo,
      },
    });
  });

  it('should render component with logourl prop', () => {
    expect(wrapper.vm.logoUrl).toEqual(someLogo);
  });

  it('has the expected html structure', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
