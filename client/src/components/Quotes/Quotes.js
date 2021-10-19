import React from 'react';
import { QuoteItem } from './QuoteItem';

export const Quotes = () => {
    const state = [
        {
            author:"Albert Camus",
            quote:"And in the depth of the winter I found out that there lay an invincible summer within me",
            date:"Tue Oct 19 2021 15:12:20 GMT+0530 (India Standard Time)"
        },
         {
            author: "Albert Camus",
            quote: "And in the depth of the winter I found out that there lay an invincible summer within me",
            date: "Tue Oct 29 2021 15:12:20 GMT+0530 (India Standard Time)"
        },
         {
            author: "Albert Camus",
            quote: "And in the depth of the winter I found out that there lay an invincible summer within me",
            date: "Tue Oct 12 2021 15:12:20 GMT+0530 (India Standard Time)"
        }
    ]
    return (
        <div>
            {state && state.map(item => <QuoteItem data={item} />) }
        </div>
    )
}
