const Menu = {
  entrees: {
    title: 'Entrees',
    bg: 'upstairs-entrees-bg',
    items: [
      {name: "OYSTER", description: "Gillardeau oysters from La Rochelle, France", price: "33 per Unit"},
      {name: "SOUP DUSHPARA UZBEK", description: "Toro tuna balls, coated in a Japanese spice mix, over ponzu & Japanese aioli", price: "58"},
      {name: "FISH CARPACCIO", description: "Thinly sliced fish carpaccio, seasoned with cured lemon vinaigrette, chopped vegetables salad and dots of yogurt and sumac", price: "65"},
      {name: "MEDITERRANEAN CRUDO", description: "Raw sea fish with crushed tomatoes, garlic confit & Kalamata olive vinaigrette, fermented green chili & grated Persian lemon", price: "72"},
      {name: "SALMON TATAKI", description: "Seared Salmon in a tamarind and lemon-grass vinaigrette, with caramelized cashews", price: "65"},
      {name: "JAPANESE SASHIMI", description: "Slices of red tuna in a citrus ponzu, fermented chili, Okra tempura & coriander seeds", price: "72"},
      {name: "LOCAL CALAMARI SALAD", description: "Pan-seared calamari with charred vegetables, slices of crispy cauliflower & tahini vinaigrette", price: "68"},
      {name: "MEDITERRANEAN OCTOPUS", description: "Seared octopus tentacle with lemon cream & mustard seed puree", price: "68"},
      {name: "SHRIMP SALAD", description: `Vietnamese style shrimp with coconut milk vinaigrette, Pomelo, crispy shallot, chili & aromatic leaves`, price: "68"},
      {name: "COQUILLES SAINT JACQUES", description: "Seared Sea Scallops in brown butter, over white almonds cream and blue crab bisque", price: "68"},
      {name: "ARTICHOKE HEART", description: `Artichoke cooked in herbs and wine vinegar on a bed of sweet creamed corn, 18 years-old balsamic glaze and Parmigiano-Reggiano`, price: "65"},    
      {name: "GREEN SALAD", description: `Winter greens, white & purple endive, orange fillet, crispy kale, sunflower seeds & gorgonzola cheese`, price: "56"},    
      {name: "ENDIVE AND DOLCE GORGONZOLA", description: `Endive in a Lebanese pomegranate reduction, lightly smoked gorgonzola, sliced shallots and hazelnut crumble`, price: "62"},    
      {name: "MUSHROOM & ITALIAN MOZZARELLA", description: `Porcini mushroom emulsion, grilled forest mushrooms, Italian buffalo mozzarella slices and coco crumble`, price: "65"},      
      {name: "FETOUSH SALAD", description: `Maggie tomatoes, baby cucumbers and spicy rocket leaves, seasoned with Egyptian dukkah and sumac, served with Hameiri cheese`, price: "54"},    
      {name: "CHEESE AND SPINACH CAPPELLETTI", description: `Dumplings stuffed with four types of cheese and wild spinach, and a sage butter glaze`, price: "65"},      
      {name: "SZECHUAN GRILLED FLANK STEAK", description: `Grilled and sliced flank steak in caramelized soy sauce, coconut milk, sesame oil, scallions and wasabi peas.`, price: "66"},
      {name: "LAMB SWEETBREADS", description: `Sweetbreads, lightly smoked cabbage cream, lamb broth, puffed toasted green wheat and kale chips`, price: "72"},    
      {name: "BEEF TARTARE BRIOCHE", description: `Chopped beef with mustard aioli, shallots, green onion, parmesan & bone marrow`, price: "72"},
      {name: "FOIE GRAS STEAK", description: `Pan seared, served on a wintery chestnut cream, leeks & pumpkin dumplings, glazed in wine sauce`, price: "98"},
      {name: "LAMB BRIK", description: `Moroccan Filo cigars, stuffed with lamb and Ras-el-hanout`, price: "65"},
      {name: `"PANKCOD"`, description: `Cod strips, breaded with panko & fried, served with a lemon dip`, price: "72"},
      {name: "SHRIMP BUN", description: `Bun filled with chopped shrimp, Japanese lemon cream and spices`, price: "58"},
      {name: "BRISKET BUN", description: `Bun filled with shredded beef brisket`, price: "58"}   
    ]
  },
  main: {
    title: 'main',
    bg: 'upstairs-main-bg',
    items: [
      {name: "SEA MEAGRE", description: `In light soy butter, Zebra cherry tomatoes, lemon thyme and bok choy`, price: "140/89"},
      {name: 'SEA BREAM FILLET', description: `Oven baked under a fresh salad of ginger, shallots, lemon grass, aromatic leaves and piquant red curry`, price: "129"},
      {name: "BLUE CRAB RISOTTO", description: `Cooked crab meat with shallots, garlic, thyme and white wine, arborio rice, yellow tomato stock and parmesan cheesel`, price: "105"},
      {name: "PICI PASTA AND CRYSTAL SHRIMP", description: `Handmade Pici pasta, Maggie tomatoes matbucha, crystal shrimp in an iron pan, with coriander powder`, price: "136"},
      {name: "SWEET POTATO TORTELLINI", description: `Brown butter glazed dough dumplings on pecorino sauce and sage fries`, price: "88"},
      {name: "40 YOLK FETTUCCINI", description: `40 egg yolk fettuccine with porcini mushrooms, free-range egg yolk and pumpkin seeds`, price: "88"},
      {name: "OXTAIL PAPPARDELLE", description: `Oxtail cooked for 4 hours in red wine and root vegetables, with egg yolk pappardelle and parmesan cheese`, price: "105"},
      {name: "BONE-IN NEW YORK STEAK", description: `Bone-in sirloin steak served with spicy mustard, French fries and organic vegetables`, price: "55 (for 100 gram)"},
      {name: "BEEF FILET", description: "250 grams seared beef fillet, potato mousse and burnt shallots, tortellini stuffed with caramelized shallot, seasonal vegetables and reduced wine sauce", price: "198"},
      {name: "LAMB CHOPS", description: "Seared in an iron pan with a collection of organic carrots in different textures and Persian pistachio powder", price: "198"},
      {name: "HANGER STEAK", description: `On Jerusalem artichoke cream and burnt leeks with red wine stock`, price: "130/86"}      
    ]
  },
  deserts: {
    title: 'Desserts',
    bg: 'upstairs-desserts-bg',
    items: [
      {name: 'NEMESIS', description: "Moist Chocolate cake, oatmeal crumble, milk chocolate ganache marshmallow fluff and vanilla ice cream", price: "48"},
      {name: "LEMON TART", description: `Seared Swiss meringue and corn sablés`, price: "55"},            
      {name: 'MAPLE BRULE', description: `Chinese pecan, American ice-cream and Atlantic sea salt`, price: "48"},
      {name: 'SUN SEBAATIAN CHEESECAKE', description: ``, price: "46"},
      {name: 'MEKUPLETET BAR', description: `Hazelnut mouse from 67% dark chocolate and gianduia`, price: "55"},
      {name: 'TIRAMISU', description: `Mascarpone zabaione cream, biscotti dipped in caramel espresso and cocoa powder`, price: "48"},
      {name: 'SORBET', description: `A selection of three sorbet flavors`, price: "38"}
    ]
  },
  cocktails: {
    title: 'Cocktails',
    bg: 'upstairs-cocktails-bg',
    items: [
      {name: 'GOLD DIGGER', description: `A shiny wintery cocktail. Pear Grey Goose Vodka, St-Germain liqueur, Martini Bianco, Choya Umeshu Japanese plum wine and gold powder. Sweet and alcoholic`, price:"64"},
      {name: 'APRICOT SPIRITS', description: `A light, citrusy cocktail. Boukha Bokobsa infused with Uzbek apricots, Aperol, Amaro Montenegro, Japanese bitters & sparkling wine. Sweet with a light bitter finish`, price:"58"},
      {name: 'LADY IN RED', description: `A soft, floral cocktail. Tanqueray Gin, Chambord, homemade lavender & hibiscus syrup, fresh lemon juice & a dash of Jasmin Soju. A sweet yet unconventional Cocktail`, price:"62"},
      {name: 'SPANISH CARAVAN', description: `Aria-style Sangria. Our version of the famous Spanish cocktail. With Muga Rioja reserve, Muga Rioja rosé, elderflower syrup, freshly squeezed orange and lemon juices and assorted fruit. Light, sweet & floral.`, price:"56"},
      {name: 'SAY HELLO 2 HEAVEN', description: `An elegant blend of champagne with a basil twist. Laurent Perrier champagne, Tanqueray gin, black mint, lemon juice and fresh basil. A fresh, citrusy and stiff cocktail. Very recommended!`, price:"69"},
      {name: 'FRUIT GARDEN', description: `Sweet and spiced Caribbean cocktail, based on white rum with peaches, passionfruit, elderflower syrup, fresh lime juice and Angostura bitter. Sweet fruity & fun, just the way we like it!`, price:"59"},      
      {name: '007', description: `A tribute to James Bond and his favorite cocktail. Cucumber peels and thyme infused Ketel One Vodka, Tanqueray gin, Lillet Blanc, rocket, lime, yuzu and celery bitters. Shaken, not stirred. Fresh, citrusy and alcoholic`, price:"63"},      
      {name: "PLAGUE WATER COLLINS", description: `An ode to the creator of gin, chemist and alchemist Franciscus Sylvius. Legend has it that he invented Genever (the predecessor to gin) as a remedy to an epidemic in Europe which later ended up as one of our favorite spirits. This cocktail is based on Bombay Sapphire gin infused with homemade tea brew and hibiscus, fresh lemon juice, mint and tonic water. A citrusy light cocktail that will make you want another one!`, price:"62"},      
      {name: "ARIA SOUR #4", description: `Our signature cocktail in a revamped version. Courvoisier V.S, Dry Orange Curacao, Amaro Montenegro, lemon juice, maple syrup and egg white, well shaken. A sophisticated, powerful twist on a classic sour cocktail, that is just unforgettable.`, price:"65"},      
      {name: "KALISPERA", description: `Just like its namesake, “Good Evening” in Greek, this cocktail is the best way to start your evening. Ouzo, Amaretto Disaronno, homemade almond liqueur, Creole bitters, orange and purple basil. A sweet cocktail with gentle anise and almond flavors.`, price:"62"},
      {name: "BLACK SESAME STREET", description: `A once in a lifetime experience that goes against the grain! A blend of Bacardi, Coffee liqueur, homemade creamy limoncello, honey, Chocolate Bitter, Ground Nigella and tahini. Daring, tart, sweet and vicious! Bert and Ernie wouldn't dare, would you?`, price:"63"},
      {name: "DON JUAN", description: `Jump on board and get a proper taste of Mexico with this unique flavored cocktail. Don Julio Blanco infused with lemongrass & verbena, green Chartreuse, Midori, pineapple juice, lime & agave syrup. An interesting combination of stiff, sweet and sour.`, price:"64"},
      {name: "MEZCALITO", description: `A cocktail that takes you on a trip around Latin America. Vida Mezcal, Pisco Peruano, Habanero pepper tincture, fresh lime juice & coriander. A spicy, smoky & fun cocktail`, price:"64"},
      {name: "STRAWBERRY FIELDS", description: `A summery, bitter cocktail. Bacardi 8, St-Germain, Campari, homemade strawberry syrup, pineapple juice & Angostura bitters. Sweet, bitter and packs a punch`, price:"66"},
      {name: "BLACK PEARL", description: `A clever cocktail with coffee, dark chocolate and light vanilla flavors. Zacapa 23 rum, Bulleit bourbon, Cynar and a few drops of vanilla and chocolate bitters. A wintery cocktail with bittersweet, boozy flavors. An experience to all your senses.`, price:"68"},
      {name: "DATES BOULEVARDIEL", description: `A twist on the classic and elegant cocktail. Bulleit rye infused in Medjool dates, Cynar liqueur, dry vermouth, bitters and a touch of Fernet-Branca. Bitter, sweet and with a bit of a kick.`, price:"65"},
      {name: "SPEEDY GONZALEZ", description: `The famous Moscow Mule with a mexican twist. Aged tequila, mezcal, agave syrup, fresh lime, cucumbers, mint and ginger beer are the components of this fun, tantalizing and interesting cocktail. You'd like to order another faster than Speedy Gonzalez!`, price:"62"}
    ]
  },
  wine: {
    title: 'Wine Cellar',
    bg: 'upstairs-wine-bg',
    items: {
      glass: {
        title: 'By the Glass',
        items:[
          {
            title: "Sparkling",
            items: [
              `Cordon Negro, Brut N.V, Freixenet, Penedes, Spain`,
              `Freixenet Ice rose, Penedes, Spain`
            ]
          },
          {
            title: "Red",
            items: [
              `Sela, Tzuba, Judean Hills, Israel '18`,
              `Rosso Di Montepulciano, Boscarelli, Toscany, Italy '17`,
              `Cotes Du Rhone, Vidal-Fleury, Rhone Valley, France, '15`,
              `Pinot Noir, Jean Bouchard, Bourgogne, France 17’`,
              `Rioja, Reserva, Muga, Spain '15`,
              `Cabernet Sauvignon, Château Golan, Golan Heights, Israel '16`
            ]
          },
          {
            title: "White",
            items: [
              "Gewürztraminer, Josef Drathen, Rhein,Germany '18",
              "Chardonnay, Tzuba, Juden Hills, Israel '17",              
              `Rose, Blue C, Covenant, Golan Heights, Israel 17'`,
              "Sancerre, Fournier Pere & Fils, Loire Valley, France '18",
              "Petit Chablis, J.Moreau & Fils, Bourgogne, France '18",
              "Viognier, Tel Shifon single vineyard, Tabor, Israel '18"
            ]
          }
        ]
      },
      halfBottle: {
        title: 'Half a bottle',
        items: [
          {
            title: "Sparkling",
            items: [
              "Laurent perrier,la cuvee Brut N.V, Champagne, France"
            ]
          },
          {
            title: "White",
            items: [
              "Soave, Cesari, Veneto, Italy '18",
              `Pouilly-Fumé, Fournier Pere & Fils, Loire Valley, France 17’`
            ]
          },
          {
            title: "Red",
            items: [
              `Cabernet Sauvignon Reserve, "Levanon" vineyard, Recanati, Upper Galilee, Israel '14, 500 ml`,
              "Amarone, Cesari, Veneto, Italy '14"
            ]
          }
        ]
      },
      bottle: {
        title: 'By the Bottle',
        items:[
          {
            title: "Sparkling",
            countries: [
              {
                name: "",
                items: [
                  `Cordon Negro, Brut N.V, Freixenet, Penedes, Spain`,
                  `Freixenet Ice, Penedes, Spain`,
                  `Freixenet Ice rose, Penedes, Spain`,
                  `Laurent Perrier ,La Cuvee Brut N.v, Champagne, France`,
                  `Laurent Perrier, Demi Sec N.v, Champagne, France`,
                  `Laurent Perrier, Cuvee Brut Rose N.v, Champagne, France`,
                  `Pol Roger, Sir Winston Churchill, Vintage 2006, Champagne, France`,
                  `Armand De Brignac, Brut Gold, Champagne, France`
                ]
              }
            ]
          },
          {
            title: "Whites",
            countries: [
              {
                name: "Israel",
                items: [
                  `Chardonnay, Tzuba, Judean Hills, '17`,
                  `Rose, Blue C, Covenant, Golan Heights 17'`,
                  `Pinot grigio, lueria, Golan Heights 18'`,
                  `Viognier, Blue C, Covenant, Golan Heights 17'`,
                  `Chardonnay, lueria, Golan Heights 17'`,
                  `Chardonnay, Clos De Gat, Judean Hills '17`,
                  `Viognier, Tel Shifon single vineyard, Tabor 17'`,
                  `Sauvignon Blanc, Chteaua Golan, Golan Heights 18'`,
                  `Chardonnay, C, castel, Judean Hills 18’`                  
                ]
              },
              {
                name: "France",
                items: [
                  `Bourgogne Chardonnay, Jean Bouchard, Bourgogne '17`,
                  `Petit Chablis, J. Moreau & Fils, Bourgogne '18`,
                  `Pouilly-Fumé, Jeunes Vignes, Henri Bourgeois, Loire Valley 17'`,
                  `Rose, AIX, Provence 18'`,
                  `Pinot Blanc, Schlumberger, Alsace 16’`,
                  `Sancerre, Fournier Pere & Fils, Loire Valley 18’`,
                  `Gewürztraminer, Schlumberger, Alsace 16’`,
                  `Rose, chateau minuty et or, Provence 18'`,
                  `Riesling, grand cru, Schlumberger, Alsace 14’`,
                  `Chablis, Vaillons, Premier cru, J. moreau & fils, Bourgogne 16’`,
                  `Sancerre, la chaudouillonne, Fournier Pere & Fils, Loire Valley 16’`,
                  `Puligny Montrachet, Château de Puligny-Montrachet, Bourgogne 15’`,
                  `Chablis, Clos, grand cru, Christian Moreau 14’`,
                  `Chablis, Valmur, Grand Cru, J. Moreau & 720 Fils, Bourgogne 15’`
                ]
              },
              {
                name: "Italy",
                items: [
                  `Masianco, Masi, Veneto '18`,
                  `Pinot Grigio, Castello Della Rosa, Dolomiti 17'`,
                  `Gavi, Pio Cesare, Piedmont 17'`
                ]
              },
              {
                name: "Germany",
                items: [
                  `Gewürztraminer, Josef Drathen, Rhein 18'`,
                  `Riesling, Urban, Rhein 17'`
                ]
              },
              {
                name: "Spain",
                items: [
                  `Blanco, Muga, Rioja 18'`,
                  `Flor De Muga Rosado, Rioja 17'`,
                  `Finca la colina, verdejo, vinos sanz 17'`
                ]
              },
              {
                name: "USA",
                items: [
                  `Sauvignon Blanc, Canon Ball, California 16'`                                    
                ]
              },
              {
                name: "New Zealand",
                items: [
                  `Sauvignon blanc, Cloudy bay, Melbourne 18'`
                ]
              }
            ]
          },
          {
            title: "Reds",
            countries: [
              {
                name: "Israel",
                items: [
                  `Sela, Tzuba, Judean Hills 18’`,
                  `Ra'am, Adama II, Tavor '14`,
                  `Secret, Trio, Judean Hills '18`,
                  `Cabernet Sauvignon, Château Golan, Golan Heights '16`,
                  `Ayalon Valley, Clos De Gat, Judean Hills '17`,
                  `Merlot reserve, Flam, Judean Hills 17'`,
                  `Grand vital, lueria, Golan Heights 15'`,
                  `Cabernet Franc, Margalit, Upper Galilee '16`,
                  `Eliad, Château Golan, Golan Heights '16`,
                  `Syrha, Covenant, Golan Heights 16'`,
                  `Grand Vin, Castel, Judean Hills '16`,
                  `Sycra Syrha, Clos De Gat, Judean Hills 14'`,
                  `Makura, Amphorae '12`,
                  `Enigma, Margalit, Upper Galilee '14`,
                  `Velours, Amphorae '11`
                ]
              },
              {
                name: "France",
                items: [
                  `Côtes Du Ventoux, Louis Bernard, Rhône Valley 17’`,
                  `Pino Noir, Jean Bouchard, Bourgogne '16`,
                  `Cotes Du Rhone, Vidal-Fleury, Rhone Valley 15'`,
                  `Châteauneuf Du Pape, Louis Bernard, Rhône Valley 16’`,
                  `Cteô Rôtie, Louis Bernard, Rhône Valley 16’`,
                  `Nuits-St- Georges, Clos des Forêts, Premier cru, Domaine de l’Arlot, Bourgogne '14`,
                  `Château la dominique, grand cru, bordeaux 13'`
                ]
              },
              {
                name: "Italy",
                items: [
                  `Rosso Di Montepulciano, Boscarelli, Tuscany '17`,
                  `Chianti Superiore, Banfi, Tuscany '16`,                  
                  `Campofiorin, Masi, Veneto ’18`,
                  `Ripasso Mare, Cesari, Veneto '16`,
                  `Chianti Rufina, Nipozzano Riserva, Tuscany '14`,
                  `Barbera D’alba, Pio Cesare, Piedmont '17`,
                  `Vino Nobile, Boscarelli, Tuscany '15`,
                  `Amarone, Costasera, Della Valpolicella, Veneto, Masi 11’`,
                  `Brunello Di Montalcino, Castelgiocondo, Frescobaldi, Tuscany '10`,
                  `Il Bosco, Single Vineyard Amarone, Cesari, Veneto '12`,
                  `Barbaresco, Pio Cesare, Piedmont '15`,
                  `Lamaione, Castelgiocondo, Frescobaldi, Tuscany 14'`
                ]
              },
              {
                name: "Spain",
                items: [
                  `Rioja, Reserva, Muga 15’`,
                  `Rioja, seleccion especial reserve, Muga 14'`
                ]
              },
              {
                name: "Argentina",
                items: [
                  `Malbec, Golden Reserve, Trivento '16`
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
