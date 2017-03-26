const Menu = {
  entrees: {
    title: 'Entrees',
    bg: 'upstairs-entrees-bg',
    items: [
      {name: "אויסטר", description: "אויסטר מסוג ג'ילארדו מאזור סן רושל, צרפת", price: "32 / יח"},
      {name: "סביצ'ה", description: "דג ים קצוץ דק בתיבול ליים, מלח ים ושמן זית, פאף קינואה וסורבה של תפוח ירוק וחלפיניו", price: "59"},
      {name: "פפאיה דג ים", description: `סלט פפאיה עם למון גראס, קשיו, לוביה תאילנדית ופרוסות דג ים נא מעל`, price: "54"},
      {name: "טונה אדומה", description: "סשימי טונה אדומה עם ויניגרט תפוז, שמן שומשום וצ'ילי אדום", price: "68"},
      {name: "טאטקי סלמון", description: "צרוב בצד אחד עם ויניגרט תמרהינדי, למון גראס וקשיו מקורמל מעל", price: "62"},
      {name: "תמנון ים תיכון", description: `זרוע תמנון צרובה על הפלאנצ׳ה עם קרם לימון ופירה גרגרי חרדל`, price: "62"},
      {name: "סלט שרימפס", description: `שרימפס בסגנון וויאטנמי עם ויניגרט חלב קוקוס, פומלה עסיסית, צ׳יפס שאלוט, צ׳ילי ועלים ארומטיים`, price: "65"},
      {name: `קוקי סן ז'ק`, description: `צרוב על הפלאנצ'ה בחמאה חומה על קרם שקדים לבנים וביסק סרטנים כחולים`, price: "65"},
      {name: "סלט אנדיב", description: `סלט של אנדיב סגול ולבן, שאלוט, רוקט בלאדי עם ויניגרט דובדבנים, שקדים קלויים וגבינת גורגונזולה`, price: "52"},
      {name: "ברולה בושה", description: `גבינת עיזים בשלה מעמק הלואר חרוכה קלות עם סלק אדום מבושל בחומץ שרי ומעל אנדיב ואגוזי מלך`, price: "54"},
      {name: "סלט פטוש", description: "עגבניות מגי, מיני מלפפונים ורוקט חריף מתובלים בדואה מצרית וסומק עם גבינת המאירי", price: "52"},
      {name: "ריזוטו פיטריות", description: `ריזוטו ארבוריו עם ציר ותערובת פיטריות ומעל טוויל פרמז׳ן מושחר`, price: "68"},
      {name: "קפלטי גבינות ותרד", description: "כיסוני בצק ממלואים בארבע גבינות ותרד ערבי ומזוגגים בחמאת מרווה", price: "59"},
      {name: "סלט קצבים", description: `נתח קצבים צרוב במחבת עם ויניגרט Dry Cherry, קשיו, בצל סגול ועלים ארומטיים`, price: "58"},
      {name: "סטייק כבד אווז", description: `צרוב במחבת, מוגש על קרם ערמונים חורפי וכרישה צעירה, ריבת דלעת ארומטית וציר יין`, price: "88"},
      {name: "בריק טלה", description: "סיגרים ממולאים בבשר טלה וראס אל חנות", price: "58"},
      {name: "פיש אנד צ'יפס", description: "", price: "72"}
    ],
    veganItems: [
      {name: "טרטר עגבניה", description: "עגבניות קצוצות עם אורגנו, שמן זית, מיץ לימון, פאף קינואה ולחם שום", price: "38"},
      {name: "סלט פטוש", description: "עגבניות מגי, מיני מלפפונים ורוקט חריף מתובלים בדואה מצרית וסומק עם גבינת המאירי", price: "52"},
      {name: "טאטקי תפוח אדמה קריספי", description: "צרוב בצד אחד עם ויניגרט תמרהינדי, למון גראס וקשיו מקורמל מעל", price: "42"},
      {name: "ברולה בושה", description: `גבינת עיזים בשלה מעמק הלואר חרוכה קלות עם סלק אדום מבושל בחומץ שרי ומעל אנדיב ואגוזי מלך`, price: "54"},
      {name: "סלט סלקים", description: `סלט של סלקים אדומים מבושלים בחומץ שרי עם אנדיב, אגוזי מלך ורוקט`, price: "42"},
      {name: "סלט אנדיב", description: `סלט של אנדיב סגול ולבן, שאלוט, רוקט בלאדי עם ויניגרט דובדבנים, שקדים קלויים וגבינת גורגונזולה`, price: "52"},
      {name: "קפלטי גבינות ותרד", description: "כיסוני בצק ממלואים בארבע גבינות ותרד ערבי ומזוגגים בחמאת מרווה", price: "59"}
    ]
  },
  main: {
    title: 'main',
    bg: 'upstairs-main-bg',
    items: [
      {name: "מוסר ים", description: "בחמאת סויה בהירה, עגבניות מנומרות, טימין לימוני ובוקצ'וי", price: "132"},
      {name: 'לברק', description: `אפוי בתנור עם קארי ירוק Aria style, ברוקומיני, לוביה תאילנדית ואורז מנופח`, price: "128"},
      {name: "ספגטי פירות ים", description: `ספגטי ארביאטה עם שומרים צעירים, עגבניות מגי קצוצות, זיתי קלמטה ופירות ים משתנים`, price: "128"},
      {name: "כיסוני כרישה ומסקרפונה", description: `כיסוני בצק רבוך ממולאים בפונדו כרישה ומסקרפונה, מזוגגים בחמאת לימון ובצל ירוק`, price: "88"},
      {name: `פטוצ׳יני קרבונרה`, description: `לחי חזיר מעושן עם שאלוט, חמאה, שרדונה קסטל ומעל חלמון חופש`, price: "98"}
    ],
    veganItems: [
      {name: `פטוצ׳יני ירוקים`, description: `פטוצ׳יני טבעוני בקארי ירוק ARIA style עם בוקצ׳וי, ברוקומיני ובצל ירוק`, price: "68"},
      {name: "ריזוטו פיטריות", description: `ריזוטו ארבוריו עם ציר ותערובת פיטריות ומעל טוויל פרמז׳ן מושחר`, price: "68"},
      {name: "כיסוני כרישה ומסקרפונה", description: `כיסוני בצק רבוך ממולאים בפונדו כרישה ומסקרפונה, מזוגגים בחמאת לימון ובצל ירוק`, price: "88"}
    ]
  },
  deserts: {
    title: 'Desserts',
    bg: 'upstairs-desserts-bg',
    items: [
      {name: 'נמסיס', description: "עוגת שוקולד נימוחה, קרמבל שיבולת שועל, גנאש שוקולד חלב, מרשמלו פלאפ וגלידת וניל", price: "48"},
      {name: 'סמי פרדו במבה', description: "מוס חמאת בוטנים חצי קפוא לצד פאדג' שוקולד, גאנש קרמל שוקולד, טוויל קרמל, פולי קקאו, בוטנים ניו יורק סטייל ומוס שוקולד לבן", price: "45"},
      {name: "פסיפלורה ושוקולד לבן", description: "קרם פסיפלורה עם מוס שוקולד לבן על קראנץ' אגוזי לוז וסורבה פסיפלורה חמצמצה", price:"48"},
      {name: "מלפי קוקוס", description: "אלף עלים המופרדים במוס קוקוס, טופי בננה, בננה מקורמלת וסורבה קוקוס", price: "48"},
      {name: 'מרק פירות אדומים', description: "נשיקות מרנג עם קראמבל שיבולת שועל וגלידת וניל במרק פירות אדומים", price: "48"},
      {name: 'הנסי אספרסו', description: "קוקטייל מרענן של הנסי עם אספרסו וזסט לימון", price: "36"},
      {name: 'מבחר סורבטים', description: "מבחר של שלושה סורבטים", price: "38"}
    ]
  },
  cocktails: {
    title: 'Cocktails',
    bg: 'upstairs-cocktails-bg',
    items: [
      {name: 'SPEEDY GONZALEZ', description: `גרסה חדשנית ומקסיקנית לקוקטייל המוסקו מיול המפורסם. טקילה מיושנת, מסקל וסירופ אגאבה בשילוב עם ליים, מלפפונים, נענע וג'ינג'ר ביר היוצרים קוקטייל מעקצץ, מתוחכם וכייפי. תרצו להזמין עוד אחד מהר יותר מספידי גונזאלס.`, price: "54"},
      {name: "LADY IN RED", description: `קוקטייל פרחוני ומעודן. ג'ין טנקרי, עם מתיקות של סירופ לבנדר והיבסקוס תוצרת בית, חמיצות של לימון טרי ומעט פרחוניות של ורדים ושושנים. קוקטייל שיגרום לכם ללקק את השפתיים.`, price: "44"},
      {name: "FRUIT GARDEN", description: `קוקטייל קאריבי, פירותי ומתובל. קוקטייל על בסיס רום לבן עם אפרסק, פסיפלורה, סירופ אלדרפלאוור (פרח הסמבוק), מיץ ליים טרי ואנגוסטורה ביטר.מתקתק, פירותי וכייפי בדיוק כמו שאנחנו אוהבים.`, price: "56"},
      {name: "PLAGUE WATER COLLINS", description: `מחווה לממציא הג'ין, המדען והרופא פרנסיסקוס סילביוס. האגדה מספרת שפרנסיסקוס המציא את הג'ינייבר על מנת להילחם באחת המגפות שהתחוללו באירופה, אך במקום תרופה נוצר לו אחד המשקאות האהובים עלינו. ג'ין טנקרי מושרה בלמון גראס ולואיזה, מיץ ליים טרי, נענע, טוניק ומעט פלפל ארבע עונות. קוקטייל לימוני וקליל, כזה שיגרום לכם להזמין עוד אחד.`, price: "46"},
      {name: "KALISPERA", description: `פירוש השם ביוונית הוא ערב טוב, וזה בדיוק הקוקטייל שיפתח לכם את הערב כמו שצריך. אוזו, אמרטו דיסארונו, רוזטת שקדים ביתית, קראול ביטר, תפוז ובזיליקום סגול. קוקטייל מתקתק בעל טעמי שקדים ואניס עדינים.`, price: "52"},
      {name: 'SESAME STREET', description: "חוויה חד פעמית ושוברת מוסכמות, שילוב של וודקה קטל 1 ציטרון ותפוז, לימנצ'לו שאנחנו מכינים, דבש, וניל וטחינה!! הרפתקני, נועז, חמוץ, מתוק וסמיך. אריק ובנץ לא היו מעיזים, ואתם?", price: "54"},
      {name: "BEES KNEES", description: "פרשנות חדשנית להצלחה קלאסית, שטעמה כמו מרמלאדה וחמאה מומסת על טוסט - רק ללא הטוסט. רום אפלטון שטוף בחמאה חומה, מנוער עם דבש, מיץ תפוזים וליים. קריבי, מתובל עם חמיצות קלה ומעודנת.", price: "48"},
      {name: 'ARIA SOUR #4', description: `קוקטייל הבית האהוב והמפורסם שלנו בגרסה חדשה. הנסי v.s , ליקר תפוזים דריי קרסאו, אמרו מונטנגרו, מיץ לימון, סירופ מייפל וחלבון מנוערים היטב. סאוור קלאסי, עוצמתי ומתוחכם כזה שאי אפשר לשכוח.`, price: "48"},
      {name: 'BUBBLE BURRY', description: `אפריטיף מתקתק, קליל ומרענן, מלווה מושלם לכל חגיגה. ג'ין טנקרי, שמפניה מואט ושנדו, קונפיטורת פירות יער אריא סטייל, לימון, וניל וחלבון.`, price: "66"},
      {name: 'BLACK PEARL', description: `קוקטייל אלכוהולי ומתוחכם בעל טעמי שוקולד מריר, קפה ומעט וניל. רום זקאפה 23, בולט ברבן, צ'ינאר, נגיעה של וניל וביטר שוקולד היוצרים קוקטייל חורפי בעל מתיקות ומרירות אלכוהולית מדהימה. קוקטייל שהוא חוויה לכל החושים.`, price: "62"},
      {name: 'WHITE NEGRONI', description: `טוויסט מעניין וקליל לקוקטייל הקלאסי והמפורסם. ג'ין, ורמוט צרפתי לבן, אפרול, מרסקינו, ביטר פיישוד ומעט יין לבן יבש, מעורבבים יחדיו ויוצרים קוקטייל עדין ואלכוהולי בעל איזון מושלם בין מרירות, מתיקות וחמיצות הדרים עדינה.`, price: "47"},
      {name: 'TROPICAL SMOKE', description: `במיוחד לנועזים ולאמיצים שביניכם. מסקל, ליים טרי, מנגו וטינקטורה של פלפל הבנרו. כך נוצר לו קוקטייל בעל טעמים מעושנים, חריפים וטרופיים, שאתם פשוט חייבים לטעום.`, price: "52"}
    ]
  },
  alcohol: {
    title: 'TASTE OF MIND',
    bg: 'upstairs-alcohol-bg',
    items: [
      {name: "", description: "בקרוב"}      
    ]
  },
  wine: {
    title: 'Wine Cellar',
    bg: 'upstairs-wine-bg',
    items: {
      glass: {
        title: 'יינות בכוסות',
        items: [
          {
            title: "מבעבע",
            items: [
              "קורדון נגרו ברוט קאווה, פרקשנט, פנדס, ספרד",
              "מואט ושנדו, ברוט אימפריאל N.V, שמפיין, צרפת, 200 מ״ל"
            ]
          },
          {
            title: "לבן",
            items: [
              "רוזה ברברה, אדמה, יקב תבור, ישראל 15'",
              "גרונר ולטינר, אקר, ווארגאם, אוסטריה 14'",
              "גוורצטרמיינר, ג'וזף דרטהן, גרמניה 14'",
              "שרדונה מצודה, צובה, הרי יהודה, ישראל 15'",
              `ריזלינג "ז׳אן בטיסט" קבינט, גונדרלוך, ריין, גרמניה 14'`,
              "פטיט שאבלי, ז'אן מורו, בורגון, צרפת 14'"
            ]
          },
          {
            title: "אדום",
            items: [
              "קוט דה ונטו, לואי ברנרד, עמק הרון, צרפת 12'",
              "מרלו, צובה, הרי יהודה, ישראל 11'",
              "פינו נואר, ג.בושארד, בורגון, צרפת 13'",
              "ריוחה, רזרבה, מוגה, ספרד 12'",
              "קברנה סוביניון, שאטו גולן, רמת הגולן, ישראל 12'"
            ]
          }
        ]
      },
      halfBottle: {
        title: 'חצי בקבוק',
        items: [
          {
            title: "מבעבע",
            items: [
              "מואט ושנדו, ברוט אימפריאל N.V, שמפיין, צרפת"
            ]
          },
          {
            title: "לבן",
            items: [
              "סואבה, צזארי, ונטו, איטליה 14'",
              "סנסר לה בארונז', הנרי בורז'ואה, עמק הלואר, צרפת 14'"
            ]
          },
          {
            title: "אדום",
            items: [
              "שאטו סיסאק, הו מדוק, בורדו, צרפת 12'",
              `קברנה סוביניון, כרם "לבנון", רקאנטי, גליל עליון, ישראל 12', 500 מ״ל`,
              "אמרונה, צזארי, ונטו, איטליה 10'"
            ]
          }
        ],
      },
      bottle: {
        title: 'יינות בבקבוק',
        items: [
         {
           title: "מבעבעים",
           countries: [
             {
               name: '',
               items: [
                 "קורדון נגרו ברוט קאווה, פרקשנט, פנדס, ספרד",
                 "הואט, פטילן ברוט, ווברה, עמק הלואר, צרפת 09'",
                 "מואט ושנדו, ברוט אימפריאל N.V, שמפיין, צרפת",
                 "מואט ושנדו, נקטר אימפריאל N.V, שמפיין, צרפת",
                 "ג'אנמייר, ברוט N.V, שמפיין, צרפת",
                 "מואט ושנדו, רוזה אימפריאל N.V, שמפיין, צרפת",
                 "דום פריניון, וינטאג' 2004, שמפיין, צרפת",
               ]
             }
           ]
         },
         {
           title: "לבנים",
           countries: [
             {
               name: "ישראל",
               items: [
                 `רוזה ברברה, אדמה, יקב תבור 15'`,
                 `שרדונה מצודה, צובה, הרי יהודה 15'`,
                 `זהר, אדמה, יקב תבור 15'`,
                 `ויוניה, אורטל, גליל עליון 13'`,
                 `להט לבן, גוש עציון 13'`,
                 `שרדונה, קלו דה גת, הרי יהודה 13'`,
                 `סוביניון בלאן, שאטו גולן, רמת הגולן 14'`,
                 `שרדונה סי, קסטל, הרי יהודה 14'`,
                 `שרדונה סיקרא, קלו דה גת, הרי יהודה 09'`,
               ]
             },
             {
               name: "גרמניה",
               items: [
                 `גוורצטרמיינר, ג'וזף דרטהן, גרמניה 14'`,
                 `ריזלינג קבינט, "ז׳אן בטיסט", גונדרלוך, ריין 14'`,
                 `גוורצטרמיינר, שייפר פרוליש, נאהה 12'`,
                 `ריזלינג טרוקן, דונהוף, נאהה 12'`,
                 `ריזלינג, ואן דר פלס, קלר, ריין 13'`
               ]
             },
             {
               name: "אוסטריה",
               items: [
                 `גרונר ולטינר, אקר, ווארגאם, אוסטריה 14'`
               ]
             },
             {
               name: "איטליה",
               items: [
                 `מאסיאנקו, מאסי, ונטו 14'`
               ]
             },
             {
               name: "צרפת",
               items: [
                 `טאבל רוזה, שאטו ד'אקרייה, עמק הרון 13'`,
                 `בורגון שרדונה, ג.בושארד, בורגון 13'`,
                 `פטיט שאבלי, ז'אן מורו, בורגון 14'`,
                 `פואי פומה, גפנים צעירות, הנרי בורז'ואה, עמק הלואר 14'`,
                 `פינו בלאן, רזרב, ווינבאך, אלזס 12'`,
                 `סנסר, גפנים בוגרות, ז'אן מורו, עמק הלואר 13'`,
                 `שאבלי, וואיון, פרמייר קרו, וויליאם פבר, בורגון 13'`,
                 `פוליני מונרשה, אוליביה לפלייב, בורגון 11'`,
                 `שאבלי, ואלמור, גראנד קרו, ז'אן מורו, בורגון 11'`
               ]
             },
             {
               name: "ניו זילנד",
               items: [
                 `סוביניון בלאן, קלאודי ביי, ניו זילנד 14'`
               ]
             }
           ]
         },
         {
           title: "אדומים",
           countries: [
             {
               name: "ישראל",
               items: [
                 `מרלו, צובה, הרי יהודה 11'`,
                 `רעם, אדמה 2, יקב תבור 12'`,
                 `סיקרט, טריו, הרי יהודה 11'`,
                 `קברנה סוביניון, שאטו גולן, רמת הגולן 13'`,
                 `עמק איילון, קלו דה גת, הרי יהודה 10'`,
                 `אליעד, שאטו גולן, רמת הגולן 13'`,
                 `גראנד ווין, קסטל, הרי יהודה 13'`,
                 `סיקרא סירה, קלו דה גת, הרי יהודה 11'`
               ]
             },
             {
               name: "איטליה",
               items: [
                 `קיאנטי סופריור, באנפי, טוסקנה 12'`,
                 `ריפאסו מארה, צזארי, ונטו 13'`,
                 `קמפופיורין, מאסי, ונטו 11'`,
                 `ברברה ד'אלבה, פיו צ'זרה, פיימונטה 13'`,
                 `טנוטה קסטליוני, פרסקובלדי, טוסקנה 10'`,
                 `ברברסקו, פרדטורי, פיימונטה 10'`,
                 `סיטו מורסקו, גאיה, פיימונטה 13'`,
                 `אמרונה, קוסטסרה, דלה ואלפוליצ׳לה קלאסיקו, מאסי, ונטו 11'`,
                 `ברונלו דה מונטלצ'ינו, קסטלג'יוקונדו, פרסקובלדי, טוסקנה 10'`
               ]
             },
             {
               name: "צרפת",
               items: [
                 `קוט דה ונטו, לואי ברנרד, עמק הרון 12'`,
                 `פינו נואר, ג.בושארד, בורגון 13'`,
                 `טוף, שאטו דו הורו, סומור-שמפיני, עמק הלואר 11'`,
                 `סירה, סינייה, איב קויירון, עמק הרון 12'`,
                 `שאטונף דו פאף, לואי ברנרד, עמק הרון 13'`,
                 `נואי סן ז'ורז', לואי ז'אדו, בורגון 07'`
               ]
             },
             {
               name: "ספרד",
               items: [
                 `ריוחה, רזרבה, מוגה, ספרד 12'`
               ]
             }
           ]
         }
       ]
      }
    }
  }
}

export default Menu;
