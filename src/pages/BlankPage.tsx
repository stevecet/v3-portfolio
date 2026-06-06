
import { Construction, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useNavigate, useLocation } from "react-router-dom"
import { useLanguage } from "@/contexts/useLanguage"

export function BlankPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useLanguage()

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
            <Construction className="h-10 w-10 text-muted-foreground" />
          </div>
          <CardTitle className="text-2xl">{t("blank.title")}</CardTitle>
          <CardDescription>
            {t("blank.description")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              {t("blank.instruction").replace("{path}", location.pathname)}
            </p>
            <Button 
              onClick={() => navigate("/")} 
              className="w-full"
              variant="default"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("blank.go_home")}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
