import Card from '../card';

const SectionClassRides = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center'>
        <div>
            <h3 className='text-2xl text-[#FBA403] mt-[3.75rem]'>WHY SHOULD YOU RIDE WHITH US?</h3>
            <h3 className='text-[2.813rem] text-white font-bold mb-[3.75rem]'>Best in class rides</h3>
        </div>
        <div className='flex gap-8 flex-wrap justify-center items-center'>
        <Card requestLink='sla'/>
        <Card requestLink='sla'/>
        <Card requestLink='sla'/>
        <Card requestLink='sla'/>
        </div>
    </div>
  )
}

export default SectionClassRides