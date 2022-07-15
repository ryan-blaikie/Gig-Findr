import { shallowMount } from '@vue/test-utils'
import Inputs from '../../Client/src/components/Inputs.vue'

describe('Mounted App', () => {
    const wrapper = shallowMount(Inputs);
  
    test('does a wrapper exist', () => {
      expect(wrapper.exists()).toBe(true)
    })
  })