import EmptyState from "@/components/EmptyState"
import Header from "@/components/Header"
import VideoCard from "@/components/VideoCard"
import { dummyCards } from "@/constants"
import { getAllVideosByUser } from "@/lib/actions/video"
import { redirect } from "next/navigation"


const page = async ({params, searchParams} : ParamsWithSearch ) => {
    const {id} = await params
    const {query, filter} = await searchParams

    const {user,videos} = await getAllVideosByUser(id, query, filter)
    

    if (!user) redirect('404')
  return (
    <div className="wrapper page">
     <Header subHeader={user?.email} title={user?.name} userImg={user?.image ?? ''}/>

      {videos?.length > 0 ? (
      <section className='video-grid'>
        {videos.map(({video,user}) => (
          <VideoCard key={video.id} {...video} 
          userImg={user?.image || ''}
          username={user?.name || 'Guest'}
          thumbnail={video.thumbnailUrl}

          
          />
        ))}
      </section>

   ): (
    <div>
      <EmptyState icon='/assets/icons/video.svg' title='No videos available' description='Videos will be visible once uploaded' />
    </div>
   )}
      
    </div>
  )
}

export default page