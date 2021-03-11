import React from 'react'
import './Tab.css';

const TabNav = (props) => {
    return (
        <div className='tabNav'>
            <ul className="nav nav-tabs">
                {
                    props.tabs.map(tab => {
                        const active = (tab === props.selected ? 'active' : '');

                        return (
                            <li className='nav-item' key={tab}>
                                <a className={'nav-link '+ active} onClick={()=>props.setSelected(tab)}>
                                    {tab}
                                </a>
                            </li>
                        );
                    })
                }
            </ul>
            {props.children}
        </div>
    )
}

export default TabNav
