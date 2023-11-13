       
        // Show/hide faq questions 

        const faqs = document.querySelectorAll('.faq');

        faqs.forEach(faq => {
            faq.addEventListener('click', () => {
                faq.classList.toggle('open');

                //change icon
                const icon = faq.querySelector('.faq__icon i');
                if(icon.className === 'fa-solid fa-plus'){
                    icon.className =  'fa-solid fa-xmark';   
                }else{
                    icon.className = 'fa-solid fa-plus';
                }
            })
        });


document.getElementById("showPopupButton").addEventListener("click", function() {
  document.getElementById("textPopup").style.display = "block";
});

document.getElementById("closePopupButton").addEventListener("click", function() {
  document.getElementById("textPopup").style.display = "none";
});

