describe("test project name", function () {
    var name = 'travelApp';
    it("Success Test : name of the project toBe ==> travelApp", function () {
        
        expect(name).toBe('travelApp');
    });

    it("Fail test : name of the project toBe ==> otherAppName", function () {

        expect(name).toBe('otherAppName');
        alert("hi");
    });

});