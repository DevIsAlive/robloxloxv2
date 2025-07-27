"use client"

import { useState, useEffect } from "react"

interface GeolocationData {
  country?: string
  language?: string
  loading: boolean
  error?: string
}

// Map countries to preferred languages - COMPREHENSIVE AND ACCURATE
const countryLanguageMap: Record<string, string> = {
  // === ENGLISH SPEAKING COUNTRIES ===
  // Primary English-speaking countries
  US: "en", // United States
  GB: "en", // United Kingdom
  AU: "en", // Australia
  NZ: "en", // New Zealand
  IE: "en", // Ireland
  CA: "en", // Canada (English majority)

  // English-speaking African countries
  ZA: "en", // South Africa
  NG: "en", // Nigeria
  GH: "en", // Ghana
  KE: "en", // Kenya
  UG: "en", // Uganda
  TZ: "en", // Tanzania
  ZW: "en", // Zimbabwe
  ZM: "en", // Zambia
  MW: "en", // Malawi
  BW: "en", // Botswana
  LS: "en", // Lesotho
  SZ: "en", // Eswatini (Swaziland)
  NA: "en", // Namibia
  LR: "en", // Liberia
  SL: "en", // Sierra Leone
  GM: "en", // Gambia
  RW: "en", // Rwanda
  ET: "en", // Ethiopia
  ER: "en", // Eritrea
  SS: "en", // South Sudan

  // English-speaking Asian countries
  IN: "en", // India
  PK: "en", // Pakistan
  BD: "en", // Bangladesh
  LK: "en", // Sri Lanka
  MY: "en", // Malaysia
  SG: "en", // Singapore
  PH: "en", // Philippines
  HK: "en", // Hong Kong
  BN: "en", // Brunei
  MM: "en", // Myanmar
  MV: "en", // Maldives

  // English-speaking Caribbean countries
  JM: "en", // Jamaica
  TT: "en", // Trinidad and Tobago
  BB: "en", // Barbados
  BS: "en", // Bahamas
  BZ: "en", // Belize
  GY: "en", // Guyana
  AG: "en", // Antigua and Barbuda
  DM: "en", // Dominica
  GD: "en", // Grenada
  KN: "en", // Saint Kitts and Nevis
  LC: "en", // Saint Lucia
  VC: "en", // Saint Vincent and the Grenadines

  // English-speaking Pacific countries
  FJ: "en", // Fiji
  PG: "en", // Papua New Guinea
  SB: "en", // Solomon Islands
  VU: "en", // Vanuatu
  WS: "en", // Samoa
  TO: "en", // Tonga
  TV: "en", // Tuvalu
  NR: "en", // Nauru
  PW: "en", // Palau
  MH: "en", // Marshall Islands
  FM: "en", // Micronesia
  KI: "en", // Kiribati

  // English-speaking European countries
  MT: "en", // Malta
  CY: "en", // Cyprus
  GI: "en", // Gibraltar

  // === SPANISH SPEAKING COUNTRIES ===
  ES: "es", // Spain
  MX: "es", // Mexico
  AR: "es", // Argentina
  CO: "es", // Colombia
  PE: "es", // Peru
  VE: "es", // Venezuela
  CL: "es", // Chile
  EC: "es", // Ecuador
  GT: "es", // Guatemala
  CU: "es", // Cuba
  BO: "es", // Bolivia
  DO: "es", // Dominican Republic
  HN: "es", // Honduras
  PY: "es", // Paraguay
  SV: "es", // El Salvador
  NI: "es", // Nicaragua
  CR: "es", // Costa Rica
  PA: "es", // Panama
  UY: "es", // Uruguay
  GQ: "es", // Equatorial Guinea

  // === FRENCH SPEAKING COUNTRIES ===
  FR: "fr", // France
  BE: "fr", // Belgium (French majority)
  CH: "fr", // Switzerland (French is one of official languages)
  LU: "fr", // Luxembourg
  MC: "fr", // Monaco

  // French-speaking African countries
  SN: "fr", // Senegal
  CI: "fr", // Côte d'Ivoire
  ML: "fr", // Mali
  BF: "fr", // Burkina Faso
  NE: "fr", // Niger
  TD: "fr", // Chad
  CM: "fr", // Cameroon
  MG: "fr", // Madagascar
  CD: "fr", // Democratic Republic of Congo
  CF: "fr", // Central African Republic
  CG: "fr", // Republic of Congo
  GA: "fr", // Gabon
  DJ: "fr", // Djibouti
  KM: "fr", // Comoros
  BI: "fr", // Burundi
  TG: "fr", // Togo
  BJ: "fr", // Benin
  MR: "fr", // Mauritania

  // French-speaking other regions
  HT: "fr", // Haiti

  // === GERMAN SPEAKING COUNTRIES ===
  DE: "de", // Germany
  AT: "de", // Austria
  LI: "de", // Liechtenstein

  // === PORTUGUESE SPEAKING COUNTRIES ===
  BR: "pt", // Brazil
  PT: "pt", // Portugal
  AO: "pt", // Angola
  MZ: "pt", // Mozambique
  GW: "pt", // Guinea-Bissau
  CV: "pt", // Cape Verde
  ST: "pt", // São Tomé and Príncipe
  TL: "pt", // East Timor
  MO: "pt", // Macau

  // === RUSSIAN SPEAKING COUNTRIES ===
  RU: "ru", // Russia
  BY: "ru", // Belarus
  KZ: "ru", // Kazakhstan
  KG: "ru", // Kyrgyzstan
  TJ: "ru", // Tajikistan
  UZ: "ru", // Uzbekistan
  AM: "ru", // Armenia
  AZ: "ru", // Azerbaijan
  GE: "ru", // Georgia
  MD: "ru", // Moldova

  // === ITALIAN SPEAKING COUNTRIES ===
  IT: "it", // Italy
  SM: "it", // San Marino
  VA: "it", // Vatican City

  // === DUTCH SPEAKING COUNTRIES ===
  NL: "nl", // Netherlands
  SR: "nl", // Suriname

  // === ARABIC SPEAKING COUNTRIES ===
  SA: "ar", // Saudi Arabia
  AE: "ar", // United Arab Emirates
  QA: "ar", // Qatar
  KW: "ar", // Kuwait
  BH: "ar", // Bahrain
  OM: "ar", // Oman
  JO: "ar", // Jordan
  LB: "ar", // Lebanon
  SY: "ar", // Syria
  IQ: "ar", // Iraq
  YE: "ar", // Yemen
  EG: "ar", // Egypt
  LY: "ar", // Libya
  TN: "ar", // Tunisia
  DZ: "ar", // Algeria
  MA: "ar", // Morocco
  SD: "ar", // Sudan
  SO: "ar", // Somalia

  // === OTHER MAJOR LANGUAGES ===
  // Chinese-speaking regions
  CN: "en", // China (default to English for international apps)
  TW: "en", // Taiwan

  // Japanese
  JP: "en", // Japan (default to English for international apps)

  // Korean
  KR: "en", // South Korea (default to English for international apps)
  KP: "en", // North Korea

  // Other European countries (default to English)
  NO: "en", // Norway
  SE: "en", // Sweden
  DK: "en", // Denmark
  FI: "en", // Finland
  IS: "en", // Iceland
  PL: "en", // Poland
  CZ: "en", // Czech Republic
  SK: "en", // Slovakia
  HU: "en", // Hungary
  RO: "en", // Romania
  BG: "en", // Bulgaria
  HR: "en", // Croatia
  SI: "en", // Slovenia
  EE: "en", // Estonia
  LV: "en", // Latvia
  LT: "en", // Lithuania
  GR: "en", // Greece
  AL: "en", // Albania
  MK: "en", // North Macedonia
  ME: "en", // Montenegro
  RS: "en", // Serbia
  BA: "en", // Bosnia and Herzegovina
  XK: "en", // Kosovo

  // Other Asian countries (default to English)
  TH: "en", // Thailand
  VN: "en", // Vietnam
  ID: "en", // Indonesia
  MN: "en", // Mongolia
  KH: "en", // Cambodia
  LA: "en", // Laos
  NP: "en", // Nepal
  BT: "en", // Bhutan
  AF: "en", // Afghanistan
  IR: "en", // Iran
  TR: "en", // Turkey
  IL: "en", // Israel
  PS: "en", // Palestine

  // Other countries default to English
  MX: "es", // Mexico (corrected - should be Spanish)

  // Small island nations and territories
  AD: "en", // Andorra
  MU: "en", // Mauritius
  SC: "en", // Seychelles
  CW: "en", // Curaçao
  AW: "en", // Aruba
  BM: "en", // Bermuda
  KY: "en", // Cayman Islands
  VG: "en", // British Virgin Islands
  AI: "en", // Anguilla
  MS: "en", // Montserrat
  TC: "en", // Turks and Caicos
  FK: "en", // Falkland Islands
  GS: "en", // South Georgia
  SH: "en", // Saint Helena
  PN: "en", // Pitcairn Islands
}

