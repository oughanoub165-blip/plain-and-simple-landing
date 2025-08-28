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
    { icon: Users, title: "مبادرات حكومية", titleFr: "Initiatives gouvernementales" },
    { icon: BookOpen, title: "دورات تدريبية في المالية", titleFr: "Formations financières" },
    { icon: Briefcase, title: "فرص عمل", titleFr: "Opportunités d'emploi" },
    { icon: GraduationCap, title: "ورش مهارات الحياة", titleFr: "Ateliers de compétences" },
  ];

  const navItems = [
    { to: "/about", label: "من نحن", labelFr: "À propos" },
    { to: "/discover", label: "اكتشف", labelFr: "Découvrir" },
    { to: "/sectors", label: "القطاعات", labelFr: "Secteurs" },
    { to: "/my-region", label: "منطقتي ومشاريعي", labelFr: "Ma région" },
    { to: "/share-opinion", label: "شارك رأيك", labelFr: "Partager" },
    { to: "/partners", label: "شركاء", labelFr: "Partenaires" },
    { to: "/report-problem", label: "بلّغ عن مشكلة", labelFr: "Signaler" },
  ];

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
                  {language === "ar" ? "ميزانيتي" : "Ma Budget"}
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
                  {language === "ar" ? item.label : item.labelFr}
                </Link>
              ))}
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ar">العربية</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
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
                  {language === "ar" ? "ميزانيتي.ما" : "Mizaniaty.ma"}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {language === "ar" ? "Ma Budget" : "Votre Budget"}
                </p>
              </div>

              {/* Motivational Slogans */}
              <div className="space-y-6">
                <div className="p-6 bg-primary/10 rounded-lg border border-primary/20">
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    {language === "ar" ? "أين تذهب أموالك؟ اكتشف الميزانية بطريقتك." : "Où va votre argent ? Découvrez le budget à votre façon."}
                  </h2>
                  {language === "ar" && (
                    <p className="text-lg text-muted-foreground">
                      فلوسك فين كيمشيو؟ عرّف الميزانية على طريقتك.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Account Creation Box */}
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center">
                  {language === "ar" ? "إنشاء حساب جديد" : "Créer un compte"}
                </CardTitle>
                <CardDescription className="text-center">
                  {language === "ar" ? "انضم إلينا لاكتشاف ميزانيتك" : "Rejoignez-nous pour découvrir votre budget"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Tabs defaultValue="visitor" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="visitor">
                      {language === "ar" ? "زائر" : "Visiteur"}
                    </TabsTrigger>
                    <TabsTrigger value="member">
                      {language === "ar" ? "عضو" : "Membre"}
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="visitor" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        {language === "ar" ? "الاسم الكامل" : "Nom complet"}
                      </Label>
                      <Input id="name" placeholder={language === "ar" ? "أدخل اسمك" : "Entrez votre nom"} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        {language === "ar" ? "البريد الإلكتروني" : "Email"}
                      </Label>
                      <Input id="email" type="email" placeholder={language === "ar" ? "أدخل بريدك الإلكتروني" : "Entrez votre email"} />
                    </div>
                    <Button className="w-full">
                      {language === "ar" ? "إنشاء حساب" : "Créer un compte"}
                    </Button>
                  </TabsContent>
                  
                  <TabsContent value="member" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="member-email">
                        {language === "ar" ? "البريد الإلكتروني" : "Email"}
                      </Label>
                      <Input id="member-email" type="email" placeholder={language === "ar" ? "أدخل بريدك الإلكتروني" : "Entrez votre email"} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">
                        {language === "ar" ? "كلمة المرور" : "Mot de passe"}
                      </Label>
                      <Input id="password" type="password" placeholder={language === "ar" ? "أدخل كلمة المرور" : "Entrez votre mot de passe"} />
                    </div>
                    <Button className="w-full">
                      {language === "ar" ? "تسجيل الدخول" : "Se connecter"}
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
              {language === "ar" ? "مبادرات تنموية" : "Initiatives de développement"}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === "ar" 
                ? "اكتشف المبادرات والفرص المتاحة لتطوير مهاراتك ومشاركتك في التنمية الاقتصادية"
                : "Découvrez les initiatives et opportunités disponibles pour développer vos compétences et votre participation au développement économique"
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
                    {language === "ar" ? initiative.title : initiative.titleFr}
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
              {language === "ar" ? "استكشف المنصة" : "Explorer la plateforme"}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/discover">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Globe className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">
                      {language === "ar" ? "اكتشف" : "Découvrir"}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    {language === "ar" 
                      ? "تعلم كيفية استخدام المنصة وفهم قانون المالية بطريقة مبسطة"
                      : "Apprenez à utiliser la plateforme et à comprendre la loi de finances de manière simplifiée"
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
                    <h3 className="text-xl font-semibold">
                      {language === "ar" ? "القطاعات" : "Secteurs"}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    {language === "ar" 
                      ? "استكشف ميزانيات القطاعات المختلفة: التعليم، الصحة، البنية التحتية"
                      : "Explorez les budgets des différents secteurs : éducation, santé, infrastructure"
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
                    <h3 className="text-xl font-semibold">
                      {language === "ar" ? "منطقتي" : "Ma région"}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    {language === "ar" 
                      ? "اكتشف المشاريع والميزانية المخصصة لمنطقتك"
                      : "Découvrez les projets et le budget alloués à votre région"
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
                  : "Plateforme interactive pour comprendre la loi de finances et les budgets"
                }
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">
                {language === "ar" ? "الصفحات" : "Pages"}
              </h4>
              <ul className="space-y-2 text-sm">
                {navItems.slice(0, 4).map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-muted-foreground hover:text-primary transition-colors">
                      {language === "ar" ? item.label : item.labelFr}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">
                {language === "ar" ? "المزيد" : "Plus"}
              </h4>
              <ul className="space-y-2 text-sm">
                {navItems.slice(4).map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-muted-foreground hover:text-primary transition-colors">
                      {language === "ar" ? item.label : item.labelFr}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">
                {language === "ar" ? "تواصل معنا" : "Contact"}
              </h4>
              <div className="flex gap-2">
                <Badge variant="outline">العربية</Badge>
                <Badge variant="outline">Français</Badge>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>
              © 2024 Mizaniaty.ma - {language === "ar" ? "جميع الحقوق محفوظة" : "Tous droits réservés"}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;