from glob import glob
from matplotlib import pyplot as plt
import os

# Read all jpg, jpeg, and png files in the public folder
images = glob('public/**/*.jpg', recursive=True) + glob('public/**/*.jpeg', recursive=True) + glob('public/**/*.png', recursive=True)

# Create data variable
data = []

# Loop through the images
for image in images:
    # Get filename
    filename = image.split('\\')[-1]
    # Get webp version of the image
    webp = image.replace(filename, filename.split('.')[0] + '.webp')
    # Check if webp version exists
    if not os.path.exists(webp):
        continue
    
    # Get image size
    size = os.path.getsize(image)
    # Get webp size
    webp_size = os.path.getsize(webp)
    # Calculate the difference
    diff = (size - webp_size) / size * 100
    # Add to data
    data.append(diff)

# Plot data into histogram
plt.title('Kompresi Format WebP')
plt.xlabel('Kompresi (%)')
plt.ylabel('Frekuensi')
plt.xlim((0, 100))
plt.hist(data, bins=5)
plt.show()