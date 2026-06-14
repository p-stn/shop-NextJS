'use client'
import React, { useState } from 'react'
import IdentifierStep from './PasswordStep/IdentifierStep'
import PasswordStep from './PasswordStep/PasswordStep'
import OtpStep from './PasswordStep/OtpStep'

export default function Page() {
  const [step, setStep] = useState('identifier')
  const [value, setValue] = useState('')

  const handleIdentifierComplete = ({ type, value }: { type: string; value: string }) => {
    setStep(type)
    setValue(value)
  }
  const handlePasswordComplete = ({ password }: { password: string }) => {
    console.log("password>>", password)
    // passwordService({
    //   email: value,
    //   password
    // })
  }

  const handleOtpComplete = ({ code }: { code: string }) => {
    console.log("code>>", code)
    // otpService({
    //   phone: value,
    //   code
    // })
  }

  return (
    <>
      {step === 'identifier' && (
        <IdentifierStep onComplete={handleIdentifierComplete} />
      )}

      {step === 'password' && (
        <PasswordStep onComplete={handlePasswordComplete} />
      )}

      {step === 'otp' && (
        <OtpStep onComplete={handleOtpComplete} />
      )}
    </>
  )
}