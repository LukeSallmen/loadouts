module.exports = {
    data: [
        {
            title: 'Users',
            luke: {
                lists: [
                { name: 'first list', 
                id: 0, 
                elements:  [
                { item: 'No Escape', brand: 'Mystery Ranch', capacity: 25, type: 'bag'},
                { item: 'Two Day Assault Pack', brand: 'Mystery Ranch', capacity: 27, type: 'bag'},
                { item: 'Slim Dungarees', brand: 'Outlier', article: 25, type: 'clothing'},
                { item: 'Diversion', brand: 'Western Rise', article: 25, type: 'clothing'},
                { item: 'Handy Little Thing 2', brand: 'Tom Bihn', type: 'pouch'},
                { item: 'Article 092', brand: 'Dan Matsuda', type: 'pouch'},
                { item: 'Travel Pouch', brand: 'Peak Design', type: 'pouch' },
                { item: 'Medium Bifold Leather', brand: 'Saddleback Leather', type: 'wallet'},
                { item: 'Niks Minimalist Wallet', brand: 'Tom Bihn', type: 'wallet' },
            ]
            },
                { name: 'second list', id: 1, elements:  [1, 2, 3]},
                { name: 'third list', id: 2, elements:  [1, 2, 3]},
                { name: 'fourth list', id: 3, elements:  [1, 2, 3]},
                { name: 'fifth list', id: 4, elements:  [1, 2, 3]},
            ],
        },
    },
        {
            title: 'Gear',
            bags: [
        { item:'No Escape', brand: 'Mystery Ranch', capacity: 25, type: 'bag', weight: 4.1, material: ['leather', 'dyneema']},
          { item:'Two Day Assault Pack', brand: 'Mystery Ranch', capacity: 27, type: 'bag', weight: 3.0, material: ['leather', 'dyneema']},
          { item:'Prizefighter', brand: 'Mystery Ranch', capacity: 21, type: 'bag', weight: 2.1, material: ['leather', 'dyneema']},
          { item:"Urban Assault 24", brand: 'Mystery Ranch', capacity: 24, type: 'bag', weight: 2.6, material: ['leather', 'dyneema']},
          { item:'GR1', brand: 'GORUCK', capacity: 26, type: 'bag', weight: 3.2, material: ['leather', 'dyneema']},
          { item:'GR3', brand: 'GORUCK', capacity: 45, type: 'bag', weight: 5.15, material: ['leather', 'dyneema']},
          { item:'Main Campus', brand: 'Jansport', capacity: 32, type: 'bag', weight: 1.1, material: ['leather', 'dyneema']},
          { item:'GR4', brand: 'GORUCK', capacity: 44, type: 'bag', weight: 10.1, material: ['leather', 'dyneema']},
        ],
            clothing: [
                { item: 'Slim Dungarees', brand: 'Outlier', article: 25, type: 'clothing'},
                { item: 'Diversion', brand: 'Western Rise', article: 25, type: 'clothing'},
                { item: 'StrongDarts', brand: 'Outlier', article: 25, type: 'clothing'},
                { item: 'The Standard Crew', brand: 'Darn Tough', article: 25, type: 'clothing'},
                { item: 'Give N Go', brand: 'ExOfficio', article: 25, type: 'rawr'},
              ],
            pouches: [
                { item: 'Handy Little Thing 2', brand: 'Tom Bihn', type: 'pouch'},
                { item: 'Article 092', brand: 'Dan Matsuda', type: 'pouch'},
                { item: 'Travel Pouch', brand: 'Peak Design', type: 'pouch' },
                { item: "Ultralight Zip Organizer", brand: 'Osprey', type: 'pouch' },
                { item: 'Civic Access Pouch 2L', brand: 'Evergoods', type: 'pouch' },
              ],
            wallets: [
                { item: 'Medium Bifold Leather', brand: 'Saddleback Leather', type: 'wallet'},
                { item: 'Niks Minimalist Wallet', brand: 'Tom Bihn', type: 'wallet' },
                { item: 'Apex Slim Sleeve', brand: 'Bellroy', type: 'wallet'},
                { item: 'Minimal BiFold', brand: 'Tanner Goods', type: 'wallet'},
                { item: 'Flux Cardholder', brand: 'Wayfinder', type: 'wallet'},
              ],
            

        }
    ],
    // change title of group at the given index
    // NOTE, if index can change, then should use a unique ID instead
    setTitle (index, newTitle) {
        functions.logger.info(`Setting title from ${this.data[index].title} to ${newTitle}`);
        this.data[index].title = newTitle;
    },
    // add new link to group at the given index
    // NOTE, if index can change, then should use a unique ID instead
    addLink (index, newLink) {
        functions.logger.info(`Adding new link ${newLink.name} to group ${this.data[index].title}`);
        this.data[index].links.push(newLink);
    }
};
