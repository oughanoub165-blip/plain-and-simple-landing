import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertTriangle, Bug, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const ReportProblem = () => {
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
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">
              {language === "ar" ? "بلّغ عن مشكلة" : "Signaler un problème"}
            </h1>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bug className="h-6 w-6 text-primary" />
                {language === "ar" ? "المشاكل التقنية" : "Problèmes techniques"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>{language === "ar" ? "وصف المشكلة" : "Description du problème"}</Label>
                <Textarea placeholder={language === "ar" ? "اشرح المشكلة التي واجهتها..." : "Expliquez le problème rencontré..."} />
              </div>
              <div className="space-y-2">
                <Label>{language === "ar" ? "بريدك الإلكتروني" : "Votre email"}</Label>
                <Input type="email" placeholder={language === "ar" ? "للرد عليك" : "Pour vous répondre"} />
              </div>
              <Button className="w-full">
                <AlertTriangle className="h-4 w-4 mr-2" />
                {language === "ar" ? "إرسال التبليغ" : "Envoyer le signalement"}
              </Button>
            </CardContent>
          </Card>

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

export default ReportProblem;