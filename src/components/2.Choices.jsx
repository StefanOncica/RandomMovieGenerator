import React from 'react'
import { useEffect, useState } from 'react'

export default function Choices(choices) {
    
    return (
        <div className="choices">
            <p>Year: {choices.choices.year}</p>
        </div>
    )
}
