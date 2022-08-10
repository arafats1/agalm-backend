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
          name : "adidas shoes",
          image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        
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
          name : "shoes",
          image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
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
          name : "DELL XPS 13",
          image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
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
              name : "computers",
              image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
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
          name : "Apartment",
          image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
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
              name : "property",
              image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
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
          name : "Medical Services",
          image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
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
              name : "services",
              image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
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
      Image: {
        create: {
          name: "John Doe Image",
          image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
      }
    },
      merchant: {
        create: {
          shopName: "John's Shop",
          walletAddress: "0x1234567890123456789012345678901234567890",
          currency:{
            create: {
              name: ["Bitcoin", "Ethereum", "USD Tether"],
              symbol: ["BTC", "ETH", "USDT"],
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