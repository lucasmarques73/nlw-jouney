import { GuestList } from "./guest-list";
import { ImportantLinks } from "./important-links";
import { DestinationAndDateHeader } from "./destination-and-date-header";
import { Activities } from "./activities";

export function TripDetailsPage() {


    return (
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
            <DestinationAndDateHeader />

            <main className="flex gap-16 px-4">
                <Activities />

                <div className="w-80 space-y-6">

                    <ImportantLinks />

                    <div className="w-full h-px bg-zinc-800" />

                    <GuestList />

                </div>
            </main>

        </div>
    )
}