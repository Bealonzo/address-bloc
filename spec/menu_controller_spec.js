const MenuController = require('../controllers/MenuController');

describe("MenuController", () => {
  beforeEach(() => {
    this.menu = new MenuController();
  });
  describe("#remindMe()", () => {
    it ("should return true if the string is 'Learning is a life-long pursuit!'", () => {
      expect(this.menu.remindMe() == "Learning is a life-long pursuit!").toBe(true);
    });
    it ("should return false if the string is not 'Learning is a life-long pursuit'", () => {
      expect(this.menu.remindMe() !== "Learning is a life-long pursuit!").toBe(false);
    });
  });
});