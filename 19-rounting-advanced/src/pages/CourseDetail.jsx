import React from 'react' 
import { useParams } from 'react-router-dom'

const CourseDetail = () => {
    
    const params =useParams();
    console.log(params.id);


    return( 
        <div className='flex justify-center text-2xl gap-10 py-4'>
           {/* params.id use display the url id output */}
            {params.id}  CourseDetail 
        </div>
    )
}


export default CourseDetail;