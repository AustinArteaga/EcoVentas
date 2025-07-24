"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface PhoneInputProps {
  value: string
  onChange: (value: string) => void
  required?: boolean
}

export const PhoneInput: React.FC<PhoneInputProps> = ({ value, onChange, required }) => {
  const [phoneNumber, setPhoneNumber] = useState(value)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPhoneNumber = e.target.value
    setPhoneNumber(inputPhoneNumber)
    onChange(inputPhoneNumber)
  }

  return (
    <div className="space-y-2">
      <Label htmlFor="celular">Número de Celular *</Label>
      <Input
        id="celular"
        type="tel"
        value={phoneNumber}
        onChange={handleInputChange}
        placeholder="Ej: +593999999999"
        required={required}
      />
    </div>
  )
}
