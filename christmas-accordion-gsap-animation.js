const accordionImages = document.querySelectorAll('.c-images-accordion__item')

const setElasticAnimation = (element, options) => {
  const { animationToggle, activeWidth, inactiveWidth, duration, ease } = options;
  gsap.to(element, {
    width: animationToggle ? activeWidth : inactiveWidth,
    duration,
    ease
  })
}

const expandAccordionImages = (currentAccordionImage, currentAccordionImageIndex) => {
  accordionImages.forEach((accordionImage, accordionImageIndex) => {
    if (accordionImageIndex === currentAccordionImageIndex) return
    accordionImage.clicked = false
  })

  setElasticAnimation(accordionImages, {
    animationToggle: currentAccordionImage.clicked,
    activeWidth: '12vw',
    inactiveWidth: '10vw',
    duration: 2,
    ease: 'elastic(1, .6)'
  })


  currentAccordionImage.clicked = !currentAccordionImage.clicked

  setElasticAnimation(currentAccordionImage, {
    animationToggle: currentAccordionImage.clicked,
    activeWidth: '20vw',
    inactiveWidth: '10vw',
    duration: 2.5,
    ease: 'elastic(1, .3)'
  })
}

accordionImages.forEach((accordionImage, index) => {
  accordionImage.clicked = false
  accordionImage.addEventListener('click', () => expandAccordionImages(accordionImage, index))
})
