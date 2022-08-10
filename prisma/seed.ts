import { PrismaClient } from "@prisma/client";

//Initialize the prisma client
const prisma = new PrismaClient();

async function main() {


  // Create an item
  const item = await prisma.item.create({
    data: {
      name: "Adidas",
      image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
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
      image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
    }
  } 
    }
  })

  const item2 = await prisma.item.create({
    data: {
      name: "DELL XPS 13",
      image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
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
          image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        }
      }
    }
  })

  const item3 = await prisma.item.create({
    data: {
      name: "Apartment",
      image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
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
          image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        }
      }   
    }
    })

  const item4 = await prisma.item.create({
    data: {
      name: "Medical Services",
      image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
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
          image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
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