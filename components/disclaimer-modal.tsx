"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useLocalization } from "./localization-provider"

interface DisclaimerModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DisclaimerModal({ isOpen, onClose }: DisclaimerModalProps) {
  const { t } = useLocalization()

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100]"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="bg-white rounded-lg p-8 max-w-md mx-4 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 transition-colors"
              aria-label={t.close}
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t.importantLegalDisclaimer}</h2>

            <div className="text-gray-700 text-sm space-y-4">
              <p>{t.entertainmentPurpose}</p>
              <p>{t.noAffiliation}</p>
              <p>{t.voluntaryParticipation}</p>
              <p>{t.simulatedExperience}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
