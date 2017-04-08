const Menu = {
  entrees: {
    title: 'Entrees',
    bg: 'upstairs-entrees-bg',
    items: [
      {name: "OYSTER", description: "Gillardeau oysters from La Rochelle, France", price: "32 per Unit"},
      {name: "CEVICHE", description: "Finely chopped sea fish in lime juice, sea salt and olive oil, crispy quinoa puff with a green apple and jalapeño sorbet", price: "59"},
      {name: "PAPAYA SEA FISH", description: "Papaya salad with lemon grass, cashews, Thai black-eyed peas, topped with raw slices of sea fish", price: "54"},
      {name: "RED TUNA", description: "Red tuna sashimi with an orange vinaigrette, sesame oil and chili", price: "68"},
      {name: "SALMON TATAKI", description: "Salmon Seared on one side in a tamarind and lemon-grass vinaigrette, with caramelized cashews", price: "62"},
      {name: "MEDITERRANEAN OCTOPUS", description: "Seared octopus tentacle with lemon cream & mustard seed puree", price: "62"},
      {name: "SHRIMP SALAD", description: "Vietnamese style shrimp with coconut milk vinaigrette, plump pomelo, crispy shallots, chili and aromatic leaves", price: "65"},
      {name: "COQUILLES SAINT JACQUES", description: "Seared Sea Scallops in brown butter, over white almonds cream and blue crab bisque", price: "65"},
      {name: "ENDIVE SALAD", description: `Purple and white endives, shallots and "Baladi" Rocket, with cherry vinaigrette, toasted almonds and Gorgonzola cheese`, price: "52"},
      {name: "BRULEE BUCHE", description: `Ripe goat's milk cheese from Loir Valley, lightly charred with red beets poached in sherry vinegar, over endive and walnuts`, price: "54"},
      {name: "FETOUSH SALAD", description: `Maggie tomatoes, baby cucumbers and spicy rocket leaves, seasoned with Egyptian dukkah and sumac, served with Hameiri cheese`, price: "52"},
      {name: "MUSHROOM RISOTTO", description: `Arborio risotto, with assorted mushrooms and stock, topped with blackened Parmesan tuille`, price: "68"},
      {name: "CHEESE AND SPINACH CAPPELLETTI", description: `Dumplings stuffed with four types of cheese and wild spinach, and a sage butter glaze`, price: "59"},
      {name: "BEEF CARPACIO", description: `Thinly sliced Top Rump with horseradish aioli, spicy mustard, pickled cappers and shallots, and crispy onion`, price: "59"},
      {name: "BUTCHER'S SALAD", description: `Pan seared hanger steak with a dry cherry vinaigrette, cashews, red onion and aromatic leaves`, price: "58"},
      {name: "FOIE GRAS STEAK", description: `Pan seared Foie Gras over winter chestnut cream, young leeks, aromatic pumpkin jam, and wine stock`, price: "88"}
    ],
    veganItems: [
      {name: "TOMATO TARTAR", description: "Diced tomatoes with oregano, olive oil, lemon juice, quinoa puffs, and garlic bread", price: "38"},
      {name: "FETOUSH SALAD", description: "Maggie tomatoes, baby cucumbers and spicy rocket leaves, seasoned with Egyptian dukkah and sumac, served with Hameiri cheese", price: "52"},
      {name: "CRISPY POTATO TATAKI", description: "Seared on one side, with tamarind vinaigrette, lemongrass, topped with caramelized cashews", price: "42"},
      {name: "BRULEE BUCHE", description: `Ripe goat’s milk cheese from Loir Valley, lightly charred with red beets poached in sherry vinegar, over endive and walnuts`, price: "54"},
      {name: "BEET SALAD", description: `Red beets poached in sherry vinegar, over endive, rocket and walnuts`, price: "42"},
      {name: "ENDIVE SALAD", description: `Purple and white endives, shallots and "Baladi" Rocket, with cherry vinaigrette, toasted almonds and Gorgonzola cheese`, price: "52"},
      {name: "CHEESE AND SPINACH CAPPELLETTI", description: `Dumplings stuffed with four types of cheese and wild spinach, and a sage butter glaze`, price: "59"}
    ]
  },
  main: {
    title: 'main',
    bg: 'upstairs-main-bg',
    items: [
      {name: "SEA MEAGRE", description: "In light soy butter, tiger tomatoes, lemon thyme and bok choy", price: "132ֿ/76"},
      {name: 'SEA BASS', description: 'Oven Roasted with “Aria style” green curry, Thai black-eyed peas, brokkomini and rice puffs', price: "128"},
      {name: "LEEK AND MASCRAPONE DUMPLINGS", description: "Choux pastry dumplings filled with leek and mascarpone fondue, glazed in lemon butter", price: "88"},
      {name: "SHORT RIB CAPPELLETTI", description: "Dumplings filled with braised short rib, root vegetables, and red wine served with silky potato puree", price: "98/59"},
      {name: "SIRLOIN", description: "250gr Sirloin steak from the Golan Heights, seared in cast-iron skillet, with garden pea cream, porcini mushroom stock, and ratte potato puree", price: "142/84"},
      {name: "BEEF FILLET", description: "250gr Marbleized beef filet with onion and charred potatoes", price: "159"},
      {name: "HANGER STEAK", description: "Over Jerusalem artichoke and charred leek cream, in red wine sauce", price: "122/71"},
      {name: "LAMB CHOPS", description: "Pan seared lamb chops with lamb jus, green vegetables, potato and mustard seed puree", price: "152"}
    ],
    veganItems: [
      {name: 'FETTUCCINE GREENS', description: `Vegan Fettuccine with "Aria style" green curry, bok choy, broccomini and spring onions`, price: "68"},
      {name: 'MUSHROOM RISOTTO', description: `Arborio Risotto, with assorted mushrooms and stock, topped with blackened Parmesan twill`, price: "68"},
      {name: "LEEK AND MASCRAPONE DUMPLINGS", description: "Choux pastry dumplings filled with leek and mascarpone fondue, glazed in lemon butter", price: "88"}
    ]
  },
  deserts: {
    title: 'Desserts',
    bg: 'upstairs-desserts-bg',
    items: [
      {name: 'NEMESIS', description: "Moist Chocolate cake, oatmeal crumble, milk chocolate ganache marshmallow fluff and vanilla ice cream", price: "48"},
      {name: 'BAMBA SEMIFREDDO', description: "Semi-frozen peanut butter mousse, served with chocolate fudge, chocolate caramel ganache, caramel tuile, cacao beans, NY style candied peanuts and white chocolate mousse", price: "45"},
      {name: "PASSIONFRUIT AND WHITE CHOCOLATE", description: "Passion fruit puree with white chocolate mousse, served over hazelnut crunch, and passion fruit sorbet", price:"48"},
      {name: "COCONUT MILLE FEUILLE", description: "Thousand Layers separated with coconut mousse, Banana toffee caramelized banana and coconut sorbet", price: "48"},
      {name: 'RED FRUITS SOUP', description: "Sweet red fruits soup with oatmeal crumble and vanilla ice cream", price: "48"},
      {name: 'HENNESSY ESPRESSO', description: "Refreshing Hennessy cocktail with espresso and Lemon Zest", price: "36"},
      {name: 'SELECTION OF SORBETS', description: "Choice of three Sorbets", price: "38"}
    ]
  },
  cocktails: {
    title: 'Cocktails',
    bg: 'upstairs-cocktails-bg',
    items: [
      {name: 'SPEEDY GONZALEZ', description: `A new version, with a Mexican twist, to the famous Moscow Mule. Aged Tequila, Mezcal, Agave syrup, with Lime, Cucumbers, Mint and Ginger beer. Making this a fun, complex and tantalizing cocktail. You’ll want to order another faster then Speedy Gonzales.`, price:"54"},
      {name: 'LADY IN RED', description: `A light, floral cocktail. Tanqueray Gin, housemade lavender & hibiscus syrup, for a touch of sweetness, with tartness of fresh lemon and floral notes from roses and lilies. This cocktail will have you licking your lips.`, price:"44"},
      {name: 'FRUIT GARDEN', description: `Sweet and spiced Caribbean cocktail. Based on White Rum with peaches, passion fruit, Elderflower syrup, fresh limejuice and Angostura bitters. Sweet, fruity and fun, just like we like them.`, price:"56"},
      {name: "PLAGUE WATER COLLINS", description: `An ode to the creator of Gin the Doctor and Scientist Franciscus Sylvius. Legend has it, that he came up with Genever to fight one of the epidemics that hit Europe, but instead of medicine he created one of our favorite spirits. Tanqueray Gin infused with lemongrass and lemon verbena, fresh limejuice, mint, tonic and a dash of pepper. A citrusy, light cocktail, that will make you want another.`, price:"46"},
      {name: 'KALISPERA', description: `The Greek word for good evening, and like it’s name the right way to open an evening. Ouzo, Amaretto Disaronno, housemade almond liqueur, Creole bitters, orange and purple basil. A sweet cocktail, with almonds and anise flavors.`, price:"52"},
      {name: "SESAME STREET", description: `A Once in a lifetime experience, that goes against the grain. A combination of Citron and Orange Ketel 1 Vodka, housemade creamy Limoncello, vanilla honey and tahini!! Daring, tart, sweet and viscous. Bert and Ernie wouldn’t dare, do you?`, price:"54"},
      {name: "BEE’S KNEES", description: `A new twist on a classic, that tastes like jam and butter toast, only without the toast. Appleton Rum with a browned butter wash, shaken with honey, orange juice and lime. A refreshing cocktail, with light notes of sweetness and citrus.`, price:"48"},
      {name: "ARIA SOUR #4", description: `Our revamped and beloved signature cocktail. Hennessy V.S, Orange Caracao, Amaro Montenegro, lemon juice, maple syrup and egg white, well shaken. A Classic Sour, that’s powerful and complex in an unforgettable way.`, price:"48"},
      {name: "BUBBLE BERRY", description: `A sweet, light and refreshing aperitif, perfect for any celebration. Tanqueray Gin, Moet and Chandon Champagne, “Aria Style” wild berry compote, lemon, vanilla and egg white.`, price:"66"},
      {name: "BLACK PEARL", description: `A cleaver, boozy cocktail with dark chocolate, coffee and light vanilla flavors. Zacapa 23 Rum, Bulleit Bourbon, Cynar, a touch of vanilla and chocolate bitters. Creating a wintery cocktail, with amazing bittersweet, boozy flavors. An experience for all your senses.`, price:"62"},
      {name: "WHITE NEGRONI", description: `A twist on the all time classic. Gin, Dry French Vermouth, Aperol, Maraschino, Peychaud bitters and a little dry white wine. All this mixed together creates a gentle yet boozy cocktail, with amazing balance of bitter, sweet and citrus flavors.`, price:"47"},
      {name: "TROPICAL SMOKE", description: `For the daring amongst you. Mezcal, fresh lime, mango and Habanero tincture. Thus, a cocktail with smokey, spicy and tropical flavors was created. A must try.`, price:"52"}
    ]
  },
  alcohol: {
    title: 'TASTE OF MIND',
    bg: 'upstairs-alcohol-bg',
    items: [
      {name: "OUR TASTING MENU", description: "A Choice Of Seven. Serves two | 158 NIS Per person"},
      {name: "RED TUNA", description: "Red tuna sashimi with an orange vinaigrette, sesame oil and chili"},
      {name: "SALMON TATAKI", description: "Single-sided seared salmon with tamarind and lemon-grass vinaigrette, with caramelized cashews on top"},
      {name: "CEVICHE", description: "Finely chopped sea fish in limejuice, sea salt and olive oil, crispy quinoa puff with a green apple and jalapeño sorbet"},
      {name: "COQUILLES ST-JACQUES", description: "Seared a La Plancha in brown butter, served on white almonds cream with blue crabs bisque"},
      {name: "ENDIVE SALAD", description: `Salad of purple and white endives, shallots and Roquette &quot;Baladi&quot;, with cherry vinaigrette, roasted almonds and gorgonzola cheese`},
      {name: "JUMBO ASPARAGUS", description: "Glazed in parmesan butter, served on sweetish corn cream with shaved parmesan on top"},
      {name: "CHEESE AND SPINACH RAVIOLI", description: "Dumplings filled with four types of cheese and wild spinach, glazed in sage butter"},
      {name: "SHORT RIB CAPPELLETTI", description: "Dumplings filled with short rib 4 hours slow-cooked with root vegetables, served with puree"},
      {name: "SIRLOIN", description: "100gr Sirloin steak from the Golan Heights, seared in cast-iron skillet, with garden pea cream, porcini mushroom stock, and ratte potato puree"},
      {name: "MEAGRE FILLET", description: "In light soy sauce, tiger tomatoes, lemon thyme and bok choy"},
      {name: "Desserts", description: ""},
      {name: 'NEMESIS', description: "Moist Chocolate cake, oatmeal crumble, milk chocolate ganache marshmallow fluff and vanilla ice cream"},
      {name: 'HAZEL LAYERS', description: "Hazelnut cream and cocoa tuile, with salted caramel and brown butter ice cream"}
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
              "Cordon Negro, Freixenet, Brut Cava, Panades, Spain",
              "Moët & Chandon, Brut Impérial N.V, Champagne, France 200 ml"
            ]
          },
          {
            title: "Red",
            items: [
              "Merlot, Tzuba, Judean Hills, Israel '12",
              "Ra’am, Adama II, Tavor, Israel '13",
              "Rosso Di Montepulciano, Boscarelli, Toscany,Italy '15",
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
                  `Viognier, Ortal, Golan Heights 14'`,
                  `Chardonnay, Clos De Gat, Judean Hills '14`,
                  `Sauvignon Blanc, Château Golan, Golan Heights '15`,
                  `Chardonnay C, Castel, Judean Hills '15`,
                  `Sycra Chardonnay, Clos De Gat, Judean Hills '09`,
                ]
              },
              {
                name: "Germany",
                items: [
                  `Gewürztraminer, Josef Drathen, Rhein 15'`,
                  `Gewürztraminer, Schafer Fröhlich, Nahe 13'`,
                  `Riesling, Von Der Fels, Keller, Rhein '13`
                ]
              },
              {
                name: "USA",
                items: [
                  `Sauvignon Blanc, Canon Ball, California 15'`
                ]
              },
              {
                name: "Italy",
                items: [
                  `Masianco, Masi, Veneto '15`
                ]
              },
              {
                name: "New Zealand",
                items: [
                  `Sauvignon blanc, Cloudy bay, New Zealand 15'`
                ]
              },
              {
                name: "France",
                items: [
                  `Tavel Rosé, Château D’aqueria, Rhone Valley`,
                  `Bourgogne Chardonnay, Jean Bouchard, Bourgogne '13`,
                  `Petit Chablis, J. Moreau & Fils, Bourgogne '14`,
                  `Pouilly-Fumé Jeunes Vignes, Henri Bourgeois, Loire Valley`,
                  `Riesling, Schlumberger, Alsace '12`,
                  `Sancerre, J. Moreau & Fils, Loire Valley '14`,
                  `Chablis, Vaillons, Premier cru, J. moreau & fils, Bourgogne '14`,
                  `Puligny Montrachet, Château de Puligny-Montrachet, Bourgogne '11`,
                  `Chablis, Clos, grand cru, Christian Moreau '14`,
                  `Chablis, Valmur, Grand Cru, J. Moreau & Fils, Bourgogne '14`
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
                  `Eliad, Château Golan, Golan Heights '14`,
                  `Cabernet Franc, Margalit, Upper Galilee '13`,
                  `Grand Vin, Castel, Judean Hills '14`,
                  `Sycra Syrah, Clos De Gat, Judean Hills '11`,
                  `Makura, Amphorae '09`,
                  `Enigma, Margalit, Upper Galilee '13`,
                  `Velours, Amphorae '10`
                ]
              },
              {
                name: "Spain",
                items: [
                  `Rioja, Reserve, Muga, Spain '12`
                ]
              },
              {
                name: "Argentina",
                items: [
                  `Malbec, Golden Reserve, Trivento '14`
                ]
              },
              {
                name: "France",
                items: [
                  `Côtes Du Ventoux, Louis Bernard, Rhône Valley, France '12`,
                  `Pinot Noir, Jean Bouchard, Bourgogne '13`,
                  `Syrah ’Signe’ Rouge, Cave Yves Cuilleron, Rhone Valley '12`,
                  `Châteauneuf Du Pape, Louis Bernard, Rhone Valley '13`,
                  `Nuit Saint George, Louis Jadot, Bourgogne '07`,
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
                  `Barbera D’alba, Pio Cesare, Piedmont '14`,
                  `Chianti Rufina, Nipozzano Riserva, Tuscany '12`,
                  `Vino Nobile, Boscarelli, Tuscany '11`,
                  `Amarone, Costasera, Della Valpolicella classico, Masi '11`,
                  `Brunello Di Montalcino, Castelgiocondo, Frescobaldi, Tuscany '10`,
                  `Il Bosco, Single Vineyard Amarone, Cesari, Veneto '08`,
                  `Barbaresco, Pio Cesare, Piedmont '12`
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
