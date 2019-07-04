import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name: 'ys'
})

export class imagePipe implements PipeTransform {
    transform(val,arg)
    {
        let image='';
        if(val)
        {
            image = val;      //****If there is value assigned*/
        }
        else
        {
            image = arg;   //****If there is value assigned in arg*/
        }
        if(image.indexOf('https') == -1){
            image = image.replace('http', 'https');
        }  
    return image;    
    }
}