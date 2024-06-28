"use strict";

const item01 = document.querySelectorAll(`.item>.item01`);


item01.forEach(item01 => {
    setTimeout(() =>{
        console.log(`5sごとに実行`)
    },0.2 * index  );
});