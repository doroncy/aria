const Menu = {
  entrees: {
    title: 'Entrees',
    bg: 'upstairs-entrees-bg',
    items: [
      {name: "OYSTER", description: "Gillardeau oysters from La Rochelle, France", price: "32 per Unit"},
      {name: "JAPANESE CEVICHE", description: "Toro tuna balls, coated in a Japanese spice mix, over ponzu & Japanese aioli", price: "59"},
      {name: "PAPAYA SEA FISH", description: "Papaya salad with lemon grass, cashews, Thai black-eyed peas, topped with raw slices of sea fish", price: "54"},
      {name: "RED TUNA", description: "Red tuna sashimi with an orange vinaigrette, sesame oil and chili", price: "68"},
      {name: "SALMON TATAKI", description: "Seared Salmon in a tamarind and lemon-grass vinaigrette, with caramelized cashews", price: "62"},
      {name: "SEA FISH CRUDO", description: "Slices of sea fish, with leek , scallion & radish salad in a maple & light soy vinaigrette", price: "58"},
      {name: "CALAMARI LOLLIPOPS", description: "Seared Mediterranean calamari glazed in homemade teriyaki & wasabi aioli", price: "62"},
      {name: "MEDITERRANEAN OCTOPUS", description: "Seared octopus tentacle with lemon cream & mustard seed puree", price: "62"},
      {name: "SHRIMP SALAD", description: `Vietnamese style shrimp with coconut milk vinaigrette, Pomelo, crispy shallot, chili & aromatic leaves`, price: "65"},
      {name: "COQUILLES SAINT JACQUES", description: "Seared Sea Scallops in brown butter, over white almonds cream and blue crab bisque", price: "65"},
      {name: "ROASTED BUCHE CHEESE", description: `Sugar beets, Chinese pecan, endive, nut bread & wild berry vinaigrette`, price: "62"},    
      {name: "LEAVES SALAD", description: `Winter greens, white & purple endive, orange fillet, crispy kale, sunflower seeds & gorgonzola cheese`, price: "62"},
      {name: "JUMBO ASPARAGUS", description: `Glazed in Parmesan butter, served over a sweet corn cream and shaved Parmesan`, price: "59"},
      {name: "FETOUSH SALAD", description: `Maggie tomatoes, baby cucumbers and spicy rocket leaves, seasoned with Egyptian dukkah and sumac, served with Hameiri cheese`, price: "52"},    
      {name: "CHEESE AND SPINACH CAPPELLETTI", description: `Dumplings stuffed with four types of cheese and wild spinach, and a sage butter glaze`, price: "59"},
      {name: "VEAL SWEETBREADS", description: `Veal Sweetbreads, lightly smoked cabbage cream, veal stock, green wheat puffs & kale chips`, price: "72"},    
      {name: "TOKYO STYLE TARTAR", description: `Chopped beef with roasted sesame seeds & a mixture of Japanese spices, homemade Teriyaki, avocado & free-rage egg`, price: "62"},          
      {name: "FOIE GRAS STEAK", description: `Pan seared Foie Gras over winter chestnut cream, young leeks, aromatic pumpkin jam, and wine stock`, price: "88"}    
    ],
    veganItems: [
      {name: "ROASTED BUCHE CHEESE", description: `Sugar beets, Chinese pecan, endive, nut bread & wild berry vinaigrette`, price: "62"},    
      {name: "FETOUSH SALAD", description: `Maggie tomatoes, baby cucumbers and spicy rocket leaves, seasoned with Egyptian dukkah and sumac, served with Hameiri cheese`, price: "52"},    
      {name: "CRISPY POTATO TATAKI", description: `Seared on one side, with tamarind vinaigrette, lemongrass, topped with caramelized cashews`, price: "42"},
      {name: "BRULEE BUCHE", description: `Ripe goat’s milk cheese from Loir Valley, lightly charred with red beets poached in sherry vinegar, over endive and walnuts`, price: "54"},
      {name: "BEET SALAD", description: `Red beets poached in sherry vinegar, over endive, rocket and walnuts`, price: "42"},
      {name: "ENDIVE SALAD", description: `Purple and white endives, shallots and “Baladi” Rocket, with cherry vinaigrette, toasted almonds and Gorgonzola cheese`, price: "52"},
      {name: "CHEESE AND SPINACH CAPPELLETTI", description: `Dumplings stuffed with four types of cheese and wild spinach, and a sage butter glaze`, price: "59"}
    ]
  },
  main: {
    title: 'main',
    bg: 'upstairs-main-bg',
    items: [
      {name: "SEA MEAGRE", description: `200 grams full portion / 100 grams half portion In light soy butter, tiger tomatoes, lemon thyme and bok choy * Same sides for both portions`, price: "136/79"},
      {name: 'SEA BASS', description: `Oven-baked topped with fresh ginger salad, shallots, lemon grass, aromatic leaves & spicy red curry`, price: "129"},
      {name: "PURPLE CALAMARI", description: `Calamari seared on a cast iron skillet over black risotto, seafood stock & lace twill`, price: "112"},
      {name: "SWEET POTATO TORTELLINI", description: `Dumplings glazed in Brown butter, over pecorino sauce & crispy sage`, price: "88"},
      {name: "40 YOLK FETTUCCINI", description: `Fettuccini made with 40 egg yolks, porcini mushrooms, free range egg yolk & pumpkin seeds`, price: "88"},
      {name: "OXTAIL PAPPARDELLE", description: `4-hour stewed oxtail in red wine & root vegetables with eggyolk pappardelle & parmesan`, price: "98"},
      {name: "SWEET SHANGHAI DUCK", description: `Marinated duck breast in organic honey & black soy, brussel sprout salad with Chinese pecans & chives`, price: "128"},
      {name: "SIRLOIN", description: `250 grams full portion / 125 grams half portion) Grilled Sirloin steak from the Golan heights, purple sweet potato puree, enoki mushroom spaghetti & four-season pepper sauce * Same sides for both portions`, price: "148/92"},
      {name: "BEEF FILLET", description: "250gr Marbleized beef filet with onion and charred potatoes", price: "162"},
      {name: "HANGER STEAK", description: `(200 grams full portion / 100 grams half portion) Over Jerusalem artichoke and charred leek cream, in red wine sauce * Same sides for both portions`, price: "122/71"}      
    ],
    veganItems: [
      {name: 'FETTUCCINE GREENS', description: `Vegan Fettuccine with “Aria style” green curry, bok choy, broccomini and spring onions`, price: "68"},
      {name: "SWEET POTATO TORTELLINI", description: `Brown butter glazed dough dumplings, over pecorino sauce & crispy sage`, price: "88"}
    ]
  },
  deserts: {
    title: 'Desserts',
    bg: 'upstairs-desserts-bg',
    items: [
      {name: 'NEMESIS', description: "Moist Chocolate cake, oatmeal crumble, milk chocolate ganache marshmallow fluff and vanilla ice cream", price: "48"},
      {name: "SEMIFREDDO BERGAMOTTO", description: `Salted pistachio ganache, Kadaif pastry, caramelized pistachio, homemade Greek delights & candid rose petals`, price: "52"},
      {name: 'MILLE FEUILLE TIRAMISU', description: `layered puff pastry, mascarpone cream & marsala sabayon, coffee Hennessey sauce & Irish cream sauce`, price: "48"},
      {name: 'MAYA MANGO PENNECOTTA', description: `Milk chocolate mousse, paillete crunch & black sesame twill, mango sorbet & salted toffee`, price: "48"},
      {name: 'NEW YORK STYLE CHEESE CAKE', description: `Rich creamy cheese cake, with caramel over almond crumble & mandarin sorbet`, price: "48"},
      {name: 'HENNESSY ESPRESSO', description: "Refreshing Hennessy cocktail with espresso and Lemon Zest", price: "36"},
      {name: 'SELECTION OF SORBETS', description: "Choice of three Sorbets", price: "38"}
    ]
  },
  cocktails: {
    title: 'Cocktails',
    bg: 'upstairs-cocktails-bg',
    items: [
      {name: 'AROUND THE WORLD', description: `This cocktail will take you on a trip around the world. With pineapple-flavored Caribbean rum, American rye whiskey, French vermouth, Israeli organic honey, fresh lime and egg white, no packing is required!`, price:"67"},
      {name: 'SAY HELLO 2 HEAVEN', description: `An elegant blend of champagne with a basil twist. Laurent Perrier champagne, Tanqueray gin, black mint, lemon juice and fresh basil. A fresh, citrusy and stiff cocktail. Very recommended!`, price:"68"},
      {name: 'DON JUAN', description: `Jump on board and get a proper taste of Mexico with this unique flavored cocktail. Don Julio Blanco infused with lemongrass & verbena, green Chartreuse, Midori, pineapple juice, lime & agave syrup. An interesting combination of stiff, sweet and sour.`, price:"64"},
      {name: 'GODDESS', description: `Just like its name, this is a cocktail you just can't refuse. Tanqueray gin, homemade raspberry syrup, lemon juice, wild berry powder and egg white. Summery-sweet flavored cocktail.`, price:"62"},
      {name: 'FRUIT GARDEN', description: `Sweet and spiced Caribbean cocktail, based on white rum with peaches, passionfruit, elderflower syrup, fresh lime juice and Angostura bitter. Sweet fruity & fun, just the way we like it!`, price:"58"},
      {name: "ARIA SOUR #4", description: `Our signature cocktail in a revamped version. Courvoisier, Orange Curacao, Amaro Montenegro, lemon juice, maple syrup and egg white, well shaken. A sophisticated, powerful twist of a classic sour cocktail that is just unforgettable.`, price:"59"},
      {name: "KALISPERA", description: `Just like its namesake, “Good Evening” in Greek, this cocktail is the best way to start your evening. Ouzo, Amaretto Disarrono, homemade almond liquor, Creole bitters, orange and purple basil. A sweet cocktail with gentle anis and almond flavors.`, price:"54"},
      {name: "SPANISH CARAVAN", description: `Aria-style Sangria. Muga Rioja reserve, Muga Rioja rose, elderflower syrup, freshly squeezed orange and lemon juices and assorted fruit. Light, sweet & floral.`, price:"52"},
      {name: "PLAGUE WATER COLLINS", description: `An ode to the creator of gin, chemist and alchemist Franciscus Sylvius. Legend has it that he invented Genever (the predecessor to gin) as a remedy to an epidemic in Europe which later ended up as one of our favorite spirits. This cocktail is based on Bombay Sapphire gin infused with homemade tea brew and hibiscus, fresh lemon juice, mint and tonic water. A citrusy light cocktail that will make you want another one!`, price:"59"},
      {name: "SPEEDY GONZALEZ", description: `The famous Moscow Mule with a mexican twist. Aged tequila, mezcal, agave syrup, fresh lime, cucumbers, mint and ginger beer are the components of this fun, tantalizing and interesting cocktail. You'd like to order another faster than Speedy Gonzalez!`, price:"64"},
      {name: "SESAME STREET", description: `A once in a lifetime experience that goes against the grain! A blend of Citron and Orange Gray Goose, homemade creamy limoncello, vanilla, honey and tahini. Daring, tart, sweet and vicious! Bert and Ernie wouldn't dare, would you?`, price:"56"},
      {name: "DANCE WITH THE DEVIL", description: `For the bitter cocktails lovers! Campari, Green Chartreuse, Tanqueray gin, lemon juice and a splash of soda water. A stiff cocktail with bitter & sour flavors.`, price:"57"},
      {name: "SMOKEY THOMAS", description: `A homage to Prof. Jerry Thomas, the author of the first cocktail recipe book and the man who made us love cocktails so much. Mezcal, Aperol, Laphroaig 10, Jerry Thomas Bitters, maple and lemon juice. A smokey & spiced cocktail with sweet undertones. Sophisticated & unconventional, like the man itself!`, price:"64"},
      {name: "BLACK PEARL", description: `A clever cocktail with coffee, dark chocolate and light vanilla flavors. Zacapa 23 rum, Bulleit bourbon, Cynar and a few drops of vanilla and chocolate bitters. A wintery cocktail with bittersweet, boozy flavors. An experience to all your senses.`, price:"67"},
      {name: "WHITE NEGRONI", description: `Our version of the all time classic. Gin, dry French vermouth, Aperol, Maraschino, Peychaud Bitters and a splash of white wine. Well-balanced cocktail with sweet, bitter and citrusy tastes.`, price:"55"}
    ]
  },
  alcohol: {
    title: 'TASTE OF MIND',
    bg: 'upstairs-alcohol-bg',
    items: [      
      {name: "OUR TASTING MENU", description: "A Choice Of Seven. Serves two | 158 NIS Per person", noPad: true},
      {name: "", description: "Tasting meal is served from Saturday to Wednesday and by reservation only", noPad: true},
      {name: "", description: "CHOOSE A DESSERT FOR TWO FROM OUR DESSERTS MENU"},
      {name: "SEA FISH CRUDO", description: "Slices of sea fish, with leek, scallion & radish salad in a maple & light soy vinaigrette"},
      {name: "SALMON TATAKI", description: "Single-sided seared salmon with tamarind and lemon-grass vinaigrette, with caramelized cashews on top"},
      {name: "TOKYO STYLE TARTAR", description: "Chopped beef with roasted sesame seeds & a mixture of Japanese spices, homemade Teriyaki, avocado & free-rage egg"},
      {name: "MEDITERRANEAN OCTOPUS", description: "Seared octopus tentacle with lemon cream & mustard seed puree"},
      {name: "ROASTED BUCHE CHEESE", description: `Sugar beets, Chinese pecan, endive, nut bread & wild berry vinaigrette`},    
      {name: "SWEET POTATO TORTELLINI", description: `Brown butter glazed dough dumplings, over pecorino sauce & crispy sage`},
      {name: "CHEESE AND SPINACH CAPPELLETTI", description: `Dumplings stuffed with four types of cheese and wild spinach, and a sage butter glaze`},
      {name: "SIRLOIN", description: `100gr’ Grilled Sirloin steak from the Golan heights, purple sweet potato puree, enoki mushroom spaghetti & four-season pepper sauce`},
      {name: "MEAGRE FILLET", description: "In light soy sauce, tiger tomatoes, lemon thyme and bok choy"}      
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
              "Moët & Chandon, Brut Impérial N.V, Champagne, France 200 ml"
            ]
          },
          {
            title: "Red",
            items: [
              "Merlot, Tzuba, Judean Hills, Israel '12",
              "Rosso Di Montepulciano, Boscarelli, Toscany,Italy '15",
              "Cotes Du Rhone, Vidal-Fleury, Rhone Valley, France, '15",
              "Pinot Noir, Jean Bouchard, Bourgogne, France '13",
              "Rioja, Reserve, Muga, Spain '12",
              "Cabernet Sauvignon, Chateau Golan, Golan Heights, Israel '14"
            ]
          },
          {
            title: "White",
            items: [
              "Gewürztraminer, Josef Drathen, Rhein,Germany '15",
              "Chardonnay, Tzuba, Juden Hills, Israel '15",              
              `Rose, Blue C, Covenant, Golan Heights, Israel 16'`,
              "Sancerre, Fournier Pere & Fils, Loire Valley, France '14",
              "Petit Chablis, J.Moreau & Fils, Bourgogne, France '14",
              "Viognier, Tel Shifon single vineyard, Tabor, Israel '16"
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
              "Soave, Cesari, Veneto, Italy '14",
              "Sancerre Les Baronne, Henri Bourgeois, Loire Valley, France '14"
            ]
          },
          {
            title: "Red",
            items: [
              `Cabernet Sauvignon Reserve, "Levanon" vineyard, Recanati, Upper Galilee, Israel '12`,
              "Amarone, Cesari, Veneto, Italy '10"
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
                  `Laurent Perrier ,La Cuvee Brut N.v, Champagne, France`,
                  `Laurent Perrier, Demi Sec N.v, Champagne, France`,
                  `Laurent Perrier, Cuvee Brut Rose N.v, Champagne, France`
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
                  `Chardonnay, Tzuba, Judean Hills, '15`,
                  `Rose, Blue C, Covenant, Golan Heights 16'`,
                  `Pinot grigio, lueria, Golan Heights 16'`,
                  `Viognier, Blue C, Covenant, Golan Heights 16'`,
                  `Chardonnay, lueria, Golan Heights 16'`,
                  `Chardonnay, Clos De Gat, Judean Hills '14`,
                  `Viognier, Tel Shifon single vineyard, Tabor 16'`,
                  `Sauvignon Blanc, Chteaua Golan, Golan Heights 15'`,
                  `Chardonnay C, Castel, Judean Hills '15`,
                  `Sycra Chardonnay, Clos De Gat, Judean Hills '09`,
                ]
              },
              {
                name: "France",
                items: [
                  `Bourgogne Chardonnay, Jean Bouchard, Bourgogne '13`,
                  `Petit Chablis, J. Moreau & Fils, Bourgogne '14`,
                  `Riesling, Schlumberger, Alsace '12`,
                  `Pouilly-Fumé, Jeunes Vignes, Henri Bourgeois, Loire Valley Rose, AIX, Provence 17'`,
                  `Pinot Blanc, Schlumberger, Alsace 14’ Sancerre, Fournier Pere & Fils, Loire Valley 14’`,                  
                  `Gewürztraminer, Schlumberger, Alsace 14’`,
                  `Rose, chateau minuty et or, Provence 16' Chablis, Vaillons, Premier cru, J. moreau & fils, Bourgogne 14’`,
                  `Puligny Montrachet, Château de Puligny-Montrachet, Bourgogne 11’`,
                  `Chablis, Clos, grand cru, Christian Moreau 14’`,
                  `Chablis, Valmur, Grand Cru, J. Moreau & Fils, Bourgogne '14`
                ]
              },
              {
                name: "Italy",
                items: [
                  `Masianco, Masi, Veneto '15`,
                  `Pinot Grigio, Castello Della Rosa, Dolomiti 16'`,
                  `Gavi, Pio Cesare, Piedmont 13'`
                ]
              },
              {
                name: "Germany",
                items: [
                  `Gewürztraminer, Josef Drathen, Rhein 15'`,
                  `Riesling, Urban, Rhein 15'`
                ]
              },
              {
                name: "Spain",
                items: [
                  `Blanco, Muga, Rioja 16'`,
                  `Flor De Muga Rosado, Rioja 16'`,
                  `Finca la colina, verdejo, vinos sanz 16'`
                ]
              },
              {
                name: "USA",
                items: [
                  `Sauvignon Blanc, Canon Ball, California 15'`                                    
                ]
              },
              {
                name: "New Zealand",
                items: [
                  `Sauvignon blanc, Cloudy bay, Melbourne 15'`
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
                  `Merlot, Tzuba, Judean Hills '12`,
                  `Ra'am, Adama II, Tavor '13`,
                  `Secret, Trio, Judean Hills '12`,
                  `Cabernet Sauvignon, Château Golan, Golan Heights '14`,
                  `Ayalon Valley, Clos De Gat, Judean Hills '11`,
                  `Merlot reserve, Flam, Judean Hills 15'`,
                  `Grand vital, lueria, Golan Heights 14'`,
                  `Cabernet Franc, Margalit, Upper Galilee '13`,
                  `Eliad, Château Golan, Golan Heights '14`,
                  `Syrha, Covenant, Golan Heights 15'`,
                  `Grand Vin, Castel, Judean Hills '14`,
                  `Sycra Syrha, Clos De Gat, Judean Hills 11'`,
                  `Makura, Amphorae '09`,
                  `Enigma, Margalit, Upper Galilee '13`,
                  `Velours, Amphorae '10`
                ]
              },
              {
                name: "France",
                items: [
                  `Côtes Du Ventoux, Louis Bernard, Rhône Valley 13’`,
                  `Pino Noir, Jean Bouchard, Bourgogne '13`,
                  `Cotes Du Rhone, Vidal-Fleury, Rhone Valley 15'`,
                  `Châteauneuf Du Pape, Louis Bernard, Rhône Valley 14’`,
                  `Côte Rôtie, Louis Bernard, Rhône Valley '10`,
                  `Nuits-St- Georges, Clos des Forêts, Premier cru, Domaine de l’Arlot, Bourgogne '11`
                ]
              },
              {
                name: "Italy",
                items: [
                  `Rosso Di Montepulciano, Boscarelli, Tuscany '15`,
                  `Chianti Superiore, Banfi, Tuscany '12`,                  
                  `Campofiorin, Masi, Veneto ’13`,
                  `Ripasso Mare, Cesari, Veneto '14`,
                  `Chianti Rufina, Nipozzano Riserva, Tuscany '12`,
                  `Barbera D’alba, Pio Cesare, Piedmont '14`,
                  `Vino Nobile, Boscarelli, Tuscany '11`,
                  `Amarone, Costasera, Della Valpolicella classico, Masi '11`,
                  `Brunello Di Montalcino, Castelgiocondo, Frescobaldi, Tuscany '10`,
                  `Il Bosco, Single Vineyard Amarone, Cesari, Veneto '08`,
                  `Barbaresco, Pio Cesare, Piedmont '12`
                ]
              },
              {
                name: "Spain",
                items: [
                  `Rioja, Reserva, Muga 13’`,
                  `Rioja, selection especial reserve, muga 11'`
                ]
              },
              {
                name: "Argentina",
                items: [
                  `Malbec, Golden Reserve, Trivento '14`
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
