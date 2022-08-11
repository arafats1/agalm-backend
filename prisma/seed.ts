import { PrismaClient } from "@prisma/client";

//Initialize the prisma client
const prisma = new PrismaClient();

async function main() {


  // Create an item
  const item = await prisma.item.create({
    data: {
      name: "Adidas",
      image: {
        create: {
          image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          // userId: 1,
          // categoryId: 1,
        
        }
      },
      itemSaleTag: "Daily Deals",
      itemType: "product",
      listings: {
        create: {
          itemprice: "0.000221BTC",
          description: "Adidas",
          quantity: 100,
    } 
  },
  category: {
    create: {
      name: "Shoes",
      image: {
        create: {
          image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          // userId: 1,
          // itemId: 1,
           
        }
      }
        
      }
    }
   
    }
  
  })

  const item2 = await prisma.item.create({
    data: {
      name: "DELL XPS 13",
      image: {
        create: {
          image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
          // userId: 1,
          // categoryId: 2,
        }
      },
      itemSaleTag: "Popular item",
      itemType: "product",
      listings: {
        create: {
          itemprice: "0.000234BTC",
          description: "Dell XPS 13 in white, white, red, and black",
          quantity: 19,
    }
  },
      category: {
        create: {
          name: "Computers",
          image: {
            create: {
              image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
              // userId: 1,
              // itemId: 2,
            }
          }
        }
      }
    }
  })

  const item3 = await prisma.item.create({
    data: {
      name: "Apartment",
      image: {
        create: {
          image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
          // userId: 2,
          // categoryId: 3,
        }
      },
      itemSaleTag: "Popular item",
      itemType: "property",
      listings: {
        create: {
          itemprice: "3 BTC",
          description: "Five storeyed house with tenants",
          quantity: 1,
        }  
      },
      category: {
        create: {
          name: "Property",
          image: {
            create: {
              image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
              // userId: 2,
              // itemId: 3,
            }
          }
        }
      }   
    }
    })

  const item4 = await prisma.item.create({
    data: {
      name: "Medical Services",
      image: {
        create: {
          image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
          // userId: 3,
          // categoryId: 4,
        }
      },
      itemSaleTag: "Daily Deals",
      itemType: "service",
      listings: {
        create: {
          itemprice: "0.000024 BTC",
          description: "Instant Medical Services",
          quantity: 24,
        }
      },
      category: {
        create: {
          name: "Services",
          image: {
            create: {
              image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            //   userId: 3,
            //   itemId: 4,
            }
          }
        }
      }
    }
  })

  const user = await prisma.user.create({
    data: {
      firstName: "John",
      lastName: "Doe",
      email : "john@gmail.com",
      password: "password",
      dateOfBirth: "01/01/1990",
      physicalAddress: "123 Fake Street, Fake City, Fake State, Fake Country",
      country : "Uganda",
      city : "Kampala",
      postalCode : "12345",
      image: {
        create: {
          image: ["https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png", "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png", "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"],
          // itemId: 1,
          // categoryId: 1,

          
      }
    },
      merchant: {
        create: {
          shopName: "John's Shop",
          walletAddress: "0x1234567890123456789012345678901234567890",
          currency:{
            create: {
              name: "Bitcoin",
              symbol: "BTC",
          }
        }
      }
    }     
  }
})

  const user2 = await prisma.user.create({
    data: {
      firstName: "Kaguta",
      lastName: "Museveni",
      email : "sevo@gmail.com",
      password: "freedom fighter",
      dateOfBirth: "01/01/1930",
      physicalAddress: "123 Mbarara Street, Mbarara, Uganda",
      country : "Uganda",
      city : "Mbarara",
      postalCode : "12345",
      image: {
        create: {
          image: ["https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png", "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png", "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"],
        }
      },
      merchant: {
        create: {
          shopName: "Kaguta Museveni's Shop",
          walletAddress: "0x1234567890123456789012345678901234567890",
          currency:{
            create: {
              name: "Bitcoin",
              symbol: "BTC",
            }
          }
        }
      }
    }
  })



}
  // execute the main function
main()
.catch((e) => {
  console.error(e);
  process.exit(1);
})
.finally(async () => {
  // close Prisma Client at the end
  await prisma.$disconnect();

});