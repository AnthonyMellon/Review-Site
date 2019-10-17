
const setUpStars = () => {
    for (i = 0; i < 5; i++)
    {
        for (j = 1; j < 6; j++)
        {
            var star = document.getElementById("star" + i + j)
            star.addEventListener('click', manageStars)
            
        }
    }
}

const manageStars = () =>
{
    for (i = 0; i < 5; i++)
    {
        var checkNumber = 0
        for (j = 1; j < 6; j++)
        {
            var star = document.getElementById("star" + i + j)
            if (star.checked == true)
            {
                checkNumber = j
            }

        }
        for (k = 5; k > checkNumber; k--)
        {
            var star = document.getElementById("star" + i + k)
            star.checked = false
        }
        for (k = 1; k < checkNumber; k++)
        {
            var star = document.getElementById("star" + i + k)
            star.checked = true
        }
 
    }
}

setUpStars()
