"use client"

export interface Translations {
  // Spin to Win Page
  spinToWin: string
  spinButton: string
  spinning: string
  youWon: string
  claimPrize: string

  // Username Page
  enterUsername: string
  verifyAccount: string
  verifyAccountDesc?: string
  yourRobloxUsername: string
  verifying: string
  tryingAlternative: string
  welcome: string
  accountVerified: string
  continueToQuiz: string
  connectingToRoblox: string
  usingBackupServers: string
  pleaseEnterUsername: string
  userNotFound: string
  networkError: string

  // Quiz Page
  favoriteGames: string
  howOftenPlay: string
  topItem: string
  quizDone: string

  // Quiz Options
  bloxfruits: string
  adoptMe: string
  growGarden: string
  rivals: string
  everyDay: string
  sometimes: string
  notMuch: string
  aLot: string
  robux: string
  gamepass: string
  giftcard: string
  clothing: string

  // Loot Box Page
  pickYourPrize: string
  chooseBox: string

  // Gift Card Claim Page
  youWonGiftcard: string
  claimIn: string
  odds: string
  timesUp: string
  missedChance: string

  // Live Winners Ticker
  won: string

  // Disclaimer
  disclaimer: string
  importantLegalDisclaimer: string
  entertainmentPurpose: string
  noAffiliation: string
  voluntaryParticipation: string
  simulatedExperience: string

  // Common
  loading: string
  tryAgain: string
  close: string
}

