"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Loader2, User, RefreshCw } from "lucide-react"
import ProgressBar from "./progress-bar"
import { getRobloxUserHeadshot, getRobloxUserHeadshotAlternative } from "@/app/actions/roblox"
import { useLocalization } from "./localization-provider"

interface UsernamePageProps {
  onNext: () => void
  prizeAmount: number
  username: string
  setUsername: (username: string) => void
}

export default function UsernamePage({ onNext, prizeAmount, username, setUsername }: UsernamePageProps) {
  const { t } = useLocalization()
  const [isVerifying, setIsVerifying] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const [userHeadshotUrl, setUserHeadshotUrl] = useState<string | null>(null)
  const [verificationError, setVerificationError] = useState<string | null>(null)
  const [retryCount, setRetryCount] = useState(0)

  const handleVerify = async (useAlternative = false) => {
    if (!username.trim()) {
      setVerificationError(t.pleaseEnterUsername)
      return
    }

    setIsVerifying(true)
    setVerificationError(null)
    setUserHeadshotUrl(null)

    try {
      const result = useAlternative
        ? await getRobloxUserHeadshotAlternative(username)
        : await getRobloxUserHeadshot(username)

      if (result.success && result.headshotUrl) {
        setUserHeadshotUrl(result.headshotUrl)
        setIsVerified(true)
        setRetryCount(0)
      } else {
        setVerificationError(result.error || t.userNotFound)
        setIsVerified(false)

        // Auto-retry with alternative method if first attempt fails
        if (!useAlternative && retryCount < 1) {
          setRetryCount((prev) => prev + 1)
          setTimeout(() => {
            handleVerify(true)
          }, 1000)
          return
        }
      }
    } catch (error) {
      setVerificationError(t.networkError)
      setIsVerified(false)
    }

    setIsVerifying(false)
  }

  const handleRetry = () => {
    setRetryCount(0)
    handleVerify(false)
  }

  const handleConfirm = () => {
    onNext()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 flex flex-col items-center justify-center p-4">
      <ProgressBar currentStep={2} totalSteps={5} />
      <div className="flex flex-col items-center justify-center flex-1 w-full max-w-md">
        {!isVerified ? (
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="text-center w-full">
            <motion.div
              className="trust-card p-8 mb-6"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              <h1 className="text-3xl font-bold text-blue-600 mb-2">{t.enterUsername}</h1>
              <p className="text-blue-500 text-sm">{t.verifyAccountDesc}</p>
            </motion.div>

            <div className="space-y-4">
              <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder={t.yourRobloxUsername}
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value)
                    setVerificationError(null)
                  }}
                  disabled={isVerifying}
                  className="trust-input w-full pl-12"
                  onKeyPress={(e) => {
                    if (e.key === "Enter" && username.trim() && !isVerifying) {
                      handleVerify()
                    }
                  }}
                />
              </motion.div>

              {verificationError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-100 border-2 border-red-400 rounded-xl p-3"
                >
                  <p className="text-red-600 font-bold text-sm">{verificationError}</p>
                  {retryCount > 0 && (
                    <button
                      onClick={handleRetry}
                      className="mt-2 text-red-600 underline text-xs flex items-center gap-1 mx-auto"
                    >
                      <RefreshCw className="w-3 h-3" />
                      {t.tryAgain}
                    </button>
                  )}
                </motion.div>
              )}

              <motion.button
                onClick={() => handleVerify()}
                disabled={!username.trim() || isVerifying}
                className={`trust-button w-full ${!username.trim() || isVerifying ? "" : "hover:bg-blue-600"}`}
                whileHover={{ scale: username.trim() && !isVerifying ? 1.05 : 1 }}
                whileTap={{ scale: username.trim() && !isVerifying ? 0.95 : 1 }}
                animate={
                  username.trim()
                    ? {
                        boxShadow: [
                          "0 4px 15px rgba(59,130,246,0.3)",
                          "0 8px 25px rgba(59,130,246,0.5)",
                          "0 4px 15px rgba(59,130,246,0.3)",
                        ],
                      }
                    : {}
                }
                transition={{ duration: 2, repeat: username.trim() ? Number.POSITIVE_INFINITY : 0 }}
              >
                {isVerifying ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {retryCount > 0 ? t.tryingAlternative : t.verifying}
                  </div>
                ) : (
                  t.verifyAccount
                )}
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-center w-full"
          >
            <motion.div
              className="trust-card p-8"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <motion.div
                className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 border-4 border-blue-500 overflow-hidden"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                {userHeadshotUrl ? (
                  <img
                    src={userHeadshotUrl || "/placeholder.svg"}
                    alt={`${username}'s Roblox avatar headshot`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `/placeholder.svg?height=96&width=96&text=${encodeURIComponent(username)}`
                    }}
                  />
                ) : (
                  <img
                    src={`/placeholder.svg?height=96&width=96&text=${encodeURIComponent(username)}`}
                    alt="Placeholder avatar"
                    className="w-full h-full object-cover"
                  />
                )}
              </motion.div>
              <h2 className="text-2xl font-bold text-blue-600 mb-2">
                {t.welcome}, {username}! ✅
              </h2>
              <p className="text-blue-500 font-bold mb-6">{t.accountVerified}</p>
              <motion.button
                onClick={handleConfirm}
                className="trust-button w-full hover:bg-blue-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 4px 15px rgba(59,130,246,0.3)",
                    "0 8px 25px rgba(59,130,246,0.5)",
                    "0 4px 15px rgba(59,130,246,0.3)",
                  ],
                }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                {t.continueToQuiz}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Enhanced Loading Overlay */}
      <AnimatePresence>
        {isVerifying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-blue-900/80 flex items-center justify-center z-50"
          >
            <motion.div
              className="trust-card p-8 text-center mx-4 max-w-sm"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}>
                <Loader2 className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              </motion.div>
              <p className="text-blue-600 font-bold text-lg">
                {retryCount > 0 ? t.tryingAlternative : t.connectingToRoblox}
              </p>
              <div className="flex gap-1 justify-center mt-3">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-blue-500 rounded-full"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
              {retryCount > 0 && <p className="text-blue-400 text-xs mt-2">{t.usingBackupServers}</p>}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
