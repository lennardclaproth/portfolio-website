var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) 
	{
  		showSlides(slideIndex += n);
	}

function currentSlide(n) 
{
	showSlides(slideIndex = n);
}

function showSlides(n)
{
	var i;
	var slides = document.getElementsByClassName("slide_container")
	var dots = document.getElementsByClassName("dot");

	if(n > slides.length)
	{
		slideIndex = 1
		if(2%2==0)
		{
			console.log(3%2);
		}
	}

	if(n < 1)
	{
		slideIndex = slides.length
	}

	for(i = 0; i < slides.length; i++)
	{
		slides[i].style.display = "none";
	}

	// for (i = 0; i < dots.length; i++) 
	// {
	// 	dots[i].className = dots[i].className.replace("active", "active"); 
	// }

	slides[slideIndex-1].style.display = "block";
}