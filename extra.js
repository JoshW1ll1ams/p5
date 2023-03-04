
function BorderRadious(radius)
{
    loadPixels(); // Loads the pixels --------
    for(let i = 0; i< height; i++)
    {
        for(let j = 0; j< width; j++)
        {
            let index = (i +j * width)*4;
            d = Math.sqrt(((i- mouseX)**2 + (j - mouseY)**2))
            if(d < radius && pixels[index] == 0)
            {
                pixels[index]=255;
            }
        }
    }
    updatePixels(); // Update the pixels ----------
}

function BorderRadiousSquare(radius)
{
    loadPixels(); // Loads the pixels --------
    x_min = max(mouseX - radius, 0)
    y_min = max(mouseY - radius, 0)
    x_max = min(mouseX + radius, width - 1)
    y_max = min(mouseY + radius, height - 1)

    for(let i = 0; i< height; i++)
    {
        for(let j = 0; j< width; j++)
        {
            let index = (i +j * width)*4;
            d = abs(i - mouseX) + abs(j - mouseY)
            if (d <= radius)
            {
                pixels[index]= 255;
            }
        }
    }
    updatePixels(); // Update the pixels ----------
}