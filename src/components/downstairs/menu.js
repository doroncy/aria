const Menu = {
  entrees: {
    title: 'Entrees',
    bg: 'downstairs-entrees-bg',
    items: [
      {name: "ENDIVE SALAD", description: "Salad of purple and white endives, shallots and arugula, with cherry vinaigrette, roast almonds and gorgonzola cheese", price: "48"},
      {name: 'RISOTTO CARBONARA', description: "Thinly chopped prosciutto, with shallots, white wine, butter, raw yolk and parmesan", price: "65"},
      {name: "BUTCHER'S SALAD", description: "Pan seared Onglet steak with dry sherry vinaigrette, Cashews and aromatic leaves", price: "55"},
      {name: "BEEF CARPACCIO", description: "Thinly sliced ramp steak with reduced port wine sauce, arugula, parmesan and lime peel", price: "65"},
      {name: "VEAL SWEETBREADS", description: "Sweetbreads on chestnut and white leek cream, with grated parmesan and reduced port wine sauce", price: "72"},
      {name: "FOIE GRAS", description: "Ravioli with Foie Gras and glazed rum in homemade Rosetta and Persian raisins", price: "65"},
      {name: "OYSTER", description: "Gillardeau oysters from La Rochelle, France", price: "32 per Unit"},
      {name: "LAMB BRIK", description: "Filo cigars, filled with lamb meat and Ras-el-hanout", price: "58"},
      {name: "FISH AND CHIPS", description: "", price: "72"}

    ],
    veganItems: [
      {name: "LIMA BEAN SOUP", description: "Stewed butter beans with Egyptian onion and black truffles Vegetarian / Vegan without brioche croutons and parmesan", price: "48"},
      {name: "MEXICAN CEVICHE", description: "Salsa of avocado, tomatoes, chopped cilantro, lime juice and yucca chips . Vegetarian / Vegan", price: "42"},
      {name: "CRISPY POTATO TATAKI", description: "Single-sided seared potato with tamarind and lemon-grass vinaigrette, served with caramelized cashews on top . Vegetarian / Vegan", price: "42"},
      {name: 'ENDIVE SALAD', description: 'Salad of purple and white endives, shallots and arugula, with cherry vinaigrette, roast almonds and gorgonzola cheese. Vegetarian / Vegan without Gorgonzola', price: '48'},
    ]
  },
  main: {
    title: 'main',
    bg: 'downstairs-main-bg',
    items: [
      {name: "SEA MEAGRE", description: "Fillet in white soy butter, striped tomatoes, lemony thyme and bok choy", price: "128"},
      {name: 'SEA BASS', description: 'Oven-baked in a warm vinaigrette of white miso and aromatic leaves', price: "122"},
      {name: 'JUMBO SHRIMPS', description: 'Egg yolk pappardelle with jumbo crystal shrimp in its own gravy', price: "125"},
      {name: "PORCINI", description: "Ravioli filled with cream of Porcini mushrooms, white sweet Potato", price: "88"},
      {name: 'OXTAIL', description: 'Pasta with oxtail, simmered for four hours in red wine and root vegetables', price: "98"},
      {name: 'LAMB T-BONE', description: 'Three pieces of lamb rack with the bones, pan-seared, with truffles puree and lamb stock', price: "145"},
      {name: 'LAMB CHOPS', description: "'Nazareth' Lamb chops on a cream of Bukharan carrots and lamb stock", price: "155"},
      {name: 'HANGER STEAK', description: "Pan-seared, with Jerusalem artichoke cream and burnt leek, in mustard marrow sauce", price: "115"},
      {name: 'CALF LIVER', description: "Calf liver steak, seared in clarified butter, served with polenta tortellini and root vegetables", price: "98"},
      {name: 'SIRLOIN STEAK', description: "220 grams sirloin steak with ratte puree and bordelaise sauce", price: "138"},
      {name: "BEEF FILLET", description: "Pan-seared with reduced Port, colorful carrots and French mustard", price: "158"}
    ],
    veganItems: [
      {name: 'ROOTS RAGÙ', description: 'Stewed celeriac, carrot, parsley, and kohlrabi winter roots in vegetable broth with red wine and vegan fettuccine Vegetarian / Vegan', price: "68"},
      {name: 'PORCINI', description: 'Ravioli filled with cream of Porcini mushrooms, white sweet Potato and Parmigiano Reggiano', price: "88"},
    ]
  },
  deserts: {
    title: 'Desserts',
    bg: 'downstairs-desserts-bg',
    items: [
      {name: 'NEMESIS', description: "Moist Chocolate cake, oat meal crumble, milk chocolate ganache, marshmallow fluff and vanilla ice cream", price: "48"},
      {name: "VALRHONA CHOCOLATE MOUSSE", description: "Airy Chocolate Mousse with Hennessy, Paillet'e crunch and Dolc'e ganache", price:"45"},
      {name: "CARMELIA", description: "Cocoa Crumble, Chocolate Ganache, whipped Caramel, toffe and Caramel ice cream", price: "48"},
      {name: 'HAZELNUT BRULE', description: "Saltey Hazelnuts, Mascarpone ice cream", price: "45"},
      {name: 'ZOPETA NAPOLITANA', description: "Layers of puff pastry with Mascarpone Mousse and Lemon Zest, Amaretto and Amarena cherries", price: "45"},
      {name: 'CANOLI', description: "Lemon Canoli with Strawberry Coulis and Mascarpone ice cream", price: "45"},
      {name: 'SELECTION OF SORBETS', description: "Choice of three Sorbets", price: "38"},
    ]
  },
  cocktails: {
    title: 'Cocktails',
    bg: 'downstairs-cocktails-bg',
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
    bg: 'downstairs-alcohol-bg',
    items: [
      {name: 'LIMA BEAN SOUP', description: "Stewed butter beans with Egyptian onion and black truffles"},
      {name: "SASHIMI", description: "Sashimi of raw fish, served with a vinaigrette of orange, sesame oil and red chili"},
      {name: 'SALMON TATAKI', description: "Seared on one side, laid in a vinaigrette of tamarind and lemongrass and sprinkled with carmelized cashew nuts"},
      {name: 'ENDIVE SALAD', description: "Salad of purple and white endives, shallots and arugula, with cherry vinaigrette, roast almonds and gorgonzola cheese"},
      {name: 'COQUILLES SAINT JACQUES', description: "Coquilles Saint Jacques on white almond cream and Blue-crab bisque"},
      {name: "MEXICAN CEVICHE", description: "Chopped sea fish, seasoned with salsa of avocado, tomatoes, chopped cilantro, lime juice and yucca chips"},
      {name: "FOIE GRAS", description: "Ravioli with Foie Gras and glazed rum in homemade Rosetta and Persian raisins"},
      {name: "PORCINI RAVIOLI", description: "on semi-sweet cream of corn"},
      {name: "HANGER STEAK", description: "Served with Jerusalem artichoke cream and burnt leek, in red wine sauce"},
      {name: "MEAGRE FILLET", description: "In light soy butter, tiger stripe tomatoes, lemon thyme and bok choy"}
    ]
  },
  wine: {
    title: 'Wine Cellar',
    bg: 'downstairs-wine-bg'
  }
}

export default Menu;
