const Menu = {
  entrees: {
    title: 'Entrees',
    bg: 'upstairs-entrees-bg',
    items: [
      { name: "EXTRA THIN SLICED FISH", description: "Slices of raw fish with lemon juice and garlic confit, tomato seeds, pine nuts, za'atar and sesame seeds, sour Labane and olive oil", price: "" },
      { name: "SLICES OF SEA FISH", description: "Za'atar soup and summer tomatoes with Kalamata olive salsa in cherry vinegar, served with grated dried yogurt", price: "" },
      { name: "MEDITERRANEAN FISH", description: "Raw fish with crushed tomatoes, garlic confit & Kalamata olive vinaigrette, fermented green chili & grated Persian lemon", price: "" },
      { name: "SCALLOP", description: "Scallop seared in a pan served up on white almond cream and blue crab bisque", price: "" },
      { name: "CALAMARI SALAD", description: "Calamari grilled on an iron pan, with aromatic leaves, hyssop oil, cold labane soup, mint, hot green pepper and white almond tuile", price: "" },
      { name: "CHARCOAL SEARED OCTOPUS", description: "With kuku sabzi mouse, potato puffs, curcumin and spring onion oil", price: "" },
      { name: "FISH BRUSCHETTA", description: "2 hand-made bruschetta from white and black sesame, with sweet peppers' salsa and coriander seeds, olive oil and lemon juice over a crispy-skinned baby-fish fillet.", price: "" },
      { name: "PERSIAN KPFTE", description: "Baby lettuce stuffed with burgul and Ras-el-hanout, pomegranate concentrate and a mixture of herbs, peppers and yogurt", price: "" },
      { name: "FATTOUSH SALAD", description: "Maggie tomatoes, pecos, purple onion, arugula, Egyptian dukkah and sumac, olive oil with Hameiri cheese and crunchy Jerusalem pretzel", price: "" },
      { name: "CRISPY LEAF SALAD", description: `Baby Arab lettuce, seasonal fruit, aromatic leaves, sour pomegranate vinaigrette and grated yogurt stone`, price: "" },
      { name: "ZUCCHINI ON CHARCOAL", description: "Baby zucchini served on goat labane, grape honey, dried mint and lemon juice", price: "" },
      { name: "SALTY CHEESE DUMPLINGS", description: `Cooked dumpling stuffed with zucchini and Hameiri cheese with warm sheep yogurt`, price: "" },
      { name: "NONI TOKI", description: `Caraway and cumin seeds tartlet, stuffed with chopped short ribs dressed in white and green onions, dried mint, egg yolk vinaigrette and green oil`, price: "" },
      { name: "TURKISH PASTRAMA", description: `Weissbraten in a spice blend with almonds and herbs, horseradish & lemon aioli and Persian pistachio`, price: "" },
      { name: "LAMB CHEBUREKI", description: `Choux pastry stuffed with beef, coriander and caraway, deep fried with a small aromatic green salad`, price: "" },
      { name: "BREAD BASKET", description: `jerusalem pretzels, rye bread, arisa spice, za'atar and olive oil`, price: "" }
    ]
  },
  deserts: {
    title: 'Desserts',
    bg: 'upstairs-desserts-bg',
    items: [
      { name: 'MILLEFEUILLE', description: "Layers of caramelized puff pastry, diplomat cream, vanilla and salty caramel", price: "" },
      { name: `OPEN MA'AMOUL`, description: `Ultra-soft dough with layers of date cream, sweet, sugared lemon cream and roasted, salty walnuts ice-cream`, price: "" },
      { name: "HAZELNUT BRÛLÉE", description: `Crème brûlée with chocolate and sugared hazelnut cream and cocoa tuile`, price: "" },
      { name: 'CHEESE TORTE', description: `Sablé Breton, cheese pâtissier, fresh berries and blackberry sorbet`, price: "" },
      { name: 'LEMON', description: `A whole lemon stuffed with lemon cream, meringue, vanilla diplomat and vanilla ice cream, on an airy sablé Breton disk`, price: "" },
      { name: 'SORBETS', description: `A selection of three sorbet flavors`, price: "" }
    ]
  },
  cocktails: {
    title: 'Cocktails',
    bg: 'upstairs-cocktails-bg',
    items: [
      { name: 'TUNISIAN SPRITZ', description: `A light and summery cocktail. Boukha Bukobsa infused with Uzbek apricot, bitter, Amaro Montenegro and sparkling wine. Sweetish with gentle bitterness.`, price: "" },
      { name: 'FARID AL-ATRASH', description: `Gin infuced with zawatar leaves, yellow chartreuse, lillet blanc, israeli absinthe, lime juice, mint, cucumber and orange blossom water. Sour and spicy.`, price: "" },
      { name: 'PLAGUE WATER', description: `Gray Goose infused with lemongrass and louise, lime, mint and tonic. Light and fun`, price: "" },
      { name: 'SHCHEM GATE', description: `A refined aniseed cocktail. Arak, Triple Sq. spicy wine, lemon juice, mint and tamarind. Light, fun sweet and sour.`, price: "" },
      { name: "STRAWBERRY BLOSSOM", description: `White rum, apricot, St. Germain, homemade strawberry syrup, basil and Peyghaud's bitter, A light cocktail with bitterness and fun sweetness.`, price: "" }
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
        items: [
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
