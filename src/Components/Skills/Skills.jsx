import React from 'react'
import { techStack } from '../../data/skillsData'

const Skills = () => {
    return (
        <>
            <div style={{'margin':'60px auto'}} className="container flex">
                <div className="container-70">
                    <div className="wrapped-skills">
                        {techStack.map((item, index) => {
                            if (item.path !== '') {
                                return <div key={index} className="box-wrapped-skill">
                                    <svg className='icon-skill' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d={item.path} />
                                        {item.path && <path fill='black' d={item.path2} />}
                                    </svg>
                                </div>
                            }
                        })}
                    </div>
                </div>
                <div className="container-30 flex" style={{'alignItems':'center'}}>
                    <p className='title-p'>Tech Stack</p>
                </div>
            </div>
        </>
    )
}

export default Skills