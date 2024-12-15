import image from '../assets/images/single-image-2.jpg';
const Collection = () => {
  return (
    <div className='bg-main-light-grey py-20'>
        <div className='flex lg:flex-row xl:flex-row sm:flex-col md:flex-col xm:flex-col lg:w-[80%] xl:w-[80%] md:w-full sm:w-full xm:w-full mx-auto bg-white'>
            <div className='lg:w-[100%] xl:w-[100%] mx-auto'>
                <img src={image} alt="image" className='h-[600px]'/>
            </div>
            
            <div className='py-32 w-[50%] md:w-full sm:w-full xm:w-full '>
                <h1 className='font-f uppercase text-5xl text-center'>classic winter collection</h1>
                <p className='w-[80%] mx-auto mt-12 text-main-medium-grey line leading-8'>Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus, gravida orci,
                     fringilla a. Ac sed eu fringilla odio mi. Consequat pharetra at magna imperdiet cursus 
                     ac faucibus sit libero. Ultricies quam nunc, lorem sit lorem urna,
                     pretium aliquam ut. In vel, quis donec dolor id in. Pulvinar commodo mollis diam
                      sed facilisis at cursus  imperdiet cursus ac faucibus sit faucibus sit libero.</p>
                
                <button className='bg-strong-grey text-white px-4 py-2 mt-5 lg:ml-[10%] xl:ml-[10%] md:ml-[40%] sm:ml-[40%] xm:ml-[35%]'>Shop Collection</button>
            </div>
        </div>
    </div>
  )
}

export default Collection
