import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../article/article.model';

@Pipe({
  name: 'postPipe'
})
export class PostPipe implements PipeTransform {

  transform(value: Article[], ...args: string[]): Article[] {
    console.log(args);

    if(!args[0]) {
      return value;
    }

    let searchValue = args[0].toLowerCase();

    return value.filter(post => {
      if(post.title.toLowerCase().includes(searchValue)) {
        return true;
      } else if (post.link.toLowerCase().includes(searchValue)) {
        return true;
      } else if (post.votes.toString().includes(searchValue)) {
        return true;
      }
      return false;
    });
  }

}
