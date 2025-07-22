import React from 'react';

export default function InfoCard({title, children}){
    

    
    return (
        <div className="max-w-5xl mx-auto mt-12 p-15  bg-white/90 rounded-2xl shadow-lg backdrop-blur-sm">
            <h2 className="text-4xl font-semibold mb-3 text-center">Welcome!</h2>
            <p>
             Your text goes here. Add any headings, lists, or links as you would in normal
             markup — the container will keep the white, rounded look.
            </p>    
        </div>
    )



}