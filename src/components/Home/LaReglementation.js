import React from 'react'
import {Link} from 'gatsby'

export default function LaReglementation() {
  return (
    <section className="rt2012">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>La réglementation thermique 2012 (RT2012).</h2>
                    <p>
                        La RT2012 : ce qui change dans le résidentiel, la valeur moyenne du BBC devient valeur de référence RT2012.
                        La RT2012 exige que toutes les constructions neuves présentent, en moyenne, une consommation d’énergie primaire inférieure à 50 kWh/m²/an.
                    </p>
                    <p>
                        Trois indicateurs de performance :
                    </p>

                    <ul>
                        <li>Bbio : Besoin Bioclimatique
                        </li>
                        <li>Cep : consommation d’Energie Primaire
                        </li>
                        <li>Tic : confort d'été
                        </li>
                    </ul>

                    <p>

                        Pour tous les Permis de Construire de bâtiments neufs à usage d’habitation à partir du 1er Janvier 2013.

                        RT2012 est une réglementation sur le résultat de la performance globale effective, et non sur les éléments constructifs ce qui laisse une plus grande liberté pour le Maître d’Oeuvre, Architecte,
                        Constructeur de Maisons Individuelles ou Promoteur.
                        Ces éléments sont à choisir en étroite collaboration avec le Bureau d’Etudes Thermiques
                    </p>
                    <p>
                        La RT 2012 encourage à construire autrement :</p>
                    <ul>
                        <li>architecture plus compacte
                        </li>
                        <li>prise en compte systématique de la meilleure orientation pour profiter
                        </li>
                        <li>des apports naturels de lumière et d’ensoleillement
                        </li>
                        <li>installation de protections solaires (stores, débords de toit, végétation)
                        </li>
                        <li>pour faciliter le rafraîchissement des pièces orientées au sud
                        </li>
                        <li>mise en place d’espaces tampons (garage, buanderie) au nord
                        </li>
                        <li>isolation thermique renforcée
                        </li>
                    </ul>
                        <Link to="https://www.rt-batiment.fr/batiments-neufs/reglementation-thermique-2012/presentation.html" target="_blank"><button type="button" class="btn btn-light">En savoir plus</button></Link>


                </div>

            </div>
        </div>

    </section>
  )
}
