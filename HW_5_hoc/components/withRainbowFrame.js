import React from 'react';

  // render() {
  //   return (
  //     <div style={{border:"dashed 1px "+this.props.color,padding:"10px"}}>
  //       {this.props.children}
  //     </div>
  //   );
  // }

// }
// var res = this.props.children;
// for (let i=0; i<this.props.colors.length; i++){
//     res=<div style={{border:"dashed 1px "+this.props.colors[i],padding:"10px"}}>
//         {res}
//     </div>
// }
// вариант с возвратом функционального компонента
// let withRainbowFrame = color => Comp => props =>
//     <div style={{backgroundColor:color,border:"solid red 1px"}}>
//       <Comp {...props} />
//     </div>
// ;

// вариант с возвратом функционального компонента
let cc;
let withRainbowFrame = colors => Comp => props =>{
    var res = <Comp {...props} />
    for (let i=0; i<colors.length; i++){
        res=<div style={{border:"dashed 1px "+colors[i],padding:"10px"}}>
                {res}
        </div>
    }
    return res
}
;

export { withRainbowFrame };

