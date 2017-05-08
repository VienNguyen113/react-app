import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import InApp from './InApp'

describe('Test Origin App', () => {
  it('renders NLV', () => {
    const wrapper = shallow(<App />)
    // expect(app.find('.child-app')).to.have.length(0);
    // console.log(wrapper.find(InApp).length);
    // expect(wrapper.find(InApp)).to.have.length(1);
    // expect(app.find(InApp).shallow().find('.child-app')).to.have.length(1);

    const dkny = <h2>DKNY</h2>
    expect(wrapper.contains(dkny)).toEqual(true)
  })
})
