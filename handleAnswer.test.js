import { describe, it, expect, vi } from 'vitest';
import { handleAnswer, questions } from './quiz'; // adjust path as needed

// Mock global state and next-step functions
vi.stubGlobal('score', 0);
vi.stubGlobal('currentQuestion', 0);
vi.stubGlobal('showQuestion', vi.fn());
vi.stubGlobal('endQuiz', vi.fn());

// Setup mock quiz data (based on your internal structure)
vi.stubGlobal('questions', [
    { question: "Q1", options: ["A", "B", "C"], answer: "B" },
    { question: "Q2", options: ["X", "Y", "Z"], answer: "Z" },
    { question: "Q3 (Last)", options: ["1", "2", "3"], answer: "1" }
]);


describe('handleAnswer', () => {
    // Reset state before each test
    beforeEach(() => {
        global.score = 0;
        global.currentQuestion = 0;
        global.showQuestion.mockClear();
        global.endQuiz.mockClear();
    });

    it('increments the score for a correct answer', () => {
        handleAnswer("B"); // Correct answer for Q1
        expect(global.score).toBe(1);
    });

    it('does not increment the score for an incorrect answer', () => {
        handleAnswer("A"); // Incorrect answer for Q1
        expect(global.score).toBe(0);
    });

    it('advances currentQuestion regardless of correctness', () => {
        handleAnswer("B"); // Correct
        handleAnswer("X"); // Incorrect
        expect(global.currentQuestion).toBe(2);
    });

    it('calls showQuestion when there are questions remaining', () => {
        handleAnswer("B"); // Q1 answered
        expect(global.showQuestion).toHaveBeenCalledTimes(1);
        expect(global.endQuiz).not.toHaveBeenCalled();
    });

    it('calls endQuiz after the last question is answered', () => {
        // Answer Q1, Q2
        handleAnswer("B"); 
        handleAnswer("Z"); 
        
        // Answer Q3 (the last question)
        handleAnswer("1"); 

        expect(global.showQuestion).toHaveBeenCalledTimes(2); // Called after Q1 and Q2
        expect(global.endQuiz).toHaveBeenCalledTimes(1);      // Called after Q3
    });
});