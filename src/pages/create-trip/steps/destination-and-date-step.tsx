import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";

interface DestinationAndDateStep {
    isGuestInputOpen: boolean
    openGuestInput: () => void
    closeGuestInput: () => void
}

export function DestinationAndDateStep({ isGuestInputOpen, openGuestInput, closeGuestInput }: DestinationAndDateStep) {

    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
                <MapPin className="size-5 text-zinc-400" />
                <input type="text" disabled={isGuestInputOpen} className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" placeholder="Pra onde você vai?" />
            </div>

            <div className="flex items-center gap-2">
                <Calendar className="size-5 text-zinc-400" />
                <input type="text" disabled={isGuestInputOpen} className="bg-transparent text-lg placeholder-zinc-400 outline-none w-40" placeholder="Quando?" />
            </div>

            <div className="w-px h-6 bg-zinc-800"></div>

            {!isGuestInputOpen
                ? (
                    <Button onClick={openGuestInput}>
                        Continuar
                        <ArrowRight className="size-5" />
                    </Button>
                )
                : (
                    <Button onClick={closeGuestInput} variant="secondary">
                        Alterar local/data
                        <Settings2 className="size-5" />
                    </Button>
                )}
        </div>)
}