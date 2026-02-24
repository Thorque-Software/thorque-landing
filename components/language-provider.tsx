"use client"

import React, { createContext, useContext, useState, useEffect, useCallback } from "react"
import esMessages from "@/messages/es.json"
import enMessages from "@/messages/en.json"

type Locale = "es" | "en"

const messages = {
    es: esMessages,
    en: enMessages,
} as const

type Messages = typeof esMessages

interface LanguageContextType {
    locale: Locale
    setLocale: (locale: Locale) => void
    t: (key: string) => string
    tArray: (key: string) => Array<Record<string, string>>
    messages: Messages
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

function getNestedValue(obj: Record<string, unknown>, path: string): string {
    const keys = path.split(".")
    let current: unknown = obj
    for (const key of keys) {
        if (current && typeof current === "object" && key in (current as Record<string, unknown>)) {
            current = (current as Record<string, unknown>)[key]
        } else {
            return path
        }
    }
    return typeof current === "string" ? current : path
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>("es")
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        const stored = localStorage.getItem("thorque-locale") as Locale | null
        if (stored && (stored === "es" || stored === "en")) {
            setLocaleState(stored)
            document.documentElement.lang = stored
        }
        setMounted(true)
    }, [])

    const setLocale = useCallback((newLocale: Locale) => {
        setLocaleState(newLocale)
        localStorage.setItem("thorque-locale", newLocale)
        document.documentElement.lang = newLocale
    }, [])

    const t = useCallback(
        (key: string): string => {
            return getNestedValue(messages[locale] as unknown as Record<string, unknown>, key)
        },
        [locale]
    )

    const tArray = useCallback(
        (key: string): Array<Record<string, string>> => {
            const keys = key.split(".")
            let current: unknown = messages[locale]
            for (const k of keys) {
                if (current && typeof current === "object" && k in (current as Record<string, unknown>)) {
                    current = (current as Record<string, unknown>)[k]
                } else {
                    return []
                }
            }
            return Array.isArray(current) ? (current as Array<Record<string, string>>) : []
        },
        [locale]
    )

    const value = {
        locale,
        setLocale,
        t,
        tArray,
        messages: messages[locale] as Messages,
    }


    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguageContext() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error("useLanguageContext must be used within a LanguageProvider")
    }
    return context
}
