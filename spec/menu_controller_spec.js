const MenuController = require("../controllers/MenuController");
describe("MenuController", () => {
  beforeEach(() => {
     this.menu = new MenuController();
   });
describe("#getContactCount()", () => {

// #2
     it("should return 0 when no contacts are in the book", () => {
       expect(this.menu.getContactCount()).toBe(0);
     });

     it("should return 1 when there is exactly one contact in the book", () => {
     this.menu.contacts.push("bob");
     expect(this.menu.getContactCount()).toBe(1)
   });

   });
   describe("#remindMe()", () => {

     it("should return true if the string is 'Learning is a life-long pursuit!'", () => {
       expect(this.menu.remindMe() == "Learning is a life-long pursuit!").toBe(true);


});
    it ("should return false if the string is not 'Learning is a life-long pursuit'", () => {
      expect(this.menu.remindMe() !== "Learning is a life-long pursuit!").toBe(false);


  });
  });
 });
