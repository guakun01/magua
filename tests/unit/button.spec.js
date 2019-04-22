/* eslint-disable */
import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount } from '@vue/test-utils'
import GuaButton from '@/gua-button.vue'

chai.use(sinonChai)

describe('gua-button.vue', () => {
  it('存在.', () => {
    expect(GuaButton).to.be.exist
  })
  it('可以设置 icon.', () => {
    const wrapper = mount(GuaButton, {
      propsData: {
        icon: 'settings',
      }
    })
    const useElement = wrapper.find('use')
    expect(useElement.attributes()['href']).to.equal('#i-settings')
  })
  it('可以设置 loading.', () => {
    const wrapper = mount(GuaButton, {
      propsData: {
        icon: 'settings',
        loading: true,
      }
    })
    const vm = wrapper.vm
    const useElements = vm.$el.querySelectorAll('use')
    expect(useElements.length).to.eq(1)
    expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading')
  })
  xit('icon 的默认 order 是 1.', () => {
    const wrapper = mount(GuaButton, {
      propsData: {
        icon: 'settings',
      }
    })
    const vm = wrapper.vm
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.equal(1)
  })
  xit('设置 iconPosition 可以改变 order.', () => {
    const wrapper = mount(GuaButton, {
      propsData: {
        icon: 'settings',
        iconPosition: 'right',
      }
    })
    const vm = wrapper.vm
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.equal(2)
  })
  it('设置 type 可以改变 class.', () => {
    const wrapper = mount(GuaButton, {
      propsData: {
        type: 'primary',
      }
    })
    expect(wrapper.classes()).contain('primary')
  })
  it("点击 button 触发 click 事件.", () => {
    const wrapper = mount(GuaButton, {})
    const vm = wrapper.vm

    const callback = sinon.fake()
    vm.$on("click", callback)
    vm.$el.click()
    expect(callback).to.have.been.called
  })
})


