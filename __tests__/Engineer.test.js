const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");


describe("Engineer Class", () => {
    describe("Engineer Name", () => {
      it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
        const obj = new Engineer("Daniel", 489, "daniel@email.com", "devdaniel1");
        
        expect(obj.name).toBe("Daniel");
      });
      
      it("should return an object containing an 'id' property when called with the 'new' keyword", () => {
        const obj = new Engineer("Daniel", 489, "daniel@email.com", "devdaniel1");
  
        expect(obj.id).toBe(489);
      });

      it("should return an object containing an 'email' property when called with the 'new' keyword", () => {
        const obj = new Engineer("Daniel", 489, "daniel@email.com", "devdaniel1");
  
        expect(obj.email).toBe("daniel@email.com");
      });

      it("should return an object containing a 'github' property when called with the 'new' keyword", () => {
        const obj = new Engineer("Daniel", 489, "daniel@email.com", "devdaniel1");
  
        expect(obj.github).toBe("devdaniel1");
      });
    });

    describe("GetRole", () => {
        it("should return the Role 'Engineer' when the getRole() function is called", () => {
          const obj = new Engineer("Daniel", 489, "daniel@email.com", "devdaniel1");
    
          expect(obj.getRole()).toBe("Engineer");
        });
      }); 
  });
  