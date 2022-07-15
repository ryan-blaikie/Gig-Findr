import { shallowMount } from '@vue/test-utils'
import App from '../../Client/src/App.vue'

describe('App', () => {
    // Inspect the raw component options
    it('has data', () => {
      expect(typeof App.data).toBe('function')
    })
  })

  describe('Mounted App', () => {
    const wrapper = shallowMount(App);
  
    test('does a wrapper exist', () => {
      expect(wrapper.exists()).toBe(true)
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