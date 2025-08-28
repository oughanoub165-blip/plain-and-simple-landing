import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Play, Volume2, BookOpen, Clock, CheckCircle, Star, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const Discover = () => {
  const [language, setLanguage] = useState("ar");
  const [quizScore, setQuizScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const timelineSteps = [
    {
      title: language === "ar" ? "التحضير" : "Préparation",
      description: language === "ar" ? "إعداد مشروع قانون المالية" : "Préparation du projet de loi de finances"
    },
    {
      title: language === "ar" ? "المناقشة" : "Discussion", 
      description: language === "ar" ? "مناقشة البرلمان للمشروع" : "Discussion parlementaire du projet"
    },
    {
      title: language === "ar" ? "التصويت" : "Vote",
      description: language === "ar" ? "تصويت البرلمان على القانون" : "Vote parlementaire sur la loi"
    },
    {
      title: language === "ar" ? "التنفيذ" : "Exécution",
      description: language === "ar" ? "تنفيذ قانون المالية" : "Exécution de la loi de finances"
    }
  ];

  return (
    <div className="min-h-screen bg-background" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <Link to="/" className="text-primary hover:underline">
            ← {language === "ar" ? "العودة للرئيسية" : "Retour à l'accueil"}
          </Link>
        </div>

        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">
              {language === "ar" ? "اكتشف" : "Découvrir"}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === "ar" 
                ? "تعلم كيفية استخدام المنصة وفهم قانون المالية بطريقة مبسطة"
                : "Apprenez à utiliser la plateforme et à comprendre la loi de finances de manière simplifiée"
              }
            </p>
          </div>

          {/* Intro Video */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-6 w-6 text-primary" />
                {language === "ar" ? "فيديو تعريفي بالموقع" : "Vidéo d'introduction du site"}
              </CardTitle>
              <CardDescription>
                {language === "ar" 
                  ? "شاهد هذا الفيديو لفهم كيفية استخدام جميع خدمات الموقع"
                  : "Regardez cette vidéo pour comprendre comment utiliser tous les services du site"
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Play className="h-16 w-16 text-primary mx-auto" />
                  <p className="text-muted-foreground">
                    {language === "ar" ? "انقر لتشغيل الفيديو التعريفي" : "Cliquez pour lire la vidéo d'introduction"}
                  </p>
                  <Button>
                    <Play className="h-4 w-4 mr-2" />
                    {language === "ar" ? "تشغيل الفيديو" : "Lire la vidéo"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How to Use Services */}
          <Card>
            <CardHeader>
              <CardTitle>
                {language === "ar" ? "كيفية استخدام الخدمات" : "Comment utiliser les services"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">
                    {language === "ar" ? "اقرأ المقالات" : "Lisez les articles"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "ar" 
                      ? "ابدأ بقراءة المقالات المبسطة حول قانون المالية"
                      : "Commencez par lire les articles simplifiés sur la loi de finances"
                    }
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Play className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">
                    {language === "ar" ? "شاهد الفيديوهات" : "Regardez les vidéos"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "ar" 
                      ? "شاهد الفيديوهات التعليمية والكبسولات القصيرة"
                      : "Regardez les vidéos éducatives et les capsules courtes"
                    }
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Volume2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">
                    {language === "ar" ? "استمع للنسخة الصوتية" : "Écoutez la version audio"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "ar" 
                      ? "النسخة الصوتية متاحة لذوي الإعاقة البصرية"
                      : "Version audio disponible pour les malvoyants"
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Finance Law Made Simple */}
          <Card>
            <CardHeader>
              <CardTitle>
                {language === "ar" ? "قانون المالية مبسط" : "Loi de finances simplifiée"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Play className="h-5 w-5 text-primary" />
                    {language === "ar" ? "فيديوهات قصيرة" : "Vidéos courtes"}
                  </h3>
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <Play className="h-4 w-4 text-primary" />
                        <span className="flex-1 text-sm">
                          {language === "ar" ? `الدرس ${i}: أساسيات الميزانية` : `Leçon ${i}: Bases du budget`}
                        </span>
                        <Badge variant="outline">
                          {language === "ar" ? "5 دق" : "5 min"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    {language === "ar" ? "قاموس تفاعلي" : "Glossaire interactif"}
                  </h3>
                  <div className="space-y-2">
                    {["الإيرادات", "النفقات", "العجز"].map((term, i) => (
                      <div key={i} className="p-3 bg-muted/50 rounded-lg cursor-pointer hover:bg-muted">
                        <div className="font-medium text-sm">
                          {language === "ar" ? term : ["Revenus", "Dépenses", "Déficit"][i]}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {language === "ar" ? "انقر لمعرفة التعريف" : "Cliquer pour la définition"}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Finance Law Journey */}
          <Card>
            <CardHeader>
              <CardTitle>
                {language === "ar" ? "رحلة قانون المالية" : "Parcours de la loi de finances"}
              </CardTitle>
              <CardDescription>
                {language === "ar" 
                  ? "خط زمني متحرك يوضح مراحل إعداد قانون المالية"
                  : "Chronologie animée montrant les étapes de préparation de la loi de finances"
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {timelineSteps.map((step, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <h4 className="font-semibold mb-4">
                  {language === "ar" ? "أرشيف السنوات السابقة" : "Archive des années précédentes"}
                </h4>
                <div className="flex gap-2 flex-wrap">
                  {[2024, 2023, 2022, 2021].map((year) => (
                    <Badge key={year} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                      {year}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Test Your Knowledge */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-6 w-6 text-primary" />
                {language === "ar" ? "اختبر معلوماتك" : "Testez vos connaissances"}
              </CardTitle>
              <CardDescription>
                {language === "ar" 
                  ? "اختبار تفاعلي مع مستشار مالي كرتوني"
                  : "Quiz interactif avec un conseiller financier en dessin animé"
                }
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Star className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">
                  {language === "ar" ? "المستشار المالي" : "Conseiller Financier"}
                </h3>
                <p className="text-muted-foreground">
                  {language === "ar" 
                    ? "مرحباً! أنا هنا لمساعدتك في اختبار معلوماتك حول الميزانية"
                    : "Bonjour ! Je suis là pour vous aider à tester vos connaissances sur le budget"
                  }
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    {language === "ar" ? "السؤال 1 من 5" : "Question 1 sur 5"}
                  </span>
                  <Badge variant="outline">
                    {language === "ar" ? `النتيجة: ${quizScore}/5` : `Score: ${quizScore}/5`}
                  </Badge>
                </div>
                
                <Progress value={(currentQuestion / 5) * 100} className="w-full" />
                
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-medium mb-4">
                    {language === "ar" 
                      ? "ما هو العجز في الميزانية؟"
                      : "Qu'est-ce que le déficit budgétaire ?"
                    }
                  </h4>
                  <div className="space-y-2">
                    {[
                      language === "ar" ? "الفرق بين الإيرادات والنفقات" : "La différence entre revenus et dépenses",
                      language === "ar" ? "مجموع الضرائب" : "Total des impôts",
                      language === "ar" ? "الديون الخارجية" : "Dettes extérieures"
                    ].map((option, i) => (
                      <Button key={i} variant="outline" className="w-full justify-start">
                        {option}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <Button className="w-full md:w-auto">
                    {language === "ar" ? "ابدأ الاختبار" : "Commencer le quiz"}
                  </Button>
                </div>
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

export default Discover;