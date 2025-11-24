import { describe, it, expect, vi } from 'vitest';
import { showHintPopup, updateHintDisplay } from './quiz'; // adjust path as needed

// Mock global state and environment elements
vi.stubGlobal('hintsRemaining', 2);
vi.stubGlobal('currentQuestion', 0);
vi.stubGlobal('selectedDifficulty', 'easy');
vi.stubGlobal('updateHintDisplay', vi.fn());

// Mock the DOM interaction (modal display)
const mockInsertHTML = vi.fn();
vi.stubGlobal('document', {
    body: {
        insertAdjacentHTML: mockInsertHTML,
    }
});

// Setup mock quiz data with a hint
vi.stubGlobal('questions', [{ 
    question: "Test Q", 
    options: ["1", "2"], 
    answer: "1", 
    hint: "This is a useful test hint." 
}]);

describe('showHintPopup', () => {
    beforeEach(() => {
        // Reset state for each test
        global.hintsRemaining = 2; 
        global.updateHintDisplay.mockClear();
        mockInsertHTML.mockClear();
    });

    it('should decrement hintsRemaining and show the hint when hints are available', () => {
        showHintPopup();

        expect(global.hintsRemaining).toBe(1);
        expect(global.updateHintDisplay).toHaveBeenCalledTimes(1);
        // Verify the modal content contains the actual hint text
        expect(mockInsertHTML.mock.calls[0][1]).toContain('This is a useful test hint.');
    });

    it('should show "Out of Hints" message when zero hints remain', () => {
        global.hintsRemaining = 0;
        showHintPopup();
        
        expect(global.hintsRemaining).toBe(0); // Should remain 0
        expect(global.updateHintDisplay).toHaveBeenCalledTimes(1);
        
        // Verify the modal content contains the "Out of Hints" message
        expect(mockInsertHTML.mock.calls[0][1]).toContain('Out of Hints');
        expect(mockInsertHTML.mock.calls[0][1]).toContain("Oops! You've run out of hints.");
    });

    it('should still be clickable and show "Out of Hints" after all hints are used', () => {
        global.hintsRemaining = 1;
        
        // First click: uses last hint
        showHintPopup();
        expect(global.hintsRemaining).toBe(0);

        // Second click: attempts to use a hint with 0 remaining
        showHintPopup();
        expect(global.hintsRemaining).toBe(0); // Still 0
        
        // Assert the second modal message
        const secondModalHTML = mockInsertHTML.mock.calls[1][1];
        expect(secondModalHTML).toContain('Out of Hints');
    });
});