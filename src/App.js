import React from 'react';
import IntroItem from 'components/IntroItem';
import IntroHeader from 'components/IntroHeader'

export const App = ()=>{
    const headerTitle = {
        title: 'Why this is awesome',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
    const item1 = {
        fontawesome: 'fa fa-lightbulb-o',
        title: 'Thoughtful Design',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra.`
    }
    const item2 = {
        fontawesome: 'fa fa-keyboard-o',
        title: 'Well Crafted',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra.`
    }
    const item3 = {
        fontawesome: 'fa fa-bolt',
        title: 'Easy to Customize',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra.`
    }
    return (
        <>
        <section>
            <IntroHeader title={headerTitle.title} content={headerTitle.content}/>
            <div className="content">
                <IntroItem fontawesome={item1.fontawesome} title={item1.title} content={item1.content}/>
                <IntroItem fontawesome={item2.fontawesome} title={item2.title} content={item2.content}/>
                <IntroItem fontawesome={item3.fontawesome} title={item3.title} content={item3.content}/>
            </div>
        </section>
        </>
    )
}

export default App
