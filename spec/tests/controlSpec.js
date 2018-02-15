import {controls} from '../../src/utils/controls';

describe('Test controls', function(){
    it('Enter key code starts game', function(){
      expect(controls.startKey).toBe(13);
    });
});
