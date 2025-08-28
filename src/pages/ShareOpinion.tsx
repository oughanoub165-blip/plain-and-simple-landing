import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Video, Users } from "lucide-react";
import { Link } from "react-router-dom";

const ShareOpinion = () => {
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
              {language === "ar" ? "شارك رأيك" : "Partager votre opinion"}
            </h1>
            <p className="text-xl text-muted-foreground">
              {language === "ar" ? "صوت الشباب مهم في التنمية الاقتصادية" : "La voix des jeunes compte dans le développement économique"}
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-6 w-6 text-primary" />
                {language === "ar" ? "شارك اقتراحاتك" : "Partagez vos suggestions"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea 
                placeholder={language === "ar" ? "اكتب اقتراحك هنا..." : "Écrivez votre suggestion ici..."}
                className="min-h-32"
              />
              <Button className="w-full">
                {language === "ar" ? "إرسال الاقتراح" : "Envoyer la suggestion"}
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

export default ShareOpinion;