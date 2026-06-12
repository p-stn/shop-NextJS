import validateIdentifier from '@/utils/validateIdentifier'
import React, { useState } from 'react'

type IdentifierStepProps = {
    onComplete: (data: {
        type: 'email' | 'phone'
        value: string
    }) => void
}

export default function IdentifierStep({ onComplete, }: IdentifierStepProps) {
    const [firstValue, setFirstValue] = useState('')
    const [error, setError] = useState('')

    const getUser = (e: React.FormEvent) => {
        e.preventDefault()

        const result = validateIdentifier(firstValue)

        if (!result) {
            setError('ایمیل یا شماره موبایل معتبر نیست')
            return
        }

        setError('')

        onComplete({
            type: result.type,
            value: firstValue,
        })
    }

    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <p className="mb-2 text-gray-800 dark:text-gray-100 font-DanaMedium text-lg">
                ورود | ثبت‌نام
            </p>

            <form className="space-y-5" onSubmit={getUser}>
                <div>
                    <label
                        htmlFor="identifier"
                        className="block text-sm/6 font-medium text-gray-500 dark:text-gray-300"
                    >
                        لطفا شماره موبایل یا ایمیل خود را وارد کنید
                    </label>

                    <div className="mt-3">
                        <input
                            id="identifier"
                            type="text"
                            required
                            value={firstValue}
                            onChange={(e) => setFirstValue(e.target.value)}
                            className="block w-full p-3 text-base outline dark:outline-none outline-1 -outline-offset-1 placeholder:text-gray-400 sm:text-sm/6 transition-all text-gray-800 dark:text-gray-100 dark:bg-gray-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded-md focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-blue-400"
                        />
                    </div>

                    {error && (
                        <p className="text-error mt-2">
                            {error}
                        </p>
                    )}
                </div>

                <div>
                    <button type="submit" className="submit-btn">
                        ورود
                    </button>
                </div>
            </form>

            <p className="mt-8 text-center text-sm/6 text-gray-500 dark:text-gray-300">
                ورود شما به معنای پذیرش
                <span className="text-blue-400"> قوانین سایت </span>
                است
            </p>
        </div>
    )
}