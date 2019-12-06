const Menu = {
  entrees: {
    title: 'Entrees',
    bg: 'upstairs-entrees-bg',
    items: [
      {name: "אויסטר", description: "אויסטר מסוג ג'ילארדו מאזור סן רושל, צרפת", price: "33 / יח"},
      {name: `מרק דושפרה`, description: `כיסוני בשר מבצק רבוך, מרק צח, עלי מנגולד, כוסברה ובצל ירוק`, price: "58"},
      {name: `קרפצ׳יו דג ים`, description: `קרפצ׳יו דג ים פרוס דק בתיבול של ויניגרט לימון כבוש, סלט ירקות קצוצים, יוגורט סומק`, price: "65"},
      {name: `קרודו ים תיכון`, description: `דג ים נא עם עגבניות מרוסקות, ויניגרט של קונפי שום וזיתי קלמטה, צ׳ילי ירוק מותסס ולימון פרסי מגורד`, price: "72"},
      {name: "טאטקי סלמון", description: "צרוב בצד אחד עם ויניגרט תמרהינדי, למון גראס וקשיו מקורמל מעל", price: "65"},
      {name: `סשימי יפני`, description: `פרוסות של טונה אדומה בפונזו הדרים, צ׳ילי מותסס, במיה בטמפורה וזרעי כוסברה`, price: "72"},
      {name: `סלט קלמרי מקומי`, description: `קלמרי צרוב על מחבת ברזל עם ירקות שרופים, סלייסים של כרובית פריכה ויוגורט טחינה`, price: "68"},
      {name: `תמנון ים תיכון`, description: `זרוע תמנון צרובה על הפלאנצ׳ה עם קרם לימון ופירה גרגרי חרדל`, price: "68"},
      {name: `סלט שרימפס`, description: `שרימפס וויאטנמי סטייל עם ויניגרט חלב קוקוס, פומלה, צ׳יפס שאלוט, צ׳ילי ועלים ארומטיים`, price: "68"},
      {name: `קוקי סן ז'ק`, description: `צרוב על הפלאנצ'ה בחמאה חומה על קרם שקדים לבנים וביסק סרטנים כחולים`, price: "68"},
      {name: `לב ארטישוק`, description: `ארטישוק מבושל בחומץ יין ועשבי תיבול על קרם תירס מתקתק, בלסמי 18 שנה ופרמז'ן רג'יאנו`, price: "65"},    
      {name: `סלט עלים`, description: `עלים של חורף, אנדיב סגול ולבן, פילטים של תפוז, קריספי קייל, גרעיני חמניה וגבינת גורגונזולה`, price: "56"},
      {name: `אנדיב וגורגונזולה`, description: `עלי אנדיב, ויניגרט רכז רימונים לבנוני, גורגונזולה מעושנת קלות, שאלוט פרוס וקראמבל אגוזי לוז`, price: "62"},
      {name: `פיטריות ומוצרלה איטלקית`, description: `קציפת פטריות פורצ'יני, פטריות יער צלויות, קרעי מוצרלה באפלו איטלקית וקרמבל קקאו`, price: "65"},    
      {name: `סלט פטוש`, description: `עגבניות מגי, מיני מלפפונים ורוקט חריף מתובלים בדואה מצרית וסומק עם גבינת המאירי`, price: "54"},
      {name: "קפלטי גבינות ותרד", description: "כיסוני בצק ממלואים בארבע גבינות ותרד ערבי ומזוגגים בחמאת מרווה", price: "65"},
      {name: `נתח קצבים סצ׳ואן`, description: `נתח קצבים דק צרוב ופרוס בקרמל סויה סצ׳ואן, חלב קוקוס, שמן שומשום, בצל ירוק ואפונת ווסאבי`, price: "68"},      
      {name: `שקדי טלה`, description: `שקדי טלה, קרם כרוב מעושן קלות, ציר טלה, פאף פריקה וצ׳יפס קייל`, price: "72"},      
      {name: `בריוש טרטר בקר`, description: `בשר בקר קצוץ עם איולי חרדל, שאלוט, בצל ירוק, פרמז׳ן ומח עצם`, price: "72"},                     
      {name: "סטייק כבד אווז", description: `צרוב במחבת, מוגש על קרם ערמונים חורפי וכרישה צעירה עם כיסוני דלעת מזוגגים ברוטב יין`, price: "98"}            
    ]   
  },
  main: {
    title: 'main',
    bg: 'upstairs-main-bg',
    items: [
      {name: "מוסר ים", description: `בחמאת סויה בהירה, עגבניות מנומרות, טימין לימוני ובוקצ׳וי`, price: "89/140"},
      {name: 'פילה דניס', description: `אפוי בתנור מעליו סלט חי של ג'ינג'ר , שאלוט, למון גראס, עלים ארומטיים עם קארי אדום פיקנטי`, price: "129"},
      {name: `ריזוטו סרטנים כחולים`, description: `בשר סרטנים מבושל עם שאלוט, שום, טימין ויין לבן אורז ארבוריו, ציר עגבניות צהובות ופרמז'ן`, price: "105"},      
      {name: `פסטה פיצ׳י ושרימפס קריסטל`, description: `פסטה פיצ׳י בעבודת יד, מטבוחה עגבניות מגי, שרימפס קריסטל במחבת ברזל ואבקת כוסברה`, price: "136"},
      {name: `טורטליני בטטה`, description: `כיסוני בצק מזוגגים בחמאה חומה, על רוטב פיקורינו וצ׳יפס מרווה`, price: "88"},
      {name: `פטוצ'יני 40 חלמונים`, description: `פטוצ׳יני 40 חלמונים עם פיטריות פורצ׳יני, חלמון חופש וגרעיני דלעת`, price: "88"},
      {name: `פפרדלה זנב שור`, description: `בשר זנב שור מבושל 4 שעות ביין אדום ושורשים עם פפרדלה חלמונים ופרמז'ן`, price: "105"},
      {name: `ניו יורק סטייק על העצם`, description: `סינטה על העצם לפי משקל מוגש עם חרדל חריף, צ׳יפס וירקות אורגניים`, price: "55 (מחיר ל-100 גרם)"},      
      {name: `פילה בקר`, description: `250 גרם פילה בקר צרוב, קציפת תפוחי אדמה ושאלוט שרוף, טורטליני במילוי שאלוט מקורמל וירקות העונה`, price: "198"},
      {name: `צלעות טלה`, description: `צרובות במחבת ברזל עם קולקציית גזרים אורגניים במרקמים שונים ואבקת פיסטוק איראני`, price: "198"},
      {name: `סטייק נתח קצבים`, description: `על קרם ארטישוק ירושלמי וכרישה שרופה עם ציר יין אדום`, price: "86/130"}      
    ]
  },
  deserts: {
    title: 'Desserts',
    bg: 'upstairs-desserts-bg',
    items: [
      {name: 'נמסיס', description: "עוגת שוקולד נימוחה, קרמבל שיבולת שועל, גנאש שוקולד חלב, מרשמלו פלאפ וגלידת וניל", price: "48"},
      {name: `טארט לימון`, description: `מרנג שוויצרי חרוך וסבלה תירס`, price: "55"},
      {name: `ברולה מייפל`, description: `פקאן סיני, גלידת שמנת אמריקאית ומלח ים אטלנטי`, price:"48"},
      {name: `סן סבסטיאן צ׳יזקייק`, description: ``, price: "48"},
      {name: `מקופלת`, description: `מוס לוז משוקולד מריר 67% וג׳אנדויה`, price:"55"},      
      {name: `טירמיסו`, description: `קרם זביון מסקרפונה, בישקוטים טבולים בקרמל אספרסו ואבקת קקאו`, price: "48"},
      {name: `סורבטים`, description: `מבחר של שלושה סורבטים`, price:"38"}
    ]
  },
  cocktails: {
    title: 'Cocktails',
    bg: 'upstairs-cocktails-bg',
    items: [
      {name: 'GOLD DIGGER', description: `קוקטייל חורפי ונוצץ. גריי גוס אגס, ליקר סנט ג'רמיין, מרטיני ביאנקו, שיכר שזיפים יפני ואבקת זהב. מתקתק ואלכוהולי.`, price:"64"},
      {name: 'APRICOT SPRITS', description: `קוקטייל קליל והדרי. בוכא בוקובזה מושרת עם משמש אוזבקי, אפרול, אמרו מונטנגרו, ביטרים יפנים ויין מבעבע. מתקתק עם מרירות עדינה`, price:"58"},
      {name: 'LADY IN RED', description: `קוקטייל פרחוני ומעודן. ג'ין טנקרי, שמבורד, סירופ לבנדר והיבסקוס ביתי, מיץ לימון טרי ונגיעה של שוצ'ו יסמין. קוקטייל מתקתק ולא שיגרתי`, price:"62"},
      {name: 'SPANISH CARAVAN', description: `סנגריה ARIA STYLE. הגרסה שלנו לקוקטייל הספרדי המוכר. מכיל יינות מוגה ריוחה ומוגה רוזה, מיץ תפוזים סחוט, סירופ אלדרפלאוור ופירות חתוכים. קליל, פירותי ומתקתק`, price:"56"},      
      {name: 'SAY HELLO 2 HEAVEN', description: `קוקטייל שמפניה עם טוויסט של בזיליקום. שמפניה לורן פרייה, ג'ין טנקרי, מיץ לימון, נענע שחורה והרבה בזיליקום. פראשי, חמצמץ ואלכוהולי. מומלץ!`, price:"69"},
      {name: 'FRUIT GARDEN', description: `קוקטייל קאריבי, פירותי ומתובל. קוקטייל על בסיס רום לבן עם אפרסק, פסיפלורה, סירופ אלדרפלאוור (פרח הסמבוק), מיץ ליים טרי ואנגוסטורה ביטר. מתקתק, פירותי וכייפי בדיוק כמו שאנחנו אוהבים`, price:"59"},
      {name: '007', description: `קוקטייל מחווה לג'יימס בונד ולקוקטייל האהוב עליו. וודקה קטל וואן מושרת בקליפות מלפפונים וטימין, ג'ין טנקרי, לילט בלאן, רוקט, ליים, יוזו וביטר סלרי. מנוער ולא משוקשק, פראשי, חמצמץ, אלכוהולי ומתובל`, price:"63"},      
      {name: "PLAGUE WATER COLLINS 4.0", description: `מחווה לממציא הג'ין, המדען והרופא פרנסיסקוס סילביוס. האגדה מספרת שפרנסיסקוס המציא את הג'ינייבר על מנת להילחם באחת המגפות שהתחוללו באירופה, איך במקום תרופה נוצר לו אחד המשקאות האהובים עלינו. ג'ין בומביי מושרה בלמון גראס והיבסקוס, מיץ לימון טרי ומי טוניק. קוקטייל קליל וכיפי, כזה שיגרום לכם להזמין עוד אחד`, price:"62"},
      {name: "ARIA SOUR #4", description: `קוקטייל הבית האהוב והמפורסם שלנו בגרסה חדשה. קורווזיה v.s, ליקר תפוזים דריי קרסאו, אמרו מונטנגרו, מיץ לימון, סירופ מייפל וחלבון מנוערים היטב. סאוור קלאסי, עוצמתי ומתוחכם, כזה שאי אפשר לשכוח`, price:"65"},      
      {name: "KALISPERA", description: `פירוש השם ביוונית הוא ערב טוב, וזה בדיוק הקוקטייל שיפתח לכם את הערב כמו שצריך. אוזו, אמרטו דיסארונו, רוזטת שקדים ביתית, קראול ביטר, תפוז ובזיליקום סגול. קוקטייל מתקתק בעל טעמי שקדים ואניס עדינים.`, price:"62"},
      {name: "BLACK SESAME STREET", description: `חוויה חד פעמית ושוברת מוסכמות, שילוב של בקרדי 8, ליקר קפה , לימנצ'לו חלבי שאנו מכינים במקום, דבש, ביטר שוקלד, קצח טחון וטחינה!! הרפתקני, נועז, חמוץ, מתוק וסמיך. אריק ובנץ לא היו מעיזים, ואתם?`, price:"63"},
      {name: 'DON JUAN', description: `קוקטייל בעל שילוב טעמים יוצא דופן. דון חוליו בלאנקו מושרה עם למון גראס ולואיזה, שרטרז ירוק, מידורי, מיץ אננס, ליים וסירופ אגבה. קוקטייל אלכוהולי, חמוץ מתוק.`, price:"64"},      
      {name: "MEZCALITO", description: `קוקטייל שמתאר טיול באמריקה הלטינית. מזקל וידה, פיסקו פראנו, טינקטורה של פלפל הבנרו, מיץ ליים טרי וכוסברה. קוקטייל חריף, מעושן וכיפי`, price:"64"},
      {name: "STRAWBERRY FIELDS", description: `קוקטייל מריר וחורפי. בקרדי 8, סנט ג'רמיין, קמפרי, סירופ תות ביתי, מיץ אננס ואנגוסטורה ביטר. מריר, מתקתק ובועט`, price:"66"},
      {name: "BLACK PEARL", description: `קוקטייל אלכוהולי ומתוחכם בעל טעמי שוקולד מריר, קפה ומעט וניל. רום זקאפה 23 , בולט ברבן, צ'ינר, נגיעה של וניל וביטר שוקולד יוצרים קוקטייל חורפי בעל מתיקות ומרירות אלכוהולית מדהימה. קוקטייל שהוא חוויה לכל החושים.`, price:"68"},
      {name: "DATES BOULEVARDIER", description: `טוויסט לקוקטייל הקלאסי והאלגנטי. בולט שיפון מושרה עם תמרי מג'הול, צ'ינר, ורמוט יבש, ביטרים ונגיעה של פרנה בראנקה. מעודן ומעט מריר`, price:"65"},
      {name: "SPEEDY GONZALEZ", description: `גרסה חדשנית ומקסיקנית לקוקטייל המוסקו מיול המפורסם. טקילה מיושנת, מסקל וסירופ אגבה בשילוב עם ליים, מלפפונים, נענע וג'ינג'ר ביר היוצרים קוקטייל מעקצץ, מתוחכם וכייפי. תרצו להזמין עוד אחד מהר יותר מספידי גונזאלס`, price:"62"}  
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
              `פרקשנט אייס רוזה, פנדס, ספרד`
            ]
          },
          {
            title: "לבן",
            items: [
              `גוורצטרמיינר, ג׳וזף דרהאטן, גרמניה 18'`,
              `שרדונה, צובה, הרי יהודה, ישראל 17׳`,
              `רוזה, בלו c, קובננט, רמת הגולן, ישראל 17'`,
              `סנסר, פורנייר, עמק הלואר, צרפת 18׳`,
              `פטיט שבלי, ז׳אן מורו, בורגון, צרפת 18׳`,
              `ויונייה כרם תל שיפון, תבור, ישראל 18׳`
            ]
          },
          {
            title: "אדום",
            items: [
              `מרלו, צובה, הרי יהודה, ישראל 18׳`,
              `רוסו דה מונטיפולצ׳יאנו, בוסקרלי, טוסקנה, איטליה 17׳`,
              `קוט דו רון, וידאל פלורי, עמק הרון, צרפת 15׳`,
              `פינו נואר, ג.בושארד, בורגון, צרפת 17׳`,
              `ריוחה, רזרבה, מוגה, ספרד 15׳`,
              `קברנה סוביניון, שאטו גולן, רמת הגולן 16׳`
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
              `לורן פרייה, ברוט N.V, שמפיין, צרפת`
            ]
          },
          {
            title: "לבן",
            items: [
              `סואבה, צזארי, ונטו, איטליה 18׳`,
              `פואי פומה, פורנייר, עמק הלואר, צרפת 18׳`
            ]
          },
          {
            title: "אדום",
            items: [              
              `קברנה סוביניון, כרם "לבנון", רקאנטי, גליל עליון, ישראל 14', 500 מ״ל`,
              `אמרונה, צזארי, ונטו, איטליה 14'`
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
                 `פרקשנט אייס רוזה, פנדס, ספרד`,
                 `לורן פרייה, ברוט N.V, שמפיין, צרפת`,
                 `לורן פרייה, דמי סק N.V, שמפיין, צרפת`,
                 `לורן פרייה, ברוט N.V, שמפיין, צרפת`,
                 `לורן פרייה, רוזה ברוט N.V, שמפיין, צרפת`,
                 `פול רוג'ר, סר וינסטון צ'רצ'יל, וינטג' 2006, שמפיין, צרפת`,
                 `ארמנד דה ברניאק, ברוט גולד, שמפיין, צרפת`
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
                 `שרדונה, מצודה, צובה, הרי יהודה 17׳`,
                 `רוזה, בלו C, קובננט, רמת הגולן 17'`,
                 `פינו גריג'ו, לוריא, רמת הגולן 18'`,
                 `ויוניה, בלו C, קובננט, רמת הגולן 17'`,
                 `שרדונה, לוריא, רמת הגולן 17'`,
                 `שרדונה, קלו דה גת, הרי יהודה 17׳`,
                 `ויונייה כרם תל שיפון, תבור 17'`,
                 `סוביניון בלאן, שאטו גולן, רמת הגולן 18׳`,
                 `שרדונה, C, קסטל, הרי יהודה 18׳`
               ]
             },  
             {
              name: "צרפת",
              items: [                
                `בורגון שרדונה, ג.בושארד, בורגון 17׳`,
                `פטיט שאבלי, ז'אן מורו, בורגון 18'`,
                `פואי פומה, הנרי בורז׳ואה, עמק הלואר 17׳`,
                `רוזה, אקס, פרובאנס 18'`,
                `פינו בלאן, שלומברגר, אלזס 16'`,
                `סנסר, פורנייר, עמק הלואר 18׳`,
                `גוורצטרמינר, שלומברגר, אלזס 16'`,
                `רוזה, שאטו מינוטי, פרובאנס 18'`,
                `ריזלינג, סרינג, גראנד קרו, אלזס 14׳`,
                `שבלי, ואיון, פרימייר קרו, ז׳אן מורו בורגון 16׳`,
                `סנסר, לה שאודליון, פורנייר,עמק הלואר 16'`,
                `פוליני מונרשה, שאטו דה פוליני-מונטרשה, בורגון 15׳`,
                `שאבלי, קלו, גראן קרו, כריסטיאן מורו, בורגון 14׳`,
                `שאבלי, ואלמור, גראן קרו, ז׳אן מורו, בורגון 15׳`
              ]
            },           
             {
               name: "גרמניה",
               items: [
                 `גוורצטרמיינר, ג'וזף דרטהן, ריין 18׳`,                 
                 `ריזלינג, אורבן, ריין 17 '`
               ]
             }, 
             {
              name: "ספרד",
              items: [
                `בלאנקו, מוגה, ריוחה 18'`,
                `פלור דה מוגה רוזאדו, מוגה, ריוחה 17'`,
                `פינקה לה קולינה, רואחה 17 '`
              ]
            }, 
            {
              name: `ארה״ב`,
              items: [
                `סוביניון בלאן, קאנון בול, קליפורניה 16׳`
              ]
            },
             {
              name: "ניו זילנד",
              items: [
                `סוביניון בלאן, קלאודי ביי, ניו זילנד 18'`
              ]
             },                         
             {
              name: `איטליה`,
              items: [
                `מאסיאנקו, מאסי, ונטו 18׳`,
                `פינו גריג'יו, קסטלו דלה רוסה, דולומיטים 17 ׳`,
                `גאבי, פיו צ'זרה, פיימונטה 17'`
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
                 `סלע, צובה, הרי יהודה 18׳`,
                 `רעם, אדמה II, יקב תבור 14'`,
                 `סיקרט, טריו, הרי יהודה 18׳`,
                 `קברנה סוביניון, שאטו גולן, רמת הגולן 16׳`,
                 `עמק איילון, קלו דה גת, הרי יהודה 17׳`,
                 `מרלו רזרב, פלם, הרי יהודה 17'`,
                 `גראנד ויטל, לוריא, רמת הגולן 15'`,
                 `קברנה פראנק, מרגלית, גליל עליון 16׳`,
                 `אליעד, שאטו גולן, רמת הגולן 16׳`,
                 `סירה, קובננט, רמת הגולן 16'`,
                 `גראנד ווין, קסטל, הרי יהודה 16׳`,
                 `סיקרא סירה, קלו דה גת, הרי יהודה 14׳`,
                 `מקורה, אמפורה 12׳`,
                 `אניגמא, מרגלית, גליל עליון 14׳`,
                 `ולור, אמפורה 11׳`
               ]
             },
             {
              name: "צרפת",
              items: [
                `קוט דה ונטו, לואי ברנרד, עמק הרון 17'`,
                `פינו נואר, ג.בושארד, בורגון 16'`,
                `קוט דו רון, וידאל פלורי, עמק הרון 16׳`,
                `שאטונף דו פאף, לואי ברנרד, עמק הרון 16׳`,
                `קוט רוטי, לואי ברנרד, עמק הרון 16׳`,
                `נואי סן ז׳ורז׳, קלו דה פורה, פרימייר קרו, דומיין דה לארלו, בורגון 14׳`,
                `שאטו לה דומינאק, גראנד קרו, בורדו 13'`
              ]
            }, 
             {
              name: "איטליה",
              items: [
                `רוסו דה מונטיפולצ׳יאנו, בוסקרלי, טוסקנה 17׳`,
                `קיאנטי סופריור, באנפי, טוסקנה 16׳`,
                `קמפופיורין, מאסי, ונטו 18׳`,
                `ריפאסו מארה, צזארי, ונטו 16׳`,
                `קיאנטי רופינה, ניפוציאנו רזרב, פרסקובלדי, טוסקנה 14׳`,
                `ברברה ד׳אלבה, פיו צ׳זרה, פיימונטה 15׳`,
                `וינו נובילה, בוסקרלי, טוסקנה 15׳`,
                `אמרונה, קוסטסרה, דלה ואליפוליצ׳לה קלאסיקו, מאסי, ונטו 11׳`,
                `ברונלו דה מונטלצ'ינו, קסטלג'יוקונדו, פרסקובלדי, טוסקנה 10'`,
                `איל בוסקו, סינגל ויניארד אמרונה, צזארי, ונטו 12׳`,
                `ברברסקו, פיו צ׳זארה, פיימונטה 15׳`
              ]
             },                         
             {
               name: "ספרד",
               items: [
                 `ריוחה, רזרבה, מוגה, ספרד 15׳`,
                 `ריוחה, סלקסיון אספסיאל רזרבה, מוגה 14'`
               ]
             },
             {
               name: "ארגנטינה",
               items: [
                 `מלבק, גולדן רזרב, טריבנטו 16׳`
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
