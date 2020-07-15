
window.addEventListener('load',()=>{
    function getStyle(ele,attr){
        var res = null;
        if(ele.currentStyle){
            res = ele.currentStyle[attr];
        }else{
            res =  window.getComputedStyle(ele,null)[attr];
        }
        return parseFloat(res);
    }


    const visual = document.querySelector('.visual');
    const visual2 = document.querySelector('.visual2');

    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pad1,.pad2,.pad3,.pad4,.pad5,.pad6 ');
    console.log(pads)
    
    const cubes = document.querySelectorAll('.cube');
    console.log(cubes)
    const padsTopFaces = document.querySelectorAll('.topFace');
    const padsLeftFaces = document.querySelectorAll('.leftFace');
    const padsRightFaces = document.querySelectorAll('.rightFace');



    const backgroundColors = ["#c3cfe2","#d1fdff","#fef9d7","#cd9cf2","#ace0f9","#f5efef"];


    const drumSounds = document.querySelectorAll('.drumSound');
    const drums = document.querySelectorAll('.ball');
    const tubes = document.querySelectorAll('.tube');
    const ovals = document.querySelectorAll('.oval');

    const ballColors = [ "#60d394", "#94d360","#597cc7","#cf60d3","#d38e60","#35f5bb","#3552f5"];

    const keySounds = document.querySelectorAll('.piano .keySound');
    const keys = document.querySelectorAll('.piano>div');

    const whiteKeySounds = document.querySelectorAll('#white .keySound');
    const whiteKeys = document.querySelectorAll('#white div');



    const songSounds = document.querySelectorAll('.songSound');
    const songPads = document.querySelectorAll('.music>div');

    var rect=[];
    
   
    // for (i=0;i<4;i++){
    //     const rect_i = songPads[i].getBoundingClientRect();
    //     console.log(rect_i.top,rect_i.right)
    //     const ball1_i = document.createElement('div');
    //     visual3.appendChild(ball1_i);
    //     ball1_i.style.left = (rect_i.left*2+rect_i.right)/3+'px';
    //     // ball1_i.style.top = ((rect_i.bottom-rect_i.top)*0.026+rect_i.top)+'px';
    //     ball1_i.style.top = '14%'
    //     ball1_i.style.width = (rect_i.right-rect_i.left)/3+'px';
    //     ball1_i.style.height = (rect_i.right-rect_i.left)/3+'px';

    //     // ball1_i.style.backgroundImage= 'linear-gradient(-60deg, #fff352 0%, #a9ffa1 100%)';
    //     // ball1_i.style.opacity='0.5';
    //     ball1_i.style.borderRadius = '50%';

    //     ball1_i.style.position='fixed';
    // }    
    
        
    
    
    
    const coolColor = [ "#2c73d2","#ff64c4","#ff818f","#ffab68","#ffd55a","#f9f871", "#9bde7e","#4bbc8e","#039590" ];
    


    //pads hit
    pads.forEach((pad,index)=>{
        pad.addEventListener('click',function(){
            console.log('pad'+index)
            sounds[index].currentTime = 0;
            sounds[index].play();
            backgroundChanging(index);
            pads[index].style.animation='pressBtn 1s ease-in-out';
            cubes[index].style.animation='rotate 1s ease-in-out'
            // translateY(30px)'
            padsLeftFaces[index].style.animation='pressBtn_1 1s ease-in-out ';
            padsRightFaces[index].style.animation='pressBtn_2 1s ease-in-out ';
            // style.height='40px';
            // padsRightFaces[index].style.height='40px';
            // padsRightFaces[index].style.top='-90px';



        });
        pads[index].addEventListener('animationend',function(){
        pads[index].style.animation='none';
        padsLeftFaces[index].style.animation='none';
        padsRightFaces[index].style.animation='none';})

        cubes[index].addEventListener('animationend',function(){
            cubes[index].style.animation='none';
        })

    });


    //background color
    var bodyColor = document.getElementById("visual");
    var gradientDisplay = ["#33ccff","#ff99cc","#F0FFFF",'#F0FFFF'];
    const backgroundChanging = (index)=>{
        gradientDisplay.shift();
        gradientDisplay[3]=backgroundColors[index];
        gradientValue = gradientDisplay[0]+' , '+gradientDisplay[1]+' , '+gradientDisplay[2]+' , '+gradientDisplay[3];
        console.log(gradientValue);
        //bodyColor.style.animation = 'gradient 1s ease';
        
        
        bodyColor.style.backgroundImage='linear-gradient(to bottom right, '+gradientValue+')';
    };
    //song hit
    const songPads_1s = document.querySelectorAll('.visual3 div');
    var hits=[0,0,0,0]

    songPads_1s.forEach((song,index)=>{
        song.addEventListener('click',function(){
            if(hits[index]===0){
                songSounds[index].currentTime = 0;
                songSounds[index].play();
                songPads_1s[index].style.animation='colorAnimation 5s ease-in-out infinite';
                songPads_1s[index].style.backgroundImage='linear-gradient(120deg, #fff352 0%, #a9ffa1 19%, #57c6e1 42%, #b49fda 79%, #fff352 100%)';
                songPads_1s[index].style.backgroundSize= '300%';
                hits[index] = 1;
            }
            else if(hits[index]===1){
                hits[index] = 0;
                songSounds[index].currentTime = 3600;
                songPads_1s[index].style.animation='none';
                songPads_1s[index].style.backgroundImage='linear-gradient(-60deg, #fff352 0%, #a9ffa1 100%)';
                songPads_1s[index].style.backgroundSize= '100%';
            }
        });

    });



    //piano hit
    keys.forEach((key,index)=>{
        key.addEventListener('click',function(){

            keySounds[index].currentTime = 0;
            keySounds[index].play();
            switch (index % 2) {
                case 1:
                    createVerticalSpectrums(keys,index);
                    break;
                case 0:
                    createSpectrums(keys,index);
                    break;
            
                default:
                    break;
            }
            
        });

    });

//spectrum
const createVerticalSpectrums =(keyType,index)=>{
    const spectrumloc = document.createElement('section');
    visualloc.appendChild(spectrumloc);
    var rect = keyType[index].getBoundingClientRect();
    var widthCenterOfkey =( rect.left+rect.right)/2;
    var heightOfSpectrum = 30;
    var topOfspectrum = widthCenterOfkey/15;
    spectrumloc.style.top = topOfspectrum+"%";


        const spectrum = document.createElement('section');
        const spectrumColors = coolColor[Math.floor(Math.random()*coolColor.length)];
        const spectrumColorsValue = coolColor[Math.floor(Math.random()*coolColor.length)]+","+"rgba(127, 255, 212, 0),"+coolColor[Math.floor(Math.random()*coolColor.length)+1];
        console.log(spectrumColorsValue);
        spectrumloc.appendChild(spectrum);
        spectrum.style.background = 'linear-gradient(to left, '+spectrumColorsValue+')';;
        spectrum.style.position='absolute';
        //spectrum.style.bottom='50%';
       // spectrum.style.height='500px';
        spectrum.style.height=heightOfSpectrum+'px';
        spectrum.style.width='100%';
        

    spectrumloc.style.animation = 'goverticalmove 3s ease';
    spectrumloc.addEventListener('animationend',function(){
        visualloc.removeChild(this);
    });
}
const createSpectrums = (keyType,index)=>{
    const spectrumloc = document.createElement('section');
    visualloc.appendChild(spectrumloc);
    var rect = keyType[index].getBoundingClientRect();
    var widthofkey = rect.right-rect.left;
    var widthofspectrum = 30;
    var leftofspectrum = rect.left-((widthofspectrum-2*widthofkey)/2);
    console.log(rect.top, rect.right, rect.bottom, rect.left);
    spectrumloc.style.left = leftofspectrum+"px";


        const spectrum = document.createElement('section');
        const spectrumColors = coolColor[Math.floor(Math.random()*coolColor.length)];
        const spectrumColorsValue = coolColor[Math.floor(Math.random()*coolColor.length)]+","+"rgba(127, 255, 212, 0),"+coolColor[Math.floor(Math.random()*coolColor.length)+1];
        console.log(spectrumColorsValue);
        spectrumloc.appendChild(spectrum);
        spectrum.style.background = 'linear-gradient(to bottom, '+spectrumColorsValue+')';;
        spectrum.style.position='absolute';
        //spectrum.style.bottom='50%';
       // spectrum.style.height='500px';
        spectrum.style. width=widthofspectrum+'px';
        spectrum.style.height='100%';
        

    spectrumloc.style.animation = 'gomove 3s ease';
    spectrumloc.addEventListener('animationend',function(){
        visualloc.removeChild(this);
    });
};


    //drums hit
    drums.forEach((drum,index)=>{
        drum.addEventListener('click',function(){
            tubes[index].style.animation='tubeStrech 1s ease-in-out'
            tubes[index].addEventListener('animationend',function(){
                tubes[index].style.animation='none';
            })
            ovals[index].style.animation='ovalMove 1s ease-in-out'
            ovals[index].addEventListener('animationend',function(){
                tubes[index].style.animation='none';
            })
            ovals[index].addEventListener('animationend',function(){
                ovals[index].style.animation='none';
            })
            console.log(drum);
            drumSounds[index].currentTime = 0;
            drumSounds[index].play();
            const bubble = document.createElement('div');
            visual2.appendChild(bubble);
            
            var drumLoc = drum.getBoundingClientRect();
            var  drumL = drumLoc.left
            ,   drumR = drumLoc.right
            ,   drumT = drumLoc.top
            ,   drumB = drumLoc.bottom;
            // console.log(drumLoc);
            var circleL = (drumL+drumR)/2-125
            ,   circleT = (drumT+drumB)/2-125;
            
            // console.log(circleT);
        
      
    //drums bubbles      
        const bubbleBlur1 = document.createElement('span');
        // const bubbleBlur2 = document.createElement('span');
        // const bubbleBlur3 = document.createElement('span');
        // const bubbleBlur4 = document.createElement('span');
        
        bubble.appendChild(bubbleBlur1);
        // bubble.appendChild(bubbleBlur2);
        // bubble.appendChild(bubbleBlur3);
        // bubble.appendChild(bubbleBlur4);

        
        bubble.style.left = circleL+'px';
        bubble.style.top = circleT+'px';
        bubble.style.animation = 'bumpin 1.5s ease';

        bubbleBlur1.style.filter = "blur(5px)";
        // bubbleBlur2.style.filter = "blur(10px)";
        // bubbleBlur3.style.filter = "blur(20px)";
        // bubbleBlur4.style.filter = "blur(55px)";

        bubble.addEventListener('animationend',function(){
            visual2.removeChild(this);
        });
        

        
        });


    });


    const preload = document.querySelector('.preload');
    preload.classList.add("preload-finish");
});
