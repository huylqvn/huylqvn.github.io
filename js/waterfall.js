/* jshint asi:true */

/**
 
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
(function() {

  /**
     */
  var demoContent = [
    {
      demo_link: 'https://github.com/huylqbk/ReactJS',
      img_link: 'https://techtalk.vn/wp-content/uploads/2016/06/techtalk-reactjs-696x392.png',
      code_link: 'https://github.com/huylqbk/ReactJS',
      title: 'ReactJS ',
      core_tech: 'JavaScript',
      description: 'Demo for practice coding with react'
    },
    {
      demo_link: 'https://github.com/huylqbk/http-grpc-go-kit-demo',
      img_link: 'https://i1.wp.com/phocode.com/wp-content/uploads/2016/08/golang.sh-600x600.png',
      code_link: 'https://github.com/huylqbk/http-grpc-go-kit-demo',
      title: 'Golang ',
      core_tech: 'golang, grpc',
      description: 'Demo for practice coding with golang'
    },
    {
      demo_link: 'https://github.com/huylqbk/NodeJSBackend',
      img_link: 'https://hocvps.com/wp-content/uploads/2017/12/NodeJS.png',
      code_link: 'https://github.com/huylqbk/NodeJSBackend',
      title: 'NodeJS ',
      core_tech: 'JavaScript',
      description: 'Demo for practice coding with Nodejs backend'
    }
  ];

  contentInit(demoContent) 
  waitImgsLoad() 
}());

/**
 * @return {[type]} [description]
 */
function contentInit(content) {
  
  var htmlStr = ''
  for (var i = 0; i < content.length; i++) {
    htmlStr += '<div class="grid-item">' + '   <a class="a-img" href="' + content[i].demo_link + '">' + '       <img src="' + content[i].img_link + '">' + '   </a>' + '   <h3 class="demo-title">' + '       <a href="' + content[i].demo_link + '">' + content[i].title + '</a>' + '   </h3>' + '   <p>Technical：' + content[i].core_tech + '</p>' + '   <p>' + content[i].description + '       <a href="' + content[i].code_link + '"> Huy<i class="fa fa-code" aria-hidden="true"></i></a>' + '   </p>' + '</div>'
  }
  var grid = document.querySelector('.grid')
  grid.insertAdjacentHTML('afterbegin', htmlStr)
}

/**
 * @return {[type]} [description]
 */
function waitImgsLoad() {
  var imgs = document.querySelectorAll('.grid img')
  var totalImgs = imgs.length
  var count = 0
  //console.log(imgs)
  for (var i = 0; i < totalImgs; i++) {
    if (imgs[i].complete) {
      //console.log('complete');
      count++
    } else {
      imgs[i].onload = function() {
        // alert('onload')
        count++
        //console.log('onload' + count)
        if (count == totalImgs) {
          //console.log('onload---bbbbbbbb')
          initGrid()
        }
      }
    }
  }
  if (count == totalImgs) {
    //console.log('---bbbbbbbb')
    initGrid()
  }
}

/**
 * @return {[type]} [description]
 */
function initGrid() {
  var msnry = new Masonry('.grid', {
    // options
    itemSelector: '.grid-item',
    columnWidth: 250,
    isFitWidth: true,
    gutter: 20
  })
}