export const translations: Record<string, Translations> = {
  // English (default)
  en: {
    spinToWin: "SPIN TO WIN! 🚀",
    spinButton: "SPIN TO WIN! 🚀",
    spinning: "SPINNING... ✨",
    youWon: "YOU WON",
    claimPrize: "CLAIM PRIZE! 🚀",

    enterUsername: "Enter Username! 👇",
    verifyAccount: "VERIFY ACCOUNT! 👉",
    verifyAccountDesc: "We'll verify your Roblox account",
    yourRobloxUsername: "Your Roblox Username",
    verifying: "VERIFYING... 🔍",
    tryingAlternative: "TRYING ALTERNATIVE... 🔍",
    welcome: "Welcome",
    accountVerified: "Account Verified Successfully!",
    continueToQuiz: "CONTINUE TO QUIZ! ✅",
    connectingToRoblox: "Connecting to Roblox... 🔍",
    usingBackupServers: "Using backup servers...",
    pleaseEnterUsername: "Please enter a username.",
    userNotFound: "User not found. Please check the username spelling.",
    networkError: "Network error. Please check your connection and try again.",

    favoriteGames: "Favorite Games? 🎮",
    howOftenPlay: "How Often Play? ⏰",
    topItem: "Top Item? 💎",
    quizDone: "Quiz Done! 🎉",

    // Quiz Options
    bloxfruits: "Bloxfruits",
    adoptMe: "Adopt Me",
    growGarden: "Grow a Garden",
    rivals: "Rivals",
    everyDay: "Every Day",
    sometimes: "Sometimes",
    notMuch: "Not Much",
    aLot: "A Lot!",
    robux: "Robux",
    gamepass: "Gamepass",
    giftcard: "Giftcard",
    clothing: "Clothing",

    // Loot Box Page
    pickYourPrize: "PICK YOUR PRIZE! 👇",
    chooseBox: "Choose a Box! ✨",

    // Gift Card Claim Page
    youWonGiftcard: "YOU WON 750$ GIFTCARD!",
    claimIn: "Claim in",
    odds: "Odds:",
    timesUp: "Time's up! ⏰ You missed your chance. 😔",
    missedChance: "You missed your chance",

    // Live Winners Ticker
    won: "won",

    // Disclaimer
    disclaimer: "Disclaimer",
    importantLegalDisclaimer: "Important Legal Disclaimer",
    entertainmentPurpose: "This application is provided strictly for entertainment and amusement purposes only.",
    noAffiliation: "The creators do not endorse or have any affiliation with any third-party entities.",
    voluntaryParticipation: "Participation is voluntary and solely for recreational enjoyment.",
    simulatedExperience: "This is a simulated experience designed exclusively for entertainment.",

    // Common
    loading: "Loading...",
    tryAgain: "Try Again",
    close: "Close",
  },

  // Spanish
  es: {
    // Spin to Win Page
    spinToWin: "¡GIRA PARA GANAR! 🚀",
    spinButton: "¡GIRA PARA GANAR! 🚀",
    spinning: "GIRANDO... ✨",
    youWon: "¡GANASTE",
    claimPrize: "¡RECLAMAR PREMIO! 🚀",

    // Username Page
    enterUsername: "¡Ingresa tu Usuario! 👇",
    verifyAccount: "¡VERIFICAR CUENTA! 👉",
    verifyAccountDesc: "Verificaremos tu cuenta de Roblox",
    yourRobloxUsername: "Tu Usuario de Roblox",
    verifying: "VERIFICANDO... 🔍",
    tryingAlternative: "PROBANDO ALTERNATIVA... 🔍",
    welcome: "Bienvenido",
    accountVerified: "¡Cuenta Verificada Exitosamente!",
    continueToQuiz: "¡CONTINUAR AL QUIZ! ✅",
    connectingToRoblox: "Conectando a Roblox... 🔍",
    usingBackupServers: "Usando servidores de respaldo...",
    pleaseEnterUsername: "Por favor ingresa un usuario.",
    userNotFound: "Usuario no encontrado. Verifica la ortografía del nombre.",
    networkError: "Error de red. Verifica tu conexión e intenta de nuevo.",

    // Quiz Page
    favoriteGames: "¿Juegos Favoritos? 🎮",
    howOftenPlay: "¿Qué Tan Seguido Juegas? ⏰",
    topItem: "¿Artículo Principal? 💎",
    quizDone: "¡Quiz Completado! 🎉",

    // Quiz Options
    bloxfruits: "Bloxfruits",
    adoptMe: "Adopt Me",
    growGarden: "Cultivar Jardín",
    rivals: "Rivales",
    everyDay: "Todos los Días",
    sometimes: "A Veces",
    notMuch: "No Mucho",
    aLot: "¡Mucho!",
    robux: "Robux",
    gamepass: "Pase de Juego",
    giftcard: "Tarjeta Regalo",
    clothing: "Ropa",

    // Loot Box Page
    pickYourPrize: "¡ELIGE TU PREMIO! 👇",
    chooseBox: "¡Elige una Caja! ✨",

    // Gift Card Claim Page
    youWonGiftcard: "¡GANASTE TARJETA REGALO DE $750!",
    claimIn: "Reclamar en",
    odds: "Probabilidades:",
    timesUp: "¡Se acabó el tiempo! ⏰ Perdiste tu oportunidad. 😔",
    missedChance: "Perdiste tu oportunidad",

    // Live Winners Ticker
    won: "ganó",

    // Disclaimer
    disclaimer: "Descargo",
    importantLegalDisclaimer: "Descargo Legal Importante",
    entertainmentPurpose:
      "Esta aplicación se proporciona estrictamente para fines de entretenimiento y diversión únicamente.",
    noAffiliation: "Los creadores no respaldan ni tienen afiliación con entidades de terceros.",
    voluntaryParticipation: "La participación es voluntaria y únicamente para disfrute recreativo.",
    simulatedExperience: "Esta es una experiencia simulada diseñada exclusivamente para entretenimiento.",

    // Common
    loading: "Cargando...",
    tryAgain: "Intentar de Nuevo",
    close: "Cerrar",
  },

  // French
  fr: {
    spinToWin: "TOURNEZ POUR GAGNER! 🚀",
    spinButton: "TOURNEZ POUR GAGNER! 🚀",
    spinning: "ROTATION... ✨",
    youWon: "VOUS AVEZ GAGNÉ",
    claimPrize: "RÉCLAMER LE PRIX! 🚀",

    enterUsername: "Entrez votre Nom d'Utilisateur! 👇",
    verifyAccount: "VERIFIEZ LE COMPTE! 👉",
    verifyAccountDesc: "Nous vérifierons votre compte Roblox",
    yourRobloxUsername: "Votre Nom d'Utilisateur Roblox",
    verifying: "VÉRIFICATION... 🔍",
    tryingAlternative: "ESSAI ALTERNATIF... 🔍",
    welcome: "Bienvenue",
    accountVerified: "Compte Vérifié avec Succès!",
    continueToQuiz: "CONTINUER AU QUIZ! ✅",
    connectingToRoblox: "Connexion à Roblox... 🔍",
    usingBackupServers: "Utilisation des serveurs de sauvegarde...",
    pleaseEnterUsername: "Veuillez entrer un nom d'utilisateur.",
    userNotFound: "Utilisateur non trouvé. Vérifiez l'orthographe du nom.",
    networkError: "Erreur réseau. Vérifiez votre connexion et réessayez.",

    favoriteGames: "Jeux Favoris? 🎮",
    howOftenPlay: "À Quelle Fréquence Jouez-vous? ⏰",
    topItem: "Article Principal? 💎",
    quizDone: "Quiz Terminé! 🎉",

    bloxfruits: "Bloxfruits",
    adoptMe: "Adopt Me",
    growGarden: "Cultiver un Jardin",
    rivals: "Rivaux",
    everyDay: "Tous les Jours",
    sometimes: "Parfois",
    notMuch: "Pas Beaucoup",
    aLot: "Beaucoup!",
    robux: "Robux",
    gamepass: "Pass de Jeu",
    giftcard: "Carte Cadeau",
    clothing: "Vêtements",

    pickYourPrize: "CHOISISSEZ VOTRE PRIX! 👇",
    chooseBox: "Choisissez une Boîte! ✨",

    youWonGiftcard: "VOUS AVEZ GAGNÉ UNE CARTE CADEAU DE 750$!",
    claimIn: "Réclamer dans",
    odds: "Chances:",
    timesUp: "Temps écoulé! ⏰ Vous avez raté votre chance. 😔",
    missedChance: "Vous avez raté votre chance",

    won: "a gagné",

    disclaimer: "Avertissement",
    importantLegalDisclaimer: "Avertissement Légal Important",
    entertainmentPurpose: "Cette application est fournie strictement à des fins de divertissement uniquement.",
    noAffiliation: "Les créateurs n'approuvent pas et n'ont aucune affiliation avec des entités tierces.",
    voluntaryParticipation: "La participation est volontaire et uniquement pour le plaisir récréatif.",
    simulatedExperience: "Il s'agit d'une expérience simulée conçue exclusivement pour le divertissement.",

    loading: "Chargement...",
    tryAgain: "Réessayer",
    close: "Fermer",
  },

  // German
  de: {
    spinToWin: "DREHEN ZUM GEWINNEN! 🚀",
    spinButton: "DREHEN ZUM GEWINNEN! 🚀",
    spinning: "DREHT SICH... ✨",
    youWon: "SIE HABEN GEWONNEN",
    claimPrize: "PREIS BEANSPRUCHEN! 🚀",

    enterUsername: "Benutzername Eingeben! 👇",
    verifyAccount: "KONTO VERIFIZIEREN! 👉",
    verifyAccountDesc: "Wir werden Ihr Roblox-Konto verifizieren",
    yourRobloxUsername: "Ihr Roblox-Benutzername",
    verifying: "VERIFIZIERUNG... 🔍",
    tryingAlternative: "ALTERNATIVE VERSUCHEN... 🔍",
    welcome: "Willkommen",
    accountVerified: "Konto Erfolgreich Verifiziert!",
    continueToQuiz: "WEITER ZUM QUIZ! ✅",
    connectingToRoblox: "Verbindung zu Roblox... 🔍",
    usingBackupServers: "Backup-Server verwenden...",
    pleaseEnterUsername: "Bitte geben Sie einen Benutzernamen ein.",
    userNotFound: "Benutzer nicht gefunden. Überprüfen Sie die Schreibweise.",
    networkError: "Netzwerkfehler. Überprüfen Sie Ihre Verbindung und versuchen Sie es erneut.",

    favoriteGames: "Lieblingsspiele? 🎮",
    howOftenPlay: "Wie Oft Spielen? ⏰",
    topItem: "Top-Artikel? 💎",
    quizDone: "Quiz Abgeschlossen! 🎉",

    bloxfruits: "Bloxfruits",
    adoptMe: "Adopt Me",
    growGarden: "Garten Züchten",
    rivals: "Rivalen",
    everyDay: "Jeden Tag",
    sometimes: "Manchmal",
    notMuch: "Nicht Viel",
    aLot: "Viel!",
    robux: "Robux",
    gamepass: "Spielpass",
    giftcard: "Geschenkkarte",
    clothing: "Kleidung",

    pickYourPrize: "WÄHLEN SIE IHREN PREIS! 👇",
    chooseBox: "Wählen Sie eine Box! ✨",

    youWonGiftcard: "SIE HABEN EINE 750$ GESCHENKKARTE GEWONNEN!",
    claimIn: "Beanspruchen in",
    odds: "Chancen:",
    timesUp: "Zeit ist um! ⏰ Sie haben Ihre Chance verpasst. 😔",
    missedChance: "Sie haben Ihre Chance verpasst",

    won: "gewann",

    disclaimer: "Haftungsausschluss",
    importantLegalDisclaimer: "Wichtiger Rechtlicher Haftungsausschluss",
    entertainmentPurpose: "Diese Anwendung wird ausschließlich zu Unterhaltungszwecken bereitgestellt.",
    noAffiliation: "Die Ersteller befürworten keine Drittanbieter und haben keine Verbindung zu ihnen.",
    voluntaryParticipation: "Die Teilnahme ist freiwillig und dient ausschließlich der Erholung.",
    simulatedExperience: "Dies ist eine simulierte Erfahrung, die ausschließlich zur Unterhaltung entwickelt wurde.",

    loading: "Laden...",
    tryAgain: "Erneut Versuchen",
    close: "Schließen",
  },

  // Portuguese
  pt: {
    spinToWin: "GIRE PARA GANHAR! 🚀",
    spinButton: "GIRE PARA GANHAR! 🚀",
    spinning: "GIRANDO... ✨",
    youWon: "VOCÊ GANHOU",
    claimPrize: "REIVINDICAR PRÊMIO! 🚀",

    enterUsername: "Digite seu Nome de Usuário! 👇",
    verifyAccount: "VERIFICAR CONTA! 👉",
    verifyAccountDesc: "Verificaremos sua conta do Roblox",
    yourRobloxUsername: "Seu Nome de Usuário do Roblox",
    verifying: "VERIFICANDO... 🔍",
    tryingAlternative: "TENTANDO ALTERNATIVA... 🔍",
    welcome: "Bem-vindo",
    accountVerified: "Conta Verificada com Sucesso!",
    continueToQuiz: "CONTINUAR PARA O QUIZ! ✅",
    connectingToRoblox: "Conectando ao Roblox... 🔍",
    usingBackupServers: "Usando servidores de backup...",
    pleaseEnterUsername: "Por favor, digite um nome de usuário.",
    userNotFound: "Usuário não encontrado. Verifique a ortografia do nome.",
    networkError: "Erro de rede. Verifique sua conexão e tente novamente.",

    favoriteGames: "Jogos Favoritos? 🎮",
    howOftenPlay: "Com Que Frequência Joga? ⏰",
    topItem: "Item Principal? 💎",
    quizDone: "Quiz Concluído! 🎉",

    bloxfruits: "Bloxfruits",
    adoptMe: "Adopt Me",
    growGarden: "Cultivar Jardim",
    rivals: "Rivais",
    everyDay: "Todo Dia",
    sometimes: "Às Vezes",
    notMuch: "Não Muito",
    aLot: "Muito!",
    robux: "Robux",
    gamepass: "Passe de Jogo",
    giftcard: "Cartão Presente",
    clothing: "Roupas",

    pickYourPrize: "ESCOLHA SEU PRÊMIO! 👇",
    chooseBox: "Escolha uma Caixa! ✨",

    youWonGiftcard: "VOCÊ GANHOU UM CARTÃO PRESENTE DE $750!",
    claimIn: "Reivindicar em",
    odds: "Chances:",
    timesUp: "Tempo esgotado! ⏰ Você perdeu sua chance. 😔",
    missedChance: "Você perdeu sua chance",

    won: "ganhou",

    disclaimer: "Isenção",
    importantLegalDisclaimer: "Isenção Legal Importante",
    entertainmentPurpose: "Esta aplicação é fornecida estritamente para fins de entretenimento apenas.",
    noAffiliation: "Os criadores não endossam nem têm afiliação com entidades terceiras.",
    voluntaryParticipation: "A participação é voluntária e apenas para diversão recreativa.",
    simulatedExperience: "Esta é uma experiência simulada projetada exclusivamente para entretenimento.",

    loading: "Carregando...",
    tryAgain: "Tentar Novamente",
    close: "Fechar",
  },

  // Russian
  ru: {
    spinToWin: "КРУТИ ЧТОБЫ ВЫИГРАТЬ! 🚀",
    spinButton: "КРУТИ ЧТОБЫ ВЫИГРАТЬ! 🚀",
    spinning: "ВРАЩАЕТСЯ... ✨",
    youWon: "ВЫ ВЫИГРАЛИ",
    claimPrize: "ПОЛУЧИТЬ ПРИЗ! 🚀",

    enterUsername: "Введите Имя Пользователя! 👇",
    verifyAccount: "ПРОВЕРИТЬ АККАУНТ! 👉",
    verifyAccountDesc: "Мы проверим ваш аккаунт Roblox",
    yourRobloxUsername: "Ваше Имя Пользователя Roblox",
    verifying: "ПРОВЕРКА... 🔍",
    tryingAlternative: "ПРОБУЕМ АЛЬТЕРНАТИВУ... 🔍",
    welcome: "Добро пожаловать",
    accountVerified: "Аккаунт Успешно Проверен!",
    continueToQuiz: "ПРОДОЛЖИТЬ К ВИКТОРИНЕ! ✅",
    connectingToRoblox: "Подключение к Roblox... 🔍",
    usingBackupServers: "Используем резервные серверы...",
    pleaseEnterUsername: "Пожалуйста, введите имя пользователя.",
    userNotFound: "Пользователь не найден. Проверьте правописание имени.",
    networkError: "Ошибка сети. Проверьте соединение и попробуйте снова.",

    favoriteGames: "Любимые Игры? 🎮",
    howOftenPlay: "Как Часто Играете? ⏰",
    topItem: "Топ Предмет? 💎",
    quizDone: "Викторина Завершена! 🎉",

    bloxfruits: "Bloxfruits",
    adoptMe: "Adopt Me",
    growGarden: "Выращивать Сад",
    rivals: "Соперники",
    everyDay: "Каждый День",
    sometimes: "Иногда",
    notMuch: "Не Много",
    aLot: "Много!",
    robux: "Robux",
    gamepass: "Игровой Пропуск",
    giftcard: "Подарочная Карта",
    clothing: "Одежда",

    pickYourPrize: "ВЫБЕРИТЕ ВАШ ПРИЗ! 👇",
    chooseBox: "Выберите Коробку! ✨",

    youWonGiftcard: "ВЫ ВЫИГРАЛИ ПОДАРОЧНУЮ КАРТУ НА $750!",
    claimIn: "Получить через",
    odds: "Шансы:",
    timesUp: "Время вышло! ⏰ Вы упустили свой шанс. 😔",
    missedChance: "Вы упустили свой шанс",

    won: "выиграл",

    disclaimer: "Отказ от ответственности",
    importantLegalDisclaimer: "Важный Правовой Отказ от Ответственности",
    entertainmentPurpose: "Это приложение предоставляется исключительно в развлекательных целях.",
    noAffiliation: "Создатели не одобряют и не имеют связи с третьими сторонами.",
    voluntaryParticipation: "Участие добровольное и только для развлечения.",
    simulatedExperience: "Это симулированный опыт, созданный исключительно для развлечения.",

    loading: "Загрузка...",
    tryAgain: "Попробовать Снова",
    close: "Закрыть",
  },

  // Italian
  it: {
    spinToWin: "GIRA PER VINCERE! 🚀",
    spinButton: "GIRA PER VINCERE! 🚀",
    spinning: "GIRANDO... ✨",
    youWon: "HAI VINTO",
    claimPrize: "RISCATTA PREMIO! 🚀",

    enterUsername: "Inserisci Nome Utente! 👇",
    verifyAccount: "VERIFICA ACCOUNT! 👉",
    verifyAccountDesc: "Verificheremo il tuo account Roblox",
    yourRobloxUsername: "Il Tuo Nome Utente Roblox",
    verifying: "VERIFICANDO... 🔍",
    tryingAlternative: "PROVANDO ALTERNATIVA... 🔍",
    welcome: "Benvenuto",
    accountVerified: "Account Verificato con Successo!",
    continueToQuiz: "CONTINUA AL QUIZ! ✅",
    connectingToRoblox: "Connessione a Roblox... 🔍",
    usingBackupServers: "Usando server di backup...",
    pleaseEnterUsername: "Per favore inserisci un nome utente.",
    userNotFound: "Utente non trovato. Controlla l'ortografia del nome.",
    networkError: "Errore di rete. Controlla la connessione e riprova.",

    favoriteGames: "Giochi Preferiti? 🎮",
    howOftenPlay: "Quanto Spesso Giochi? ⏰",
    topItem: "Oggetto Principale? 💎",
    quizDone: "Quiz Completato! 🎉",

    bloxfruits: "Bloxfruits",
    adoptMe: "Adopt Me",
    growGarden: "Coltiva Giardino",
    rivals: "Rivali",
    everyDay: "Ogni Giorno",
    sometimes: "A Volte",
    notMuch: "Non Molto",
    aLot: "Molto!",
    robux: "Robux",
    gamepass: "Pass di Gioco",
    giftcard: "Carta Regalo",
    clothing: "Abbigliamento",

    pickYourPrize: "SCEGLI IL TUO PREMIO! 👇",
    chooseBox: "Scegli una Scatola! ✨",

    youWonGiftcard: "HAI VINTO UNA CARTA REGALO DA $750!",
    claimIn: "Riscatta in",
    odds: "Probabilità:",
    timesUp: "Tempo scaduto! ⏰ Hai perso la tua occasione. 😔",
    missedChance: "Hai perso la tua occasione",

    won: "ha vinto",

    disclaimer: "Disclaimer",
    importantLegalDisclaimer: "Importante Disclaimer Legale",
    entertainmentPurpose: "Questa applicazione è fornita esclusivamente per scopi di intrattenimento.",
    noAffiliation: "I creatori non approvano né hanno affiliazioni con entità terze.",
    voluntaryParticipation: "La partecipazione è volontaria e solo per divertimento ricreativo.",
    simulatedExperience: "Questa è un'esperienza simulata progettata esclusivamente per l'intrattenimento.",

    loading: "Caricamento...",
    tryAgain: "Riprova",
    close: "Chiudi",
  },

  // Dutch
  nl: {
    spinToWin: "DRAAI OM TE WINNEN! 🚀",
    spinButton: "DRAAI OM TE WINNEN! 🚀",
    spinning: "DRAAIT... ✨",
    youWon: "JE HEBT GEWONNEN",
    claimPrize: "CLAIM PRIJS! 🚀",

    enterUsername: "Voer Gebruikersnaam In! 👇",
    verifyAccount: "VERIFIEER ACCOUNT! 👉",
    verifyAccountDesc: "We zullen je Roblox account verifiëren",
    yourRobloxUsername: "Je Roblox Gebruikersnaam",
    verifying: "VERIFIËREN... 🔍",
    tryingAlternative: "ALTERNATIEF PROBEREN... 🔍",
    welcome: "Welkom",
    accountVerified: "Account Succesvol Geverifieerd!",
    continueToQuiz: "DOORGAAN NAAR QUIZ! ✅",
    connectingToRoblox: "Verbinden met Roblox... 🔍",
    usingBackupServers: "Backup servers gebruiken...",
    pleaseEnterUsername: "Voer een gebruikersnaam in.",
    userNotFound: "Gebruiker niet gevonden. Controleer de spelling van de naam.",
    networkError: "Netwerkfout. Controleer je verbinding en probeer opnieuw.",

    favoriteGames: "Favoriete Spellen? 🎮",
    howOftenPlay: "Hoe Vaak Speel Je? ⏰",
    topItem: "Top Item? 💎",
    quizDone: "Quiz Voltooid! 🎉",

    bloxfruits: "Bloxfruits",
    adoptMe: "Adopt Me",
    growGarden: "Tuin Kweken",
    rivals: "Rivalen",
    everyDay: "Elke Dag",
    sometimes: "Soms",
    notMuch: "Niet Veel",
    aLot: "Veel!",
    robux: "Robux",
    gamepass: "Spelpass",
    giftcard: "Cadeaukaart",
    clothing: "Kleding",

    pickYourPrize: "KIES JE PRIJS! 👇",
    chooseBox: "Kies een Doos! ✨",

    youWonGiftcard: "JE HEBT EEN $750 CADEAUKAART GEWONNEN!",
    claimIn: "Claim in",
    odds: "Kansen:",
    timesUp: "Tijd is om! ⏰ Je hebt je kans gemist. 😔",
    missedChance: "Je hebt je kans gemist",

    won: "won",

    disclaimer: "Disclaimer",
    importantLegalDisclaimer: "Belangrijke Juridische Disclaimer",
    entertainmentPurpose: "Deze applicatie wordt uitsluitend voor entertainmentdoeleinden aangeboden.",
    noAffiliation: "De makers onderschrijven geen derde partijen en hebben geen affiliatie met hen.",
    voluntaryParticipation: "Deelname is vrijwillig en alleen voor recreatief plezier.",
    simulatedExperience: "Dit is een gesimuleerde ervaring die uitsluitend voor entertainment is ontworpen.",

    loading: "Laden...",
    tryAgain: "Probeer Opnieuw",
    close: "Sluiten",
  },
}

// Language detection based on location/browser
export function detectLanguage(): string {
  if (typeof window === "undefined") return "en"

  // Try to get language from browser first
  const browserLang = navigator.language.toLowerCase()
  console.log("Browser language detected:", browserLang)

  // Map browser languages to our supported languages
  if (browserLang.startsWith("es")) return "es"
  if (browserLang.startsWith("fr")) return "fr"
  if (browserLang.startsWith("de")) return "de"
  if (browserLang.startsWith("pt")) return "pt"
  if (browserLang.startsWith("ru")) return "ru"
  if (browserLang.startsWith("it")) return "it"
  if (browserLang.startsWith("nl")) return "nl"
  if (browserLang.startsWith("ar")) return "ar"

  return "en" // Default to English
}

// Get translations for current language
export function getTranslations(language?: string): Translations {
  const lang = language || detectLanguage()
  console.log("Getting translations for language:", lang)
  return translations[lang] || translations.en
}

// Hook for using translations in components
export function useTranslations() {
  const language = detectLanguage()
  return {
    t: getTranslations(language),
    language,
    isRTL: language === "ar" || language === "he", // For future RTL language support
  }
}
