import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestsModal } from './modals/invite-guests-modal'
import { ConfirmTripModal } from './modals/confirm-trip-modal'
import { DestinationAndDateStep } from './steps/destination-and-date-step'
import { InviteGuestsStep } from './steps/invite-guests-step'
import { Header } from './header'
import { Footer } from './footer'


export function CreateTripPage() {

    const navigate = useNavigate()

    const [isGuestInputOpen, setIsGuestInputOpen] = useState(false)
    const [isGuestModalOpen, setIsGuestModalOpen] = useState(false)
    const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)
    const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])

    function openGuestInput() {
        setIsGuestInputOpen(true)
    }

    function closeGuestInput() {
        setIsGuestInputOpen(false)
    }

    function openGuestModal() {
        setIsGuestModalOpen(true)
    }

    function closeGuestModal() {
        setIsGuestModalOpen(false)
    }

    function openConfirmTripModal() {
        setIsConfirmTripModalOpen(true)
    }

    function closeConfirmTripModal() {
        setIsConfirmTripModalOpen(false)
    }

    function addEmailToInvite(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const data = new FormData(e.currentTarget)
        const email = data.get('email')?.toString()

        if (!email) {
            return
        }


        if (emailsToInvite.includes(email)) {
            e.currentTarget.reset()
            return
        }

        setEmailsToInvite([...emailsToInvite, email])


        e.currentTarget.reset()
    }

    function removeEmailFromInvites(emailToRemove: string) {

        const newEmailsList = emailsToInvite.filter(e => e !== emailToRemove)

        setEmailsToInvite(newEmailsList)
    }

    function createTrip(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        navigate('/trips/123')
    }

    return (
        <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
            <div className="max-w-3xl w-full px-6 text-center space-y-10">

                <Header />

                <div className="space-y-4">
                    <DestinationAndDateStep
                        closeGuestInput={closeGuestInput}
                        openGuestInput={openGuestInput}
                        isGuestInputOpen={isGuestInputOpen}
                    />

                    {isGuestInputOpen && (
                        <InviteGuestsStep
                            emailsToInvite={emailsToInvite}
                            openConfirmTripModal={openConfirmTripModal}
                            openGuestModal={openGuestModal}
                        />
                    )}
                </div>

                <Footer />
            </div>

            {isGuestModalOpen && (
                <InviteGuestsModal
                    closeGuestModal={closeGuestModal}
                    emailsToInvite={emailsToInvite}
                    removeEmailFromInvites={removeEmailFromInvites}
                    addEmailToInvite={addEmailToInvite} />
            )}

            {isConfirmTripModalOpen && (
                <ConfirmTripModal
                    closeConfirmTripModal={closeConfirmTripModal}
                    createTrip={createTrip}
                />
            )}
        </div>
    )
}

