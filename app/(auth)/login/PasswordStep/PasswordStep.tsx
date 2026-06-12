import React, { useState } from 'react'

export default function PasswordStep({ onComplete }) {
  const [password, setPassword] = useState('')
  const getPassword = (e) => {
    e.preventDefault()
    onComplete({
      data: password,
    })
  }

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <p className="mb-2 text-gray-800 dark:text-gray-100 font-DanaMedium text-lg">
        رمز عبور را وارد کنید
      </p>

      <form className="space-y-5" onSubmit={getPassword} >
        <div>
          <label
            htmlFor="identifier"
            className="block text-sm/6 font-medium text-gray-500 dark:text-gray-300"
          >
            لطفا رمز عبور خود را به درستی وارد کنید
          </label>


          <div className="mt-3">
            <input
              id="identifier"
              type="text"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full p-3 text-base outline dark:outline-none outline-1 -outline-offset-1 placeholder:text-gray-400 sm:text-sm/6 transition-all text-gray-800 dark:text-gray-100 dark:bg-gray-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded-md focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-blue-400"
            />
          </div>

          {/* {error && (
                        <p className="text-error mt-2">
                            {error}
                        </p>
                    )} */}
        </div>

        <div>
          <button type="submit" className="submit-btn">
            ادامه
          </button>
        </div>
      </form>
    </div>
  )
}
