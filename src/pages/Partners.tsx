import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Users, Briefcase, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Partners = () => {
  const [language, setLanguage] = useState("ar");

  const partners = [
    {
      icon: Building,
      name: language === "ar" ? "وزارة الاقتصاد والمالية" : "Ministère de l'Économie et des Finances"
    },
    {
      icon: Users,
      name: language === "ar" ? "المجلس الأعلى للحسابات" : "Cour des Comptes"
    },
    {
      icon: Globe,
      name: language === "ar" ? "الجماعات الترابية" : "Collectivités territoriales"
    },
    {
      icon: Briefcase,
      name: language === "ar" ? "وزارة الإدماج الاقتصادي والمقاولات الصغرى والمتوسطة" : "Ministère de l'Inclusion Économique et PME"
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
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">
              {language === "ar" ? "المؤسسات الشريكة" : "Institutions partenaires"}
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {partners.map((partner, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <partner.icon className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold">{partner.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

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

export default Partners;