const Menu = {
  entrees: {
    title: 'Entrees',
    bg: 'upstairs-entrees-bg',
    items: [
      {name: "OYSTER", description: "Gillardeau oysters from La Rochelle, France", price: "32 per Unit"},
      {name: "CEVICHE", description: "Finely chopped sea fish in Mediterranean spices, with quinoa puff and white peach sorbet", price: "59"},
      {name: "GREEK SASHIMI", description: "Sliced sea fish with tzatziki, crushed tomato, shallots and Spanish mint", price: "65"},
      {name: "RED TUNA", description: "Red tuna sashimi with vinaigrette of oranges, sesame oil and red chili", price: "68"},
      {name: "SALMON TATAKI", description: "Single­sided seared salmon on tamarind and lemon­grass vinaigrette, on top", price: "58"},
      {name: "CALAMARI", description: "Calamari salad with spicy chili paste, tomatoes, mint and coriander on sheep yogurt", price: "58"},
      {name: 'COQUILLES SAINT JACQUES', description: "Seared a La Plancha in brown butter, served on white almonds cream with blue crabs bisque", price: "65"},
      {name: "ENDIVE SALAD", description: "Salad of purple and white endives, shallots and arugula, with cherry vinaigrette, roast almonds and gorgonzola cheese", price: "48"},
      {name: "FETOUSH SALAD", description: "Meggie tomatoes, miniature cucumbers and hot Roquette leaves, seasoned with Egyptian dukkah and sumac, served with “Hameiri” cheese", price: "49"},
      {name: "JUMBO ASPARAGUS", description: "Glazed in parmesan butter, served on sweetish corn cream with shaved parmesan on top", price: "59"},
      {name: "CHEESE AND SPINACH CAPPELLETTI", description: "Dumplings filled with four types of cheese and wild spinach, glazed in sage butter", price: "59"},
      {name: "BEEF TATAKI", description: "Thinly sliced rump burned on one side, with 'far east' vinaigrette caramelized peanuts and jerusalem artichoke chips", price: "58"},
      {name: "BUTCHER'S SALAD", description: "Pan seared Onglet steak with dry sherry vinaigrette, Cashews and aromatic leaves", price: "55"},
      {name: "VEAL SWEETBREADS", description: "Sweetbreads on chestnut and white leek cream, with grated parmesan and reduced port wine sauce", price: "72"},
      {name: "FOIE GRAS", description: "Ravioli with Foie Gras and glazed rum in homemade Rosetta and Persian raisins", price: "65"},
      {name: "LAMB BRIK", description: "Filo cigars, filled with lamb meat and Ras-el-hanout", price: "58"},
      {name: "FISH AND CHIPS", description: "", price: "72"}
    ],
    veganItems: [
      {name: "TOMATO TARTAR", description: "Chopped tomatoes with oregano, olive oil, lemon juice, quinoa puff and garlic bread", price: "38"},
      {name: "CRISPY POTATO TATAKI", description: "Single-sided seared potato with tamarind and lemon-grass vinaigrette, served with caramelized cashews on top . Vegetarian / Vegan", price: "42"}
    ]
  },
  main: {
    title: 'main',
    bg: 'upstairs-main-bg',
    items: [
      {name: "SEA MEAGRE", description: "Fillet in white soy butter, striped tomatoes, lemony thyme and bok choy", price: "128"},
      {name: 'SEA BASS', description: 'Oven-baked in a warm vinaigrette of white miso and aromatic leaves', price: "122"},
      {name: 'CRYSTAL SHRIMPS', description: 'Yolks fettuccini with crystal shrimps in their own sauce', price: "115"},
      {name: "WHITE COLLAR", description: "Choux pastry dumplings fill with leek and mascarpone fondue, glazed in lemon butter", price: "88"},
      {name: 'LAMB CHOPS', description: "Pan seared lamb chops with lamb sauce, greens and mustard seed puree", price: "145"},
      {name: 'HANGER STEAK', description: "Served on Jerusalem artichoke cream and burnt leek, in red wine sauce", price: "112"},
      {name: "SHORT RIB CAPPELLETTI", description: "Dumplings filled with short rib 4 hours slow­cooked with root vegetables, served with puree", price: "92"},
      {name: "SIRLOIN", description: "250 gram of sirloin steak from the Golan Heights, seared a la plancha with Maya mango vinaigrette and rice puff", price: "132"},
      {name: "BEEF FILLET", description: "250 gram of well­marbled beef filet with onion and bonfire potato, served with French mustard", price: "158"}
    ],
    veganItems: [
      {name: 'ROOTS RAGÙ', description: 'Stewed celeriac, carrot, parsley, and kohlrabi winter roots in vegetable broth with red wine and vegan fettuccine', price: "68"}
    ]
  },
  deserts: {
    title: 'Desserts',
    bg: 'upstairs-desserts-bg',
    items: [
      {name: 'NEMESIS', description: "Moist Chocolate cake, oat meal crumble, milk chocolate ganache, marshmallow fluff and vanilla ice cream", price: "48"},
      {name: 'BAMBA SEMIFREDDO', description: "Semi­frozen peanut butter mousse, served alongside chocolate fudge, chocolate caramel ganache, caramel tuile, cacao beans, New­York style peanuts and white chocolate mousse", price: "45"},
      {name: "PASSIONFRUIT AND WHITE CHOCOLATE", description: "Passionfruit cream with white chocolate mousse, served on hazelnut crunch, with slightly sour passionfruit sorbet", price:"48"},
      {name: "COCONUT MILLE FEUILLE", description: "Thousand Layers separated with coconut mousse, Banana toffee carmelized banana and coconut sorbet", price: "48"},
      {name: 'RED FRUITS SOUP', description: "Sweet red fruits soup with oat meal crumble and vanilla ice cream", price: "48"},
      {name: 'HENNESSY ESPRESSO', description: "Hennessy's refreshing cocktail with espresso and Lemon Zest", price: "36"},
      {name: 'SELECTION OF SORBETS', description: "Choice of three Sorbets", price: "38"}
    ]
  },
  cocktails: {
    title: 'Cocktails',
    bg: 'upstairs-cocktails-bg',
    items: [
      {name: 'SUMAC GIMLET', description: "A tribute to the classic cocktail named afterr Thomas Gimlet, the British Royal Navy Admiral. Tanqueray Gin seasoning with homemade sumac syrup and fresh Lemon. A cocktail that will make you lick your lips and thirst for more."},
      {name: 'SESAME STREET', description: "A one-time experience and unconventional combination of Ketel One Citron and Oranje, our house Limoncello, Honey, Vanilla and Tehina Bold, sour, sweet and thick. Bert and Ernie wouldn't dare, will you?"},
      {name: 'ELDERFLOWER COLLINS', description: "Uplifting and perfect after a hard day in Tel Aviv. Long, cold and thoroughly refreshing. Tanqueray Gin shaken with lemon juice, Elderflower syrup and club soda. Floral and light, with an intense longing for summer."},
      {name: "BEES KNEES", description: "An innovative interpretation of a classic success that tastes like melted butter and marmalade on toast - without the toast. Appleton Rum washed with brown butter, shaken with honey, orange juice and lime. Caribbean, seasoned with mild and subtle acidity."},
      {name: 'ARIA SOUR', description: "A new version of our famous and well-loved cocktail. Tanqueray Gin shaken with Cherry Herring liqueur, yellow Chartreuse, lemon juice and egg white. A classic sour cocktail in the best tradition, a powerful and sophisticated cocktail that is almost impossible to forge"},
      {name: "THE PERFECT OLD FASHION", description: "A classic with a twist - one of the first cocktails in history that combines alcohol, bitters and sugar. Zacapa 23, Wild Turkey 81,Hennessy, Angostura bitters and a touch of maple. A stormy and sophisticated cocktail, no wonder it's Donald Draper's nightcap."},
      {name: "ARIA 66", description: "A light and fresh aperitif, the perfect accompaniment to any celebration. Tanqueray no.10, Moet Chandon champagne, lemon and ginger syrup."},
      {name: "FRESH RUM", description: "A great combination of fruit, herbs and vegetables – an especially refreshing result. Pamprero light rum, strawberries, vanilla, lime, cucumbers, mint, pineapple and bitters. Light, fruity and tangy. Flavors you won’t forget."},
      {name: "ASHTON ROSE", description: "Specially concocted for lovers of anise - a fresh and light cocktail. Ouzo 12 seasoned with lemon, mint, cucumber and rosemary. Middle Eastern with a clear and intriguing taste, that'll make you forget everything you thought about liquorish."}
    ]
  },
  alcohol: {
    title: 'TASTE OF MIND',
    bg: 'upstairs-alcohol-bg',
    items: [
      {name: "GREEK SASHIMI", description: "Sliced sea fish with tzatziki, crushed tomato, shallots and Spanish mint"},
      {name: "SALMON TATAKI", description: "Single­sided seared salmon on tamarind and lemon­grass vinaigrette, on top"},
      {name: "CEVICHE", description: "Finely chopped sea fish in Mediterranean spices, with quinoa puff and white peach sorbet" },
      {name: 'COQUILLES SAINT JACQUES', description: "Seared a La Plancha in brown butter, served on white almonds cream with blue crabs bisque"},
      {name: "ENDIVE SALAD", description: "Salad of purple and white endives, shallots and arugula, with cherry vinaigrette, roast almonds and gorgonzola cheese"},
      {name: "JUMBO ASPARAGUS", description: "Glazed in parmesan butter, served on sweetish corn cream with shaved parmesan on top"},
      {name: "CHEESE AND SPINACH CAPPELLETTI", description: "Dumplings filled with four types of cheese and wild spinach, glazed in sage butter"},
      {name: "SHORT RIB CAPPELLETTI", description: "Dumplings filled with short rib 4 hours slow­cooked with root vegetables, served with puree"},
      {name: 'HANGER STEAK', description: "Served on Jerusalem artichoke cream and burnt leek, in red wine sauce"},
      {name: 'MEAGRE FILLET', description: "In light soy sauce, tiger tomatoes, lemon thyme and bok choy"}
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
            title: "White",
            items: [
              "Rosé, Barbera, Adama, Tavor Winyard, Israel '15",
              "Grüner Veltliner, Ecker, Wagram, Austria '14",
              "Gewürztraminer, Josef Drathen, Germany '14",
              "Chardonnay, Tzuba, Juden Hills, Israel '15",
              "Riesling “Jean Baptiste” Kabinett, Gunderloch, Rheihessen, Germany '14",
              "Petit Chablis, J. Moreau & Fils, Bourgogne, France '14"
            ]
          },
          {
            title: "Red",
            items: [
              "Côtes Du Ventoux, Louis Bernard, Rhône Valley, France '12",
              "Merlot, Tzuba, Judean Hills, Israel '11",
              "Pinot Noir, Jean Bouchard, Bourgogne, France '13",
              "Chardonnay, Tzuba, Juden Hills, Israel '15",
              "Rioja, Reserve, Muga, Spain '12",
              "Cabernet Sauvignon, Chateau Golan, Golan Heights, Israel '12"
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
              "Château Cissac, Haut Medoc, Bordeaux, France '12",
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
            title: "Whites",
            countries: [
              {
                name: "Israel",
                items: [
                  `Rosé, Barbera, Adama, Tavor Winyard, Israel '15`,
                  `Chardonnay, Tzuba, Juden Hills, '15`,
                  `Zohar, Adama, Tavor Winyard, '15`,
                  `Viognier, Ortal, Upper Galilee '13`,
                  `Lahat Lavan, Gush Etzion '13`,
                  `Chardonnay, Clos De Gat, Judean Hills '13`,
                  `Sauvignon Blanc, Château Golan, Golan Heights '14`,
                  `Chardonnay C, Castel, Judean Hills '14`,
                  `Sycra Chardonnay, Clos De Gat, Judean Hills '09`,
                ]
              },
              {
                name: "Germany",
                items: [
                  `Gewürztraminer, Josef Drathen, Germany '14`,
                  `Riesling "Jean Baptiste" Kabinett, Gunderloch, Rheihessen, Germany '14`,
                  `Gewürztraminer, Schafer Fröhlich, Nahe '12`,
                  `Riesling Trocken, Donnhoff, Nahe '12`,
                  `Riesling, Von Der Fels, Keller, Rheinhessen '13`
                ]
              },
              {
                name: "Austria",
                items: [
                  `Grüner Veltliner, Ecker, Wagram, Austria '14`
                ]
              },
              {
                name: "Italy",
                items: [
                  `Masianco, Masi, Veneto '14`
                ]
              },
              {
                name: "France",
                items: [
                  `Tavel Rosé, Château D’aqueria, Rhone Valley '13`,
                  `Bourgogne Chardonnay, Jean Bouchard, Bourgogne '13`,
                  `Petit Chablis, J. Moreau & Fils, Bourgogne '14`,
                  `Pouilly-Fumé Jeunes Vignes, Henri Bourgeois, Loire Valley '14`,
                  `Pinot Blanc, Reserve, Weinbach, Alsace '12`,
                  `Sancerre, J. Moreau & Fils, Loire Valley '13`,
                  `Chablis, Vaillons, Premier Cru, William Fevre, Bourgogne '13`,
                  `Puligny Montrachet, Olivier Leflaive, Bourgogne '11`,
                  `Chablis, Valmur, Grand Cru, J. Moreau & Fils, Bourgogne '11`
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
                  `Merlot, Tzuba, Judean Hills '11`,
                  `Ra'am, Adama II, Tavor Winyard '12`,
                  `Secret, Trio, Judean Hills '11`,
                  `Cabernet Sauvignon, Château Golan, Golan Heights '13`,
                  `Ayalon Valley, Clos De Gat, Judean Hills '10`,
                  `Eliad, Château Golan, Golan Heights '13`,
                  `Grand Vin, Castel, Judean Hills '13`,
                  `Sycra Syrah, Clos De Gat, Judean Hills '11`
                ]
              },
              {
                name: "Italy",
                items: [
                  `Chianti Superiore, Banfi, Tuscany '12`,
                  `Ripasso Mara, Cesari, Veneto ’13`,
                  `Campofiorin, Masi, Veneto ’11`,
                  `Barbera D’alba, Pio Cesare, Piedmont '13`,
                  `Tenuta Di Castiglioni, Frescobaldi, Tuscany '10`,
                  `Barbaresco, Produttori, Piedmont '10`,
                  `Sito Moresco, Gaja, Piedmont '13`,
                  `Amarone, Costasera, Della Valpolicella classico, Masi '11`,
                  `Brunello Di Montalcino, Castelgiocondo, Frescobaldi, Tuscany '10`
                ]
              },
              {
                name: "France",
                items: [
                  `Côtes Du Ventoux, Louis Bernard, Rhône Valley, France '12`,
                  `Pinot Noir, Jean Bouchard, Bourgogne '13`,
                  `Tuffe, Château Du Hureau, Saumur Champigny, Loire Valley '11`,
                  `Syrah ’Signe’ Rouge, Cave Yves Cuilleron, Rhone Valley '12`,
                  `Beaune De Château, Premier Cru, Bouchard, Bourgogne '11`,
                  `Châteauneuf Du Pape, Louis Bernard, Rhone Valley '13`,
                  `Nuit Saint George, Louis Jadot, Bourgogne '07`
                ]
              },
              {
                name: "Spain",
                items: [
                  `Rioja, Reserve, Muga, Spain '12`
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
