const Menu = {
  entrees: {
    title: 'Entrees',
    bg: 'upstairs-entrees-bg',
    items: [
      {name: "OYSTER", description: "Gillardeau oysters from La Rochelle, France", price: "32 per Unit"},
      {name: "PERUVIAN CEVICHE", description: "Diced sea fish with lime vinaigrette, avocado, cashew mix, crispy corn & tapioca twill", price: "59"},
      {name: "PAPAYA SEA FISH", description: "Papaya salad with lemon grass, cashews, Thai black-eyed peas, topped with raw slices of sea fish", price: "54"},
      {name: "RED TUNA", description: "Red tuna sashimi with an orange vinaigrette, sesame oil and chili", price: "68"},
      {name: "SALMON TATAKI", description: "Salmon Seared on one side in a tamarind and lemon-grass vinaigrette, with caramelized cashews", price: "62"},
      {name: "SEA FISH CRUDO", description: "Slices of sea fish, with leek , scallion & radish salad in a maple & light soy vinaigrette", price: "58"},
      {name: "CALAMARI SALAD", description: "Blanched calamari, with charred vegetables, Thai okra & garlic chips over tahini yogurt", price: "58"},
      {name: "MEDITERRANEAN OCTOPUS", description: "Seared octopus tentacle with lemon cream & mustard seed puree", price: "62"},
      {name: "SHRIMP SALAD", description: "Vietnamese style shrimp with coconut milk vinaigrette, nectarines, crispy shallot, chili & aromatic leaves", price: "65"},
      {name: "COQUILLES SAINT JACQUES", description: "Seared Sea Scallops in brown butter, over white almonds cream and blue crab bisque", price: "65"},
      {name: "NICCOISE SALAD", description: `Baby romain lettuce with an olive vinaigrette, dried Spanish tuna, half boiled egg & confit lemon puree`, price: "58"},
      {name: "CURED SALMON", description: `Scandinavian cured salmon with crème fraiche, cherry vinegar cooked beets, jumbo capers & dill flowers`, price: "58"},
      {name: "ENDIVE SALAD", description: `Purple and white endives, shallots and "Baladi" Rocket, with cherry vinaigrette, toasted almonds and Gorgonzola cheese`, price: "52"},
      {name: "FETOUSH SALAD", description: `Maggie tomatoes, baby cucumbers and spicy rocket leaves, seasoned with Egyptian dukkah and sumac, served with Hameiri cheese`, price: "52"},
      {name: "JUMBO ASPARAGUS", description: `Glazed in parmesan butter, over sweet corn cream, topped with parmesan shavings`, price: "59"},
      {name: "CHEESE AND SPINACH CAPPELLETTI", description: `Dumplings stuffed with four types of cheese and wild spinach, and a sage butter glaze`, price: "59"},
      {name: "FOIE GRAS STEAK", description: `Pan seared Foie Gras over winter chestnut cream, young leeks, aromatic pumpkin jam, and wine stock`, price: "88"},
      {name: "LAMB BRIK", description: `Filo cigars, filled with lamb meat and Ras-el-hanout`, price: "58"},
      {name: "FISH AND CHIPS", description: `- 72 -`},
      {name: "SHRIMP BUN", description: `Bun filled with chopped shrimp & Japanese lemon cream with a mix of spicy spice`, price: "58"},
      {name: "BRISKET BUN", description: `Bun filled with beef brisket cooked American style`, price: "58"}
    ],
    veganItems: [
      {name: "NICCOISE SALAD", description: `Baby romain lettuce with an olive vinaigrette, dried Spanish tuna, half boiled egg & pickled lemon puree Vegetarian / Vegan without egg`, price: "46"},
      {name: "FETOUSH SALAD", description: `Maggie tomatoes, baby cucumbers and spicy rocket leaves, seasoned with Egyptian dukkah and sumac, served with Hameiri cheese Vegetarian/Vegan without the cheese`, price: "52"},
      {name: "CRISPY POTATO TATAKI", description: `Seared on one side, with tamarind vinaigrette, lemongrass, topped with caramelized cashews Vegetarian / Vegan`, price: "42"},
      {name: "BRULEE BUCHE", description: `Ripe goat’s milk cheese from Loir Valley, lightly charred with red beets poached in sherry vinegar, over endive and walnuts Vegetarian`, price: "54"},
      {name: "BEET SALAD", description: `Red beets poached in sherry vinegar, over endive, rocket and walnuts Vegetarian / Vegan`, price: "42"},
      {name: "ENDIVE SALAD", description: `Purple and white endives, shallots and “Baladi” Rocket, with cherry vinaigrette, toasted almonds and Gorgonzola cheese Vegetarian/Vegan without cheese`, price: "52"},
      {name: "CHEESE AND SPINACH CAPPELLETTI", description: `Dumplings stuffed with four types of cheese and wild spinach, and a sage butter glaze Vegetarian`, price: "59"}
    ]
  },
  main: {
    title: 'main',
    bg: 'upstairs-main-bg',
    items: [
      {name: "SEA MEAGRE", description: `200 grams full portion / 100 grams half portion In light soy butter, tiger tomatoes, lemon thyme and bok choy * Same sides for both portions`, price: "132ֿ/76"},
      {name: 'SEA BASS', description: `Oven Roasted with “Aria style” green curry, Thai black-eyed peas, brokkomini and rice puffs`, price: "128"},
      {name: "SWEET POTATO TORTELLINI", description: `Brown butter glazed dough dumplings, over pecorino sauce & crispy sage`, price: "88"},
      {name: "SHORT RIB CAPPELLETTI", description: `7 dumplings full portion / 4 dumplings half portion Dumplings filled with braised short rib, root vegetables, and red wine served with silky potato puree * Same sides for both portions`, price: "98/59"},
      {name: "SIRLOIN", description: `(250 grams full portion / 125 grams half portion) Sirloin steak from the Golan heights, seared on a cast iron skillet, over lima bean & sweet beet chimichurri * Same sides for both portions`, price: "142/84"},
      {name: "BEEF FILLET", description: "250gr Marbleized beef filet with onion and charred potatoes", price: "159"},
      {name: "HANGER STEAK", description: `(200 grams full portion / 100 grams half portion) Over Jerusalem artichoke and charred leek cream, in red wine sauce * Same sides for both portions`, price: "122/71"},
      {name: "LAMB T-BONE", description: `Three pieces of pan seared lamb saddle on the bone, grilled vegetable & Lebanese pomegranate vinaigrette`, price: "154"}
    ],
    veganItems: [
      {name: 'FETTUCCINE GREENS', description: `Vegan Fettuccine with “Aria style” green curry, bok choy, broccomini and spring onions Vegetarian / Vegan`, price: "68"},
      {name: "SWEET POTATO TORTELLINI", description: `Brown butter glazed dough dumplings, over pecorino sauce & crispy sage Vegetarian`, price: "88"}
    ]
  },
  deserts: {
    title: 'Desserts',
    bg: 'upstairs-desserts-bg',
    items: [
      {name: 'NEMESIS', description: "Moist Chocolate cake, oatmeal crumble, milk chocolate ganache marshmallow fluff and vanilla ice cream", price: "48"},
      {name: "SEMIFREDDO BERGAMOTTO", description: `Salted pistachio ganache, Kadaif pastry, caramelized pistachio, homemade Greek delights & candid rose petals`, price: "52"},
      {name: 'RED PLUM SOUP', description: `Almonds mousse, white chocolate sand, wild berries & vanilla ice cream`, price: "48"},
      {name: 'MAYA MANGO PENNECOTTA', description: `Milk chocolate mousse, paillete crunch & black sesame twill, mango sorbet & salted toffee`, price: "48"},
      {name: 'HENNESSY ESPRESSO', description: "Refreshing Hennessy cocktail with espresso and Lemon Zest", price: "36"},
      {name: 'SELECTION OF SORBETS', description: "Choice of three Sorbets", price: "38"}
    ]
  },
  cocktails: {
    title: 'Cocktails',
    bg: 'upstairs-cocktails-bg',
    items: [
      {name: 'ANGEL DUST', description: `Our contest wining drink, representing the glitzy side of Aria. Ketel One Vodka, Maraschino liqueur, peychaud’s bitters, orange bitters, secrete tea infusion, pomegranate juice, vanilla & a little angel dust. A light & strong, fun cocktail that will turn your evening into sparkles`, price:"62"},
      {name: 'RUNGIS', description: `A cocktail that’s a journey through the markets of London & Paris. Tanqueray Ten Gin with a Parisian infusion, Maraschino liqueur, Lilet Blanc & lemon juice. A sour and summery cocktail, with a bitter twist that changes with each sip`, price:"58"},
      {name: 'SPANISH CARAVAN', description: `Aria style sangria. Muga Rioja Reserve, Muga Rioja Rose, Elderflower syrup, fresh squeezed orange juice, lemon juice and seasonal fruit. Light, sweet & floral, precisely for hot Tel-Aviv summer days`, price:"56"},
      {name: "SAY HELLO 2 HEAVEN", description: `A Champagne cocktail with a basil twist. Moët & Chandon Champagne, Tanqueray Gin, lemon juice, black mint & lots of basil. A fresh, citrusy & stiff cocktail. Recommended!`, price:"68"},
      {name: 'MAD WATERMELON', description: `A bland of Appleton VX Rum, Don Julio Blanco Tequila & watermelon consume, guava, agave syrup, lemon, mint & habanero chili tincture. A sweet, spicy & fruity cocktail, the kind you can’t forget`, price:"62"},
      {name: 'SPEEDY GONZALEZ', description: `A new version, with a Mexican twist, to the famous Moscow Mule. Aged Tequila, Mezcal, Agave syrup, with Lime, Cucumbers, Mint and Ginger beer. Making this a fun, complex and tantalizing cocktail. You’ll want to order another faster then Speedy Gonzales.`, price:"64"},
      {name: 'LADY IN RED', description: `A light, floral cocktail. Tanqueray Gin, housemade lavender & hibiscus syrup, for a touch of sweetness, with tartness of fresh lemon and floral notes from roses and lilies. This cocktail will have you licking your lips.`, price:"52"},
      {name: 'FRUIT GARDEN', description: `Sweet and spiced Caribbean cocktail. Based on White Rum with peaches, passion fruit, Elderflower syrup, fresh limejuice and Angostura bitters. Sweet, fruity and fun, just like we like them.`, price:"58"},
      {name: "PLAGUE WATER COLLINS", description: `An ode to the creator of Gin the Doctor and Scientist Franciscus Sylvius. Legend has it, that he came up with Genever to fight one of the epidemics that hit Europe, but instead of medicine he created one of our favorite spirits. Tanqueray Gin infused with lemongrass and lemon verbena, fresh limejuice, mint, tonic and a dash of pepper. A citrusy, light cocktail, that will make you want another.`, price:"58"},
      {name: 'KALISPERA', description: `The Greek word for good evening, and like it’s name the right way to open an evening. Ouzo, Amaretto Disaronno, housemade almond liqueur, Creole bitters, orange and purple basil. A sweet cocktail, with almonds and anise flavors.`, price:"54"},
      {name: "SESAME STREET", description: `A Once in a lifetime experience, that goes against the grain. A combination of Citron and Orange Ketel 1 Vodka, housemade creamy Limoncello, vanilla honey and tahini!! Daring, tart, sweet and viscous. Bert and Ernie wouldn’t dare, do you?`, price:"56"},
      {name: "ARIA SOUR #4", description: `Our revamped and beloved signature cocktail. Hennessy V.S, Orange Caracao, Amaro Montenegro, lemon juice, maple syrup and egg white, well shaken. A Classic Sour, that’s powerful and complex in an unforgettable way.`, price:"56"},
      {name: "BLACK PEARL", description: `A cleaver, boozy cocktail with dark chocolate, coffee and light vanilla flavors. Zacapa 23 Rum, Bulleit Bourbon, Cynar, a touch of vanilla and chocolate bitters. Creating a wintery cocktail, with amazing bittersweet, boozy flavors. An experience for all your senses.`, price:"67"},
      {name: "WHITE NEGRONI", description: `A twist on the all time classic. Gin, Dry French Vermouth, Aperol, Maraschino, Peychaud bitters and a little dry white wine. All this mixed together creates a gentle yet boozy cocktail, with amazing balance of bitter, sweet and citrus flavors.`, price:"55"}
    ]
  },
  alcohol: {
    title: 'TASTE OF MIND',
    bg: 'upstairs-alcohol-bg',
    items: [
      {name: "", description: "Tasting meal is served from Saturday to Wednesday and by reservation only"},
      {name: "OUR TASTING MENU", description: "A Choice Of Seven. Serves two | 158 NIS Per person"},
      {name: "SEA FISH CRUDO", description: "Slices of sea fish, with leek, scallion & radish salad in a maple & light soy vinaigrette"},
      {name: "SALMON TATAKI", description: "Single-sided seared salmon with tamarind and lemon-grass vinaigrette, with caramelized cashews on top"},
      {name: "PERUVIAN CEVICHE", description: "Diced sea fish with lime vinaigrette, avocado, cashew mix, crispy corn & tapioca twill"},
      {name: "COQUILLES ST-JACQUES", description: "Seared a La Plancha in brown butter, served on white almonds cream with blue crabs bisque"},
      {name: "NICCOISE SALAD", description: `Baby romain lettuce with an olive vinaigrette, dried Spanish tuna, half boiled egg & confit lemon puree`},
      {name: "JUMBO ASPARAGUS", description: `Glazed in parmesan butter, over sweet corn cream, topped with parmesan shavings`},
      {name: "SWEET POTATO TORTELLINI", description: `Brown butter glazed dough dumplings, over pecorino sauce & crispy sage`},
      {name: "CHEESE AND SPINACH CAPPELLETTI", description: `Dumplings stuffed with four types of cheese and wild spinach, and a sage butter glaze`},
      {name: "SIRLOIN", description: `100gr’ Sirloin steak from the Golan heights, seared on a cast iron skillet, over lima bean & sweet beet chimichurri`},
      {name: "MEAGRE FILLET", description: "In light soy sauce, tiger tomatoes, lemon thyme and bok choy"},
      {name: "Desserts", description: ""},
      {name: 'NEMESIS', description: "Moist Chocolate cake, oatmeal crumble, milk chocolate ganache marshmallow fluff and vanilla ice cream"},
      {name: 'MAYA MANGO PENNECOTTA', description: `Milk chocolate mousse, paillete crunch & black sesame twill, mango sorbet & salted toffee`}
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
              "Ra’am, Adama II, Tavor, Israel '13",
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
              "Riesling, Schlumberger, Alsace, France '12",
              `Rose, Blue C, Covenant, Golan Heights, Israel 16'`,
              "Sancerre, Fournier Pere &Fils, Loire Valley, France '14",
              "Petit Chablis, J.Moreau&Fils, Bourgogne, France '14"
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
              "Moët & Chandon, Brut Impérial N.V, Champagne, France"
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
              "Château Cissac, Haut Medoc, Bordeaux, France '13",
              `Cabernet Sauvignon Reserve, "Levanon" vineyard, Recanati, Upper Galilee, Israel '12, 500 ml`,
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
                  `Cordon Negro, Brut Cava, Freixenet, Penedes, Spain`,
                  `Freixenet Ice, Penedes, Spain`,
                  `Domaine Huet, Petillant Brut, Vouvray, Loire Valley France '09`,
                  `Moët & Chandon, Brut Impéria N.V, Champagne, France`,
                  `Moët & Chandon, Nectar Impérial N.V, Champagne, France`,
                  `Jeanmaire, Brut Cuvée N.V, Champagne, France`,
                  `Moët & Chandon, Rosé Impérial N.V, Champagne, France`,
                  `Dom Pérignon, Vintage 2006, Champagne, France`,
                  `Dom Pérignon, Rosé Vintage 2004, Champagne, France`
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
                  `Viognier, Blue C, Covenant, Golan Heights 16'`,
                  `Chardonnay, Clos De Gat, Judean Hills '14`,
                  `Golan âteauCh Sauvignon Blanc,Golan Heights 15'`,
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
                  `Pouilly-Fumé Jeunes Vignes, Henri Bourgeois, Loire Valley '14`,
                  `Sancerre, J. Moreau & Fils, Loire Valley '14`,
                  `Chablis, Vaillons, Premier cru, J. moreau & fils, Bourgogne '14`,
                  `Gewürztraminer, Schlumberger, Alsace 14’`,
                  `Puligny Montrachet, Château de Puligny-Montrachet, Bourgogne '11`,
                  `Chablis, Clos, grand cru, Christian Moreau '14`,
                  `Chablis, Valmur, Grand Cru, J. Moreau & Fils, Bourgogne '14`
                ]
              },
              {
                name: "Italy",
                items: [
                  `Masianco, Masi, Veneto '15`,
                  `Remole Bianco, Frescobaldi, Tuscany 16' Gavi, Pio Cesare, Piedmont 13'`
                ]
              },
              {
                name: "Germany",
                items: [
                  `Gewürztraminer, Josef Drathen, Rhein 15'`,
                  `Gewürztraminer, Schafer Fröhlich, Nahe 13'`
                ]
              },
              {
                name: "Spain",
                items: [
                  `Blanco, Muga, Rioja 16'`,
                  `Flor De Muga Rosado, Rioja 16'`
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
                  `Pinot Noir, Jean Bouchard, Bourgogne '13`,
                  `Châteauneuf Du Pape, Louis Bernard, Rhône Valley 14’`,
                  `Côte Rôtie, Louis Bernard, Rhône Valley '10`,
                  `Nuits-St- Georges, Clos des Forêts, Premier cru, Domaine de l’Arlot, Bourgogne '11`
                ]
              },
              {
                name: "Italy",
                items: [
                  `Chianti Superiore, Banfi, Tuscany '12`,
                  `Rosso Di Montepulciano, Boscarelli, Tuscany '15`,
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
                  `Rioja, seleccion especial reserve, muga 11'`
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
