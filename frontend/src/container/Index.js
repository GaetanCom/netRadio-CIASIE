import React, { Component } from 'react';

import Title from '../components/items/Title';
import Subtitle from '../components/items/Subtitle';
import Subtext from '../components/items/Subtext';
import Barre_recherche from '../components/items/Barre_recherche';
import Label from '../components/items/Label';
import Bouton from '../components/items/Bouton';
import Checkbox from '../components/items/Checkbox';
import Emission from '../components/items/Emission';
import Textarea from '../components/items/Textarea';
import Cross_close from '../components/items/Cross_close';

class Index extends Component {

    render() {

        return(

            <div>
                <div>
                    <Title text="KEDUMA EST EN LIVEeee" />
                    <Subtitle text="Overwatch un dead Game ?" />
                    {/* <Player /> */}
                    <Subtext text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dolor ac massa lobortis dignissim. Duis dictum tristique est non varius. Proin sodales aliquet felis, eu tempus dolor faucibus id. Vivamus vitae dui ut eros posuere gravida. Quisque arcu sem, luctus sit amet eros et, placerat iaculis tortor. Duis sed nunc nec justo posuere eleifend vel viverra turpis. Morbi arcu dolor, maximus euismod mi sit amet, accumsan congue est. Sed malesuada hendrerit magna, a pulvinar sem dapibus in. Pellentesque fermentum arcu id est posuere, sit amet consequat purus pulvinar. Donec non ligula tristique, ullamcorper enim non, vestibulum dui." />
                </div>

                <div>
                    <Title text="PRESENTATION DE NET'RADIO" />
                    <Subtext text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dolor ac massa lobortis dignissim. Duis dictum tristique est non varius. Proin sodales aliquet felis, eu tempus dolor faucibus id. Vivamus vitae dui ut eros posuere gravida. Quisque arcu sem, luctus sit amet eros et, placerat iaculis tortor. Duis sed nunc nec justo posuere eleifend vel viverra turpis. Morbi arcu dolor, maximus euismod mi sit amet, accumsan congue est. Sed malesuada hendrerit magna, a pulvinar sem dapibus in. Pellentesque fermentum arcu id est posuere, sit amet consequat purus pulvinar. Donec non ligula tristique, ullamcorper enim non, vestibulum dui." />
                </div>

                <div>

                    <Label text="Recherche un utilisateur"/>
                    <Barre_recherche size="15px" />
                    <Bouton text="Valider" />
                    <Checkbox />
                    <Emission name="Overwatch un dead Game ?" ecouter="https://example.com" presenter="Keduma" category="Jeux vidéo" guests="Zacpot, Shityu et Guitare" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
                    <Textarea rows="5" cols="50" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
                    <Cross_close />
                </div>
            </div>

        );

    }

}

export default Index;