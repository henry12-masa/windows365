const params = new URLSearchParams(location.search);
const type = params.get("type") || "all";
const QUESTION_LIMIT = 50;
const AUTO_NEXT_DELAY = 900;

const quizInfo = {
  windowsServerHybrid: {
    title: "Windows Server Hybrid Administrator Associate",
    desc: "Azure Arc・Windows Admin Center・AD DS・Azure File Sync・ハイブリッド管理"
  },
  ms900: {
    title: "Microsoft 365 Fundamentals（MS-900）",
    desc: "Microsoft 365サービス・クラウド概念・セキュリティ・コンプライアンス・価格"
  },
  sc200: {
    title: "Microsoft Security Operations Analyst（SC-200）",
    desc: "Microsoft Sentinel・Defender XDR・KQL・インシデント対応・脅威ハンティング"
  },
  sc300: {
    title: "Microsoft Identity and Access Administrator（SC-300）",
    desc: "Microsoft Entra ID・条件付きアクセス・IDガバナンス・アプリ統合"
  },
  sc100: {
    title: "Microsoft Cybersecurity Architect（SC-100）",
    desc: "Zero Trust・Defender・Sentinel・Entra・セキュリティ設計"
  }
};

const pageTitle = document.getElementById("pageTitle");
const pageDesc = document.getElementById("pageDesc");
const quizList = document.getElementById("quizList");

if (type === "all") {
  document.title = "Microsoft ハイブリッド・セキュリティ資格クイズ";
  pageTitle.textContent = "Microsoft ハイブリッド・セキュリティ資格クイズ";
  pageDesc.textContent = "5カテゴリ・総数180問から50問ランダムで出題";
} else {
  const info = quizInfo[type] || quizInfo.windowsServerHybrid;
  document.title = info.title;
  pageTitle.textContent = info.title;
  pageDesc.textContent = info.desc;
}

quizList.innerHTML = `
  <a href="index.html" class="${type === "all" ? "active" : ""}">全カテゴリ50問</a>
  ${Object.keys(quizInfo).map(key => `
    <a href="?type=${key}" class="${type === key ? "active" : ""}">${quizInfo[key].title}</a>
  `).join("")}
`;

function normalizeQuestion(q){
  return {
    question: q.question || q.q,
    choices: q.choices || q.c,
    answer: q.answer || q.a,
    explanation: q.explanation || q.e || ""
  };
}

function shuffle(array){
  const copied = [...array];
  for (let i = copied.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copied[i], copied[j]] = [copied[j], copied[i]];
  }
  return copied;
}

function uniqueQuestions(array){
  const seen = new Set();
  return array.filter(q => {
    const key = `${q.question}__${q.answer}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

let questions = [];

if (type === "all") {
  Object.keys(quizInfo).forEach(key => {
    if (window.quizData && Array.isArray(window.quizData[key])) {
      questions.push(...window.quizData[key].map(normalizeQuestion));
    }
  });
} else {
  questions = window.quizData?.[type] ? window.quizData[type].map(normalizeQuestion) : [];
}

questions = shuffle(uniqueQuestions(questions)).slice(0, QUESTION_LIMIT);

let currentIndex = 0;
let score = 0;
let answered = false;
let autoTimer = null;

const counter = document.getElementById("counter");
const scoreEl = document.getElementById("score");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");

function showQuestion() {
  clearTimeout(autoTimer);
  answered = false;
  resultEl.textContent = "";
  nextBtn.style.display = "none";

  if (questions.length === 0) {
    questionEl.textContent = "問題データが読み込めませんでした";
    choicesEl.innerHTML = "";
    counter.textContent = "0 / 0";
    scoreEl.textContent = "スコア: 0";
    progressBar.style.width = "0%";
    return;
  }

  if (currentIndex >= questions.length) {
    questionEl.textContent = "終了！";
    choicesEl.innerHTML = "";
    counter.textContent = `${questions.length} / ${questions.length}`;
    scoreEl.textContent = `スコア: ${score}`;
    resultEl.textContent = `${questions.length}問中 ${score}問正解`;
    progressBar.style.width = "100%";
    return;
  }

  const q = questions[currentIndex];
  counter.textContent = `${currentIndex + 1} / ${questions.length}`;
  scoreEl.textContent = `スコア: ${score}`;
  questionEl.textContent = q.question;
  progressBar.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;
  choicesEl.innerHTML = "";

  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => answerQuestion(btn, choice, q);
    choicesEl.appendChild(btn);
  });
}

function answerQuestion(btn, choice, q){
  if (answered) return;
  answered = true;

  if (choice === q.answer) {
    score++;
    resultEl.textContent = "正解！";
    btn.classList.add("correct");
  } else {
    resultEl.textContent = `不正解。正解は「${q.answer}」`;
    btn.classList.add("wrong");
  }

  [...choicesEl.children].forEach(b => {
    b.disabled = true;
    if (b.textContent === q.answer) b.classList.add("correct");
  });

  if (q.explanation) resultEl.textContent += ` ${q.explanation}`;
  scoreEl.textContent = `スコア: ${score}`;
  nextBtn.style.display = "block";

  autoTimer = setTimeout(() => {
    currentIndex++;
    showQuestion();
  }, AUTO_NEXT_DELAY);
}

nextBtn.onclick = () => {
  clearTimeout(autoTimer);
  currentIndex++;
  showQuestion();
};

showQuestion();
