import React from 'react'
import RevalOnScroll from '../RevalOnScroll'

const Home = () => {
  return (
    <section
    id='home'
    className='min-h-screen flex items-center justify-center relative'
    >
        <RevalOnScroll>
        <div className='text-center z-10 px-4'>
            <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400  bg-clip-text text-transparent leading-right'>Hi, I'm Sagar Susleen</h1>
            
            <p className='text-gray-400 text-lg mb-8 max-w-lg mx-auto '>
                🎓 Computer Science & Technology Graduate | Aspiring IT Officer & Full-Stack Developer with a Passion for DevOps
I'm a recent graduate from Chongqing University of Post and Telecommunications with a knack for building efficient, scalable systems and automating workflows. From crafting web apps with Python and Flask to setting up CI/CD pipelines with Docker and Jenkins, 
I love solving technical challenges. My goal? To bridge development and operations, ensuring seamless and reliable tech solutions.
                
                
            </p>

            <div className='flex justify-center space-x-4'>
                <a href='#projects' className='bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] '>
                    View Projects
                </a>

                <a href='#contact' className='border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 
                hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10'>
                    Contact Me
                </a>




            </div>
        </div>

        
</RevalOnScroll>
    </section>

  )
}

export default Home