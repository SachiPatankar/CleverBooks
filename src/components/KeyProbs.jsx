import React from 'react'
import Card from './Card'

const KeyProbs = () => {
  return (
    <div>
      <div className='items-center justify-center font-extrabold text-center mb-8 mt-16 p-8 text-4xl'> Four key questions answered by Crest</div>

    <div className='flex flex-wrap m-16 items-center justify-center gap-8'>
      <Card src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f63ee54595853ca5e31682_what%20to%20orderr%20(1).svg"
            alt = "What to order"
            heading = "What to order"
            description= "Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle."
      
      ></Card>

<Card src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0d2fab2e360025df922a_when%20to%20orderr.svg"
            alt = "When to order"
            heading = "When to order"
            description= "Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing."
      
      ></Card>

<Card src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0cc629ab7f2d8cb0a8bd_how%20much%20to%20stock.svg"
            alt = "How much to stock"
            heading = "How much to stockr"
            description= "Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes."
      
      ></Card>

<Card src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0c2c27cde81ffea6515b_where%20to%20placee.svg"
            alt = "Where to place"
            heading = "Where to place"
            description= "Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities."
      
      ></Card>
    </div>
    </div>
  )
}

export default KeyProbs