import { defineStore } from 'pinia'
import questionsTotal from '@/assets/data/data.json'

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    questions: [],
    currentQuestionIndex: 0,
    score: 0
  }),
  actions: {
    startGame: () => {
        questions = [...questionsTotal].sort(() => Math.random() - 0.5).slice(0, 10)
        currentQuestionIndex = 0
        score = 0
        console.log('Game started with questions:', questions)
    },
    answerQuestion: (answer) => {
        if (answer) {
            score = score + 10
        } else {
            score = score - 5
        }
    },
    nextQuestion: () => {
        currentQuestionIndex++
    },
    endGame: () => {
        console.log('Game ended')
    }

  }

})