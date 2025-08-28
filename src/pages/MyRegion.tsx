import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Building, Calendar, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const MyRegion = () => {
  const [language, setLanguage] = useState("ar");
  const [selectedRegion, setSelectedRegion] = useState("");

  const regions = [
    { 
      value: "casablanca-settat", 
      name: language === "ar" ? "الدار البيضاء - سطات" : "Casablanca-Settat",
      budget: "45.2",
      population: "6.9M"
    },
    { 
      value: "rabat-sale-kenitra", 
      name: language === "ar" ? "الرباط - سلا - القنيطرة" : "Rabat-Salé-Kénitra",
      budget: "32.7",
      population: "4.6M"
    },
    { 
      value: "fes-meknes", 
      name: language === "ar" ? "فاس - مكناس" : "Fès-Meknès",
      budget: "28.1",
      population: "4.2M"
    },
    { 
      value: "marrakech-safi", 
      name: language === "ar" ? "مراكش - آسفي" : "Marrakech-Safi",
      budget: "31.5",
      population: "4.5M"
    },
    { 
      value: "oriental", 
      name: language === "ar" ? "الشرق" : "Oriental",
      budget: "18.9",
      population: "2.3M"
    },
    { 
      value: "tanger-tetouan", 
      name: language === "ar" ? "طنجة - تطوان - الحسيمة" : "Tanger-Tétouan-Al Hoceïma",
      budget: "26.4",
      population: "3.6M"
    }
  ];

  const projects = [
    {
      name: language === "ar" ? "مشروع الطريق السيار الدار البيضاء - أكادير" : "Autoroute Casablanca-Agadir",
      budget: "8.5",
      status: language === "ar" ? "قيد الإنجاز" : "En cours",
      completion: 65,
      year: "2024"
    },
    {
      name: language === "ar" ? "مستشفى جامعي جديد" : "Nouveau CHU",
      budget: "3.2",
      status: language === "ar" ? "مكتمل" : "Terminé",
      completion: 100,
      year: "2023"
    },
    {
      name: language === "ar" ? "محطة معالجة المياه العادمة" : "Station d'épuration",
      budget: "1.8",
      status: language === "ar" ? "في التخطيط" : "Planifié",
      completion: 15,
      year: "2025"
    },
    {
      name: language === "ar" ? "مركز التكوين المهني" : "Centre de formation professionnelle",
      budget: "2.1",
      status: language === "ar" ? "قيد الإنجاز" : "En cours",
      completion: 80,
      year: "2024"
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
              {language === "ar" ? "منطقتي ومشاريعي" : "Ma région et mes projets"}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === "ar" 
                ? "اكتشف الميزانية المخصصة لمنطقتك والمشاريع التنموية"
                : "Découvrez le budget alloué à votre région et les projets de développement"
              }
            </p>
          </div>

          {/* Morocco Map */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                {language === "ar" ? "خريطة المغرب التفاعلية" : "Carte interactive du Maroc"}
              </CardTitle>
              <CardDescription>
                {language === "ar" 
                  ? "انقر على منطقتك لعرض الميزانية والمشاريع المخصصة لها"
                  : "Cliquez sur votre région pour voir le budget et les projets qui lui sont alloués"
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Simplified Morocco Map */}
              <div className="relative bg-muted/30 rounded-lg p-8 min-h-[400px] flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin className="h-16 w-16 text-primary mx-auto" />
                  <h3 className="text-lg font-semibold">
                    {language === "ar" ? "خريطة المغرب التفاعلية" : "Carte interactive du Maroc"}
                  </h3>
                  <p className="text-muted-foreground max-w-md">
                    {language === "ar" 
                      ? "اختر منطقتك من القائمة أدناه لعرض المعلومات التفصيلية"
                      : "Sélectionnez votre région dans la liste ci-dessous pour voir les informations détaillées"
                    }
                  </p>
                  
                  <div className="w-full max-w-md mx-auto">
                    <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                      <SelectTrigger>
                        <SelectValue placeholder={language === "ar" ? "اختر منطقتك" : "Choisissez votre région"} />
                      </SelectTrigger>
                      <SelectContent>
                        {regions.map((region) => (
                          <SelectItem key={region.value} value={region.value}>
                            {region.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Region Overview */}
          {selectedRegion && (
            <Card>
              <CardHeader>
                <CardTitle>
                  {regions.find(r => r.value === selectedRegion)?.name}
                </CardTitle>
                <CardDescription>
                  {language === "ar" ? "نظرة عامة على المنطقة" : "Aperçu de la région"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 bg-primary/10 rounded-lg">
                    <div className="text-3xl font-bold text-primary">
                      {regions.find(r => r.value === selectedRegion)?.budget}
                    </div>
                    <div className="text-muted-foreground">
                      {language === "ar" ? "مليار درهم - الميزانية" : "Milliards MAD - Budget"}
                    </div>
                  </div>
                  
                  <div className="text-center p-6 bg-blue-500/10 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">
                      {regions.find(r => r.value === selectedRegion)?.population}
                    </div>
                    <div className="text-muted-foreground">
                      {language === "ar" ? "عدد السكان" : "Population"}
                    </div>
                  </div>
                  
                  <div className="text-center p-6 bg-green-500/10 rounded-lg">
                    <div className="text-3xl font-bold text-green-600">24</div>
                    <div className="text-muted-foreground">
                      {language === "ar" ? "مشروع نشط" : "Projets actifs"}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Regional Projects */}
          {selectedRegion && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-6 w-6 text-primary" />
                  {language === "ar" ? "المشاريع الإقليمية الرئيسية" : "Projets régionaux principaux"}
                </CardTitle>
                <CardDescription>
                  {language === "ar" 
                    ? "المشاريع التنموية المحدثة سنوياً"
                    : "Projets de développement mis à jour annuellement"
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {projects.map((project, index) => (
                    <div key={index} className="border rounded-lg p-6 space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold">{project.name}</h3>
                          <div className="flex gap-2 flex-wrap">
                            <Badge variant="outline">
                              {project.budget} {language === "ar" ? "م.د" : "M MAD"}
                            </Badge>
                            <Badge 
                              variant={
                                project.status === (language === "ar" ? "مكتمل" : "Terminé") 
                                  ? "default" 
                                  : project.status === (language === "ar" ? "قيد الإنجاز" : "En cours")
                                  ? "secondary"
                                  : "outline"
                              }
                            >
                              {project.status}
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {project.year}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="text-center md:text-right">
                          <div className="text-2xl font-bold text-primary">{project.completion}%</div>
                          <div className="text-sm text-muted-foreground">
                            {language === "ar" ? "مُكتمل" : "Terminé"}
                          </div>
                        </div>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.completion}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <Button className="w-full md:w-auto">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    {language === "ar" ? "عرض جميع المشاريع" : "Voir tous les projets"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Yearly Updates */}
          <Card>
            <CardHeader>
              <CardTitle>
                {language === "ar" ? "التحديثات السنوية" : "Mises à jour annuelles"}
              </CardTitle>
              <CardDescription>
                {language === "ar" 
                  ? "تصفح ميزانيات ومشاريع السنوات السابقة"
                  : "Parcourez les budgets et projets des années précédentes"
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                {[2024, 2023, 2022, 2021].map((year) => (
                  <Card key={year} className="cursor-pointer hover:shadow-lg transition-all">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-primary">{year}</div>
                      <div className="text-sm text-muted-foreground">
                        {language === "ar" ? "الميزانية السنوية" : "Budget annuel"}
                      </div>
                    </CardContent>
                  </Card>
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

export default MyRegion;