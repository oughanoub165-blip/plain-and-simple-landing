import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Trophy, Star, Brain, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";

const Quiz = () => {
  const [language, setLanguage] = useState("ar");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: language === "ar" ? "ما هو قانون المالية؟" : "Qu'est-ce que la loi de finances ?",
      options: [
        language === "ar" ? "قانون ينظم الميزانية العامة للدولة" : "Loi qui régit le budget général de l'État",
        language === "ar" ? "قانون ينظم البنوك فقط" : "Loi qui régit uniquement les banques", 
        language === "ar" ? "قانون ينظم التجارة الدولية" : "Loi qui régit le commerce international",
        language === "ar" ? "قانون ينظم الضرائب فقط" : "Loi qui régit uniquement les impôts"
      ],
      correct: 0
    },
    {
      question: language === "ar" ? "كم مرة يتم مناقشة قانون المالية في السنة؟" : "Combien de fois la loi de finances est-elle discutée par an ?",
      options: [
        language === "ar" ? "مرة واحدة" : "Une fois",
        language === "ar" ? "مرتان" : "Deux fois",
        language === "ar" ? "ثلاث مرات" : "Trois fois", 
        language === "ar" ? "أربع مرات" : "Quatre fois"
      ],
      correct: 0
    },
    {
      question: language === "ar" ? "أي قطاع يحصل على أكبر ميزانية؟" : "Quel secteur reçoit le plus gros budget ?",
      options: [
        language === "ar" ? "التعليم" : "Éducation",
        language === "ar" ? "الصحة" : "Santé",
        language === "ar" ? "البنية التحتية" : "Infrastructure",
        language === "ar" ? "الدفاع" : "Défense"
      ],
      correct: 2
    },
    {
      question: language === "ar" ? "ما هي مراحل قانون المالية؟" : "Quelles sont les étapes de la loi de finances ?",
      options: [
        language === "ar" ? "إعداد ← مناقشة ← تصويت" : "Préparation ← Discussion ← Vote",
        language === "ar" ? "إعداد ← مناقشة ← تصويت ← تنفيذ" : "Préparation ← Discussion ← Vote ← Exécution",
        language === "ar" ? "مناقشة ← تصويت" : "Discussion ← Vote",
        language === "ar" ? "إعداد ← تنفيذ" : "Préparation ← Exécution"
      ],
      correct: 1
    },
    {
      question: language === "ar" ? "من يشارك في إعداد قانون المالية؟" : "Qui participe à l'élaboration de la loi de finances ?",
      options: [
        language === "ar" ? "وزارة الاقتصاد والمالية فقط" : "Ministère de l'Économie et des Finances uniquement",
        language === "ar" ? "جميع الوزارات والمؤسسات العمومية" : "Tous les ministères et institutions publiques",
        language === "ar" ? "البرلمان فقط" : "Parlement uniquement",
        language === "ar" ? "رئيس الحكومة فقط" : "Chef du gouvernement uniquement"
      ],
      correct: 1
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion === questions.length - 1) {
      // Calculate final score
      const finalScore = newAnswers.reduce((acc, answer, index) => {
        return answer === questions[index].correct ? acc + 1 : acc;
      }, 0);
      setScore(finalScore);
      setShowResults(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setScore(0);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) {
      return {
        message: language === "ar" ? "ممتاز! أنت خبير في قانون المالية!" : "Excellent ! Vous êtes un expert en loi de finances !",
        icon: Trophy,
        color: "text-yellow-500"
      };
    } else if (percentage >= 60) {
      return {
        message: language === "ar" ? "جيد جداً! لديك معرفة جيدة" : "Très bien ! Vous avez une bonne connaissance",
        icon: Star,
        color: "text-blue-500"
      };
    } else {
      return {
        message: language === "ar" ? "يمكنك تحسين معرفتك أكثر" : "Vous pouvez améliorer vos connaissances",
        icon: Brain,
        color: "text-orange-500"
      };
    }
  };

  if (showResults) {
    const scoreInfo = getScoreMessage();
    const ScoreIcon = scoreInfo.icon;

    return (
      <div className="min-h-screen bg-background" dir={language === "ar" ? "rtl" : "ltr"}>
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="mb-8">
            <Link to="/" className="text-primary hover:underline">
              ← {language === "ar" ? "العودة للرئيسية" : "Retour à l'accueil"}
            </Link>
          </div>

          <Card className="text-center">
            <CardHeader>
              <div className="w-24 h-24 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <ScoreIcon className={`h-12 w-12 ${scoreInfo.color}`} />
              </div>
              <CardTitle className="text-3xl mb-2">
                {language === "ar" ? "النتيجة النهائية" : "Résultat final"}
              </CardTitle>
              <div className="text-6xl font-bold text-primary mb-4">
                {score}/{questions.length}
              </div>
              <p className="text-xl text-muted-foreground">
                {scoreInfo.message}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">
                    {Math.round((score / questions.length) * 100)}%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {language === "ar" ? "نسبة النجاح" : "Taux de réussite"}
                  </div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">
                    {questions.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {language === "ar" ? "إجمالي الأسئلة" : "Total des questions"}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">
                  {language === "ar" ? "مراجعة الإجابات" : "Révision des réponses"}
                </h3>
                {questions.map((question, index) => (
                  <div key={index} className="p-4 bg-muted/30 rounded-lg text-right">
                    <div className="flex items-center gap-2 mb-2">
                      {answers[index] === question.correct ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                      <span className="font-medium">
                        {language === "ar" ? `السؤال ${index + 1}` : `Question ${index + 1}`}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{question.question}</p>
                    <p className="text-sm font-medium text-primary mt-1">
                      {question.options[question.correct]}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 justify-center">
                <Button onClick={resetQuiz} className="flex items-center gap-2">
                  <RotateCcw className="h-4 w-4" />
                  {language === "ar" ? "إعادة المحاولة" : "Recommencer"}
                </Button>
                <Button variant="outline" onClick={() => setLanguage(language === "ar" ? "fr" : "ar")}>
                  {language === "ar" ? "Français" : "العربية"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Link to="/" className="text-primary hover:underline">
            ← {language === "ar" ? "العودة للرئيسية" : "Retour à l'accueil"}
          </Link>
        </div>

        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">
              {language === "ar" ? "اختبر معرفتك" : "Testez vos connaissances"}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === "ar" 
                ? "استبيان تفاعلي لاختبار معرفتك بقانون المالية والميزانيات"
                : "Quiz interactif pour tester vos connaissances en loi de finances et budgets"
              }
            </p>
          </div>

          {/* Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>
                {language === "ar" 
                  ? `السؤال ${currentQuestion + 1} من ${questions.length}`
                  : `Question ${currentQuestion + 1} sur ${questions.length}`
                }
              </span>
              <span>
                {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
              </span>
            </div>
            <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-2" />
          </div>

          {/* Question Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">
                    {language === "ar" ? "المستشار المالي" : "Conseiller Financier"}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {language === "ar" ? "دعني أسألك سؤالاً" : "Laissez-moi vous poser une question"}
                  </p>
                </div>
              </div>
              
              <div className="text-xl font-semibold text-foreground">
                {questions[currentQuestion].question}
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="p-4 h-auto text-right justify-start hover:bg-primary/10 hover:border-primary"
                    onClick={() => handleAnswer(index)}
                  >
                    <div className="flex items-center gap-3 w-full">
                      <Badge variant="secondary" className="flex-shrink-0">
                        {String.fromCharCode(65 + index)}
                      </Badge>
                      <span className="flex-1">{option}</span>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Language Toggle */}
          <div className="text-center">
            <Button 
              variant="outline" 
              onClick={() => setLanguage(language === "ar" ? "fr" : "ar")}
            >
              {language === "ar" ? "Français" : "العربية"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;