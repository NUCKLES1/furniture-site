import React, { useEffect } from 'react'

const Scroll = () => {
  useEffect( () => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  },[])   
  return (
    <div>Scroll</div>
  )
}

export default Scroll