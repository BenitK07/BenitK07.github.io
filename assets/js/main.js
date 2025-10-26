/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()
    //serviceid,templateid,form,publickey
    emailjs.sendForm('service_bksf977','template_yc8avue','#contact-form','cbWGagnyX2LUdNr-Y')

    .then(() =>{
        //show sent msg
        contactMessage.textContent = 'Message sent sucessfully !'

        //remove msg after 5sec
         setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)
        //clear i/p fields
        contactForm.reset()
    }, () =>{
        //error msg
        contactMessage.textContent = 'Message not sent !'
    })
}
contactForm.addEventListener('submit', sendEmail)


/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal(
    {
        origin: 'top',
        distance: '60px',
        duration: 2000,
        delay: 400,
        //aniamtion reatinguh
    }
)

sr.reveal('.perfil, .contact__form')
sr.reveal('.info', {origin: 'left', delay:800})
sr.reveal('.skills', {origin: 'right', delay:1000})
sr.reveal('.about', {origin: 'right', delay:1200})
sr.reveal('.projects__card, .services__card, .experience__card, .Achievements__card, .Certifications__card', {interval:800})