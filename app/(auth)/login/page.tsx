'use client'
import React, { useState } from 'react'
import IdentifierStep from './PasswordStep/IdentifierStep'
import PasswordStep from './PasswordStep/PasswordStep'
import OtpStep from './PasswordStep/OtpStep'

export default function Page() {
  const [step, setStep] = useState('identifier')
  const [value, setValue] = useState()

  const handleIdentifierComplete = ({ type, value }) => {
    setStep(type)
    setValue(value)
  }
  const handlePasswordComplete = (password) => {
    // passwordService({
    //   email: value,
    //   password
    // })
  }

  const handleOtpComplete = (code) => {
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