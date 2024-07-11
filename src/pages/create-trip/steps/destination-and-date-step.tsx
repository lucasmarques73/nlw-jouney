import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { Button } from "../../../components/button";
import "react-day-picker/dist/style.css";
import { DateRange, DayPicker } from "react-day-picker";
import { useState } from "react";

interface DestinationAndDateStep {
    isGuestInputOpen: boolean
    openGuestInput: () => void
    closeGuestInput: () => void
}

export function DestinationAndDateStep({ isGuestInputOpen, openGuestInput, closeGuestInput }: DestinationAndDateStep) {
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
    const [range, setRange] = useState<DateRange | undefined>();


    function openDatePicker() {
        setIsDatePickerOpen(true)
    }

    function closeDatePicker() {
        setIsDatePickerOpen(false)
    }

    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
                <MapPin className="size-5 text-zinc-400" />
                <input type="text" disabled={isGuestInputOpen} className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" placeholder="Pra onde você vai?" />
            </div>

            <button onClick={openDatePicker} className="flex items-center gap-2">
                <Calendar className="size-5 text-zinc-400" />
                <span className="text-lg text-zinc-400 w-40 text-left">Quando?</span>
            </button>

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


            {isDatePickerOpen && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
                    <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">

                                <h2 className="text-lg font-semibold">Selecionar data</h2>

                                <button onClick={closeDatePicker}>
                                    <X className="size-5 text-zinc-400" />
                                </button>

                            </div>
                        </div>

                        <DayPicker mode="range" selected={range} onSelect={setRange} />

                    </div>
                </div>
            )}
        </div>)
}