export function useGeolocation(): GeolocationData {
  const [data, setData] = useState<GeolocationData>({ loading: true })

  useEffect(() => {
    async function detectLocation() {
      try {
        // Method 1: Try multiple IP geolocation services
        const services = [
          {
            url: "https://ipapi.co/json/",
            countryField: "country_code",
          },
          {
            url: "https://ip-api.com/json/",
            countryField: "countryCode",
          },
          {
            url: "https://ipinfo.io/json",
            countryField: "country",
          },
        ]

        for (const service of services) {
          try {
            console.log(`Trying geolocation service: ${service.url}`)

            const response = await fetch(service.url, {
              method: "GET",
              headers: {
                Accept: "application/json",
              },
            })

            if (response.ok) {
              const locationData = await response.json()
              console.log("Geolocation response:", locationData)

              let country = locationData[service.countryField]

              if (country) {
                country = country.toUpperCase()
                const language = countryLanguageMap[country] || "en"

                console.log(`Detected country: ${country}, language: ${language}`)

                setData({
                  country,
                  language,
                  loading: false,
                })
                return
              }
            }
          } catch (serviceError) {
            console.warn(`Geolocation service ${service.url} failed:`, serviceError)
            continue
          }
        }

        // Method 2: Fallback to browser language detection
        console.log("Geolocation failed, falling back to browser language")
        const browserLang = navigator.language.toLowerCase()
        console.log("Browser language:", browserLang)

        let detectedLang = "en" // Default to English

        // More specific browser language detection
        if (browserLang.startsWith("es")) detectedLang = "es"
        else if (browserLang.startsWith("fr") && !browserLang.includes("ca"))
          detectedLang = "fr" // Exclude French-Canadian
        else if (browserLang.startsWith("de")) detectedLang = "de"
        else if (browserLang.startsWith("pt")) detectedLang = "pt"
        else if (browserLang.startsWith("ru")) detectedLang = "ru"
        else if (browserLang.startsWith("it")) detectedLang = "it"
        else if (browserLang.startsWith("nl")) detectedLang = "nl"
        else if (browserLang.startsWith("ar")) detectedLang = "ar"

        console.log("Fallback detected language:", detectedLang)

        setData({
          language: detectedLang,
          loading: false,
        })
      } catch (error) {
        console.error("Geolocation detection failed:", error)

        // Final fallback to English
        setData({
          language: "en",
          loading: false,
          error: "Could not detect location",
        })
      }
    }

    detectLocation()
  }, [])

  return data
}
