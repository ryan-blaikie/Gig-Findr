import { shallowMount } from '@vue/test-utils'
import Title from '../../Client/src/components/Title.vue'


describe('Title.vue Test', () => {
  it('renders message when component is created', () => {
    // render the component
    const wrapper = shallowMount(Title, {
      propsData: {
        title: ''
      }
    })

    // check the name of the component
    expect(wrapper.vm.$options.name).toMatch('Title')

    // check that the title is rendered
    expect(wrapper.text()).toMatch('')
  })
})