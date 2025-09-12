import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { useNavigate } from "react-router"
import Logo from "../../assets/vet.png";

export function Formulario({
    className,
    ...props
}: React.ComponentProps<"div">) {

    const navigate = useNavigate()

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardTitle className="items-center justify-center flex">
                    <img src={Logo} className="h-60"/>
                </CardTitle>
                <CardHeader>
                    <CardTitle className="text-center">Faça seu cadastro agora mesmo</CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="full-name">Nome completo</Label>
                                <Input id="full-name" type="text" required />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="full-name">CPF</Label>
                                <Input id="full-name" type="text" required maxLength={11} />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="email-contato">E-mail</Label>
                                <Input id="email-contato" type="email" required />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="crm">CRMV</Label>
                                <Input id="crmv" type="email" required />
                            </div>
                            <div className="grid gap-3">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Senha</Label>
                                </div>
                                <Input id="password" type="password" required />
                            </div>
                            <div className="grid gap-3">
                                <div className="flex items-center">
                                    <Label htmlFor="confirmacao-senha">Confirme sua senha</Label>
                                </div>
                                <Input id="confirmacao-senha" type="password" required />
                            </div>
                            <div className="flex flex-col gap-3">
                                <Button type="button" className="w-full" onClick={() => navigate('/dash', {
                                     replace: true,
                                     
                                })}>
                                    Registrar-se
                                </Button>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )


}
