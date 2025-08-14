import React from 'react'

const Projects = () => {
  return (
    <section id='projects' className='min-h-screen flex items-center justify-center py-20'>
        <div className='max-w-5xl mx-auto px-4 '>
            <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 
                bg-clip-text text-transparent text-center '>
                    Featured Projects</h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-50/30 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                        '>
                            <h3 className='font-bold text-xl mb-2'>
                                Microservices Architecture with RabbitMQ</h3>
                                <p className='text-gray-400 mb-4'>
                                    <li>
                                        Designed and implemented an event-driven microservices system using FastAPI.
                                    </li>
                                    <li>Built producers/consumers for user activity and system logging pipelines.</li>
                                        {/* <li>Focused on lightweight, container-ready services for future deployment</li>                            */}
                                </p>
                                <div >
                                    {["Python","RabbitMQ","Docker","Jenkins"].map((tech,key)=>(
                                        <span
                                        key={key}
                                        className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                        hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'
                                        >
                                            {tech}

                                        </span>
                                    ))}
                                </div>
                                <div className='flex justify-center items-center' >
                                    <a href='https://github.com/Kamoe7/RabbitMQ-prac.git' className='text-blue-400 hover:text-blue-300 transition-colors my-4'>
                                        View Project  
                                    </a>
                                </div>
                                
                                
                        </div>


                         <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-50/30 
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                            '>
                            <h3 className='font-bold text-xl mb-2'>
                                Fitness Diet App</h3>
                                <p className='text-gray-400 mb-4'>
                                    <li>
                                        Developed a cross-platform mobile app for tracking meals and fitness goals.
                                    </li>
                                    <li>Built RESTful APIs using Python; integrated Supabase for user and meal data storage.</li>
                
                                </p>
                                <div >
                                    {["Python","Flutter","Dart","Supabase"].map((tech,key)=>(
                                        <span
                                        key={key}
                                        className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                        hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'
                                        >
                                            {tech}

                                        </span>
                                    ))}
                                </div>
                                <div className='flex justify-center items-center ' >
                                    <a href='https://github.com/Kamoe7/fitness_tracker_app.git' className='text-blue-400 hover:text-blue-300 transition-colors my-4'>
                                        View Project  
                                    </a>
                                </div>   
                        </div>


                     <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-50/30 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                '>
                            <h3 className='font-bold text-xl mb-2'>
                                Face Recognition System</h3>
                                <p className='text-gray-400 mb-4'>
                                    <li>
                                        Implemented a real-time facial recognition system using OpenCV.
                                    </li>
                                    <li>Trained the model to identify and match users from a stored image dataset.</li>                         
                                </p>
                                <div>
                                    {["Python","OpenCV"].map((tech,key)=>(
                                        <span
                                        key={key}
                                        className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                        hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'
                                        >
                                            {tech}

                                        </span>
                                    ))}
                                </div>
                                <div className='flex justify-center items-center' >
                                    <a href='https://github.com/Kamoe7/face-recognition-.git' className='text-blue-400 hover:text-blue-300 transition-colors my-4'>
                                        View Project  
                                    </a>
                                </div>  
                        </div>


                              <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-50/30 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                '>
                            <h3 className='font-bold text-xl mb-2'>
                               AI Resume Builder</h3>
                                <p className='text-gray-400 mb-4'>
                                    <li>
                                        Created a responsive AI-resume web app using ReactJS.
                                    </li>
                                    <li>Dockerize and use Jenkins for CI/CD and trigger git webhook</li>                           
                                </p>
                                <div>
                                    {["ReactJS","Puter.js","Docker","Jenkins"].map((tech,key)=>(
                                        <span
                                        key={key}
                                        className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                        hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'
                                        >
                                            {tech}

                                        </span>
                                    ))}
                                </div>
                                <div className='flex justify-center items-center' >
                                    <a href='https://github.com/Kamoe7/ai-resume-builder.git' className='text-blue-400 hover:text-blue-300 transition-colors my-4'>
                                        View Project  
                                    </a>
                                </div>
                                
                                
                        </div>
              
                        



                    </div>

                 
                

        </div>

    </section>
  )
}

export default Projects