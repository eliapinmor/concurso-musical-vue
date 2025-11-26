import { defineStore } from "pinia";
import questionsTotal from "@/assets/data/data.json";
import { playSong5s, stopSong } from "@/assets/songPlayer.js";

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    isFinished: false,
    selectedAnswer: null,
    correctAnswers: null,
    blocked: false,
  }),
  actions: {
    startGame() {
      this.questions = [...questionsTotal]
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);
      this.currentQuestionIndex = 0;
      this.score = 0;
      this.isFinished = false;
      playSong5s(this.questions[this.currentQuestionIndex].src);
    },
    answerQuestion(answer) {
      if (answer) {
        this.score += 10;
      } else {
        this.score -= 5;
      }
      setTimeout(() => {
        this.nextQuestion();
      }, 2000);
    },
    nextQuestion() {
      stopSong();
      this.blocked = false;
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        playSong5s(this.questions[this.currentQuestionIndex].src);
      } else {
        this.isFinished = true;
        this.endGame();
      }
      
    },
    endGame() {
      stopSong();
      this.isFinished = true;
      console.log("Game ended");
    },
  },
});
