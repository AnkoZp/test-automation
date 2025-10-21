import { expect } from 'chai';

describe('First Test Suite', () => {
    describe('First Test Case', () => {
        it('sum is 4', () => {
            const sum = 2 + 2;
            expect(sum).to.equal(4);
        });
    });
});
