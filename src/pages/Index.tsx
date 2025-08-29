import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, BookOpen, Briefcase, GraduationCap, TrendingUp, Globe, FileText, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [language, setLanguage] = useState("ar");

  const initiatives = [
    { 
      icon: Users, 
      title: "مبادرات حكومية", 
      titleFr: "Initiatives gouvernementales",
      titleEn: "Government initiatives"
    },
    { 
      icon: BookOpen, 
      title: "دورات تدريبية في المالية", 
      titleFr: "Formations financières",
      titleEn: "Training courses in finance"
    },
    { 
      icon: Briefcase, 
      title: "فرص عمل", 
      titleFr: "Opportunités d'emploi",
      titleEn: "Job opportunities"
    },
    { 
      icon: GraduationCap, 
      title: "ورش مهارات الحياة", 
      titleFr: "Ateliers de compétences",
      titleEn: "Life skills workshops"
    },
  ];

  const navItems = [
    { to: "/discover", label: "فيديو تعريفي", labelFr: "Vidéo introductive", labelEn: "Introductory Video" },
    { to: "/about", label: "قانون المالية مبسط", labelFr: "Loi de finances expliquée", labelEn: "Finance Law Explained" },
    { to: "/quiz", label: "اختبر معرفتك", labelFr: "Quiz", labelEn: "Quiz" },
    { to: "/sectors", label: "القطاعات", labelFr: "Secteurs", labelEn: "Sectors" },
    { to: "/my-region", label: "الأقاليم", labelFr: "Régions", labelEn: "Regions" },
    { to: "/share-opinion", label: "شارك رأيك", labelFr: "Voix de la jeunesse", labelEn: "Youth Voices" },
    { to: "/partners", label: "شركاء", labelFr: "Partenaires", labelEn: "Partners" },
    { to: "/report-problem", label: "بلّغ عن مشكلة", labelFr: "Signaler un problème", labelEn: "Report a Problem" },
  ];

  const getNavLabel = (item: any) => {
    switch(language) {
      case "fr": return item.labelFr;
      case "en": return item.labelEn;
      default: return item.label;
    }
  };

  const getInitiativeTitle = (initiative: any) => {
    switch(language) {
      case "fr": return initiative.titleFr;
      case "en": return initiative.titleEn;
      default: return initiative.title;
    }
  };

  return (
    <div className="min-h-screen bg-background" dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold text-primary">
                <span className="text-primary">Mizaniaty.ma</span>
                <div className="text-lg text-muted-foreground">
                  {language === "ar" ? "ميزانيتي" : language === "fr" ? "Ma Budget" : "My Budget"}
                </div>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {getNavLabel(item)}
                </Link>
              ))}
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ar">العربية</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  Mizaniaty.ma
                </h1>
                <p className="text-xl text-muted-foreground">
                  {language === "ar" ? "ميزانيتي" : language === "fr" ? "Ma Budget" : "My Budget"}
                </p>
              </div>

              {/* Motivational Slogans */}
              <div className="space-y-6">
                <div className="p-6 bg-primary/10 rounded-lg border border-primary/20">
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    {language === "ar" 
                      ? "أين تنفق الميزانية؟ اكتشف الميزانية بطريقتك" 
                      : language === "fr" 
                      ? "Où est dépensé le budget ? Découvrez le budget à votre façon"
                      : "Where does your money go? Explore the budget your way"
                    }
                  </h2>
                  
                  {/* Show all three slogans */}
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>🇲🇦 أين تنفق الميزانية؟ اكتشف الميزانية بطريقتك</p>
                    <p>🇫🇷 Où est dépensé le budget ? Découvrez le budget à votre façon</p>
                    <p>🇬🇧 Where does your money go? Explore the budget your way</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Creation Box */}
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center">
                  {language === "ar" 
                    ? "إنشاء حساب جديد" 
                    : language === "fr" 
                    ? "Créer un compte"
                    : "Create an account"
                  }
                </CardTitle>
                <CardDescription className="text-center">
                  {language === "ar" 
                    ? "انضم إلينا لاكتشاف ميزانيتك" 
                    : language === "fr"
                    ? "Rejoignez-nous pour découvrir votre budget"
                    : "Join us to explore your budget"
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Tabs defaultValue="visitor" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="visitor">
                      {language === "ar" ? "زائر" : language === "fr" ? "Visiteur" : "Visitor"}
                    </TabsTrigger>
                    <TabsTrigger value="member">
                      {language === "ar" ? "عضو" : language === "fr" ? "Membre" : "Member"}
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="visitor" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        {language === "ar" ? "الاسم الكامل" : language === "fr" ? "Nom complet" : "Full Name"}
                      </Label>
                      <Input 
                        id="name" 
                        placeholder={
                          language === "ar" ? "أدخل اسمك" : 
                          language === "fr" ? "Entrez votre nom" : 
                          "Enter your name"
                        } 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        {language === "ar" ? "البريد الإلكتروني" : "Email"}
                      </Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder={
                          language === "ar" ? "أدخل بريدك الإلكتروني" : 
                          language === "fr" ? "Entrez votre email" : 
                          "Enter your email"
                        } 
                      />
                    </div>
                    <Button className="w-full">
                      {language === "ar" ? "إنشاء حساب" : language === "fr" ? "Créer un compte" : "Create Account"}
                    </Button>
                  </TabsContent>
                  
                  <TabsContent value="member" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="member-email">
                        {language === "ar" ? "البريد الإلكتروني" : "Email"}
                      </Label>
                      <Input 
                        id="member-email" 
                        type="email" 
                        placeholder={
                          language === "ar" ? "أدخل بريدك الإلكتروني" : 
                          language === "fr" ? "Entrez votre email" : 
                          "Enter your email"
                        } 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">
                        {language === "ar" ? "كلمة المرور" : language === "fr" ? "Mot de passe" : "Password"}
                      </Label>
                      <Input 
                        id="password" 
                        type="password" 
                        placeholder={
                          language === "ar" ? "أدخل كلمة المرور" : 
                          language === "fr" ? "Entrez votre mot de passe" : 
                          "Enter your password"
                        } 
                      />
                    </div>
                    <Button className="w-full">
                      {language === "ar" ? "تسجيل الدخول" : language === "fr" ? "Se connecter" : "Sign In"}
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Animated Initiatives Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              {language === "ar" 
                ? "مبادرات تنموية" 
                : language === "fr" 
                ? "Initiatives de développement"
                : "Development Initiatives"
              }
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === "ar" 
                ? "اكتشف المبادرات والفرص المتاحة لتطوير مهاراتك ومشاركتك في التنمية الاقتصادية"
                : language === "fr"
                ? "Découvrez les initiatives et opportunités disponibles pour développer vos compétences et votre participation au développement économique"
                : "Discover the initiatives and opportunities available to develop your skills and participate in economic development"
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <initiative.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {getInitiativeTitle(initiative)}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

            {/* Quick Links Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              {language === "ar" ? "استكشف المنصة" : language === "fr" ? "Explorer la plateforme" : "Explore the Platform"}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/discover">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Globe className="h-8 w-8 text-primary" />
                    <h3 className="text-lg font-semibold">
                      {language === "ar" ? "فيديو تعريفي" : language === "fr" ? "Vidéo introductive" : "Introductory Video"}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "ar" 
                      ? "تعلم كيفية استخدام المنصة وفهم قانون المالية"
                      : language === "fr"
                      ? "Apprenez à utiliser la plateforme et comprendre la loi de finances"
                      : "Learn how to use the platform and understand finance law"
                    }
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/quiz">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <FileText className="h-8 w-8 text-primary" />
                    <h3 className="text-lg font-semibold">
                      {language === "ar" ? "اختبر معرفتك" : language === "fr" ? "Quiz" : "Quiz"}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "ar" 
                      ? "استبيان تفاعلي لاختبار معرفتك بقانون المالية"
                      : language === "fr"
                      ? "Quiz interactif pour tester vos connaissances financières"
                      : "Interactive quiz to test your financial knowledge"
                    }
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/sectors">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                    <h3 className="text-lg font-semibold">
                      {language === "ar" ? "القطاعات" : language === "fr" ? "Secteurs" : "Sectors"}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "ar" 
                      ? "استكشف ميزانيات القطاعات المختلفة"
                      : language === "fr"
                      ? "Explorez les budgets des différents secteurs"
                      : "Explore budgets of different sectors"
                    }
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/my-region">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <MapPin className="h-8 w-8 text-primary" />
                    <h3 className="text-lg font-semibold">
                      {language === "ar" ? "الأقاليم" : language === "fr" ? "Régions" : "Regions"}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "ar" 
                      ? "اكتشف المشاريع والميزانية المخصصة لمنطقتك"
                      : language === "fr"
                      ? "Découvrez les projets et le budget de votre région"
                      : "Discover projects and budget allocated to your region"
                    }
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Mizaniaty.ma</h3>
              <p className="text-sm text-muted-foreground">
                {language === "ar" 
                  ? "منصة تفاعلية لفهم قانون المالية والميزانيات"
                  : language === "fr"
                  ? "Plateforme interactive pour comprendre la loi de finances et les budgets"
                  : "Interactive platform to understand finance law and budgets"
                }
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">
                {language === "ar" ? "الصفحات" : language === "fr" ? "Pages" : "Pages"}
              </h4>
              <ul className="space-y-2 text-sm">
                {navItems.slice(0, 4).map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-muted-foreground hover:text-primary transition-colors">
                      {getNavLabel(item)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">
                {language === "ar" ? "المزيد" : language === "fr" ? "Plus" : "More"}
              </h4>
              <ul className="space-y-2 text-sm">
                {navItems.slice(4).map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-muted-foreground hover:text-primary transition-colors">
                      {getNavLabel(item)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">
                {language === "ar" ? "تواصل معنا" : language === "fr" ? "Contact" : "Contact"}
              </h4>
              <div className="flex gap-2">
                <Badge variant="outline">العربية</Badge>
                <Badge variant="outline">Français</Badge>
                <Badge variant="outline">English</Badge>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>
              © 2024 Mizaniaty.ma - {language === "ar" ? "جميع الحقوق محفوظة" : language === "fr" ? "Tous droits réservés" : "All rights reserved"}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;