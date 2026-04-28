import Link from "next/link"
import { Button } from "../ui/button"
import { Card, CardHeader, CardContent } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"


//components/login/right-section.tsx
export const RightSection = () => {
    return (
        <div className="w-1/2">
            <Card className="h-full flex flex-col  justify-center px-14 gap-16">
                <CardHeader>
                    <span className="text-3xl font-bold">Login</span>
                </CardHeader>

                <CardContent>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <Label>Email</Label>
                            <Input type="text "
                                className=" py-2 h-10 text-lg"
                                placeholder="make your email... "
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label>Password</Label>
                            <Input type="password"
                                className=" py-2 h-10 text-lg"
                                placeholder="make your password..."
                            />
                        </div>


                        <Button className="bg-[#13a4ec] text-white w-full font-bold py-3 drop-shadow-lg " >Login</Button>
                    </div>

                    <div>
                        <span>Don't have account yet ?</span>
                        <Link href="/register" className="text-[#13a4ec] font-semibold" >create acount now</Link>

                    </div>
                </CardContent>
            </Card>
        </div>
    )
} 