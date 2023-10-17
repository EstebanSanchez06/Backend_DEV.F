/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {
      product_name: "Energy Drink Red Bull",
      product_price: 6.21,
      product_SKU: 91239,
      product_quantity: 282
    }, {
      product_name: "Tea - Darjeeling, Azzura",
      product_price: 3.66,
      product_SKU: 61459,
      product_quantity: 142
    }, {
      product_name: "Nut - Pumpkin Seeds",
      product_price: 3.61,
      product_SKU: 57407,
      product_quantity: 213
    }, {
      product_name: "Bread - Burger",
      product_price: 11.41,
      product_SKU: 65067,
      product_quantity: 105
    }, {
      product_name: "Anchovy Fillets",
      product_price: 4.41,
      product_SKU: 82489,
      product_quantity: 266
    }, {
      product_name: "Pork - Tenderloin, Frozen",
      product_price: 8.41,
      product_SKU: 42962,
      product_quantity: 152
    }, {
      product_name: "Lettuce - Boston Bib - Organic",
      product_price: 4.51,
      product_SKU: 51326,
      product_quantity: 261
    }, {
      product_name: "Cheese - Gouda Smoked",
      product_price: 3.49,
      product_SKU: 66724,
      product_quantity: 290
    }, {
      product_name: "Pork - Ham Hocks - Smoked",
      product_price: 5.9,
      product_SKU: 95987,
      product_quantity: 214
    }, {
      product_name: "Soup - Campbells Beef Noodle",
      product_price: 10.13,
      product_SKU: 93548,
      product_quantity: 126
    }, {
      product_name: "Greens Mustard",
      product_price: 5.05,
      product_SKU: 87280,
      product_quantity: 222
    }, {
      product_name: "Lambcasing",
      product_price: 7.37,
      product_SKU: 10186,
      product_quantity: 162
    }, {
      product_name: "Munchies Honey Sweet Trail Mix",
      product_price: 1.72,
      product_SKU: 80455,
      product_quantity: 66
    }, {
      product_name: "Rum - Mount Gay Eclipes",
      product_price: 4.57,
      product_SKU: 60716,
      product_quantity: 65
    }, {
      product_name: "Chinese Lemon Pork",
      product_price: 9.97,
      product_SKU: 28914,
      product_quantity: 88
    }, {
      product_name: "Almonds Ground Blanched",
      product_price: 6.7,
      product_SKU: 84490,
      product_quantity: 116
    }, {
      product_name: "Pasta - Canelloni, Single Serve",
      product_price: 9.06,
      product_SKU: 94657,
      product_quantity: 111
    }, {
      product_name: "V8 Pet",
      product_price: 10.05,
      product_SKU: 62288,
      product_quantity: 113
    }, {
      product_name: "Scallops - U - 10",
      product_price: 8.7,
      product_SKU: 81403,
      product_quantity: 201
    }, {
      product_name: "Mushroom - Chanterelle Frozen",
      product_price: 2.52,
      product_SKU: 88069,
      product_quantity: 255
    }, {
      product_name: "Ecolab - Hobart Washarm End Cap",
      product_price: 5.39,
      product_SKU: 33687,
      product_quantity: 195
    }, {
      product_name: "Lemon Grass",
      product_price: 6.47,
      product_SKU: 36097,
      product_quantity: 168
    }, {
      product_name: "Beef - Short Ribs",
      product_price: 8.99,
      product_SKU: 58444,
      product_quantity: 193
    }, {
      product_name: "Tea - Camomele",
      product_price: 2.77,
      product_SKU: 61882,
      product_quantity: 281
    }, {
      product_name: "Pie Filling - Cherry",
      product_price: 10.24,
      product_SKU: 33695,
      product_quantity: 204
    }, {
      product_name: "Chocolate Bar - Reese Pieces",
      product_price: 1.27,
      product_SKU: 29862,
      product_quantity: 65
    }, {
      product_name: "Calvados - Boulard",
      product_price: 10.89,
      product_SKU: 90326,
      product_quantity: 59
    }, {
      product_name: "Wine - Red, Metus Rose",
      product_price: 3.75,
      product_SKU: 37575,
      product_quantity: 259
    }, {
      product_name: "Olive - Spread Tapenade",
      product_price: 6.55,
      product_SKU: 21504,
      product_quantity: 86
    }, {
      product_name: "Nori Sea Weed - Gold Label",
      product_price: 6.58,
      product_SKU: 73247,
      product_quantity: 144
    }, {
      product_name: "Wiberg Super Cure",
      product_price: 6.43,
      product_SKU: 63917,
      product_quantity: 119
    }, {
      product_name: "Pork - Tenderloin, Frozen",
      product_price: 1.95,
      product_SKU: 23601,
      product_quantity: 227
    }, {
      product_name: "Beer - Labatt Blue",
      product_price: 1.38,
      product_SKU: 25263,
      product_quantity: 164
    }, {
      product_name: "Cheese - Gorgonzola",
      product_price: 1.27,
      product_SKU: 55341,
      product_quantity: 74
    }, {
      product_name: "Seedlings - Clamshell",
      product_price: 1.38,
      product_SKU: 57293,
      product_quantity: 214
    }, {
      product_name: "Mustard - Dijon",
      product_price: 7.32,
      product_SKU: 66204,
      product_quantity: 222
    }, {
      product_name: "Baking Powder",
      product_price: 6.56,
      product_SKU: 71576,
      product_quantity: 68
    }, {
      product_name: "Beans - French",
      product_price: 3.67,
      product_SKU: 17704,
      product_quantity: 227
    }, {
      product_name: "Bread - Raisin Walnut Pull",
      product_price: 6.41,
      product_SKU: 79213,
      product_quantity: 228
    }, {
      product_name: "Longan",
      product_price: 2.92,
      product_SKU: 71537,
      product_quantity: 84
    }, {
      product_name: "Relish",
      product_price: 4.84,
      product_SKU: 37092,
      product_quantity: 96
    }, {
      product_name: "Table Cloth 62x114 Colour",
      product_price: 9.49,
      product_SKU: 86623,
      product_quantity: 210
    }, {
      product_name: "Appetizer - Southwestern",
      product_price: 6.38,
      product_SKU: 26823,
      product_quantity: 173
    }, {
      product_name: "Ice Cream - Fudge Bars",
      product_price: 2.09,
      product_SKU: 60281,
      product_quantity: 167
    }, {
      product_name: "Oneshot Automatic Soap System",
      product_price: 1.47,
      product_SKU: 12758,
      product_quantity: 152
    }, {
      product_name: "Olives - Morracan Dired",
      product_price: 8.03,
      product_SKU: 45042,
      product_quantity: 283
    }, {
      product_name: "Madeira",
      product_price: 7.01,
      product_SKU: 46002,
      product_quantity: 114
    }, {
      product_name: "Cheese - Swiss",
      product_price: 7.42,
      product_SKU: 57425,
      product_quantity: 98
    }, {
      product_name: "Water - Spring 1.5lit",
      product_price: 4.04,
      product_SKU: 87715,
      product_quantity: 86
    }, {
      product_name: "Water - Aquafina Vitamin",
      product_price: 1.53,
      product_SKU: 28849,
      product_quantity: 296
    }, {
      product_name: "Cheese - Ricotta",
      product_price: 5.6,
      product_SKU: 92532,
      product_quantity: 88
    }, {
      product_name: "Cleaner - Pine Sol",
      product_price: 7.86,
      product_SKU: 61743,
      product_quantity: 149
    }, {
      product_name: "Veal - Shank, Pieces",
      product_price: 3.85,
      product_SKU: 25910,
      product_quantity: 160
    }, {
      product_name: "Sherry - Dry",
      product_price: 6.7,
      product_SKU: 70306,
      product_quantity: 214
    }, {
      product_name: "Wine - George Duboeuf Rose",
      product_price: 5.75,
      product_SKU: 35718,
      product_quantity: 294
    }, {
      product_name: "Cleaner - Comet",
      product_price: 9.26,
      product_SKU: 88767,
      product_quantity: 190
    }, {
      product_name: "Barramundi",
      product_price: 11.61,
      product_SKU: 32929,
      product_quantity: 175
    }, {
      product_name: "Aspic - Light",
      product_price: 5.31,
      product_SKU: 34074,
      product_quantity: 284
    }, {
      product_name: "Fenngreek Seed",
      product_price: 6.5,
      product_SKU: 62095,
      product_quantity: 211
    }, {
      product_name: "Cheese - Swiss",
      product_price: 3.03,
      product_SKU: 13788,
      product_quantity: 95
    }, {
      product_name: "Rabbit - Saddles",
      product_price: 7.5,
      product_SKU: 62992,
      product_quantity: 194
    }, {
      product_name: "Seedlings - Mix, Organic",
      product_price: 11.13,
      product_SKU: 94169,
      product_quantity: 114
    }, {
      product_name: "Ham Black Forest",
      product_price: 2.13,
      product_SKU: 22629,
      product_quantity: 262
    }, {
      product_name: "Bread Foccacia Whole",
      product_price: 5.45,
      product_SKU: 86963,
      product_quantity: 80
    }, {
      product_name: "Crush - Grape, 355 Ml",
      product_price: 3.23,
      product_SKU: 60188,
      product_quantity: 238
    }, {
      product_name: "Beer - Tetleys",
      product_price: 5.29,
      product_SKU: 51861,
      product_quantity: 287
    }, {
      product_name: "Silicone Paper 16.5x24",
      product_price: 11.45,
      product_SKU: 69810,
      product_quantity: 81
    }, {
      product_name: "Lamb - Ground",
      product_price: 6.04,
      product_SKU: 67340,
      product_quantity: 60
    }, {
      product_name: "Squash - Pattypan, Yellow",
      product_price: 5.12,
      product_SKU: 40488,
      product_quantity: 149
    }, {
      product_name: "Truffle Shells - Semi - Sweet",
      product_price: 7.22,
      product_SKU: 68525,
      product_quantity: 279
    }, {
      product_name: "Salt - Sea",
      product_price: 10.53,
      product_SKU: 53039,
      product_quantity: 130
    }, {
      product_name: "Syrup - Monin, Swiss Choclate",
      product_price: 2.06,
      product_SKU: 98440,
      product_quantity: 221
    }, {
      product_name: "Bag Stand",
      product_price: 10.73,
      product_SKU: 40275,
      product_quantity: 122
    }, {
      product_name: "Wine - Riesling Dr. Pauly",
      product_price: 10.34,
      product_SKU: 55809,
      product_quantity: 60
    }, {
      product_name: "Beef - Texas Style Burger",
      product_price: 6.29,
      product_SKU: 17666,
      product_quantity: 84
    }, {
      product_name: "Shrimp - Black Tiger 26/30",
      product_price: 5.42,
      product_SKU: 92434,
      product_quantity: 51
    }, {
      product_name: "Passion Fruit",
      product_price: 5.49,
      product_SKU: 93542,
      product_quantity: 273
    }, {
      product_name: "Soup - Campbells Mushroom",
      product_price: 1.86,
      product_SKU: 10258,
      product_quantity: 220
    }, {
      product_name: "Cake - Cheese Cake 9 Inch",
      product_price: 3.69,
      product_SKU: 43412,
      product_quantity: 127
    }, {
      product_name: "Squid - Breaded",
      product_price: 11.21,
      product_SKU: 83250,
      product_quantity: 226
    }, {
      product_name: "Yoghurt Tubes",
      product_price: 6.18,
      product_SKU: 61744,
      product_quantity: 90
    }, {
      product_name: "Garlic",
      product_price: 11.48,
      product_SKU: 25006,
      product_quantity: 273
    }, {
      product_name: "Chips - Assorted",
      product_price: 4.54,
      product_SKU: 99320,
      product_quantity: 57
    }, {
      product_name: "Rice - Basmati",
      product_price: 1.74,
      product_SKU: 86994,
      product_quantity: 248
    }, {
      product_name: "Ostrich - Fan Fillet",
      product_price: 11.85,
      product_SKU: 13553,
      product_quantity: 171
    }, {
      product_name: "Oil - Peanut",
      product_price: 9.81,
      product_SKU: 25838,
      product_quantity: 69
    }, {
      product_name: "Beef - Top Butt",
      product_price: 4.91,
      product_SKU: 46260,
      product_quantity: 177
    }, {
      product_name: "Pork - Shoulder",
      product_price: 11.56,
      product_SKU: 46925,
      product_quantity: 261
    }, {
      product_name: "Vinegar - Rice",
      product_price: 9.04,
      product_SKU: 19458,
      product_quantity: 107
    }, {
      product_name: "Wine - Chablis J Moreau Et Fils",
      product_price: 10.13,
      product_SKU: 81531,
      product_quantity: 154
    }, {
      product_name: "Potatoes - Fingerling 4 Oz",
      product_price: 4.64,
      product_SKU: 58909,
      product_quantity: 224
    }, {
      product_name: "Okra",
      product_price: 4.98,
      product_SKU: 19351,
      product_quantity: 87
    }, {
      product_name: "Lettuce - Red Leaf",
      product_price: 10.99,
      product_SKU: 52151,
      product_quantity: 83
    }, {
      product_name: "Wine - Jackson Triggs Okonagan",
      product_price: 2.48,
      product_SKU: 70402,
      product_quantity: 146
    }, {
      product_name: "Syrup - Monin, Swiss Choclate",
      product_price: 5.45,
      product_SKU: 19927,
      product_quantity: 213
    }, {
      product_name: "Momiji Oroshi Chili Sauce",
      product_price: 6.53,
      product_SKU: 72140,
      product_quantity: 109
    }, {
      product_name: "Soup Campbells - Tomato Bisque",
      product_price: 11.9,
      product_SKU: 80226,
      product_quantity: 91
    }, {
      product_name: "Beans - Black Bean, Dry",
      product_price: 9.34,
      product_SKU: 33584,
      product_quantity: 112
    }, {
      product_name: "Nacho Chips",
      product_price: 11.34,
      product_SKU: 95225,
      product_quantity: 192
    }, {
      product_name: "Cake Slab",
      product_price: 5.67,
      product_SKU: 65049,
      product_quantity: 248
    }
  ]);
};
