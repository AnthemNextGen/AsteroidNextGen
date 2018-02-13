describe('Test Asteroids', function(){
    const usrname = 'root';
    beforeEach(function(){
      const canvas = document.createElement('canvas');
      document.body.appendChild(canvas);

    });

    it('Should always be true', function(){
      expect(true).toBe(true);
    });

    it('Name should be root', function(){
      expect(usrname).toBe('root');
    })
});
