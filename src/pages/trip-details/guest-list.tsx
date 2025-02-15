import { CircleCheck, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function GuestList() {
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Convidados</h2>

            <div className="space-y-5 ">
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Talytta</span>
                        <span className="block text-sm text-zinc-400 truncate">
                            talytta110@hotmail.com
                        </span>
                    </div>
                    <CircleDashed className="size-5 text-zinc-400 shrink-0" />
                </div>

                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Jhon Doe</span>
                        <span className="block text-sm text-zinc-400 truncate">
                            jhon.doe@email.com
                        </span>
                    </div>
                    <CircleCheck className="size-5 text-lime-300 shrink-0" />
                </div>

            </div>

            <Button size="full" variant="secondary">
                <UserCog className="size-5" />
                Gerenciar convidados
            </Button>
        </div>
    )
}