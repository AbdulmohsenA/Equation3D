# Equation3D

## Usage
- Go to https://abdulmohsena.github.io/Equation3D/
- Put any expression you want and press Enter, it will show you its animation in the x/z axis. (For now, only sin cos and tan)


## Variables
- ```t```: the Time variable, for the time elapsed since last refresh. Main key for animation.
- ```x```: the Position variable. For now, there is no real x/y coordinate but this should be enough.

## Notes
This doesn't work properly for low-end PCs / Phones. \
Some interesting expressions i found:
- ```tan(x * 5 + t)```
- ```tan(x * 2 + t) / cos(t)```

---
 
## TODO
#### Functionality
- ~~**Add Customization**: Customize the 3D View.~~
- ~~**Custom Equation**: Enable custom equation maker, instead of cosine wave.~~
- **Size Customization**: Customize the plane and point sizes.
- **Export code**: Export the customized code for general use.

#### Performance
- **Clean up**: Optimize the code.

#### Security
- **Sanitize input**: Sanitize eval function input.

#### Usability
- **Smooth Camera**: Smooth the camera navigation to enhance UX.
