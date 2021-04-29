import React from 'react'

export const EvidenceCard = ({evidenceData}) => {

    const evidence = evidenceData;
    console.log(evidence.article);

    return (
        <tr>
            <td>{evidence.article}</td>
            <td>{evidence.author}</td>
            <td>{evidence.title}</td>
            <td>{evidence.claimStrength}</td>
        </tr>
    )
}
