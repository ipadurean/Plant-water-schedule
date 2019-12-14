import React from 'react';
import { shallow } from 'enzyme';
import Calendar from './Calendar';

describe("Calendar", () => {
      
      const app = shallow(<Calendar />);

      it ("renders correctly", () => {
        expect(app).toMatchSnapshot();
      });

      it("initializes 'state' with a 'dayClicked' of current time in miliqseconds", () => {
        expect(app.state().dayClicked.toString().slice(0, 10)).toEqual(Date.now().toString().slice(0, 10));
      });

})