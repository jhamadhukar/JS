describe('calculator', function(){
	var calc;
	beforeEach(function(){
		calc =new calculator();
		jasmine.addMatchers({
			toBeBetween: function(a, b){
			return {
                    compare: function (actual, expected1, expected2) {
                        return {
                            pass: actual >= expected1 && actual <= expected2 ,
                            message: expected1 + ' is not between  range'
                        }
                    }
                };
			}
		});
	});
	it('should be able to add 1 and 1', function(){
		expect(calc.add(1,1)).toBe(2);
	});
	
	it('should divide 6 by 3', function(){
		expect(calc.div(6, 2)).toBe(3);
		//expect(calc.div(1, 3)).toBeBetween(0.3, 0.34);
	});
	
	it('should be between 0.3 and 0.34', function(){
		expect(calc.div(1, 3)).toBeBetween(0.3, 0.34);
	});
});