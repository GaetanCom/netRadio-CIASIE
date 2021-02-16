import React, { Component } from 'react';

import './index.css';

import Title from '../components/items/Title';
import Subtitle from '../components/items/Subtitle';
import Subtext from '../components/items/Subtext';
import Player from '../components/player/Player';

class Index extends Component {

    render() {

        return(

            <div className="indexBody">
                <div>
                    <Title text="KEDUMA EST EN LIVE" />
                    <Subtitle text="Overwatch un dead Game ?" />
                    <Player />
                    <Subtext text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dolor ac massa lobortis dignissim. Duis dictum tristique est non varius. Proin sodales aliquet felis, eu tempus dolor faucibus id. Vivamus vitae dui ut eros posuere gravida. Quisque arcu sem, luctus sit amet eros et, placerat iaculis tortor. Duis sed nunc nec justo posuere eleifend vel viverra turpis. Morbi arcu dolor, maximus euismod mi sit amet, accumsan congue est. Sed malesuada hendrerit magna, a pulvinar sem dapibus in. Pellentesque fermentum arcu id est posuere, sit amet consequat purus pulvinar. Donec non ligula tristique, ullamcorper enim non, vestibulum dui." />
                </div>

                <div>
                    <Title text="PRESENTATION DE NET'RADIO" />
                    <Subtext text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dolor ac massa lobortis dignissim. Duis dictum tristique est non varius. Proin sodales aliquet felis, eu tempus dolor faucibus id. Vivamus vitae dui ut eros posuere gravida. Quisque arcu sem, luctus sit amet eros et, placerat iaculis tortor. Duis sed nunc nec justo posuere eleifend vel viverra turpis. Morbi arcu dolor, maximus euismod mi sit amet, accumsan congue est. Sed malesuada hendrerit magna, a pulvinar sem dapibus in. Pellentesque fermentum arcu id est posuere, sit amet consequat purus pulvinar. Donec non ligula tristique, ullamcorper enim non, vestibulum dui." />
                </div>
            </div>

        );

    }

}

export default Index;