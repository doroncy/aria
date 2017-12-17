const Menu = {
  entrees: {
    title: 'Entrees',
    bg: 'upstairs-entrees-bg',
    items: [
      {name: "אויסטר", description: "אויסטר מסוג ג'ילארדו מאזור סן רושל, צרפת", price: "32 / יח"},
      {name: `סביצ׳ה פרואני`, description: `דג ים קצוץ עם ויניגרט ליים, אבוקדו, מיקס של קשיו, תירס קריספי וטוויל טפיוקה`, price: "59"},
      {name: "פפאיה דג ים", description: `סלט פפאיה עם למון גראס, קשיו, לוביה תאילנדית ופרוסות דג ים נא מעל`, price: "54"},
      {name: "טונה אדומה", description: "סשימי טונה אדומה עם ויניגרט תפוז, שמן שומשום וצ'ילי אדום", price: "68"},
      {name: "טאטקי סלמון", description: "צרוב בצד אחד עם ויניגרט תמרהינדי, למון גראס וקשיו מקורמל מעל", price: "62"},
      {name: `קרודו דג ים`, description: `פרוסות של דג ים עם סלטון של כרישה, בצל ירוק וצנוניות, בויניגרט מייפל וסויה בהירה`, price: "58"},
      {name: `CALAMARI LOLLIPOPS`, description: `קלמרי מהים התיכון, צרוב במחבת ברזל לוהטת, מזוגג בטריאקי ביתי עם איולי וואסבי`, price: "62"},
      {name: `תמנון ים תיכון`, description: `זרוע תמנון צרובה על הפלאנצ׳ה עם קרם לימון ופירה גרגרי חרדל`, price: "62"},
      {name: `סלט שרימפס`, description: `שרימפס וויאטנמי סטייל עם ויניגרט חלב קוקוס, נקטרינה, צ׳יפס שאלוט, צ׳ילי ועלים ארומטיים`, price: "65"},
      {name: `קוקי סן ז'ק`, description: `צרוב על הפלאנצ'ה בחמאה חומה על קרם שקדים לבנים וביסק סרטנים כחולים`, price: "65"},
      {name: `גבינת בושה צלויה`, description: `סלק סוכר, פקאן סיני, אנדיב, לחם אגוזים וויניגרט פירות יער`, price: "62"},    
      {name: `סלט אנדיב`, description: `סלט של אנדיב סגול ולבן, שאלוט, רוקט בלאדי עם ויניגרט דובדבנים, שקדים קלויים וגבינת גורגונזולה`, price: "52"},
      {name: "סלט פטוש", description: "עגבניות מגי, מיני מלפפונים ורוקט חריף מתובלים בדואה מצרית וסומק עם גבינת המאירי", price: "52"},    
      {name: "קפלטי גבינות ותרד", description: "כיסוני בצק ממלואים בארבע גבינות ותרד ערבי ומזוגגים בחמאת מרווה", price: "59"},
      {name: `ויטלו טונאטו`, description: `וייסבראטן עגל צלוי למחצה, איולי טונה כבושה, קורנישונים וג'מבו צלפים`, price: "58"},    
      {name: `טרטר TOKYO STYLE`, description: `בקר קצוץ עם שומשום קלוי ותערובת תבלינים יפנית, טריאקי ביתי, אבוקדו מוקצף וחלמון חופש`, price: "62"},    
      {name: "סטייק כבד אווז", description: `צרוב במחבת, מוגש על קרם ערמונים חורפי וכרישה צעירה, ריבת דלעת ארומטית וציר יין`, price: "88"},
      {name: `בריק טלה`, description: `סיגרים ממולאים בבשר טלה וראס אל חנות`, price: "58"},
      {name: `פיש אנד צ׳יפס`, description: '', price: "72"}
    ],
    veganItems: [
      {name: `גבינת בושה צלויה`, description: `סלק סוכר, פקאן סיני, אנדיב, לחם אגוזים וויניגרט פירות יער`, price: "62"},    
      {name: "סלט פטוש", description: "עגבניות מגי, מיני מלפפונים ורוקט חריף מתובלים בדואה מצרית וסומק עם גבינת המאירי", price: "52"},    
      {name: "טאטקי תפוח אדמה קריספי", description: `צרוב בצד אחד עם ויניגרט תמרהינדי, למון גראס וקשיו מקורמל מעל`, price: "42"},
      {name: "סלט סלקים", description: `סלט של סלקים אדומים מבושלים בחומץ שרי עם אנדיב, אגוזי מלך ורוקט`, price: "42"},
      {name: "סלט אנדיב", description: `סלט של אנדיב סגול ולבן, שאלוט, רוקט בלאדי עם ויניגרט דובדבנים, שקדים קלויים וגבינת גורגונזולה`, price: "52"},
      {name: "קפלטי גבינות ותרד", description: "כיסוני בצק ממלואים בארבע גבינות ותרד ערבי ומזוגגים בחמאת מרווה", price: "59"}
    ]
  },
  main: {
    title: 'main',
    bg: 'upstairs-main-bg',
    items: [
      {name: "מוסר ים", description: `(200 גרם מנה מלאה / 100 גרם חצי מנה) בחמאת סויה בהירה, עגבניות מנומרות, טימין לימוני ובוקצ׳וי * התוספות זהות בשני הגדלים`, price: "79/136"},
      {name: 'לברק', description: `אפוי בתנור מעליו סלט חי של ג'ינג'ר , שאלוט, למון גראס, עלים ארומטיים עם קארי אדום פיקנטי`, price: "129"},
      {name: 'קלמרי סגול', description: `קלמרי צרוב במחבת ברזל על ריזוטו שחור, ציר ים וטוויל תחרה`, price: "112"},
      {name: `טורטליני בטטה`, description: `כיסוני בצק מזוגגים בחמאה חומה, על רוטב פיקורינו וצ׳יפס מרווה`, price: "88"},
      {name: `פטוצ'יני 40 חלמונים`, description: `רוטב Parmigiano Reggiano שלושים ושישה חודשים ועוד חלמון אחד חי מעל`, price: "78"},
      {name: `פפרדלה זנב שור`, description: `בשר זנב שור מבושל 4 שעות ביין אדום ושורשים עם פפרדלה חלמונים ופרמז'ן`, price: "98"},
      {name: `SWEET SHANGHAI DUCK`, description: `חזה ברווז מושרה בדבש אורגני וסויה שחורה, סלט כרוב ניצנים, פקאן סיני ועירית`, price: "128"},
      {name: `סינטה`, description: `(250 גרם מנה מלאה / 125 גרם חצי מנה) סטייק סינטה מרמת הגולן צרוב על הפלאנצ'ה, קרם בטטה סגולה, ספגטי מפטריות אנוקי ורוטב פלפלת ארבע עונות * התוספות זהות בשני הגדלים`, price: "92/148"},
      {name: `פילה בקר`, description: `250 גרם של פילה בקר מפרה שמנה עם בצל ותפוח אדמה מדורה`, price: "162"},
      {name: `סטייק נתח קצבים`, description: `(200 גרם מנה מלאה / 100 גרם חצי מנה) על קרם ארטישוק ירושלמי וכרישה שרופה עם ציר יין אדום * התוספות זהות בשני הגדלים`, price: "71/122"}      
    ],
    veganItems: [
      {name: `פטוצ׳יני ירוקים`, description: `פטוצ׳יני טבעוני בקארי אדום ARIA style עם בוקצ׳וי, ברוקומיני ובצל ירוק`, price: "68"},
      {name: `טורטליני בטטה`, description: `כיסוני בצק מזוגגים בחמאה חומה, על רוטב פיקורינו וצ׳יפס מרווה`, price: "88"}
    ]
  },
  deserts: {
    title: 'Desserts',
    bg: 'upstairs-desserts-bg',
    items: [
      {name: 'נמסיס', description: "עוגת שוקולד נימוחה, קרמבל שיבולת שועל, גנאש שוקולד חלב, מרשמלו פלאפ וגלידת וניל", price: "48"},
      {name: `סמי פרדו ברגמוט`, description: `גנאש פיסטוק מלוח, שערות קדאיף, פיסטוק מקורמל, רחת לוקום ביתי ועלי ורדים מסוכרים`, price: "52"},
      {name: `מילפיי טירמיסו`, description: `שכבות בצק עלים, קרם מסקרפונה וזביון מרסלה, רוטב קפה והנסי, רוטב אייריש קרים`, price:"48"},
      {name: `פנקוטת מנגו מאיה`, description: `מוס שוקולד חלב, קראנץ׳ פאייטה וטוויל שומשום שחור, סורבה מנגו וטופי מלוח`, price: "48"},
      {name: `NEW YORK STYLE CHEESE CAKE`, description: `עוגת גבינת שמנת עשירה מקורמלת על קרמבל שקדים וסורבה מנדרינה`, price:"48"},
      {name: 'הנסי אספרסו', description: "קוקטייל מרענן של הנסי עם אספרסו וזסט לימון", price: "36"},
      {name: 'מבחר סורבטים', description: "מבחר של שלושה סורבטים", price: "38"}
    ]
  },
  cocktails: {
    title: 'Cocktails',
    bg: 'upstairs-cocktails-bg',
    items: [
      {name: `AROUND THE WORLD`, description: `קוקטייל שלוקח אותנו לטיול מסביב לעולם. רום קריבי מתובל באננס, וויסקי שיפון אמריקאי, ורמוט צרפתי, ביטר ניו אורלינס סטייל, דבש ארץ ישראלי, ליים טרי וחלבון. קוקטייל חמוץ מתוק, בעל טעמים קריביים וחורפיים.`, price: "67"},    
      {name: `SAY HELLO 2 HEAVEN`, description: `קוקטייל שמפניה עם טוויסט של בזילקום. שמפניה Moët & Chandon, ג'ין טנקרי, מיץ לימון, נענע שחורה והרבה בזילקום. קוקטייל פראשי, חמצמץ ואלכוהולי. מומלץ!`, price: "68"},
      {name: `DON JUAN`, description: `קוקטייל בעל שילוב טעמים יוצא דופן. דון חוליו בלאנקו מושרה עם למון גראס ולואיזה, שרטרז ירוק, מידורי, מיץ אננס, ליים וסירופ אגבה. קוקטייל אלכוהולי, חמוץ מתוק.`, price: "64"},
      {name: `GODDESS`, description: `קוקטייל שממש כמו השם שלו אי אפשר לעמוד בפניו. ג'ין טנקרי, סירופ פטל ביתי, מיץ לימון, אבקת פירות יער וחלבון. קוקטייל קליל וכיפי בעל טעמים מתקתקים של חורף.`, price: "62"},    
      {name: `FRUIT GARDEN`, description: `קוקטייל קאריבי, פירותי ומתובל. קוקטייל על בסיס רום לבן עם אפרסק, פסיפלורה, סירופ אלדרפלאוור (פרח הסמבוק), מיץ ליים טרי ואנגוסטורה ביטר. מתקתק, פירותי וכייפי בדיוק כמו שאנחנו אוהבים.`, price: "58"},    
      {name: `ARIA SOUR #4`, description: `קוקטייל הבית האהוב והמפורסם שלנו בגרסה חדשה. הנסי v.s, ליקר תפוזים דריי קרסאו, אמרו מונטנגרו, מיץ לימון, סירופ מייפל וחלבון מנוערים היטב. סאוור קלאסי, עוצמתי ומתוחכם כזה שאי אפשר לשכוח.`, price: "59"},
      {name: `KALISPERA`, description: `פירוש השם ביוונית הוא ערב טוב, וזה בדיוק הקוקטייל שיפתח לכם את הערב כמו שצריך. אוזו, אמרטו דיסארונו, רוזטת שקדים ביתית, קראול ביטר, תפוז ובזיליקום סגול. קוקטייל מתקתק בעל טעמי שקדים ואניס עדינים.`, price: "54"},
      {name: `SPANISH CARAVAN`, description: `סנגריה ARIA Style. מוגה ריוחה רזרבה, מוגה ריוחה רוזה, סירופ אלדרפלאוור, מיץ תפוזים סחוט, מיץ לימון ופירות משתנים. קליל, מתקתק ופרחוני.`, price: "52"},
      {name: `2.0 PLAGUE WATER COLLINS`, description: `מחווה לממציא הג'ין, המדען והרופא פרנסיסקוס סילביוס. האגדה מספרת שפרנסיסקוס המציא את הג'ינייבר על מנת להילחם באחת המגפות שהתחוללו באירופה, אך במקום תרופה נוצר לו אחד המשקאות האהובים עלינו. ג'ין טנקרי מושרה בחליטה ביתית והיבסקוס, מיץ לימון טרי, נענע ומי טוניק. קוקטייל קליל וכיפי כזה שיגרום לכם להזמין עוד אחד.`, price: "59"},
      {name: `SPEEDY GONZALEZ`, description: `גרסה חדשנית ומקסיקנית לקוקטייל המוסקו מיול המפורסם. טקילה מיושנת, מסקל וסירופ אגבה בשילוב עם ליים, מלפפונים, נענע וג'ינג'ר ביר היוצרים קוקטייל מעקצץ, מתוחכם וכייפי. תרצו להזמין עוד אחד מהר יותר מספידי גונזאלס.`, price: "64"},
      {name: `SESAME STREET`, description: `חוויה חד פעמית ושוברת מוסכמות, שילוב של וודקה קטל 1 ציטרון ותפוז, לימונצ'לו חלבי שאנו מכינים, דבש וניל וטחינה! הרפתקני, נועז, חמוץ, מתוק וסמיך. אריק ובנץ לא היו מעיזים, ואתם?`, price: "56"},
      {name: `DANCE WITH THE DEVIL`, description: `קוקטייל לחובבי הקוקטילים המרירים. קמפרי, שרטרז ירוק, ג'ין טנקרי, מיץ לימון ומעט סודה. קוקטייל קליל ואלכוהלי בעל טעמים מרירים וחמוצים.`, price: "57"},
      {name: `SMOKEY THOMAS`, description: `קוקטייל שהוא מחווה לפרופסור ג'רי תומאס, כותב ספר הקוקטיילים הראשון בעולם והאיש שבזכותו אנחנו כל כך אוהבים קוקטיילים. מסקל, אפרול, סינגל מאלט סקוטי מעושן, ג'רי תומאס ביטר, מייפל ומיץ לימון. קוקטייל מעושן ומתובל בעל טעמים מתקתקים. מתוחכם ושובר מוסכמות ממש כמו האיש עצמו.`, price: "64"},
      {name: `BLACK PEARL`, description: `קוקטייל אלכוהולי ומתוחכם בעל טעמי שוקולד מריר, קפה ומעט וניל. רום זקאפה 23, בולט ברבן, צ'ינאר, נגיעה של וניל וביטר שוקולד היוצרים קוקטייל חורפי בעל מתיקות ומרירות אלכוהולית מדהימה. קוקטייל שהוא חוויה לכל החושים.`, price: "67"},
      {name: `WHITE NEGRONI`, description: `טוויסט מעניין וקליל לקוקטייל הקלאסי והמפורסם. ג'ין, ורמוט צרפתי לבן, אפרול, מרסקינו, ביטר פיישוד ומעט יין לבן יבש, מעורבבים יחדיו ויוצרים קוקטייל עדין ואלכוהולי בעל איזון מושלם בין מרירות, מתיקות וחמיצות הדרים עדינה.`, price: "55"}
    ]
  },
  alcohol: {
    title: 'TASTE OF MIND',
    bg: 'upstairs-alcohol-bg',
    items: [
      {name: "ארוחת טעימות מיוחדת", description: "שבע מנות לבחירה ארוחה זוגית | 158 ₪ לאדם", noPad: true},
      {name: "", description: `לבחירתכם קינוח זוגי מתפריט המסעדה`},
      {name: "", description: `ארוחת הטעימות מוגשת בימים שבת-רביעי בהזמנה מראש בלבד`},
      {name: `קרודו דג ים`, description: `פרוסות של דג ים עם סלטון של כרישה, בצל ירוק וצנוניות, בויניגרט מייפל וסויה בהירה`},
      {name: `טאטקי סלמון`, description: `צרוב בצד אחד עם ויניגרט תמרהינדי, למון גראס, קשיו מקורמל ובצל ירוק`},
      {name: `טרטר TOKYO STYLE`, description: `בקר קצוץ עם שומשום קלוי ותערובת תבלינים יפנית, טריאקי ביתי, אבוקדו מוקצף וחלמון חופש`},
      {name: `תמנון ים תיכון`, description: `זרוע תמנון צרובה על הפלאנצ׳ה עם קרם לימון ופירה גרגרי חרדל`},
      {name: `גבינת בושה צלויה`, description: `סלק סוכר, פקאן סיני, אנדיב, לחם אגוזים וויניגרט פירות יער`},
      {name: `טורטליני בטטה`, description: `כיסוני בצק מזוגגים בחמאה חומה, על רוטב פיקורינו וצ׳יפס מרווה`},
      {name: `קפלטי גבינות ותרד`, description: `כיסוני בצק ממלואים בארבע גבינות ותרד ערבי, מזוגגים בחמאת מרווה`},
      {name: `סינטה`, description: `100 גרם סטייק סינטה מרמת הגולן צרוב על הפלאנצ'ה, קרם בטטה סגולה, ספגטי מפטריות אנוקי ורוטב פלפלת ארבע עונות`},
      {name: `פילה מוסר ים`, description: `בחמאת סויה בהירה, עגבניות מנומרות, טימין לימוני ובוקצ׳וי`}      
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
              `קורדון נגרו, ברוט N.V, פרקשנט, פנדס, ספרד`,
              `מואט ושנדו, ברוט אימפריאל N.V, שמפיין, צרפת, 200 מ״ל`
            ]
          },
          {
            title: "לבן",
            items: [
              `גוורצטרמיינר, ג׳וזף דרהאטן, גרמניה 15'`,
              `שרדונה, צובה, הרי יהודה, ישראל 15׳`,
              `רוזה, בלו c, קובננט, רמת הגולן, ישראל 16'`,            
              `סנסר, פורנייר, עמק הלואר, צרפת 14׳`,
              `פטיט שבלי, ז׳אן מורו, בורגון, צרפת 14׳`
            ]
          },
          {
            title: "אדום",
            items: [
              `מרלו, צובה, הרי יהודה, ישראל 12׳`,
              `רוסו דה מונטיפולצ׳יאנו, בוסקרלי, טוסקנה, איטליה 15׳`,
              `רעם, אדמה ll, תבור, ישראל 13׳`,
              `פינו נואר, ג.בושארד, בורגון, צרפת 13׳`,
              `ריוחה, רזרבה, מוגה, ספרד 12׳`,
              `קברנה סוביניון, שאטו גולן, רמת הגולן 14׳`
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
              `מואט ושנדו, ברוט אימפריאל N.Vשמפיין, צרפת`
            ]
          },
          {
            title: "לבן",
            items: [
              "סואבה, צזארי, ונטו, איטליה 14'",
              `סנסר לה בארונז', הנרי בורז'ואה, עמק הלואר, צרפת 15׳`
            ]
          },
          {
            title: "אדום",
            items: [
              `שאטו סיסאק, הו מדוק, בורדו, צרפת 13׳`,
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
                 `קורדון נגרו, ברוט N.V, פרקשנט, פנדס, ספרד`,
                 `פרקשנט אייס, פנדס, ספרד`,
                 "הואט, פטילן ברוט, ווברה, עמק הלואר, צרפת 09'",
                 `מואט ושנדו, ברוט אימפריאל N.V, שמפיין, צרפת`,
                 `מואט ושנדו, נקטר אימפריאל N.V, שמפיין, צרפת`,
                 `מואט ושנדו, רוזה אימפריאל N.V, שמפיין, צרפת`,
                 `ג'אנמייר, ברוט N.V, שמפיין, צרפת`,                 
                 `דום פריניון, וינטאג' 2006, שמפיין, צרפת`,
                 `דום פריניון, רוזה, וינטאג׳ 2004 , שמפיין, צרפת`
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
                 `שרדונה מצודה, צובה, הרי יהודה 15'`,
                 `ויונייה, אורטל, רמת הגולן 14׳`,                
                 `שרדונה, קלו דה גת, הרי יהודה 14׳`,
                 `סוביניון בלאן, שאטו גולן, רמת הגולן 15׳`,
                 `שרדונה, C, קסטל, הרי יהודה 15׳`,
                 `שרדונה סיקרא, קלו דה גת, הרי יהודה 09׳`
               ]
             },             
             {
               name: "גרמניה",
               items: [
                 `גוורצטרמיינר, ג'וזף דרטהן, ריין 15׳`,
                 `גוורצטרמיינר, שייפר פרוליש, נאהה 13׳`,
                 `ריזלינג, ואן דר פלס, קלר, ריין 13׳`
               ]
             }, 
             {
              name: "ניו זילנד",
              items: [
                `סוביניון בלאן, קלאודי ביי, ניו זילנד 15'`
              ]
             },            
             {
               name: `ארה״ב`,
               items: [
                 `סוביניון בלאן, קאנון בול, קליפורניה 15׳`
               ]
             },
             {
              name: `איטליה`,
              items: [
                `מאסיאנקו, מאסי, ונטו 15׳`
              ]
             },
             {
              name: "צרפת",
              items: [
                `טאבל רוזה, שאטו ד'אקרייה, עמק הרון 13׳`,
                `בורגון שרדונה, ג.בושארד, בורגון 13׳`,
                `פטיט שאבלי, ז'אן מורו, בורגון 14'`,
                `פואי פומה, הנרי בורז'ואה, עמק הלואר 14׳`,
                `ריזלינג, שלומברגר, אלזס 12׳`,
                `סנסר, פורנייר, עמק הלואר 14׳`,                 
                `שבלי, ואיון, פרימייר קרו, ז׳אן מורו, בורגון 14׳`,
                `פוליני מונרשה, שאטו דה פוליני-מונרשה, בורגון 11׳`,
                `שבלי, קלו, גראן קרו, כריסטיאן מורו, בורגון 14׳`,
                `שבלי, ואלמור, גראן קרו, ז׳אן מורו, בורגון 14׳`
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
                 `מרלו, צובה, הרי יהודה 12׳`,
                 `רעם, אדמה II, יקב תבור 13'`,
                 `סיקרט, טריו, הרי יהודה 12׳`,
                 `קברנה סוביניון, שאטו גולן, רמת הגולן 14׳`,
                 `עמק איילון, קלו דה גת, הרי יהודה 11׳`,
                 `אליעד, שאטו גולן, רמת הגולן 14׳`,
                 `קברנה פראנק, מרגלית, גליל עליון 13׳`,                                 
                 `גראנד ווין, קסטל, הרי יהודה 14׳`,
                 `סיקרא סירה, קלו דה גת, הרי יהודה 11׳`,
                 `מקורה, אמפורה 09׳`,
                 `אניגמא, מרגלית, גליל עליון 13׳`,
                 `ולור, אמפורה 10׳`
               ]
             },
             {
              name: "איטליה",
              items: [
                `קיאנטי סופריור, באנפי, טוסקנה 12'`,
                `רוסו דה מונטיפולצ׳יאנו, בוסקרלי, טוסקנה 15׳`,
                `קמפופיורין, מאסי, ונטו 13׳`,
                `ריפאסו מארה, צזארי, ונטו 14׳`,
                `ברברה ד׳אלבה, פיו צ׳זרה, פיימונטה 14׳`,
                `קיאנטי רופינה, ניפוציאנו רזרב, פרסקובלדי, טוסקנה 12׳`,
                `וינו נובילה, בוסקרלי, טוסקנה 11׳`,
                `אמרונה, קוסטסרה, דלה ואליפוליצ׳לה קלאסיקו, מאסי, ונטו 11׳`,
                `ברונלו דה מונטלצ'ינו, קסטלג'יוקונדו, פרסקובלדי, טוסקנה 10'`,
                `איל בוסקו, סינגל ויניארד אמרונה, צזארי, ונטו 08׳`,
                `ברברסקו, פיו צ׳זארה, פיימונטה 12׳`
              ]
             },
             {
               name: "צרפת",
               items: [
                 `קוט דה ונטו, לואי ברנרד, עמק הרון 13'`,
                 `פינו נואר, ג.בושארד, בורגון 13'`,
                 `סירה, סינייה, איב קויירון, עמק הרון 12׳`,
                 `שאטונף דו פאף, לואי ברנרד, עמק הרון 14׳`,
                 `קוט רוטי, לואי ברנרד, עמק הרון 10׳`,
                 `נואי סן ז׳ורז׳, קלו דה פורה, פרימייר קרו, דומיין דה לארלו, בורגון 11׳`
               ]
             },             
             {
               name: "ספרד",
               items: [
                 `ריוחה, רזרבה, מוגה, ספרד 12׳`
               ]
             },
             {
               name: "ארגנטינה",
               items: [
                 `מלבק, גולדן רזרב, טריבנטו 14׳`
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