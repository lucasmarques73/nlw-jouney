import { Plus } from "lucide-react";
import { ActivitiesList } from "./activities-list";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { Button } from "../../../components/button";

export function Activities() {

    const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)

    function openCreateActivityModal() {
        setIsCreateActivityModalOpen(true)
    }

    function closeCreateActivityModal() {
        setIsCreateActivityModalOpen(false)
    }


    return (
        <>
            <div className="flex-1 space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-semibold">Atividades</h2>
                    <Button onClick={openCreateActivityModal}>
                        <Plus className="size-5" />
                        Cadastrar atividade
                    </Button>
                </div>
                <ActivitiesList />
            </div>

            {isCreateActivityModalOpen && (
                <CreateActivityModal
                    closeCreateActivityModal={closeCreateActivityModal}
                />
            )}
        </>
    )
}