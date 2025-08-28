import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Target, AlertCircle, User, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const [language, setLanguage] = useState("ar");

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
              {language === "ar" ? "من نحن" : "À propos de nous"}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === "ar" 
                ? "منصة تفاعلية لشرح وفهم قانون المالية والميزانيات"
                : "Plateforme interactive pour expliquer et comprendre la loi de finances et les budgets"
              }
            </p>
          </div>

          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                {language === "ar" ? "وصف المنصة" : "Description de la plateforme"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {language === "ar" 
                  ? "ميزانيتي.ما هي منصة تفاعلية مبتكرة تهدف إلى تبسيط وشرح قانون المالية والميزانيات للمواطنين المغاربة، خاصة الشباب. نسعى إلى جعل المعلومات المالية والاقتصادية في متناول الجميع من خلال محتوى مبسط وتفاعلي."
                  : "Mizaniaty.ma est une plateforme interactive innovante qui vise à simplifier et expliquer la loi de finances et les budgets aux citoyens marocains, en particulier aux jeunes. Nous nous efforçons de rendre les informations financières et économiques accessibles à tous grâce à un contenu simplifié et interactif."
                }
              </p>
            </CardContent>
          </Card>

          {/* Goals */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                {language === "ar" ? "أهدافنا" : "Nos objectifs"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold">
                    {language === "ar" ? "التوعية" : "Sensibilisation"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "ar" 
                      ? "زيادة الوعي المالي والاقتصادي لدى المواطنين"
                      : "Accroître la sensibilisation financière et économique des citoyens"
                    }
                  </p>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold">
                    {language === "ar" ? "الشفافية" : "Transparence"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "ar" 
                      ? "تعزيز الشفافية في إدارة المال العام"
                      : "Promouvoir la transparence dans la gestion des finances publiques"
                    }
                  </p>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <AlertCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold">
                    {language === "ar" ? "إشراك الشباب" : "Engagement jeunesse"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "ar" 
                      ? "تشجيع مشاركة الشباب في الحياة الاقتصادية"
                      : "Encourager la participation des jeunes à la vie économique"
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Problems */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-primary" />
                {language === "ar" ? "المشاكل التي أدت إلى إنشاء المنصة" : "Problèmes ayant conduit à la création"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-muted/50 rounded-lg">
                  <Badge variant="outline" className="flex-shrink-0">1</Badge>
                  <p className="text-muted-foreground">
                    {language === "ar" 
                      ? "صعوبة فهم قانون المالية وتعقيد المصطلحات المالية"
                      : "Difficulté à comprendre la loi de finances et complexité des termes financiers"
                    }
                  </p>
                </div>
                
                <div className="flex gap-4 p-4 bg-muted/50 rounded-lg">
                  <Badge variant="outline" className="flex-shrink-0">2</Badge>
                  <p className="text-muted-foreground">
                    {language === "ar" 
                      ? "نقص في المصطلحات المبسطة والشروحات الواضحة"
                      : "Manque de terminologie simplifiée et d'explications claires"
                    }
                  </p>
                </div>
                
                <div className="flex gap-4 p-4 bg-muted/50 rounded-lg">
                  <Badge variant="outline" className="flex-shrink-0">3</Badge>
                  <p className="text-muted-foreground">
                    {language === "ar" 
                      ? "ضعف مشاركة الشباب في النقاشات الاقتصادية والمالية"
                      : "Faible participation des jeunes aux discussions économiques et financières"
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Founder */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-6 w-6 text-primary" />
                {language === "ar" ? "المؤسس" : "Fondateur"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center">
                  <User className="h-16 w-16 text-muted-foreground" />
                </div>
                <div className="flex-1 text-center md:text-right space-y-4">
                  <h3 className="text-xl font-semibold">
                    {language === "ar" ? "أحمد المؤسس" : "Ahmed Fondateur"}
                  </h3>
                  <p className="text-muted-foreground">
                    {language === "ar" 
                      ? "خبير في المالية العامة والاقتصاد، يهدف إلى تبسيط المفاهيم المالية للشباب المغربي. حاصل على شهادة في الاقتصاد وله خبرة 10 سنوات في القطاع المالي."
                      : "Expert en finances publiques et économie, visant à simplifier les concepts financiers pour les jeunes marocains. Diplômé en économie avec 10 ans d'expérience dans le secteur financier."
                    }
                  </p>
                  
                  {/* Social Media */}
                  <div className="flex gap-4 justify-center md:justify-start">
                    <Button variant="outline" size="sm">
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Instagram className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
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

export default About;