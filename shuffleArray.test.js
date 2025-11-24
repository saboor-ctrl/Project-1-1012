import { describe, it, expect, vi } from 'vitest';
import { shuffleArray } from './quiz'; // adjust path as needed

describe('shuffleArray', () => {
    const originalArray = [1, 2, 3, 4, 5];

    it('should maintain the same length as the original array', () => {
        const shuffled = shuffleArray([...originalArray]);
        expect(shuffled.length).toBe(originalArray.length);
    });

    it('should contain all the original elements', () => {
        const shuffled = shuffleArray([...originalArray]);
        // Sort both arrays and compare to ensure content is identical
        const sortedOriginal = originalArray.slice().sort();
        const sortedShuffled = shuffled.slice().sort();
        
        expect(sortedShuffled).toEqual(sortedOriginal);
    });

    it('should result in a different order most of the time', () => {
        // Run shuffle multiple times to confirm the order is not static
        let isShuffled = false;
        for (let i = 0; i < 5; i++) {
            const shuffled = shuffleArray([...originalArray]); 
            if (shuffled.join(',') !== originalArray.join(',')) {
                isShuffled = true;
                break;
            }
        }
        expect(isShuffled).toBe(true);
    });
});