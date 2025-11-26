let ranking = [];
export function saveGame(username, score) {
  let newUserGame = {
    jugador: username,
    score: score,
  };

  const stored = localStorage.getItem("ranking");
  ranking = stored ? JSON.parse(stored) : [];

  ranking.push(newUserGame);
  localStorage.setItem("ranking", JSON.stringify(ranking));
}

export function showOrderedRanking10Elements() {
  const stored = localStorage.getItem("ranking");
  let rankingArraySorted = stored ? JSON.parse(stored) : [];
    rankingArraySorted.sort((a, b) => b.score - a.score);
    return rankingArraySorted.slice(0, 10);
}
