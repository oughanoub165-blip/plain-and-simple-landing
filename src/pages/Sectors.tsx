import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, Heart, Building, Car, Shield, Zap, Play, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Sectors = () => {
  const [language, setLanguage] = useState("ar");

  const sectors = [
    {
      icon: GraduationCap,
      name: language === "ar" ? "التعليم" : "Éducation",
      budget: "45.2",
      description: language === "ar" ? "ميزانية التعليم والتكوين المهني" : "Budget éducation et formation professionnelle",
      color: "bg-blue-500"
    },
    {
      icon: Heart,
      name: language === "ar" ? "الصحة" : "Santé",
      budget: "28.7",
      description: language === "ar" ? "ميزانية الصحة العمومية" : "Budget santé publique",
      color: "bg-red-500"
    },
    {
      icon: Building,
      name: language === "ar" ? "البنية التحتية" : "Infrastructure",
      budget: "67.3",
      description: language === "ar" ? "الطرق والجسور والمباني العمومية" : "Routes, ponts et bâtiments publics",
      color: "bg-gray-500"
    },
    {
      icon: Car,
      name: language === "ar" ? "النقل" : "Transport",
      budget: "23.1",
      description: language === "ar" ? "النقل العمومي والمواصلات" : "Transport public et communications",
      color: "bg-green-500"
    },
    {
      icon: Shield,
      name: language === "ar" ? "الأمن" : "Sécurité",
      budget: "34.8",
      description: language === "ar" ? "الأمن الداخلي والدفاع" : "Sécurité intérieure et défense",
      color: "bg-purple-500"
    },
    {
      icon: Zap,
      name: language === "ar" ? "الطاقة" : "Énergie",
      budget: "19.6",
      description: language === "ar" ? "الطاقة المتجددة والكهرباء" : "Énergies renouvelables et électricité",
      color: "bg-yellow-500"
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
              {language === "ar" ? "القطاعات" : "Secteurs"}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === "ar" 
                ? "اكتشف ميزانيات القطاعات المختلفة ومشاريعها"
                : "Découvrez les budgets des différents secteurs et leurs projets"
              }
            </p>
          </div>

          {/* Budget Overview */}
          <Card>
            <CardHeader>
              <CardTitle>
                {language === "ar" ? "نظرة عامة على الميزانية" : "Aperçu du budget"}
              </CardTitle>
              <CardDescription>
                {language === "ar" 
                  ? "توزيع الميزانية العامة على القطاعات الرئيسية"
                  : "Répartition du budget général sur les secteurs principaux"
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <div className="text-3xl font-bold text-primary">218.7</div>
                  <div className="text-muted-foreground">
                    {language === "ar" ? "مليار درهم - إجمالي الميزانية" : "Milliards MAD - Budget total"}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sectors Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full ${sector.color} bg-opacity-20 flex items-center justify-center`}>
                      <sector.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{sector.name}</CardTitle>
                      <Badge variant="outline" className="mt-1">
                        {sector.budget} {language === "ar" ? "مليار درهم" : "Milliards MAD"}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {sector.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{language === "ar" ? "نسبة من الميزانية الإجمالية" : "% du budget total"}</span>
                      <span>{Math.round((parseFloat(sector.budget) / 218.7) * 100)}%</span>
                    </div>
                    <Progress value={(parseFloat(sector.budget) / 218.7) * 100} className="h-2" />
                  </div>

                  <div className="pt-4 space-y-2">
                    <Button variant="outline" size="sm" className="w-full">
                      <FileText className="h-4 w-4 mr-2" />
                      {language === "ar" ? "مقال مبسط" : "Article simplifié"}
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      <Play className="h-4 w-4 mr-2" />
                      {language === "ar" ? "كبسولة فيديو" : "Capsule vidéo"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Sector View */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                {language === "ar" ? "قطاع التعليم - مثال تفصيلي" : "Secteur Éducation - Exemple détaillé"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    {language === "ar" ? "المشاريع الرئيسية" : "Projets principaux"}
                  </h3>
                  <div className="space-y-3">
                    {[
                      {
                        name: language === "ar" ? "بناء مدارس جديدة" : "Construction de nouvelles écoles",
                        budget: "12.5",
                        progress: 75
                      },
                      {
                        name: language === "ar" ? "التعليم الرقمي" : "Éducation numérique",
                        budget: "8.3",
                        progress: 45
                      },
                      {
                        name: language === "ar" ? "تكوين المعلمين" : "Formation des enseignants",
                        budget: "5.7",
                        progress: 90
                      }
                    ].map((project, i) => (
                      <div key={i} className="p-4 bg-muted/50 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-sm">{project.name}</span>
                          <Badge variant="outline">{project.budget} {language === "ar" ? "م.د" : "M MAD"}</Badge>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>{language === "ar" ? "التقدم" : "Progrès"}</span>
                            <span>{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} className="h-1" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    {language === "ar" ? "مؤشرات الأداء" : "Indicateurs de performance"}
                  </h3>
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary">94.5%</div>
                      <div className="text-sm text-muted-foreground">
                        {language === "ar" ? "معدل التمدرس" : "Taux de scolarisation"}
                      </div>
                    </div>
                    
                    <div className="text-center p-4 bg-green-500/10 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">1,247</div>
                      <div className="text-sm text-muted-foreground">
                        {language === "ar" ? "مدرسة جديدة" : "Nouvelles écoles"}
                      </div>
                    </div>
                    
                    <div className="text-center p-4 bg-blue-500/10 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">45,890</div>
                      <div className="text-sm text-muted-foreground">
                        {language === "ar" ? "معلم مُكوَّن" : "Enseignants formés"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t">
                <div className="grid md:grid-cols-2 gap-4">
                  <Button className="w-full">
                    <FileText className="h-4 w-4 mr-2" />
                    {language === "ar" ? "اقرأ المقال الكامل" : "Lire l'article complet"}
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Play className="h-4 w-4 mr-2" />
                    {language === "ar" ? "شاهد الفيديو التوضيحي" : "Regarder la vidéo explicative"}
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

export default Sectors;