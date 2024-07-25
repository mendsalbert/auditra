import { Dialog } from "@headlessui/react";

export interface ErrorModalProps {
  isOpen: boolean;
  closeModal: () => void;
  message: string;
}

export default function ErrorModal({
  isOpen: isOpen,
  closeModal: closeModal,
  message: message,
}: ErrorModalProps) {
  return (
    <Dialog
      open={isOpen}
      onClose={closeModal}
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen px-4 text-center">
        <div
          className="fixed inset-0 bg-black opacity-50"
          aria-hidden="true"
        ></div>
        <div className="bg-white dark:bg-neutral-900 rounded-lg overflow-hidden shadow-xl transform transition-all max-w-md w-full p-8">
          <Dialog.Title className="text-lg font-bold text-gray-900 dark:text-gray-100">
            Invalid Smart Contract
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-gray-700 dark:text-gray-300">
            {message}
          </Dialog.Description>
          <div className="mt-4">
            <button
              onClick={closeModal}
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
