import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export const getDeleteTransactionContent = (
  handleCancel: () => void,
  handleConfirm: () => void,
  transactionTitle: string
) => ({
  title: "Delete Transaction",
  description: `Are you sure you want to delete the transaction "${transactionTitle}"? This action cannot be undone.`,
  icon: (
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
      <ExclamationTriangleIcon className="h-8 w-8 text-red-600" aria-hidden="true" />
    </div>
  ),
  children: () => null,
  btnText: "Delete",
  btnSubmit: handleConfirm,
  btnCancel: handleCancel,
}); 