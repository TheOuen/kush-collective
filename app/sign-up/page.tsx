"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowLeft, Check } from "lucide-react"

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    ageVerified: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
      return
    }
    setIsLoading(true)
    // Demo: simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    // In production, this would create account and redirect
    window.location.href = "/dashboard"
  }

  const passwordStrength = () => {
    const { password } = formData
    let strength = 0
    if (password.length >= 8) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/[0-9]/.test(password)) strength++
    if (/[^A-Za-z0-9]/.test(password)) strength++
    return strength
  }

  const strengthLabels = ["Weak", "Fair", "Good", "Strong"]
  const strengthColors = ["bg-red-500", "bg-orange-500", "bg-amber-500", "bg-[#1a3329]"]

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image */}
      <div className="hidden lg:block lg:flex-1 relative">
        <Image
          src="/kush-lounge.jpg"
          alt="Kush Collective Lounge"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1a3329]/70" />
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="text-center text-[#f5f0e8]">
            <motion.h3
              className="font-[family-name:var(--font-playfair)] text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Join the Collective
            </motion.h3>
            <motion.p
              className="text-lg text-[#f5f0e8]/70 max-w-md mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Become a member and enjoy exclusive access to premium flower, amenities, and a relaxed social environment.
            </motion.p>
            <motion.div
              className="flex flex-col gap-4 text-left max-w-sm mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                "Access to premium flower selection",
                "TV lounge & dedicated workspace",
                "Balcony with Sea Point views",
                "Food ordering & refreshments",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#f5f0e8] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#1a3329]" />
                  </div>
                  <span className="text-[#f5f0e8]/90">{benefit}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 xl:px-24 bg-white overflow-y-auto py-12">
        <div className="w-full max-w-md mx-auto">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/kush-logo.png"
              alt="Kush Collective"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <div>
              <h1 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-neutral-900">Kush Collective</h1>
              <p className="text-xs text-neutral-400 tracking-wider uppercase">Private Members Collective</p>
            </div>
          </motion.div>

          {/* Progress Steps */}
          <motion.div
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step >= 1 ? 'bg-[#1a3329] text-[#f5f0e8]' : 'bg-neutral-200 text-neutral-500'}`}>
                {step > 1 ? <Check className="w-4 h-4" /> : "1"}
              </div>
              <span className={`text-sm ${step >= 1 ? 'text-neutral-900 font-medium' : 'text-neutral-500'}`}>Personal Info</span>
            </div>
            <div className="flex-1 h-px bg-neutral-200" />
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step >= 2 ? 'bg-[#1a3329] text-[#f5f0e8]' : 'bg-neutral-200 text-neutral-500'}`}>
                2
              </div>
              <span className={`text-sm ${step >= 2 ? 'text-neutral-900 font-medium' : 'text-neutral-500'}`}>Account</span>
            </div>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-neutral-900 mb-2">
              {step === 1 ? "Create your account" : "Set up your password"}
            </h2>
            <p className="text-neutral-500 mb-8">
              {step === 1
                ? "Join our private members collective today."
                : "Choose a secure password for your account."
              }
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {step === 1 ? (
              <>
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-2">
                      First name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="w-full pl-12 pr-4 py-3.5 bg-[#faf9f7] border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#1a3329] focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-2">
                      Last name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="w-full px-4 py-3.5 bg-[#faf9f7] border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#1a3329] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Email address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full pl-12 pr-4 py-3.5 bg-[#faf9f7] border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#1a3329] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                    Phone number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+27 82 123 4567"
                      className="w-full pl-12 pr-4 py-3.5 bg-[#faf9f7] border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#1a3329] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Age Verification */}
                <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200">
                  <input
                    id="ageVerified"
                    name="ageVerified"
                    type="checkbox"
                    checked={formData.ageVerified}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-[#1a3329] border-neutral-300 rounded focus:ring-[#1a3329]"
                    required
                  />
                  <label htmlFor="ageVerified" className="text-sm text-amber-800">
                    <span className="font-semibold">Age Verification:</span> I confirm that I am 18 years of age or older and legally permitted to consume cannabis products in South Africa.
                  </label>
                </div>
              </>
            ) : (
              <>
                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a strong password"
                      className="w-full pl-12 pr-12 py-3.5 bg-[#faf9f7] border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#1a3329] focus:border-transparent transition-all"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {/* Password Strength */}
                  {formData.password && (
                    <div className="mt-3">
                      <div className="flex gap-1 mb-2">
                        {[0, 1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className={`h-1.5 flex-1 ${i < passwordStrength() ? strengthColors[passwordStrength() - 1] : 'bg-neutral-200'}`}
                          />
                        ))}
                      </div>
                      <p className="text-xs text-neutral-500">
                        Password strength: <span className={`font-medium ${passwordStrength() >= 3 ? 'text-[#1a3329]' : passwordStrength() >= 2 ? 'text-amber-600' : 'text-red-600'}`}>
                          {strengthLabels[passwordStrength() - 1] || "Too weak"}
                        </span>
                      </p>
                    </div>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutral-700 mb-2">
                    Confirm password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                      className="w-full pl-12 pr-4 py-3.5 bg-[#faf9f7] border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#1a3329] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                    <p className="mt-2 text-sm text-red-600">Passwords do not match</p>
                  )}
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3">
                  <input
                    id="agreeTerms"
                    name="agreeTerms"
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-[#1a3329] border-neutral-300 rounded focus:ring-[#1a3329]"
                    required
                  />
                  <label htmlFor="agreeTerms" className="text-sm text-neutral-600">
                    I agree to the{" "}
                    <Link href="#" className="text-[#1a3329] hover:underline transition-colors">Terms of Service</Link>
                    {" "}and{" "}
                    <Link href="#" className="text-[#1a3329] hover:underline transition-colors">Privacy Policy</Link>
                  </label>
                </div>
              </>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              {step === 2 && (
                <motion.button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 py-4 border border-neutral-200 text-neutral-700 font-semibold hover:bg-neutral-50 focus:outline-none transition-all"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  Back
                </motion.button>
              )}
              <motion.button
                type="submit"
                disabled={isLoading || (step === 2 && formData.password !== formData.confirmPassword)}
                className="flex-1 py-4 bg-[#1a3329] text-[#f5f0e8] font-semibold tracking-wide uppercase text-sm hover:bg-[#1a3329]/90 focus:outline-none focus:ring-2 focus:ring-[#1a3329] focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Creating account...
                  </span>
                ) : step === 1 ? (
                  "Continue"
                ) : (
                  "Create account"
                )}
              </motion.button>
            </div>
          </motion.form>

          {/* Sign In Link */}
          <motion.p
            className="text-center mt-8 text-neutral-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Already have an account?{" "}
            <Link href="/sign-in" className="text-[#1a3329] font-semibold hover:underline transition-colors">
              Sign in
            </Link>
          </motion.p>
        </div>
      </div>
    </div>
  )
}
