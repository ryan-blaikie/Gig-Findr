import { shallowMount } from '@vue/test-utils'
import App from '../../Client/src/App.vue'
describe('App', () => {
    // Inspect the raw component options
    it('has data', () => {
      expect(typeof App.data).toBe('function')
    })
  })

  describe('App.vue', () => {
    it('renders props.msg when passed', () => {
      const msg = 'Upcoming Gigs'
      const wrapper = shallowMount(App, {
        propsData: { msg }
      })
      expect(wrapper.text()).toMatch(msg)
    })
  })