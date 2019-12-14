import React from 'react';
import { shallow } from 'enzyme';
import DailySchedule from './DailySchedule';

describe("DailySchedule", () => {
      
      const app = shallow(<DailySchedule />);

      it ("renders correctly", () => {
        expect(app).toMatchSnapshot();
      });

})