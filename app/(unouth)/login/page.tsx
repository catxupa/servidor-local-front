import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

//app/(unouth)/login/page.tsx
export default function LoginPage() {
    return (
        <div className="bg-gray-200  h-screen flex justify-between">
            <div className="w-1/2 bg-red-500">
                <Badge variant="secondary">precision concierge service</Badge>

                <h1>Elevate your standart of service</h1>

                <p>Experience the pinnacle of personalized
                    assistance with our premium concierge service.
                    From exclusive reservations to seamless travel
                    arrangements, we cater to your every need with
                    discretion and efficiency.
                </p>

                <div className="flex justify-evenly w-full">
                    <Card>
                        <CardContent>
                            <CardTitle >
                                Professional
                            </CardTitle>

                            <CardDescription>
                                Exclusive acess to top-tier providers and clients
                            </CardDescription>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            <CardTitle >
                                Secured platform
                            </CardTitle>

                            <CardDescription>
                                Enterprise-grade security for all your transactions and data.
                            </CardDescription>
                        </CardContent>
                    </Card>

                     
                </div>
            </div>




            <div className="w-1/2 bg-blue-500">
                direita
            </div>
        </div>
    )
} 