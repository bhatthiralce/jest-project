import RangeList from './RangeList';
/*
Demo Test is test file to be used in conjuntion with RangeList.js makes the following assumptions:
The Class and File name are same and has corresponding export statement
The print method returns the array - if we assume the printing is in consloe, this test file must be changed with mocking of console 
If the print method is to make a component on screen, the methpod must be changed to check the snapshots/internal html instead

The methods given below are used for tesing boundries and have been clubbed in  describe.
Number ranges are the input and result ranges are the output parameter equivalents

*/
jest.mock('RangeList');

const numberRange1 = [1,5]
const numberRange2 = [10,16]
const numberRange3 = [0,6]
const resultRange1=[1,2,3,4]
const resultRange2 = [1,2,3,4,10,11,12,13,14,15]
const resultRange3= [0,1,2,3,4,5]



describe("Testing RangeList Class methods",()=>
	{
		beforeAll(() => {
			const rangeList = new RangeList();
			expect(RangeList).toHaveBeenCalledTimes(1);
			expect(rangeList.print()).toEqual([]);
		})
		rangeList.add(numberRange1);
		test('Checking  values of array',()=>{

			it('matches if the actual array does not contain the expected elements', () => {
    			expect(rangeList.print()).toEqual(
     				expect.not.arrayContaining([resultRange3])
    		)
    		it('matches if the actual array contains the expected elements', () => {
    			expect(rangeList.print()).toEqual(
     			expect.not.arrayContaining([resultRange1]),
    		)
    		expect(rangeList.print()).toEqual(
     				expect.not.arrayContaining([5])
    		)
		})
		
		rangeList.add(numberRange2);
		test('Checking add funtion by adding another range',()=>{
			expect(rangeList.print()).toContain(1);
			expect(rangeList.print()).toContain(11);
			expect(rangeList.print()).not.toContain(9);
			expect(rangeList.print()).not.toContain(16);

		})
		rangeList.remove(numberRange2)
		test('Checking remove funtion by removing the second array',()=>{
			expect(rangeList.print()).not.toContain(10);
		})
		rangeList.remove(numberRange1)
		test('Checking remove funtion by emptying the array',()=>{
			expect(rangeList.print()).not.toContain(1);
			it('matches if the actual array contains the expected elements', () => {
    			expect(rangeList.print()).toEqual(
     			expect.not.arrayContaining([]),
    		)
		})
		rangeList.add(numberRange3);
		test('Checking values to be exact',()=>{
			expect(rangeList.print().toEqual(resultRange3))
		})
	});