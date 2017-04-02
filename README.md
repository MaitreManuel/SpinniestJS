# SpinniestJS

The simplest spinner you can implement !
No need jQuery.
![](https://image.noelshack.com/fichiers/2017/13/1491132359-ezgif-com-gif-maker.gif)

## How To Use

Add this to your `html` :
```bash
<!-- <body> must be the only parent for this <div> -->
<div id="overlay">
    <div id="loader"></div>
    <!-- remove this <a> if you don't want to close overlay -->
    <a id="close-button" href="" onclick="close()">&times;</a>
</div>
```

Then, copy this classes in your `.css` file
```bash
@-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
}
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
#loader {
    z-index: 110;
    display: none;
    position: absolute;
    top: calc(50vh - 55px);
    left: calc(50vw - 55px);
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 80px;
    height: 80px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
}
#overlay {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1003;
    top: 0;
    left: 0;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0, 0.9);
    overflow-x: hidden;
}
```

And add this function JavaScript :
```bash
<script type="text/javascript">
    function spin(spin) {
        if(spin == true) {
            document.getElementById("overlay").style.width = "100%";
            document.getElementById("loader").style.display = 'block';
        } else {
            document.getElementById("overlay").style.width = "0%";
            document.getElementById("loader").style.display = 'none';
        }
    }
</script>
```

Finally, when you want to open the spinner, just call the function :
```bash
spin(true)
```
  
 And when you want to close it :
```bash
spin(false)
```
 
You can launch `index.html` on your favorite browser to watch a demo !
