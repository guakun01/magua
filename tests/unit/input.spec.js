/* eslint-disable */
import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount } from '@vue/test-utils'
import GInput from '@/input.vue'

chai.use(sinonChai)

describe('g-input.vue', () => {
  it('存在.', () => {
    expect(GInput).to.be.exist
  })
  describe('props', () => {
    it('可以接受 value', () => {
      const wrapper = mount(GInput, {
        propsData: {
          value: 'gua1234',
        }
      })
      const inputElement = wrapper.vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('gua1234')
    })
    it('可以接受 disabled', () => {
      const wrapper = mount(GInput, {
        propsData: {
          disabled: true,
        }
      })
      const inputElement = wrapper.vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
    })
    it('可以接受 readonly', () => {
      const wrapper = mount(GInput, {
        propsData: {
          readonly: true,
        }
      })
      const inputElement = wrapper.vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
    })
    it('可以接受 error', () => {
      const wrapper = mount(GInput, {
        propsData: {
          error: '你错了',
        }
      })
      const useElement = wrapper.vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
      const errorMessage = wrapper.vm.$el.querySelector('.errorMessage')
      expect(errorMessage.innerText).to.equal('你错了')
    })
  })
  describe('event', () => {
    it('支持 change 事件', () => {
      const vm = mount(GInput, {}).vm
      const callback = sinon.fake()
      vm.$on('change', callback)
      let inputElement = vm.$el.querySelector('input')
      let event = new Event('change')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith(event)
    })
    it('支持 input 事件', () => {
      const vm = mount(GInput, {}).vm
      const callback = sinon.fake()
      vm.$on('input', callback)
      let inputElement = vm.$el.querySelector('input')
      let event = new Event('input')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith(event)
    })
    it('支持 focus 事件', () => {
      const vm = mount(GInput, {}).vm
      const callback = sinon.fake()
      vm.$on('focus', callback)
      let inputElement = vm.$el.querySelector('input')
      let event = new Event('focus')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith(event)
    })
    it('支持 blur 事件', () => {
      const vm = mount(GInput, {}).vm
      const callback = sinon.fake()
      vm.$on('blur', callback)
      let inputElement = vm.$el.querySelector('input')
      let event = new Event('blur')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith(event)
    })
  })

  // it("点击 button 触发 click 事件.", () => {
  //   const wrapper = mount(GuaButton, {})
  //   const vm = wrapper.vm
  //
  //   const callback = sinon.fake()
  //   vm.$on("click", callback)
  //   vm.$el.click()
  //   expect(callback).to.have.been.called
  // })
})


