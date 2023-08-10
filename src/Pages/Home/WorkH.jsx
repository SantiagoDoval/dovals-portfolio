import React from 'react'


const WorkH = () => {
    return (
        <>
            <div className="container">
                <div className='flex' style={{ 'flexDirection': 'column', 'alignItems': 'center', 'gap': '30px' }}>
                    <h3 className='subtitle-color'>Projects</h3>
                    <p className='title-p'>Best Projects</p>
                    <p className='style-p'>I am a skilled multimedia engineer and producer with over 3 years of experience in front-end development, specializing in web development.</p>
                </div>
                <div style={{ 'margin': '50px auto' }} className='wrapped-works'>
                    <div className='item-w w-1'>
                        <h3>WeahterApp</h3>
                        <img src='./../../assets/images/work1.png' alt="" />
                        
                    </div>
                    <div className='item-w w-2'>
                        <p>Proyecto 2</p>
                    </div>
                    <div className='item-w w-3'>
                        <p>Proyecto 3</p>
                    </div>
                    <div className='item-w w-4'>
                        <p>Proyecto 4</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkH