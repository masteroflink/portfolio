# Resize Image for Portfolio

Resize the provided image to 1280x750 pixels for use as a project screenshot.

## Instructions

Take the image path provided as an argument: $ARGUMENTS

1. Use ImageMagick or sips (macOS built-in) to resize the image to exactly 1280x750 pixels
2. Save the resized image, replacing the original or creating a new file in the same location
3. Confirm the resize was successful by checking the new dimensions

Example command using sips (macOS):
```
sips -z 750 1280 <image_path>
```

Example command using ImageMagick:
```
convert <image_path> -resize 1280x750! <image_path>
```
