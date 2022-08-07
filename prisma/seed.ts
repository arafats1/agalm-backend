import { PrismaClient } from "@prisma/client";

//Initialize the prisma client
const prisma = new PrismaClient();

async function main() {


  // Create an item
  const item = await prisma.item.create({
    data: {
      name: "Macbook Pro",
      image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
      itemSaleTag: "Daily Deals",
      listings: {
        create: {
          itemprice: "0.0003BTC",
          description: "Macbook Pro 2020 with 16GB RAM and 1TB SSD",
          quantity: 10,
    } 
  }
    }
  })

  const item2 = await prisma.item.create({
    data: {
      name: "iphone X",
      image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
      itemSaleTag: "Popular item",
      listings: {
        create: {
          itemprice: "0.00012BTC",
          description: "iphone X with 64GB RAM and 256GB SSD",
          quantity: 10,
    }
  }

    }
  })

  const item3 = await prisma.item.create({
    data: {
      name: "land",
      image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
      itemSaleTag: "Popular item",
      listings: {
        create: {
          itemprice: "1 BTC",
          description: "Secure land with water access",
          quantity: 2,
        }
       
      }
      
    }

    })

    //Create category
    const category = await prisma.category.create({
      data: {
        name: "Electronics",
        image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
        description: "Fridges, TVs, and more",
      }

    })

    const category2 = await prisma.category.create({
      data: {
        name: "Land, Houses, Buildings",
        image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
        description: "Land, Houses, Buildings",
        
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