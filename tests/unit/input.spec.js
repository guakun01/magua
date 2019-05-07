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
    it('支持 change/input/focus/blur 事件', () => {
      ['change', 'input', 'focus', 'blur'].forEach(eventName => {
        const vm = mount(GInput, {}).vm
        const callback = sinon.fake()
        vm.$on(eventName, callback)
        let inputElement = vm.$el.querySelector('input')
        let event = new Event(eventName)
        Object.defineProperty(
          event, 'target', {
            value: {value: 'hi'}, enumerable: true
          }
        )
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.calledWith('hi')
      })
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


