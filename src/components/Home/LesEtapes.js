import React from 'react'

export default function LesEtapes() {
  return (
    <section className="section-etape">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Les étapes de la norme RT2012</h2>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <div className="etape">
                        <h3>1. Calcul thermique réglementaire</h3>
                        <p>Réalisé par un bureau d’études thermiques indépendant, ce dernier réalise l'étude thermique réglementaire nécessaire au dépôt de permis.
                        </p>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="etape">
                        <h3>2. Test d'étanchéité à l'air</h3>
                        <p>Un test d’infiltrométrie «test à la porte soufflante» est effectué. Nous mesurerons la quantité d'air le niveau d'étanchéité à l'air requis par l'étude thermique tout en visualisant les sources de fuites. Nous vous remettons l’attestation du rapport de mesure.</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="etape">
                        <h3>3. Attestation de conformité</h3>
                        <p>Nous vous remettons l'attestation de prise en compte de la réglementation thermique. Contrôle de la conformité de l'ensemble des éléments de l'étude thermique initiale. </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
