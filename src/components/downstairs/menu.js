const Menu = {
  entrees: {
    title: 'Entrees',
    bg: 'upstairs-entrees-bg',
    items: [
      { name: "FISH THINS", description: "Slices of raw fish with lemon juice and garlic confit, tomato seeds, pine nuts, zaatar and sesame, mildly sour Labaneh and olive oil", price: "" },
      { name: "SLICES OF SEA FISH", description: "Za'atar soup and summer tomatoes with Kalamata olive salsa in cherry vinegar, served with grated dried yogurt", price: "" },
      { name: "SEA FISH TARTAR", description: "With jalapeno vinaigrette, pickled green chili, green apple and young olive oil", price: "" },
      { name: "SCALLOP", description: "Pan seared scallop on white almonds and Iranian raisins cream and blue crab stock", price: "" },
      { name: "CALAMARI SALAD", description: "Calamari seared on an iron pan, aromatic leaves, cauliflower couscous, olive oil and Zaatar, cold Labaneh soup with mint and almonds aioli", price: "" },
      { name: "OCTOPUS", description: "Octopus on coals with Lebanese Masabbaha, Bulgarian chickpeas and lemon tahini", price: "" },
      { name: "FISH BRUSCHETTA", description: "Slightly smoked trout on a toasted milk bun, with our crème fresh and pickled onion", price: "" },
      { name: "IRANIAN KOFTA", description: "Baby lettuce stuffed with Bulgur and Ras el hanout, pomegranate concentrate and a mixture of seasoning herbs, peppers and ground yogurt stone", price: "" },
      { name: "FATTOUSH SALAD", description: "Maggie tomatoes, cucumber, Spanish onion, local watercress, Egyptian Dukkah spice", price: "" },
      { name: "CRISPY SALAD", description: `Baby Arabic lettuce, seasonal fruit, aromatic leaves, floral honey mustard and white almonds' oil vinaigrette`, price: "" },
      { name: "ZUCCHINI ON COALS", description: "Baby local zucchini on goats' milk Labaneh, grape syrup, dried mint and lemon juice", price: "" },
      { name: `BEETS' SALAD`, description: `Colorful baked beets with Peril style cheese, fennel gastrique and Dukkah from Cairo`, price: "" },
      { name: "SAVORY CHEESE CHUCHVARA", description: "Choux pastry dumplings stuffed with zucchini and HaMeiri cheese, with warm sheep's yogurt mousse", price: "" },
      { name: "NONI TOKI", description: `Caraway and cumin seeds tartelettes stuffed with minced meat, seasoned with spring and white onion, dried mint, egg yolks vinaigrette and green oil`, price: "" },
      { name: "DUCK PROSCIUTTO", description: `Roasted baby Arabic lettuce, Uzbek raisins vinaigrette and seeds`, price: "" },
      { name: "SWEETBREAD", description: `Sweetbread, cabbage cream, beef stock, rice and saffron tuile and kale crisps`, price: "" },
      { name: "TURKISH PASTRAMA", description: `Weisbraten in a spice mixture with almonds and seasoning herbs spread, horseradish aioli and lemon`, price: "" },
      { name: "CORNED BEEF SKEWER", description: `Beef breast on coals with fermented sweet peppers, pickled onion and horseradish aioli`, price: "" },
      { name: "LAMB CHEBUREK", description: `Choux pastry stuffed with beef, coriander and caraway, fried in deep oil and served with a small aromatic salad`, price: "" }
    ]
  },
  main: {
    title: 'main',
    bg: 'upstairs-main-bg',
    items: [
      { name: "SEA MEAGRE", description: `10-day aged sea meagre fillet, Jerusalem artichoke grilled in brown butter, Jerusalem mousse and brown chicken stock`, price: "" },
      { name: `TROUT FROM KIBBUTZ DAN`, description: `Turkish spinach stew, Egyptian onion, local zucchini and Persian lemon on pan- seared trout fillet`, price: "" },
      { name: `UZBEK SHRIMP`, description: `Seared crystal shrimp glazed with Bukharan carrot and shrimp heads stock, Zereshk, roasted caraway seeds and Persian rice puffs`, price: "" },
      { name: "CALAMARI PASTA", description: `Broad pasta with fresh calamari, pickled lemons' sauce, coriander seeds and mangold`, price: "" },
      { name: "ROASTED CELERY ROOT", description: `Grilled celery root with pickled lemon and Beurre Blanc`, price: "" },
      { name: "CAULIFLOWER STEAK", description: `Cauliflower seared in brown butter, served on cauliflower mousse, roasted almonds and ghee browned breadcrumbs`, price: "" },
      { name: "LAGHMAN", description: `Beef and sweet and spicy peppers stock, fennel, hand made noodles, quail's egg, burnt eggplant and beef breast slices`, price: "" },
      { name: "PERSIAN KEBAB", description: `Short ribs kebab and local eggplant on coals, Shiraz style tahini, seasonal vegetable and pita Zaatar`, price: "" },
      { name: "SIRLOIN ON THE BONE", description: `With burnt leek and Jerusalem artichoke cream, purée de ratte and greens, beef .stock and Uzbek apricot | price per 100 gr`, price: "" },
      { name: "LAMB CHOPS", description: `Coal grilled lamb chops with rich Persian rice, mint and parsley, almonds, pistachios, sugared roses and lamb stock`, price: "" },
      { name: "DUCK BREAST", description: "With pumpkin gratin, butter, sage, duck stock and pomegranate", price: "" }
    ]
  },
  deserts: {
    title: 'Desserts',
    bg: 'upstairs-desserts-bg',
    items: [
      { name: 'COFFEE DACQUOISE', description: "Meringue and almonds based sponge cake, dark chocolate and hazelnuts, chocolate cremeux, chocolate creme anglaise, cocoa and hazelnut crumble. vanilla ice creame and espresso", price: "" },
      { name: `OPEN MA'AMOUL`, description: `Soft dough with layers of date cream, sweet pickled lemon and Chinese pecan ice cream`, price: "" },
      { name: `CHOCOLATE CAKE`, description: `Flour free, mascarpone based chocolate cake, dark chocolate sorbet, carmelized chocolate in sugar syrup and salty caramel`, price: "" },
      { name: "HAZELNUT BRULÉ", description: `hazelnut cream brule with sugared nuts brest and mascarpone ice cream`, price: "" },
      { name: 'CHEESE TART', description: `Sablé Breton, cheese pâtissier, berries and blackberry sorbet`, price: "" },
      { name: 'LEMON TART', description: `With swiss meringue and vanilla ice cream`, price: "" },
      { name: 'SELECTION OF SORBETS', description: `Choice of three sorbets`, price: "" }
    ]
  },
  cocktails: {
    title: 'Cocktails',
    bg: 'upstairs-cocktails-bg',
    items: [
      { name: 'Plague Water Collins 5.0', description: `Gray Goose infused with lemongrass and Thai butterfly flowers, lime, mint & tonic water. Light and fun.`, price: "" },
      { name: 'Damascus Gate', description: `A delicate aniseed cocktail. Arak, Triple Sec, spiced wine, lemon juice, mint and tamarind. Light, fun and sweet & sour.`, price: "" },
      { name: 'Strawberry Fields', description: `A light and sweet cocktail. White rum, Aperol, St-Germain, winter strawberry syrup, basil and Angostura bitters.`, price: "" },
      { name: "Say Hello to Heaven", description: `Tanqueray Gin, Champagne Laurent-Perrier, basil, black mint and lemon juice. Fresh and sour.`, price: "" },
      { name: "Purple Haze", description: `Bombay Bramble, Lind & Lime gin, Ferent Branca, blueberry and cardamom syrup, lemon and egg whites. Sweet and spicy with a kick.`, price: "" },
      { name: `Sumac Gimlet`, description: `Don Julio Blanco tequila, Amaro Montenegro, Martini Bianco, homemade sumac syrup, lime and orange bitters. Sour-sweet and spicy.`, price: "" },
      { name: `Smokey Maria`, description: `Special ARIA Mix - tomatoes, Mezcal, Patron Silver, tincture of Habanero pepper, lime and celery bitters.`, price: "" },
      { name: `The Goodfellas`, description: `Our version of the Goodfellas. Calvados, St-Germain, JW Black Label, cinnamon-anise honey syrup, lemon Juice and squirt of Laphroaig. Alcoholic sweet & sour, and slightly smoky.`, price: "" },
      { name: `Black Pearl`, description: `One of our classics is back. Zacapa 23, Bulleit bourbon, Cynar, vanilla syrup and chocolate bitters. Alcoholic and sweet cocktail with deep winter flavors.`, price: "" },
      { name: `Citrus Paradise`, description: `Citrusy and spicy cocktail. Boukha Bokobsa, Aperol, Green Chartreuse, red grapefruit, orange bitters and changing citrus syrup. Sweet & sour, citrusy and spicy.`, price: "" },
    ]
  },
  wine: {
    title: 'Wine Cellar',
    bg: 'upstairs-wine-bg',
    items: {
      glass: {
        title: 'By the Glass',
        items: [
          {
            title: "Sparkling",
            items: [
              `Roger d'Anoia, Brut N.V, Penedes, Spain`
            ]
          },
          {
            title: "Red",
            items: [
              `Sela, Tzuba, Judean Hills, Israel 20’`,
              `Pinot Noir, Fournier Pere & Fils, Loire Valley, France 19’`,
              `Cabernet Sauvignon, Château Golan, Golan Heights, Israel 18’`
            ]
          },
          {
            title: "White",
            items: [
              `Gewürztraminer, sela, Judean Hills, Israel 18’`,
              `Rose, sela, Judean Hills , Israel 20'`,
              `Sauvignon Blanc, Fournier Pere & Fils, Loire Valley, France 20'`,
              `Petit Chablis, J.Moreau & Fils, Bourgogne, France ’20`
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
              `Chardonnay, Vino Maipo, Chile 20'`,
              `Soave, Cesari, Veneto, Italy 19'`,
              `Pouilly-Fumé, Fournier Pere & Fils, Loire Valley, France 20`
            ]
          },
          {
            title: "Red",
            items: [
              `Cabernet Sauvignon, vino maipo, chile 20'`,
              `Ripasso Bosan, Cesari, Veneto 17’`
            ]
          }
        ]
      },
      bottle: {
        title: 'By the Bottle',
        items: [
          {
            title: "Sparkling",
            countries: [
              {
                name: "",
                items: [
                  `Roger D'anoia, Brut N.v, Penedes, Spain`,
                  `Freixenet Ice, Penedes, Spain`,
                  `Laurent Perrier, La Cuvee Brut N.V, Champagne, France`,
                  `Laurent Perrier, Demi Sec N.V, Champagne, France`,
                  `Laurent Perrier, Cuvee Brut Rose N.V, Champagne, France`,
                  `Dom Pérignon, Vintage 2006, Champagne, France`,
                  `Dom Pérignon, Rosé Vintage 2004, Champagne, France`,
                  `Pol Roger, Sir Winston Churchill, Vintage 2006, Champagne, France`,
                  `Armand De Brignac, Brut Gold, Champagne, France`,
                  `Armand De Brignac, Rose, Champagne, France`
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
                  `Gewürztraminer, Sela, Judean Hills 18'`,
                  `Chardonnay, Tzuba, Judean Hiils 19'`,
                  `Pinot grigio, lueria, Golan Heights 18'`,
                  `Viognier, Blue C, Covenant, Golan Heights 17'`,
                  `Chardonnay, lueria, Golan Heights 17'`,
                  `Viognier, Tel Shifon single vineyard, Tabor 17'`,
                  `Chardonnay, Clos De Gat, Judean Hills '17`,
                  `Chardonnay, C, castel, Judean Hills 18’`,
                  `Sauvignon Blanc, Chteaua Golan, Golan Heights 19'`,
                ]
              },
              {
                name: "France",
                items: [
                  `Pinot Blanc, Schlumberger, Alsace 16'`,
                  `Sauvignon Blanc, Fournier Pere & Fils, Loire Valley France 20’`,
                  `Petit Chablis, J. Moreau & Fils, Bourgogne 20’`,
                  `Sancerre, Fournier Pere & Fils, Loire Valley 20`,
                  `Pouilly-Fumé, Jeunes Bignes, Henri Bourgeois, Loire Valley 20'`,
                  `Gewürztraminer, Schlumberger, Alsace 18’`,
                  `Chablis, Premier cru, domaine Eugenie carrion, Bourgogne 18`,
                  `Puligny Montrachet, Jean-claude Boisset, Bourgogne 18`,
                  `Chablis, Valmur, Grand Cru, .JMoreau & Fils, Bourgogne 18’`,
                ]
              },
              {
                name: "Italy",
                items: [
                  `Pinot Grigio, Castello Della Rosa, Dolomiti 20'`,
                ]
              },
              {
                name: "New Zealand",
                items: [
                  `Sauvignon Blanc, Matua, Melbourne 19'`
                ]
              },
              {
                name: "Rose",
                items: [
                  `Sela, Judean Hills, Israel 20'`,
                  `AIX, Provence, France 20'`,
                  `Flor De Muga Rosado, Rioja, Spain 20'`,
                  `Rosé, chateau minuty et or, Provence, France 19'`
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
                  `Sela, Tzuba, Judean Hills 20`,
                  `Ra'am, Adama Ii, Tavor 20’`,
                  `Cabernet Sauvignon, Château Golan, Golan Heights '18`,
                  `Ayalon Valley, Clos De Gat, Judean Hills '14`,
                  `Grand vital, lueria, Golan Heights 18'`,
                  `Eliad, Château Golan, Golan Heights '18`,
                  `Cabernet Franc, Margalit, Upper Galilee 16’`,
                  `Syrha, Covenant, Golan Heights 16'`,
                  `Makura, Amphorae '12`,
                  `Enigma, Margalit, Upper Galilee '14`,
                  `Grand Vin, Castel, Judean Hills '16`,
                  `Sycra Syrha, Clos De Gat, Judean Hills 14'`,
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
                  `Remole Frescobaldi, Tuscany 17’`,
                  `Chianti Superiore, Banfi, Tuscany 18’`,
                  `Ripasso Mare, Cesari, Veneto 18’`,
                  `Barbera D’alba, Pio Cesare, Piedmont 18’`,
                  `Chianti Rufina, Nipozzano Riserva, Tsucany 17’`,
                  `Vino Nobile, Boscarelli, Tuscany 17’`,
                  `Brunello Di Montalcino, Castelgiocondo, Frescobaldi Tuscany 15’`,
                  `Il Bosco, Single Vineyard Amarone, Cesari, Bento 12`,
                  `Barbaresco, Pio Cesare, Pidedmont 15’`,
                  `Lamaione, Castelgiocondo, Frescobaldi, Tuscany 14’`
                ]
              },
              {
                name: "Spain",
                items: [
                  `Rioja, Reserva, Muga 17`,
                  `Rioja, seleccion especial reserve, Muga 16'`
                ]
              },
              {
                name: "Argentina",
                items: [
                  `Malbec, Golden Reserve, Trivento 17'`
                ]
              },
              {
                name: "Australia",
                items: [
                  `Cabernet-Shiraz Kununga HIll, Penfolds 18’ `,
                  `Shiraz, Max, Penfolds 18’`
                ]
              },
            ]
          }
        ]
      }
    }
  }
}

export default Menu;
